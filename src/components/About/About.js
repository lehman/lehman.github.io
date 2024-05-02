import './About.css';

function About(props) {
    const postGradActivities = [
        `participated in my first Game Jam`,
        `run five half marathons with my dad`,
        `competed on a team in the SLO County Crossfit Games and won third place`,
        `attended my first conferences at Grace Hopper in 2018`,
        `then attended SXSW in 2019`,
        `bought a stand up paddleboard`
    ];

    return (
        <section id="about" className="three">
            <div className="container">
                <header>
                    <h2>About Me</h2>
                </header>

                <img src="images/louise.png" className="image featured" alt="Blurred Louise" />

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
                    {postGradActivities.map((p, i) => <li key={i}>{p}</li>)}
                </ul>
                <p>
                    I love having the opportunity to work and interact with people across differing
                    disciplines. There's always something new to learn.
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
