import './Intro.css';

function Intro(props) {
    return (
        <section id="top" className="one">
            <div className="container">
                <img src="images/pic01.jpg" alt="" className="image featured" />

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
