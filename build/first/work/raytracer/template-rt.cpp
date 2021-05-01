//
// template-rt.cpp
//

#define _CRT_SECURE_NO_WARNINGS
#include "matm.h"
#include <iostream>
#include <fstream>
#include <sstream>
#include <string>
#include <vector>
using namespace std;

int g_width;
int g_height;

struct Ray
{
    vec4 origin;
    vec4 dir;
};

// TODO: add structs for spheres, lights and anything else you may need.

struct Sphere {
	string name;
	float posx, posy, posz; // position
	float sx, sy, sz; // scaling
	float r, g, b; // color
	float Ka, Kd, Ks, Kr;
	float n; // specular exponent
	vec4 sphere_center; // point
};

struct Sphere spheres[5];
int sphere_count = 0;

struct Light {
	string name;
	float posx, posy, posz; // position
	float Ir, Ig, Ib; // intensity
};

struct Light lights[5];
int light_count = 0;

vector<vec4> g_colors;

vec4 background_color;
vec4 ambient_intensity;
string output_name;

float g_left;
float g_right;
float g_top;
float g_bottom;
float g_near;

// -------------------------------------------------------------------
// Input file parsing

vec4 toVec4(const string& s1, const string& s2, const string& s3)
{
    stringstream ss(s1 + " " + s2 + " " + s3);
    vec4 result;
    ss >> result.x >> result.y >> result.z;
    result.w = 1.0f;
    return result;
}

float toFloat(const string& s)
{
    stringstream ss(s);
    float f;
    ss >> f;
    return f;
}

void parseLine(const vector<string>& vs)
{
    //TODO: add parsing of NEAR, LEFT, RIGHT, BOTTOM, TOP, SPHERE, LIGHT, BACK, AMBIENT, OUTPUT.
    if (vs[0] == "NEAR") {
		g_near = toFloat(vs[1]);
	}
    else if (vs[0] == "LEFT") {
		g_left = toFloat(vs[1]);
	}
    else if (vs[0] == "RIGHT") {
		g_right = toFloat(vs[1]);
	}
    else if (vs[0] == "BOTTOM") {
		g_bottom = toFloat(vs[1]);
	}
    else if (vs[0] == "TOP") {
		g_top = toFloat(vs[1]);
	}
    else if (vs[0] == "RES") {
        g_width = (int)toFloat(vs[1]);
        g_height = (int)toFloat(vs[2]);
        g_colors.resize(g_width * g_height);
    }
    else if (vs[0] == "SPHERE") {
		spheres[sphere_count].name = vs[1];
		spheres[sphere_count].posx = toFloat(vs[2]);
		spheres[sphere_count].posy = toFloat(vs[3]);
		spheres[sphere_count].posz = toFloat(vs[4]);
		spheres[sphere_count].sphere_center.x = toFloat(vs[2]);
		spheres[sphere_count].sphere_center.y = toFloat(vs[3]);
		spheres[sphere_count].sphere_center.z = toFloat(vs[4]);
		spheres[sphere_count].sphere_center.w = 1.0f;
		spheres[sphere_count].sx = toFloat(vs[5]);
		spheres[sphere_count].sy = toFloat(vs[6]);
		spheres[sphere_count].sz = toFloat(vs[7]);
		spheres[sphere_count].r = toFloat(vs[8]);
		spheres[sphere_count].g = toFloat(vs[9]);
		spheres[sphere_count].b = toFloat(vs[10]);
		spheres[sphere_count].Ka = toFloat(vs[11]);
		spheres[sphere_count].Kd = toFloat(vs[12]);
		spheres[sphere_count].Ks = toFloat(vs[13]);
		spheres[sphere_count].Kr = toFloat(vs[14]);
		spheres[sphere_count].n = toFloat(vs[15]);
		sphere_count++;
	}
    else if (vs[0] == "LIGHT") {
		lights[light_count].name = vs[1];
		lights[light_count].posx = toFloat(vs[2]);
		lights[light_count].posy = toFloat(vs[3]);
		lights[light_count].posz = toFloat(vs[4]);
		lights[light_count].Ir = toFloat(vs[5]);
		lights[light_count].Ig = toFloat(vs[6]);
		lights[light_count].Ib = toFloat(vs[7]);
		light_count++;
	}
    else if (vs[0] == "BACK") {
		background_color = toVec4(vs[1], vs[2], vs[3]);
	}
    else if (vs[0] == "AMBIENT") {
		ambient_intensity = toVec4(vs[1], vs[2], vs[3]);
	}
    else if (vs[0] == "OUTPUT") {
		output_name = vs[1];
	}
}

