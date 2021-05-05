import './Masthead.css';

function Masthead(props) {
    return (
        <div id="logo">
            <span class="image avatar48">
                <img src="images/avatar.jpg" alt="" />
            </span>
            <h1 id="title">LL</h1>
            <span class="byline">Full Stack Engineer</span>
        </div>
    );
}

export default Masthead;
