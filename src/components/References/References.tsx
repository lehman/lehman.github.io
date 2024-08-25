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
    }
]
const References = () => {
    return (
        <Section id="references">
            <Headline title="Word on the Street" />
            {references.map((reference) => (
                <Quote>
                    <p>{reference.text}</p>
                    <p>- {reference.name}</p>
                    <p>{reference.title}</p>
                    <p>See the full review on
                        {' '}
                        <Link
                            href="https://www.linkedin.com/in/louiselehman/details/recommendations"
                            text="LinkedIn"
                        /></p>
                </Quote>
            ))}
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

const Quote = styled.div`
    display: flex;
    flex-flow: column nowrap;
    gap: 4px;
    text-align: center;

    :last-child {
        font-style: italic;
    }

    > * {
        margin: 0;
    }
`;