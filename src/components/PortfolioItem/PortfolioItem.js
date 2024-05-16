import './PortfolioItem.css';

function PortfolioItem(props) {
    const { title, link, imageSrc, imageAlt, style, ...rest } = props;

    return (
        <div className="4u" style={style} {...rest}>
            <article className="item">
                <a href={link} className="image full" target="_blank" rel="noreferrer">
                    <img src={imageSrc} alt={imageAlt} />
                </a>
                <header>
                    <h3>{title}</h3>
                </header>
            </article>
        </div>
    );
}

export default PortfolioItem;
