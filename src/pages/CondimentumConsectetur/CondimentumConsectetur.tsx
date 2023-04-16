import { NavBar } from '../../components/NavBar/NavBar';
import { RowFilter } from '../../components/RowFilter/RowFilter';
import FilterSVG from '../../assets/icons/filter.svg';
import AccordianArrowSVG from '../../assets/icons/accordian_arrow.svg';
import '../../assets/styles/App.css'

import './styles/CondimentumConsecteturStyles.css';
import { Card } from '../../components/Card/Card';
import { Pagination } from '../../components/Pagination/Pagination';

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

export const CondimentumConsectetur = () => {
    return (
        <>
            <div className="condimentumConsectetur-background-container">
                <NavBar />

                <div className='container'>
                    <div className=''>
                        <div className='title-condimentum-consectetur-container'>
                            <h1 className='title-condimentum-consectectur'>
                                Condimentum consectetur
                            </h1>
                        </div>

                        <RowFilter />
                    </div>

                    <div className='principal-container'>

                        <div className='container-main'>
                            <div className='sortby-result-row'>

                                <div className='number-items'>
                                    <span>Showing 20 - from 125</span>
                                </div>

                                <div className='sort-filter'>
                                    <div className='container-dropdown container-sortby'>
                                        <div className='container-adjust'>
                                            <img src={FilterSVG} className='filter' />
                                            <div className='dropdown-span-column' >
                                                <span className='title-price'>Sort By</span>
                                                <span className='title-all'>Featured</span>
                                            </div>
                                        </div>
                                        <div className='container-arrow-down'>
                                            <img src={AccordianArrowSVG} className='accordian-arrow-price' />
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className='container-card'>
                                <Card />
                                <Card />
                                <Card />
                                <Card />
                                <Card />
                                <Card />
                                <Card />
                                <Card />
                                <Card />
                                <Card />
                                <Card />
                                <Card />
                                <Card />
                                <Card />
                                <Card />
                            </div>

                            <Pagination />
                        </div>

                    </div>
                </div>


            </div>

            <footer className='container-footer'>
                <div className='container-icons'>
                    <div className='container-visa-icon'>
                        <img src={VisaSVG} className='visa-icon' />
                    </div>

                    <div className='container-mastercard-icon'>
                        <img src={MasterCardSVG} className='mastercard-icon' />
                    </div>

                    <div className='container-amex-icon'>
                        <img src={AMEXSVG} className='amex-icon' />
                    </div>

                    <div className='container-skrill-icon'>
                        <img src={SkrillSVG} className='skrill-icon' />
                    </div>

                    <div className='container-crypto-icon'>
                        <img src={CryptoSVG} className='crypto-icon' />
                    </div>

                    <div className='container-label-icon'>
                        <span className='generic-text-footer'>and 50+ more</span>
                    </div>
                </div>

                <div className='container-footerdown'>
                    <div className='container-social-media-icons'>
                        <div className='container-facebook-icon'>
                            <img src={FacebookSVG} className='facebook-icon' />
                        </div>

                        <div className='container-instagram-icon'>
                            <img src={InstagramSVG} className='instagram-icon' />
                        </div>

                        <div className='container-twitter-icon'>
                            <img src={TwitterSVG} className='twitter-icon' />
                        </div>

                        <div className='container-discord-icon'>
                            <img src={DiscordSVG} className='discord-icon' />
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
                            <div>
                                <img src={StartSVG} className='start-icon' />
                            </div>

                            <div>
                                <span className='footer-title-reviews'>Trustpilot Reviews</span>
                            </div>

                        </div>

                    </div>

                    <div className='container-all-rights-reserved'>
                        <span className='label-all-rights-reserved'>
                            © 2017 - 2020 Chicksgold.com. All Rights Reserved
                        </span>
                    </div>
                </div>

            </footer>
        </>
    )
}
