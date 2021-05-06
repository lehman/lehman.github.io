import './PortfolioItem.css';

function PortfolioItem(props) {
    const { title, link, imageSrc, imageAlt, style } = props;

    return (
        <div class="4u" style={style}>
            <article class="item">
                <a href={link} class="image full" target="_blank">
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
