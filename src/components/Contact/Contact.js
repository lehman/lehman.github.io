import { COLORS } from '../../colors';
import Headline from '../Headline/Headline';
import styled from 'styled-components';

const Contact = () => {
    return (
        <Section id="contact">
            <Headline title="Contact" />
            <p>
                Here is my{' '}
                <Link href="/LouiseLehman_Resume.pdf" target="_blank" rel="noreferrer">
                    resume
                </Link>
                {' '}
                for download, and if you'd like to reach out, you can connect with me on
                {' '}
                <Link href="https://www.linkedin.com/in/louiselehman" target="_blank" rel="noreferrer">
                    LinkedIn
                </Link>
                , or email me at
                {' '}
                <Link href="mailto:luhlahlehman@gmail.com">
                    luhlahlehman@gmail.com
                </Link>
                .
            </p>
        </Section>
    );
}

export default Contact;

const Section = styled.section`
    padding: 0 40px;

    @media (min-width: 480px) {
        padding: 0 80px;
    }

    @media (min-width: 768px) {
        > p {
            font-size: 18px;
        };
    }
`;

const Link = styled.a`
    color: ${COLORS.mainTextColor};
    text-underline-offset: 3px;

    &:hover {
        color: ${COLORS.lightBlue};
    }
`;