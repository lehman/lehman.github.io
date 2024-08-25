import styled from "styled-components";
import { COLORS } from "../../colors";

function PortfolioItem(props) {
    const { title, description, link, imageSrc, imageAlt, ...rest } = props;

    return (
        <Link href={link} target="_blank" rel="noreferrer" {...rest}>
            <Container>
                <PortfolioImage src={imageSrc} alt={imageAlt} />
                <Title>{title}</Title>
                {description && <Description>{description}</Description>}
            </Container>
        </Link>
    );
}

export default PortfolioItem;

const Link = styled.a`
    border: 0.5px solid rgba(0, 0, 0, 0.3);
    border-radius: 12px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    height: 100%;
    max-width: 450px;
    text-decoration: none;

    &:hover {
        box-shadow: 5px 5px 20px gray;
    }
`;

const Container = styled.section`
    display: flex;
    flex-flow: column nowrap;
    gap: 10px;
    padding: 24px;

    > * {
        color: ${COLORS.mainTextColor};
    }
`;

const PortfolioImage = styled.img`
    box-sizing: border-box;
    max-width: 100%;
`;

const Title = styled.h3`
    margin: 0;
`;

const Description = styled.p`
    margin: 0;
`;