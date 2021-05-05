import './Intro.css';

function Intro(props) {
    return (
        <section id="top" class="one">
            <div class="container">
                <a href="#" class="image featured">
                    <img src="images/pic01.jpg" alt="" />
                </a>

                <header>
                    <h2 class="alt">
                        <strong>Hello.</strong> I'm Louise, and it's nice to have you here.
                    </h2>
                </header>

                <footer>
                    <a href="#portfolio" class="button scrolly">
                        Explore
                    </a>
                </footer>
            </div>
        </section>
    );
}

export default Intro;
