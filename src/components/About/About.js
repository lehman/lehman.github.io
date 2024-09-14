import React from 'react';
import styled from 'styled-components';
import Headline from '../Headline/Headline';

const About = () => {
    return (
        <AboutSection id="about">
            <Headline title="About Me" />
            <AboutContent>
                <p>
                    I've worked in frontend and backend development and quality assurance, on work that included payment and lab kit API integrations, user onboarding and intake forms and redesigns, starting a UI component library, and partner API development.
                </p>
                <p>
                    I graduated from UCLA with a B.S. in Computer Science, while also taking classes under UCLA's Design and Media Arts department and Film and Television school.
                </p>
                <p>
                    I like being friends with my coworkers, I enjoy working with people across different disciplines, and I always want to be in a place where I am learning and growing.
                </p>
            </AboutContent>
        </AboutSection>
    );
}

export default About;

const AboutSection = styled.section`
    padding: 0 40px;

    @media (min-width: 768px) {
        padding: 0 120px;
    }
`;

const AboutContent = styled.div`
    display: flex;
    flex-flow: column nowrap;
    gap: 14px;
    text-align: center;

    @media (min-width: 768px) {
        text-align: left;
        > p {
            font-size: 18px;
        };
    }
`;