import './Resume.css';

function Resume(props) {
    return (
        <section id="resume" class="seven">
            <div class="container">
                <header>
                    <h2>Resume</h2>
                </header>

                <p>
                    Here is my{' '}
                    <a href="/work/LouiseLehman_Resume.pdf" class="highlightLink">
                        resume
                    </a>{' '}
                    for download, and if you have any further inquiries, you are welcome to email me at{' '}
                    <a href="mailto:luhlahlehman@gmail.com" class="highlightLink">
                        luhlahlehman@gmail.com
                    </a>
                    .
                </p>
            </div>
        </section>
    );
}

export default Resume;
