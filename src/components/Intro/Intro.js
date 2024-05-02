import './Intro.css';

function Intro(props) {
    return (
        <section id="top" className="one">
            <div className="container">
                <a href="#" className="image featured">
                    <img src="images/pic01.jpg" alt="" />
                </a>

                <header>
                    <h2 className="alt">
                        <strong>Hello.</strong> I'm Louise, and it's nice to have you here.
                    </h2>
                </header>
            </div>
        </section>
    );
}

export default Intro;
