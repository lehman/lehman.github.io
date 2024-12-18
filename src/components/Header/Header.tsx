import styled from "styled-components";
import SocialLinks from "../SocialLinks/SocialLinks";
import { COLORS } from "../../colors";

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderImg src="images/header.jpeg" alt="Header image of Louise" />
            <TopNav>
                <SocialLinks />
            </TopNav>
            <HeaderText>
                <h1>Hi, I&apos;m Louise Lehman,</h1>
                <h1>Senior Software Engineer</h1>
            </HeaderText>
        </HeaderContainer>
    )
}

export default Header;

const HeaderContainer = styled.header`
    position: relative;
    text-align: center;
`;

const HeaderImg = styled.img`
    display: block;
    width: 100%;
    height: auto;
`;

const TopNav = styled.div`
    position: absolute;
    top: 5%;
    left: 5%;
    width: 90%;
`;

const HeaderText = styled.div`
    color: ${COLORS.headerTextColor};
    font-weight: 700;
    position: absolute;
    top: 41%;
    left: 50%;
    transform: translate(-50%, -50%);

    display: flex;
    flex-flow: column nowrap;
    width: 100%;

    > h1 {
        font-size: 20px;
        margin: 0;
    }

    @media (min-width: 640px) {
        > h1 {
            font-size: 32px; 
        }
    }

    @media (min-width: 768px) {
        top: 24%;

        > h1 {
            font-size: 48px; 
        }
    }

    @media (min-width: 1024px) {
        top: 20%;
    }
`;
