import './Portfolio.css';
import PortfolioItem from '../PortfolioItem/PortfolioItem';

function Portfolio(props) {
    let portfolioItems = [
        {
            title: 'First Animation using OpenGL',
            link: '/work/174Aproj1.mpg',
            imageSrc: 'work/174Aproj1image.JPG',
            imageAlt: 'CS 174A Project 1',
        },
        {
            title: 'Second Animation using OpenGL',
            link: '/work/174Aproj2.mpg',
            imageSrc: 'work/174Aproj2image.JPG',
            imageAlt: 'CS 174A Project 2',
        },
        {
            title: 'Motion Picture Deconstruction',
            link: 'http://classes.dma.ucla.edu/Summer13/160-1/projects/louise/p2/',
            imageSrc: 'work/desma160_proj2image.jpg',
            imageAlt: 'DESMA 160 Proj 2',
        },
        {
            title: 'Raytracer Code',
            link: '/work/raytracer/template-rt.cpp',
            imageSrc: 'work/174Aproj3image.png',
            imageAlt: 'CS 174A Project 3',
        },
        {
            title: 'Data-Driven Visualization',
            link: 'http://classes.dma.ucla.edu/Summer13/160-1/projects/louise/p3/',
            imageSrc: 'work/desma160_proj3image.jpg',
            imageAlt: 'DESMA 160 Proj 3',
        },
        {
            title: 'Web Design Group Project',
            link: 'http://classes.dma.ucla.edu/Winter13/161/projects/group-projects/project-5/group-4/html/',
            imageSrc: 'work/dma161proj5image.png',
            imageAlt: 'DESMA 161 Project 5',
        },
        {
            title: 'Web Mockup Project',
            link: 'work/llehman_1 Architecture.pdf',
            imageSrc: 'work/dma161proj1image.jpg',
            imageAlt: 'DESMA 161 Project 1',
        },
        {
            title: 'Cut & Paste Art and Analysis',
            link: 'work/dma_midterm.pdf',
            imageSrc: 'work/desma101_midtermimage.JPG',
            imageAlt: 'DESMA 101 Midterm',
        },
        {
            title: 'UV Guardian Website',
            link: 'web/index.html',
            imageSrc: 'work/uvguardian.png',
            imageAlt: 'UV Guardian Site',
        },
        {
            title: 'DESMA 161 Project, Previous Personal Website',
            link: 'first/index.html',
            imageSrc: 'work/site_first.png',
            imageAlt: 'My Website Ver. 1',
        },
    ];

    return (
        <section id="portfolio" class="two">
            <div class="container">
                <header>
                    <h2>Portfolio</h2>
                </header>
                <p>
                    The latest technology I've been learning is React. Here's something I've been working on to learn,
                    starting from the good ol' <a href="https://reactjs.org/tutorial/tutorial.html">Intro to React</a>{' '}
                    tutorial.
                </p>
                <div class="row">
                    <PortfolioItem
                        title="Tic Tac Toe"
                        link="https://lehman.github.io/tic-tac-toe/"
                        imageSrc="work/tictactoelogo.png"
                        imageAlt="Tic Tac Toe"
                        style={{
                            float: 'none',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                        }}
                    ></PortfolioItem>
                </div>
                <br />
                <p>Here's a festive gem from my first ever game jam.</p>
                <div class="row">
                    <PortfolioItem
                        title="Turkey Punch"
                        link="work/TurkeyPunch/index.html"
                        imageSrc="work/games/TurkeyPunch.png"
                        imageAlt="Turkey Punch"
                        style={{
                            float: 'none',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                        }}
                    ></PortfolioItem>
                </div>
                <br />
                <p>
                    Below is a compilation of Computer Science, Web Design, Data Visualization, and Animation, from when
                    I was a Computer Science baby back in undergrad.
                </p>
                <br />
                <div class="row">
                    {portfolioItems.map((x) => (
                        <PortfolioItem
                            title={x.title}
                            link={x.link}
                            imageSrc={x.imageSrc}
                            imageAlt={x.imageAlt}
                        ></PortfolioItem>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Portfolio;
