import styled from 'styled-components';

export interface HeadlineProps {
    title: string;
};

const Headline = ({ title }: HeadlineProps) => {
    return (
        <Header>
            <h2>{title}</h2>
        </Header>
    )
}

export default Headline;

const Header = styled.header`
    font-size: 18px;
    font-weight: bold;
    margin: 20px 0;
    text-align: center;

    @media (min-width: 768px) {
        font-size: 32px;
        margin: 20px 0 35px 0;
    }
`;