import "./App.css";

function App() {
  return (
    <>
      <div id="header" class="skel-panels-fixed">
        <div class="top">
          <div id="logo">
            <span class="image avatar48">
              <img src="images/avatar.jpg" alt="" />
            </span>
            <h1 id="title">LL</h1>
            <span class="byline">Full Stack Engineer</span>
          </div>

          <nav id="nav">
            {/* Prologue's nav expects links in one of two formats:

              1. Hash link (scrolls to a different section within the page)

                 <li><a href="#foobar" id="foobar-link" class="skel-panels-ignoreHref"><span class="fa fa-whatever-icon-you-want">Foobar</span></a></li>

              2. Standard link (sends the user to another page/site)

                 <li><a href="http://foobar.tld"><span class="fa fa-whatever-icon-you-want">Foobar</span></a></li> */}
            <ul>
              <li>
                <a href="#top" id="top-link" class="skel-panels-ignoreHref">
                  <span class="fa fa-home">Intro</span>
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  id="portfolio-link"
                  class="skel-panels-ignoreHref"
                >
                  <span class="fa fa-th">Portfolio</span>
                </a>
              </li>
              <li>
                <a href="#about" id="about-link" class="skel-panels-ignoreHref">
                  <span class="fa fa-user">About Me</span>
                </a>
              </li>
              {/* <!-- <li><a href="#work_experience" id="work-link" class="skel-panels-ignoreHref"><span class="fa fa-briefcase">Work Experience</span></a></li> -->
              <!-- <li><a href="#classes" id="classes-link" class="skel-panels-ignoreHref"><span class="fa fa-edit">Classes</span></a></li> --> */}
              <li>
                <a
                  href="#contact"
                  id="contact-link"
                  class="skel-panels-ignoreHref"
                >
                  <span class="fa fa-envelope">Contact</span>
                </a>
              </li>
              <li>
                <a
                  href="#resume"
                  id="contact-link"
                  class="skel-panels-ignoreHref"
                >
                  <span class="fa fa-list-ul">Resume</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div class="bottom">
          <ul class="icons">
            <li>
              <a
                href="https://www.facebook.com/louise.lehman.5?ref=tn_tnmn"
                class="fa fa-facebook solo"
              >
                <span>Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/louiselehman"
                class="fa fa-linkedin solo"
              >
                <span>LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/lehman" class="fa fa-github solo">
                <span>Github</span>
              </a>
            </li>
            <li>
              <a
                href="https://app.pluralsight.com/profile/louise-lehman"
                class="fa fa-forward solo"
                aria-hidden="true"
              >
                <span>Pluralsight</span>
              </a>
            </li>
            <li>
              <a
                href="http://www.codecademy.com/louiselehman"
                class="fa fa-code solo"
              >
                <span>Codecademy</span>
              </a>
            </li>
            {/* <li><a href="#" class="fa fa-envelope solo"><span>Email</span></a></li> */}
          </ul>
        </div>
      </div>
      <div id="main">
        {/* <!-- Intro --> */}
        <section id="top" class="one">
          <div class="container">
            <a href="#" class="image featured">
              <img src="images/pic01.jpg" alt="" />
            </a>

            <header>
              <h2 class="alt">
                <strong>Hello.</strong> I'm Louise, and it's nice to have you
                here.
              </h2>
            </header>

            <footer>
              <a href="#portfolio" class="button scrolly">
                Explore
              </a>
            </footer>
          </div>
        </section>

        {/* <!-- Portfolio --> */}
        <section id="portfolio" class="two">
          <div class="container">
            <header>
              <h2>Portfolio</h2>
            </header>

            <p>Here's a festive gem from my first ever game jam.</p>

            <div class="row">
              <div
                class="4u"
                style={{
                  float: "none",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                <article class="item">
                  <a
                    href="work/TurkeyPunch/index.html"
                    class="image full"
                    target="_blank"
                  >
                    <img src="work/games/TurkeyPunch.png" alt="Turkey Punch" />
                  </a>
                  <header>
                    <h3>Turkey Punch</h3>
                  </header>
                </article>
              </div>
            </div>

            <br />

            <p>
              Below is a compilation of Computer Science, Web Design, Data
              Visualization, and Animation, from when I was a Computer Science
              baby back in undergrad.
            </p>

            <br />
            <div class="row">
              <div class="4u">
                <article class="item">
                  <a
                    href="/work/174Aproj1.mpg"
                    class="image full"
                    target="_blank"
                  >
                    <img
                      src="work/174Aproj1image.JPG"
                      alt="CS 174A Project 1"
                    />
                  </a>
                  <header>
                    <h3>First Animation using OpenGL</h3>
                  </header>
                </article>
              </div>
              <div class="4u">
                <article class="item">
                  <a
                    href="/work/174Aproj2.mpg"
                    class="image full"
                    target="_blank"
                  >
                    <img
                      src="work/174Aproj2image.JPG"
                      alt="CS 174A Project 2"
                    />
                  </a>
                  <header>
                    <h3>Second Animation using OpenGL</h3>
                  </header>
                </article>
              </div>
              <div class="4u">
                <article class="item">
                  <a
                    href="http://classes.dma.ucla.edu/Summer13/160-1/projects/louise/p2/"
                    class="image full"
                    target="_blank"
                  >
                    <img
                      src="work/desma160_proj2image.jpg"
                      alt="DESMA 160 Proj 2"
                    />
                  </a>
                  <header>
                    <h3>Motion Picture Deconstruction</h3>
                  </header>
                </article>
              </div>
              <div class="4u">
                <article class="item">
                  <a
                    href="/work/raytracer/template-rt.cpp"
                    class="image full"
                    target="_blank"
                  >
                    <img
                      src="work/174Aproj3image.png"
                      alt="CS 174A Project 3"
                    />
                  </a>
                  <header>
                    <h3>Raytracer Code</h3>
                  </header>
                </article>
              </div>
              <div class="4u">
                <article class="item">
                  <a
                    href="http://classes.dma.ucla.edu/Summer13/160-1/projects/louise/p3/"
                    class="image full"
                    target="_blank"
                  >
                    <img
                      src="work/desma160_proj3image.jpg"
                      alt="DESMA 160 Proj 3"
                    />
                  </a>
                  <header>
                    <h3>Data-Driven Visualization</h3>
                  </header>
                </article>
              </div>
              <div class="4u">
                <article class="item">
                  <a
                    href="http://classes.dma.ucla.edu/Winter13/161/projects/group-projects/project-5/group-4/html/"
                    class="image full"
                    target="_blank"
                  >
                    <img
                      src="work/dma161proj5image.png"
                      alt="DESMA 161 Project 5"
                    />
                  </a>
                  <header>
                    <h3>Web Design Group Project</h3>
                  </header>
                </article>
              </div>
              <div class="4u">
                <article class="item">
                  <a
                    href="work/llehman_1 Architecture.pdf"
                    class="image full"
                    target="_blank"
                  >
                    <img
                      src="work/dma161proj1image.jpg"
                      alt="DESMA 161 Project 1"
                    />
                  </a>
                  <header>
                    <h3>Web Mockup Project</h3>
                  </header>
                </article>
              </div>
              <div class="4u">
                <article class="item">
                  <a
                    href="work/dma_midterm.pdf"
                    class="image full"
                    target="_blank"
                  >
                    <img
                      src="work/desma101_midtermimage.JPG"
                      alt="DESMA 101 Midterm"
                    />
                  </a>
                  <header>
                    <h3>Cut & Paste Art and Analysis</h3>
                  </header>
                </article>
              </div>
              <div class="4u">
                <article class="item">
                  <a
                    href="web/index.html"
                    class="image full"
                    target="_blank"
                    target="_blank"
                  >
                    <img src="work/uvguardian.png" alt="UV Guardian Site" />
                  </a>
                  <header>
                    <h3>UV Guardian Website</h3>
                  </header>
                </article>
              </div>
              <div class="4u">
                <article class="item">
                  <a href="first/index.html" class="image full" target="_blank">
                    <img src="work/site_first.png" alt="My Website Ver. 1" />
                  </a>
                  <header>
                    <h3>DESMA 161 Project, Previous Personal Website</h3>
                  </header>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- About Me --> */}
        <section id="about" class="three">
          <div class="container">
            <header>
              <h2>About Me</h2>
            </header>

            {/* <!--
            <a href="#" class="image featured"><img src="images/pic08.jpg" alt="" /></a>
            --> */}
            <a href="#" class="image featured">
              <img src="images/louise.png" alt="" />
            </a>

            <p>
              My name is Louise Lehman. I work out a lot. I like being friends
              with my coworkers. I eat too many sweets. And I don't update this
              site enough.
            </p>
            <p>
              I graduated from UCLA's engineering school with a B.S. in Computer
              Science. I also took classes under UCLA's Design and Media Arts
              school and Film and Television school, in the animation graduate
              program. Since graduating, I have:
            </p>
            <ul>
              <li>- participated in my first Game Jam</li>
              <li>- run five half marathons with my dad</li>
              <li>
                - competed on a team in the SLO County Crossfit Games and won
                third place
              </li>
              <li>- attended my first conferences at Grace Hopper in 2018</li>
              <li>- then attended SXSW in 2019</li>
              <li>- bought a stand up paddleboard</li>
            </ul>
            <p>
              I'm currently working on my react skills and studying up on
              algorithms and architecture. Since college, I've also read books
              that weren't textbooks, and aquired a taste for wine.
            </p>
            <p>
              I currently work for a software company in the health and wellness
              industry as a full stack software engineer. I love having the
              opportunity to work and interact with people across differing
              disciplines, including product, architecture, UX, copy, research,
              and AI/ML. I also love taking workout classes on-site at work.
              I've taken classes in CrossFit, Barre, Salsa, Juggling, Yoga,
              Kettlebells, Krav Maga, and HIIT. I never thought of working in
              this industry, but I have found that I love it, and I have a
              passion for being active and being well.
            </p>
            <p>
              I aspire to be a humble teacher, a trustworthy and helpful
              coworker, a good listener, an analytical thinker, a good friend,
              and to be graceful amidst nonsense.
            </p>
          </div>
        </section>

        {/* <!-- Contact --> */}
        <section id="contact" class="six">
          <div class="container">
            <header>
              <h2>Contact</h2>
            </header>

            <p>
              (408) 627 - 1609
              <br />
              luhlahlehman@gmail.com
              <br />
            </p>
          </div>
        </section>

        {/* <!-- Resume --> */}
        <section id="resume" class="seven">
          <div class="container">
            <header>
              <h2>Resume</h2>
            </header>

            <p>
              Here is my <a href="/work/LouiseLehman_resume.pdf">resume</a> for
              download, and if you have any further inquiries, you are welcome
              to email me at{" "}
              <a href="mailto:luhlahlehman@gmail.com">luhlahlehman@gmail.com</a>
              .
            </p>

            <div class="row">
              <div class="2u" style={{ visibility: "hidden" }}>
                |
              </div>
              <div class="4u">
                <a href="classes.html">Classes I've Taken</a>
              </div>
              <div class="4u">
                <a href="work_experience.html">Work Experience</a>
              </div>
              <div class="2u" style={{ visibility: "hidden" }}>
                |
              </div>
            </div>
          </div>
        </section>
      </div>

      <div id="footer">
        <div class="copyright">
          <p>&copy; 2014 Louise Lehman. All rights reserved.</p>
          <ul class="menu">
            <li>
              Design: <a href="http://html5up.net">HTML5 UP</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
