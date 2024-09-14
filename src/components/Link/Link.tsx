import styled from "styled-components";
import { COLORS } from "../../colors";

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    text: string;
}

const Link = ({ text, ...rest }: LinkProps) => {
    return (
        <StyledLink
            target="_blank"
            rel="noreferrer"
            {...rest}>
            {text}
        </StyledLink>
    )
};

export default Link;

const StyledLink = styled.a`
    color: ${COLORS.mainTextColor};
    text-decoration: underline;
    text-underline-offset: 3px;

    &:hover {
        color: ${COLORS.lightBlue};
    }
`;
