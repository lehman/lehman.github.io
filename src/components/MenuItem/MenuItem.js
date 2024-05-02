import './MenuItem.css';

function MenuItem(props) {
    const { title, href, id, className } = props;
    return (
        <li>
            <a href={href} id={id} className="skel-panels-ignoreHref">
                <span className={`fa ${className}`}>{title}</span>
            </a>
        </li>
    );
}

export default MenuItem;
