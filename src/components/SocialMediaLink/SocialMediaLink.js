import './SocialMediaLink.css';

function SocialMediaLink(props) {
    const { title, href, className } = props;
    return (
        <li>
            <a href={href} className={`fa ${className} solo`}>
                <span>{title}</span>
            </a>
        </li>
    );
}

export default SocialMediaLink;
