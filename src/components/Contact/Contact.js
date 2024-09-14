import Headline from '../Headline/Headline';
import Link from '../Link/Link';
import styled from 'styled-components';

const Contact = () => {
    return (
        <Section id="contact">
            <Headline title="Contact" />
            <p>
                Here is my{' '}
                <Link href="/LouiseLehman_Resume.pdf" text="resume" />
                {' '}
                for download, and if you&apos;d like to reach out, you can connect with me on
                {' '}
                <Link href="https://www.linkedin.com/in/louiselehman" text="LinkedIn" />
                , or email me at
                {' '}
                <Link href="mailto:luhlahlehman@gmail.com" text="luhlahlehman@gmail.com" />
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
