import './Navigation.css';
import '../MenuItem/MenuItem';
import SocialMediaLink from '../SocialMediaLink/SocialMediaLink';
import MenuItem from '../MenuItem/MenuItem';
import Masthead from '../Masthead/Masthead';

function Navigation(props) {
    return (
        <div id="header" className="skel-panels-fixed">
            <div className="top">
                <Masthead></Masthead>

                <nav id="nav">
                    {/* Prologue's nav expects links in one of two formats:

          1. Hash link (scrolls to a different section within the page)

             <li><a href="#foobar" id="foobar-link" class="skel-panels-ignoreHref"><span class="fa fa-whatever-icon-you-want">Foobar</span></a></li>

          2. Standard link (sends the user to another page/site)

             <li><a href="http://foobar.tld"><span class="fa fa-whatever-icon-you-want">Foobar</span></a></li> */}
                    <ul>
                        <MenuItem title="Portfolio" href="#portfolio" id="portfolio-link" className="fa-th"></MenuItem>
                        <MenuItem title="About Me" href="#about" id="about-link" className="fa-user"></MenuItem>
                        <MenuItem title="Resume" href="#resume" id="resume-link" className="fa-list-ul"></MenuItem>
                    </ul>
                </nav>
            </div>

            <div className="bottom">
                <ul className="icons">
                    <SocialMediaLink
                        title="LinkedIn"
                        href="https://www.linkedin.com/in/louiselehman"
                        className="fa-linkedin"
                    ></SocialMediaLink>
                    <SocialMediaLink
                        title="Github"
                        href="https://github.com/lehman"
                        className="fa-github"
                    ></SocialMediaLink>
                    {/* TODO: Add HackerRank SocialMediaLink after upgrading FontAwesome to v5 */}
                    <SocialMediaLink
                        title="Codecademy"
                        href="https://www.codecademy.com/profiles/LouiseLehman"
                        className="fa-code"
                    ></SocialMediaLink>
                </ul>
            </div>
        </div>
    );
}

export default Navigation;
