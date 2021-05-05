import './MenuItem.css';

function MenuItem(props) {
    const { title, href, id, className } = props;
    return (
        <li>
            <a href={href} id={id} class="skel-panels-ignoreHref">
                <span class={`fa ${className}`}>{title}</span>
            </a>
        </li>
    );
}

export default MenuItem;
