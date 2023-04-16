import './Footer.css';
import VisaSVG from '../../assets/icons/visa.svg';
import MasterCardSVG from '../../assets/icons/mastercard.svg';
import AMEXSVG from '../../assets/icons/amex.svg';
import SkrillSVG from '../../assets/icons/skrill.svg';
import CryptoSVG from '../../assets/icons/crypto.svg';

import FacebookSVG from '../../assets/icons/facebook.svg';
import InstagramSVG from '../../assets/icons/instagram.svg';
import TwitterSVG from '../../assets/icons/twitter.svg';
import DiscordSVG from '../../assets/icons/discord.svg';

import StartSVG from '../../assets/icons/trust-pilot-5-star.svg';

import ChicksGoldLogo from "../../assets/icons/chicks-logo-large.svg";

export const Footer = () => {
    return (
        <footer className='container-footer'>
            <div className='container-icons'>
                <div className='average-method-paid-icon'>
                    <img src={VisaSVG} className='visa-icon' />
                </div>

                <div className='container-mastercard-icon'>
                    <img src={MasterCardSVG} className='mastercard-icon' />
                </div>

                <div className='average-method-paid-icon'>
                    <img src={AMEXSVG} className='amex-icon' />
                </div>

                <div className='average-method-paid-icon'>
                    <img src={SkrillSVG} className='skrill-icon' />
                </div>

                <div className='average-method-paid-icon'>
                    <img src={CryptoSVG} className='crypto-icon' />
                </div>

                <div className='container-label-icon'>
                    <span className='generic-text-footer'>and 50+ more</span>
                </div>
            </div>

            <div className='container-footerdown'>
                <div className='container-social-media-icons'>
                    <div className='container-facebook-icon'>
                        <img src={FacebookSVG} className='facebook-icon average-social-media-icon' />
                    </div>

                    <div className='container-instagram-icon'>
                        <img src={InstagramSVG} className='instagram-icon average-social-media-icon' />
                    </div>

                    <div className='container-twitter-icon'>
                        <img src={TwitterSVG} className='twitter-icon average-social-media-icon' />
                    </div>

                    <div className='container-discord-icon'>
                        <img src={DiscordSVG} className='discord-icon average-social-media-icon' />
                    </div>


                </div>

                <hr className='separator-line' />

                <div className='container-footer-columns'>

                    <div className='container-footer-columns-list'>
                        <img src={ChicksGoldLogo} className='footer-company-logo' />
                        <span className='generic-text-footer footer-email'>support@chicksgold.com</span>
                    </div>

                    <div className="container-footer-columns-list special-container">
                        <span className='generic-text title-column'>
                            Chicks Gold
                        </span>
                        <ul>
                            <li>Games</li>
                            <li>About Us</li>
                            <li>Blog</li>
                            <li>Sitemap</li>
                        </ul>
                    </div>

                    <div className="container-footer-columns-list special-container">
                        <span className='generic-text  title-column'>
                            Support
                        </span>
                        <ul>
                            <li>Contact Us</li>
                            <li>FAQ</li>
                        </ul>
                    </div>

                    <div className="container-footer-columns-list special-container">
                        <span className='generic-text title-column'>
                            Legal
                        </span>
                        <ul>
                            <li>Privacy Policy</li>
                            <li>Terms of Service</li>
                            <li>Copyright Policy</li>
                        </ul>
                    </div>

                    <div className="container-footer-last-column special-container">
                        <img src={StartSVG} className='start-icon' />
                        <span className='footer-title-reviews'>Trustpilot Reviews</span>
                    </div>

                </div>

                <div className='container-all-rights-reserved'>
                    <span className='label-all-rights-reserved'>
                        © 2017 - 2020 Chicksgold.com. All Rights Reserved
                    </span>
                </div>
            </div>

        </footer>
    )
}