void loadFile(const char* filename)
{
    ifstream is(filename);
    if (is.fail())
    {
        cout << "Could not open file " << filename << endl;
        exit(1);
    }
    string s;
    vector<string> vs;
    while(!is.eof())
    {
        vs.clear();
        getline(is, s);
        istringstream iss(s);
        while (!iss.eof())
        {
            string sub;
            iss >> sub;
            vs.push_back(sub);
        }
        parseLine(vs);
    }
}


// -------------------------------------------------------------------
// Utilities

void setColor(int ix, int iy, const vec4& color)
{
    int iy2 = g_height - iy - 1; // Invert iy coordinate.
    g_colors[iy2 * g_width + ix] = color;
}


// -------------------------------------------------------------------
// Sphere Intersection routine: basically same as intersect() now; used to be different
// both remain here since they are both called in other functions, but you can just
// look at one of them

vec4 sphereintersect(vec4 pp, vec4 dd, int& status) {
	status = 0; // start off as "no intersection"
	float a, b, c, discriminant, tp, tm, tmin, t;
	t = 0;
	tmin = -1;
	vec4 p_orig = vec4(pp);
	vec4 d_orig = vec4(dd);
	vec4 p;
	vec4 d;
	// for each sphere, inverse transform the ray from point p in direction d
	// and test its intersection with the untransformed sphere
	 
	for (int i = 0; i < sphere_count; i++) {
		// find matrix of sphere's transformation
		mat4 M(spheres[i].sx, 0.0f, 0.0f, 0.0f,
			 0.0f, spheres[i].sy, 0.0f, 0.0f,
			 0.0f, 0.0f, spheres[i].sz, 0.0f,
			 spheres[i].posx, spheres[i].posy, spheres[i].posz, 1.0f);
		mat4 MInv;
		InvertMatrix(M, MInv);
		
		// inverse transformation of ray
		p.w = 1.0f; // make point
		p = MInv * p_orig;
		p.w = 0.0f; // make vector

		d = MInv * d_orig;
		d.w = 0.0f; // make vector
		
	// Quadratic Equation: dot(d, d) * t^2 + 2 * dot((p - p_center), d) * t + dot[(p - p_center),(p - p_center)] - r^2 = 0
		// unit sphere centered at origin
		// has equation dot(p, p) = 1 where p is p(t)=p_0+td
		a = dot(d, d);
		b = 2 * dot(p, d);
		c = dot(p, p) - 1;
		discriminant = b*b - 4*a*c;
		if (discriminant < t) { // no intersection with this sphere
			continue;
		} else if (discriminant == t) { // one intersection (tangent), tp == tm
			tp = -b / (2*a);
			if (tp > 0 && (tmin == -1 || tp < tmin) ) {
				status = 1 + i;
				tmin = tp;
			}
		} else if (discriminant > t) { // two intersections
			tp = ( -b + sqrt(discriminant) ) / (2*a);
			tm = ( -b - sqrt(discriminant) ) / (2*a);
			if (tp < tm) {
				if (tp > 0 && (tmin == -1 || tp < tmin) ) {
					status = 1 + i;
					tmin = tp;
				}
			}
			else {
				if (tm > 0 && (tmin == -1 || tm < tmin) ) {
					status = 1 + i;
					tmin = tm;
				}
			}
		}
	}

	vec4 closest_sphere_intersection(p_orig.operator+(d_orig.operator*(tmin))); // point
	return closest_sphere_intersection;
}


