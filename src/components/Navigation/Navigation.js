import './Navigation.css';
import '../MenuItem/MenuItem';
import SocialMediaLink from '../SocialMediaLink/SocialMediaLink';
import MenuItem from '../MenuItem/MenuItem';
import Masthead from '../Masthead/Masthead';

function Navigation(props) {
    return (
        <div id="header" class="skel-panels-fixed">
            <div class="top">
                <Masthead></Masthead>

                <nav id="nav">
                    {/* Prologue's nav expects links in one of two formats:

          1. Hash link (scrolls to a different section within the page)

             <li><a href="#foobar" id="foobar-link" class="skel-panels-ignoreHref"><span class="fa fa-whatever-icon-you-want">Foobar</span></a></li>

          2. Standard link (sends the user to another page/site)

             <li><a href="http://foobar.tld"><span class="fa fa-whatever-icon-you-want">Foobar</span></a></li> */}
                    <ul>
                        <MenuItem title="Intro" href="#top" id="top-link" className="fa-home"></MenuItem>
                        <MenuItem title="Portfolio" href="#portfolio" id="portfolio-link" className="fa-th"></MenuItem>
                        <MenuItem title="About Me" href="#about" id="about-link" className="fa-user"></MenuItem>
                        <MenuItem title="Contact" href="#contact" id="contact-link" className="fa-envelope"></MenuItem>
                        <MenuItem title="Resume" href="#resume" id="resume-link" className="fa-list-ul"></MenuItem>
                    </ul>
                </nav>
            </div>

            <div class="bottom">
                <ul class="icons">
                    <SocialMediaLink
                        title="Facebook"
                        href="https://www.facebook.com/louise.lehman.5?ref=tn_tnmn"
                        className="fa-facebook"
                    ></SocialMediaLink>
                    <SocialMediaLink
                        title="LinkedIn"
                        href="https://www.linkedin.com/in/louiselehmann"
                        className="fa-linkedin"
                    ></SocialMediaLink>
                    <SocialMediaLink
                        title="Github"
                        href="https://github.com/lehman"
                        className="fa-github"
                    ></SocialMediaLink>
                    <SocialMediaLink
                        title="Pluralsight"
                        href="https://app.pluralsight.com/profile/louise-lehman"
                        className="fa-forward"
                        aria-hidden="true"
                    ></SocialMediaLink>
                    <SocialMediaLink
                        title="Codecademy"
                        href="http://www.codecademy.com/louiselehman"
                        className="fa-code"
                    ></SocialMediaLink>
                </ul>
            </div>
        </div>
    );
}

export default Navigation;
