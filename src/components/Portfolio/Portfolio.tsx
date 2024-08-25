import Headline from '../Headline/Headline';
import PortfolioItem from '../PortfolioItem/PortfolioItem';
import { featuredItems, portfolioItems, PortfolioItemType } from './portfolioItems';
import styled from 'styled-components';

function Portfolio() {
    return (
        <PortfolioSection id="portfolio">
            <Headline title="Portfolio" />
            <PortfolioGrid>
                {featuredItems.map((x: PortfolioItemType) => (
                    <PortfolioItem
                        key={x.title}
                        title={x.title}
                        link={x.link}
                        imageSrc={x.imageSrc}
                        imageAlt={x.imageAlt}
                        description={x.description}
                    ></PortfolioItem>
                ))}
            </PortfolioGrid>
            <NewPortfolioSectionComment>
                Below are some throwback items from when I was a Computer Science baby back in undergrad. A compilation of Computer Science, Web Design, and Animation.
            </NewPortfolioSectionComment>
            <br />
            <PortfolioGrid>
                {portfolioItems.map((x: PortfolioItemType) => (
                    <PortfolioItem
                        key={x.title}
                        title={x.title}
                        link={x.link}
                        imageSrc={x.imageSrc}
                        imageAlt={x.imageAlt}
                        description={x.description}
                    ></PortfolioItem>
                ))}
            </PortfolioGrid>
        </PortfolioSection>
    );
}

export default Portfolio;

const PortfolioSection = styled.section`
    text-align: center;
    padding: 0 40px;

    @media (min-width: 480px) {
        padding: 0 80px;
    }
`;

const PortfolioGrid = styled.div`
    display: flex;
    flex-flow: row wrap;
    gap: 40px 20px;
    justify-content: space-evenly;

    > * {
        flex: 1 1 auto;
    }
`;

const NewPortfolioSectionComment = styled.p`
    margin-top: 40px;
`;