// TODO: add your ray-sphere intersection routine here.
vec4 intersect(vec4 pp, vec4 dd, int& status) {
	status = 0; // start off as "no intersection"
	float a, b, c, discriminant, tp, tm, tmin, t;
	t = 0;
	tmin = -1;
	vec4 p_orig = vec4(pp);
	vec4 d_orig = vec4(dd);
	vec4 p;
	vec4 d;
	// for each sphere, inverse transform the ray from point p in direction d
	// and test its intersection with the untransformed sphere
	 
	for (int i = 0; i < sphere_count; i++) {
		// find matrix of sphere's transformation
		mat4 M(spheres[i].sx, 0.0f, 0.0f, 0.0f,
			 0.0f, spheres[i].sy, 0.0f, 0.0f,
			 0.0f, 0.0f, spheres[i].sz, 0.0f,
			 spheres[i].posx, spheres[i].posy, spheres[i].posz, 1.0f);
		mat4 MInv;
		InvertMatrix(M, MInv);
		
		// inverse transformation of ray
		p.w = 1.0f; // make point
		p = MInv * p_orig;
		p.w = 0.0f; // make vector

		d = MInv * d_orig;
		d.w = 0.0f; // make vector
		
	// Quadratic Equation: dot(d, d) * t^2 + 2 * dot((p - p_center), d) * t + dot[(p - p_center),(p - p_center)] - r^2 = 0
		// unit sphere centered at origin
		// has equation dot(p, p) = 1 where p is p(t)=p_0+td
		a = dot(d, d);
		b = 2 * dot(p, d);
		c = dot(p, p) - 1;
		discriminant = b*b - 4*a*c;
		if (discriminant < t) { // no intersection with this sphere
			continue;
		} else if (discriminant == t) { // one intersection (tangent), tp == tm
			tp = -b / (2*a);
			if (tp > 0 && (tmin == -1 || tp < tmin) ) {
				status = 1 + i;
				tmin = tp;
			}
		} else if (discriminant > t) { // two intersections
			tp = ( -b + sqrt(discriminant) ) / (2*a);
			tm = ( -b - sqrt(discriminant) ) / (2*a);
			if (tp < tm) {
				if (tp > 0 && (tmin == -1 || tp < tmin) ) {
					status = 1 + i;
					tmin = tp;
				}
			}
			else {
				if (tm > 0 && (tmin == -1 || tm < tmin) ) {
					status = 1 + i;
					tmin = tm;
				}
			}
		}
	}
	vec4 r(0.0f, 0.0f, 0.0f, 0.0f);
	if (status != 0) { // no intersections with spheres
		vec4 closest_sphere_intersection(p_orig.operator+(d_orig.operator*(tmin))); // point
		r.operator+=(closest_sphere_intersection);
	}

	return r;
}

// -------------------------------------------------------------------
// Ray tracing

// NOTICE: When I mention "slides" I am referring to Prof. Terzopolous's
//         slides on raytracing (lecture 12).

vec4 normal(vec4 i, int& status) {
	
		mat4 M(spheres[status-1].sx, 0.0f, 0.0f, 0.0f,
			 0.0f, spheres[status-1].sy, 0.0f, 0.0f,
			 0.0f, 0.0f, spheres[status-1].sz, 0.0f,
			 spheres[status-1].posx, spheres[status-1].posy, spheres[status-1].posz, 1.0f);
		mat4 MInv;
		InvertMatrix(M, MInv);
		mat4 MInvT;
		MInvT = transpose(MInv);
		
		i.w = 1.0f; // make point
		i = MInv * i;
		i.w = 1.0f; // make point
		
		vec4 origin(0.0f, 0.0f, 0.0f, 1.0f);
		vec4 r = MInvT * normalize(i.operator-(origin));
		r.w = 0; // make vector;
	return normalize(r);
}

vec4 reflect(vec4 L, vec4 normal, int& status) {
	vec4 origin(0.0f, 0.0f, 0.0f, 1.0f);
	
	vec4 refl((normal.operator*(2 * dot(normal, L))).operator-(L)); // is v in slides
	/*
	vec4 i_vector(i.operator-(spheres[status-1].sphere_center)); // i_vector is c in Dimitri's slides, with t==1
	i_vector = normalize(i_vector);
	//float ilength = length(i_vector);
	vec4 refl((normal.operator*(-2 * dot(normal, i_vector))).operator+(i_vector)); // is v in TA's slides
	*/
	return normalize(refl);//.operator+=(i); // i is P in slides
}

