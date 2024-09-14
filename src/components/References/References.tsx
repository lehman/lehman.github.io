import styled from "styled-components";
import Headline from "../Headline/Headline";
import Link from "../Link/Link";

type Reference = {
    text: string;
    title: string;
    name: string;
}

const references: Reference[] = [
    {
        name: 'Juan Cortes',
        title: 'Senior Software Engineer at Intuit',
        text: `"Not only is she a great engineer technically, always thinking-before-coding to produce meticulous, performant and scalable code, and offering code reviews that always raised the bar for her teammates, but she is also one of the most inquisitive, curious, self-challenging people I've ever met, period. Louise is an all around wonderful human. She has incredible focus and attention, asks ALL the questions she considers important (and was reliably our main source for identifying design and planning blind spots), and is always trying to improve her hard and soft skills"`
    },
    {
        name: 'Guayo Mena',
        title: 'Engineering Manager',
        text: `"Louise possesses a genuine engineer mindset, consistently delving into the root causes of issues and addressing them in a sustainable manner. She is adept at research and displays an unparalleled mastery over third-party library documentation, ensuring she's always well-versed with them. In code reviews, Louise's thoroughness is evident. She not only suggests improvements but also provides clear rationales behind each suggestion, ensuring the team understands the value and intent.... Beyond her technical prowess, Louise has a flair for fostering a positive team culture."`
    }
]
const References = () => {
    return (
        <Section id="references">
            <Headline title="Word on the Street" />
            <Quotes>
                {references.map((reference) => (
                    <Quote>
                        <p>{reference.text}</p>
                        <p>- {reference.name}</p>
                        <p>{reference.title}</p>
                        <p>See the full text on
                            {' '}
                            <Link
                                href="https://www.linkedin.com/in/louiselehman/details/recommendations"
                                text="LinkedIn"
                            /></p>
                    </Quote>
                ))}
            </Quotes>
        </Section>
    )
}

export default References;

const Section = styled.section`
    padding: 0 40px;

    @media (min-width: 480px) {
        padding: 0 80px;
    }
`;

const Quotes = styled.div`
    display: flex;
    flex-flow: row wrap;
    gap: 32px;
    justify-content: center;

    @media (min-width: 1280px) {
        gap: 64px;
    }
`;

const Quote = styled.div`
    display: flex;
    flex-flow: column nowrap;
    gap: 4px;
    text-align: center;
    flex: 1 1 auto;
    width: 400px;

    :first-child {
        text-align: justify;
    }

    :last-child {
        font-style: italic;
    }

    > * {
        margin: 0;
    }
`;