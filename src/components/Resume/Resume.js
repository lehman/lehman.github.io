import './Resume.css';

function Resume(props) {
    return (
        <section id="resume" class="seven">
            <div class="container">
                <header>
                    <h2>Resume</h2>
                </header>

                <p>
                    Here is my <a href="/work/LouiseLehman_resume.pdf">resume</a> for download, and if you have any
                    further inquiries, you are welcome to email me at{' '}
                    <a href="mailto:luhlahlehman@gmail.com">luhlahlehman@gmail.com</a>.
                </p>

                <div class="row">
                    <div class="2u" style={{ visibility: 'hidden' }}>
                        |
                    </div>
                    <div class="4u">
                        <a href="classes.html">Classes I've Taken</a>
                    </div>
                    <div class="4u">
                        <a href="work_experience.html">Work Experience</a>
                    </div>
                    <div class="2u" style={{ visibility: 'hidden' }}>
                        |
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Resume;
