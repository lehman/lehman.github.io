import './About.css';

function About(props) {
    return (
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
                    My name is Louise Lehman. I work out a lot. I like being friends with my coworkers. I eat too many
                    sweets. And I don't update this site enough.
                </p>
                <p>
                    I graduated from UCLA's engineering school with a B.S. in Computer Science. I also took classes
                    under UCLA's Design and Media Arts school and Film and Television school, in the animation graduate
                    program. Since graduating, I have:
                </p>
                <ul>
                    <li>- participated in my first Game Jam</li>
                    <li>- run five half marathons with my dad</li>
                    <li>- competed on a team in the SLO County Crossfit Games and won third place</li>
                    <li>- attended my first conferences at Grace Hopper in 2018</li>
                    <li>- then attended SXSW in 2019</li>
                    <li>- bought a stand up paddleboard</li>
                </ul>
                <p>
                    I'm currently working on my react skills and studying up on algorithms and architecture. Since
                    college, I've also read books that weren't textbooks, and aquired a taste for wine.
                </p>
                <p>
                    I currently work for a software company in the health and wellness industry as a full stack software
                    engineer. I love having the opportunity to work and interact with people across differing
                    disciplines, including product, architecture, UX, copy, research, and AI/ML. I also love taking
                    workout classes on-site at work. I've taken classes in CrossFit, Barre, Salsa, Juggling, Yoga,
                    Kettlebells, Krav Maga, and HIIT. I never thought of working in this industry, but I have found that
                    I love it, and I have a passion for being active and being well.
                </p>
                <p>
                    I aspire to be a humble teacher, a trustworthy and helpful coworker, a good listener, an analytical
                    thinker, a good friend, and to be graceful amidst nonsense.
                </p>
            </div>
        </section>
    );
}

export default About;