vec4 diffuse(vec4 intersection_point, vec4 n, vec4 reflected, int status) {
	vec4 origin(0.0f, 0.0f, 0.0f, 1.0f);
	float intensity = 0;
	float ir = 0;
	float ig = 0;
	float ib = 0;
	// calculate intensity from every light source that is not blocked
	for (int i = 0; i < light_count; i++) {
		// check for intersection with this light source
		// if object is in way of light source, no contribution
		// else apply local illumination at intersection_point
		
		// find intersections with light sources
		vec4 lightsource(lights[i].posx, lights[i].posy, lights[i].posz, 1.0f); // point
		lightsource.operator-=(intersection_point); // vector
		lightsource.w = 0; // make sure it's a vector
		float lightdist = length(lightsource);
		vec4 normalizedlightsource(normalize(lightsource));
		if (dot(normalizedlightsource, n) < 0) { // angle is > 90 degrees, inside sphere
			continue; // don't include illumination from this light source
		}
		int shadow;
		vec4 normls_orig(normalizedlightsource);
		sphereintersect(intersection_point, normalizedlightsource, shadow);
		if (shadow == 0) { // no intersections with any spheres
			// apply local illumination
			ir += lights[i].Ir * spheres[status-1].Kd * dot(n, normls_orig) * spheres[status-1].r;
			ig += lights[i].Ig * spheres[status-1].Kd * dot(n, normls_orig) * spheres[status-1].g;
			ib += lights[i].Ib * spheres[status-1].Kd * dot(n, normls_orig) * spheres[status-1].b;
			intensity += ir;
			intensity += ig;
			intensity += ib;
		}
	}

	vec4 colors(ir, ig, ib, 0.0f);
	return colors;
}

vec4 specular(vec4 intersection_point, vec4 n, vec4 reflected, int status) {
	vec4 origin(0.0f, 0.0f, 0.0f, 1.0f);
	vec4 v(intersection_point.operator-(origin)); // vector
	//v.operator*=(-1.0f); // inverse direction
	v = normalize(v);
	float intensity = 0;
	float ir = 0;
	float ig = 0;
	float ib = 0;
	// calculate intensity from every light source that is not blocked
	for (int i = 0; i < light_count; i++) {
		// check for intersection with this light source
		// if object is in way of light source, no contribution
		// else apply local illumination at intersection_point
		
		// find intersections with light sources
		vec4 lightsource(lights[i].posx, lights[i].posy, lights[i].posz, 1.0f); // point
		lightsource.operator-=(intersection_point); // vector
		lightsource.w = 0; // make sure it's a vector
		float lightdist = length(lightsource);
		vec4 normalizedlightsource(normalize(lightsource));
		if (dot(normalizedlightsource, n) < 0) { // angle is > 90 degrees, inside sphere
			continue; // don't include illumination from this light source
		}
		int shadow;
		vec4 normls_orig(normalizedlightsource);
		sphereintersect(intersection_point, normalizedlightsource, shadow);
		if (shadow == 0) { // no intersections with any spheres
			// find reflect vector
			vec4 r = reflect(normalizedlightsource, n, status);
			// apply local illumination
			ir += lights[i].Ir * spheres[status-1].Ks * pow(dot(r, v), spheres[status-1].n);
			ig += lights[i].Ig * spheres[status-1].Ks * pow(dot(r, v), spheres[status-1].n);
			ib += lights[i].Ib * spheres[status-1].Ks * pow(dot(r, v), spheres[status-1].n);
			intensity += ir;
			intensity += ig;
			intensity += ib;
		}
	}
	vec4 colors(ir, ig, ib, 0.0f);
	return colors;
}

