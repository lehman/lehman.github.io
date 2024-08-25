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
    text-align: center;
    font-size: 16px;

    h2 {
        margin: 20px 0 35px 0;
    }

    @media (min-width: 768px) {
        font-size: 28px;
    }
`;