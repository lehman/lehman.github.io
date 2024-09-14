import styled from 'styled-components';
import { COLORS } from '../../colors';

type SocialLinkType = {
    faIcon: string;
    href: string;
    key: string;
}

const icons: SocialLinkType[] = [
    {
        href: 'https://www.linkedin.com/in/louiselehman',
        faIcon: 'fa-brands fa-linkedin fa-fw',
        key: 'linkedin'
    },
    {
        href: 'https://github.com/lehman',
        faIcon: 'fa-brands fa-github fa-fw',
        key: 'github'
    },
];

export interface SocialLinksInterface {
    color?: string;
    fontSize?: string;
}

const SocialLinks = ({ color, fontSize }: SocialLinksInterface) => {
    return (
        <LinkList $color={color} $fontSize={fontSize}>
            {icons.map((icon: SocialLinkType) =>
                <a
                    href={icon.href}
                    target="_blank"
                    key={icon.key}
                    rel="noreferrer"
                >
                    <i className={icon.faIcon}></i>
                </a>
            )}
        </LinkList>
    );
}

export default SocialLinks;

const LinkList = styled.div<{
    $color?: string;
    $fontSize?: string;
}>`
    display: flex;
    flex-flow: row;
    gap: 10px;
    font-size: ${props => props.$fontSize || '16px'};

    > * {
        color: ${props => props.$color || COLORS.headerTextColor};
        padding: 2px 5px;
    }

    @media (min-width: 768px) {
        font-size: ${props => props.$fontSize || '32px'};
    }
`;
