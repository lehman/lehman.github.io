import './Resume.css';

function Resume(props) {
    return (
        <section id="resume" className="four">
            <div className="container">
                <header>
                    <h2>Resume</h2>
                </header>

                <p>
                    Here is my{' '}
                    <a href="/work/LouiseLehman_Resume.pdf" className="highlightLink">
                        resume
                    </a>{' '}
                    for download, and if you have any further inquiries, you are welcome to email me at{' '}
                    <a href="mailto:luhlahlehman@gmail.com" className="highlightLink">
                        luhlahlehman@gmail.com
                    </a>
                    .
                </p>
            </div>
        </section>
    );
}

export default Resume;
