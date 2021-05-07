import './Masthead.css';

function Masthead(props) {
    return (
        <div id="logo">
            <a href="#top">
                <span class="image avatar48">
                    <img src="images/avatar.jpg" alt="" />
                </span>
                <h1 id="title">LL</h1>
                <span class="byline">Full Stack Engineer</span>
            </a>
        </div>
    );
}

export default Masthead;
