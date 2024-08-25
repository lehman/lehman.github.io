import { COLORS } from '../../colors';
import SocialLinks from '../SocialLinks/SocialLinks';
import './Footer.css';
import styled from 'styled-components';

const Footer = () => {
    return (
        <FooterTag id="footer">
            <p>
                &copy; Louise Lehman 2024
            </p>
            <SocialLinks color={COLORS.mainTextColor} fontSize='20px' />
        </FooterTag>
    );
}

export default Footer;

const FooterTag = styled.footer`
    background: rgb(255, 164, 94, 0.4);
    box-sizing: border-box;
    padding: 12px;
    text-align: center;
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-around;

    @media (min-width: 768px) {
        padding: 20px;
    }
`;