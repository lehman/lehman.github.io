const IconLink = ({title, href, className}) => {
    return (
        <a href={href} className={`fa ${className} solo`}>
            {title}
        </a>
    );
}

export default IconLink;