vec4 trace(const Ray& ray, int step)
{
    // TODO: implement your ray tracing routine here.
	if (step > 1) {
		return (0.0f, 0.0f, 0.0f, 0.0f);
	}

	vec4 local_color, reflected_color, transmitted_color;
	vec4 intersection_point, normal_vector;
	int status;

	intersection_point = intersect(ray.origin, ray.dir, status);

	if (status == 0) { // no intersection
		if (step > 0) {
			return (0.0f, 0.0f, 0.0f, 0.0f);
		}
		return background_color;
	}
	else if (status >= 10) { // light source
		vec4 l(lights[status-10].Ir, lights[status-10].Ig, lights[status-10].Ib, 1.0f);
		return l;
	}
	
	float ir = spheres[status-1].r;
	float ig = spheres[status-1].g;
	float ib = spheres[status-1].b;
	
	vec4 colors(ir, ig, ib, 1.0f);

	// add ambient intensity
	colors.operator*=(ambient_intensity.operator*(spheres[status-1].Ka));
	
	// find nomal ray
	vec4 r;
	normal_vector = normal(intersection_point, status);

	// find reflection vectors from each light source
	for (int i = 0; i < light_count; i++) {
		vec4 lightsource(lights[i].posx, lights[i].posy, lights[i].posz, 1.0f); // point
		lightsource.operator-=(intersection_point); // vector
		lightsource.w = 0; // make sure it's a vector
		float lightdist = length(lightsource);
		vec4 normalizedlightsource(normalize(lightsource));
		if (dot(normalizedlightsource, normal_vector) < 0) { // angle is > 90 degrees, lightsource ray goes through sphere
			continue; // no reflection from this light source
		}
		// find reflect vector
		r = reflect(normalizedlightsource, normal_vector, status);
		Ray ref;
		ref.origin.operator+=(intersection_point);
		ref.dir.operator+=(r);
		reflected_color = trace(ref, step+1);
		colors.operator+=(reflected_color.operator*(spheres[status-1].Kr));
	}

	// add diffuse illumination effect
	vec4 diffusecolor;
	diffusecolor = diffuse(intersection_point, normal_vector, r, status);
	colors.operator+=(diffusecolor);

	// add specular illumination effect
	vec4 specularcolor;
	specularcolor = specular(intersection_point, normal_vector, r, status);
	colors.operator+=(specularcolor);

	colors.w = 0;
	return colors;
}

vec4 getDir(int ix, int iy)
{
    // TODO: modify this. This should return the direction from the origin
    // to pixel (ix, iy), normalized.
    //dir = vec4(0.0f, 0.0f, -1.0f, 0.0f); // original
    vec4 dir, orig;
	float ixf = (float) ix;
	float iyf = (float) iy;
	float width_f = (float) g_width;
	float height_f = (float) g_height;
	// x cols -> width, y rows -> height
	orig = vec4((g_right-g_left)/width_f*ixf + g_left,
		(g_top-g_bottom)/height_f*iyf + g_bottom, -g_near, 0.0f);
	dir = normalize(orig);
    return dir;
}

void renderPixel(int ix, int iy)
{
    Ray ray;
    ray.origin = vec4(0.0f, 0.0f, 0.0f, 1.0f);
    ray.dir = getDir(ix, iy);
    vec4 color = trace(ray, 0);
    setColor(ix, iy, color);
}

void render()
{
    for (int iy = 0; iy < g_height; iy++)
        for (int ix = 0; ix < g_width; ix++)
            renderPixel(ix, iy);
}


// -------------------------------------------------------------------
// PPM saving

void savePPM(int Width, int Height, char* fname, unsigned char* pixels) 
{
    FILE *fp;
    const int maxVal=255;

    printf("Saving image %s: %d x %d\n", fname, Width, Height);
    fp = fopen(fname,"wb");
    if (!fp) {
        printf("Unable to open file '%s'\n", fname);
        return;
    }
    fprintf(fp, "P6\n");
    fprintf(fp, "%d %d\n", Width, Height);
    fprintf(fp, "%d\n", maxVal);

    for(int j = 0; j < Height; j++) {
        fwrite(&pixels[j*Width*3], 3, Width, fp);
    }

    fclose(fp);
}

void saveFile()
{
    // Convert color components from floats to unsigned chars.
    // TODO: clamp values if out of range.
    unsigned char* buf = new unsigned char[g_width * g_height * 3];
    for (int y = 0; y < g_height; y++)
        for (int x = 0; x < g_width; x++)
            for (int i = 0; i < 3; i++) {
				float pc = ((float*)g_colors[y*g_width+x])[i];
				if (pc > 1.0)
					pc = 1.0;
                buf[y*g_width*3+x*3+i] = (unsigned char)(pc * 255.9f);
			}
    
    // TODO: change file name based on input file name.
    // savePPM(g_width, g_height, "output.ppm", buf); // original
	string filename = output_name;
	savePPM(g_width, g_height, &filename[0], buf); // modified
    delete[] buf;
}


// -------------------------------------------------------------------
// Main

int main(int argc, char* argv[])
{
    if (argc < 2)
    {
        cout << "Usage: template-rt <input_file.txt>" << endl;
        exit(1);
    }
    loadFile(argv[1]);
    render();
    saveFile();
	return 0;
}

