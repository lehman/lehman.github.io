import './Masthead.css';

function Masthead(props) {
    return (
        <div id="logo">
            <a href="#top">
                <span className="image avatar48">
                    <img src="images/avatar.jpg" alt="" />
                </span>
                <h1 id="title">LL</h1>
                <span className="byline">Full Stack Engineer</span>
            </a>
        </div>
    );
}

export default Masthead;
