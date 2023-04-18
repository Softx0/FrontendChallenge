import "./NavBar.css";
import ArrowDownSVG from "../../assets/icons/arrow-down.svg";
import ChicksGoldLogo from "../../assets/icons/chicks-logo-large.svg";
import ShoopingCartSVG from "../../assets/icons/shooping-cart.svg";
import UserSVG from "../../assets/icons/user.svg";
import { useState } from "react";

export const NavBar = () => {

    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const handleHamburguerButton = () => setIsNavExpanded(!isNavExpanded);

    return (
        <div>
            <nav className="navigation">
                <div className="container-brand-name">
                    <a href="#" className="">
                        <img src={ChicksGoldLogo} />
                    </a>
                </div>

                <button className="hamburger" onClick={handleHamburguerButton}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                        <path fill-rule="evenodd" d="M2 3.75A.75.75 0 012.75 3h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 3.75zm0 4.167a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75zm0 4.166a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75zm0 4.167a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
                    </svg>
                </button>

                <div className={isNavExpanded ? "container-items-navbar expanded" : "container-items-navbar"}>

                    <div className="container-items-navbar-left">
                        <ul>
                            <li>
                                <a href="#">CURRENCY</a>
                                <img src={ArrowDownSVG} className="image-arrow-down" />
                            </li>
                            <li>
                                <a href="#">ITEMS</a>
                                <img src={ArrowDownSVG} className="image-arrow-down" />
                            </li>
                            <li>
                                <a href="#">ACCOUNTS</a>
                                <img src={ArrowDownSVG} className="image-arrow-down" />
                            </li>
                            <li>
                                <a href="#">SERVICES</a>
                                <img src={ArrowDownSVG} className="image-arrow-down" />
                            </li>
                            <li>
                                <a href="#">SWAP</a>
                                <img src={ArrowDownSVG} className="image-arrow-down" />
                            </li>
                            <li>
                                <a href="#">SELL</a>
                                <img src={ArrowDownSVG} className="image-arrow-down" />
                            </li>
                        </ul>
                    </div>


                    <div className="container-items-navbar-right">
                        <div className={isNavExpanded ? "container-currency-cart second-expanded" : "container-currency-cart"}>
                            <div>
                                <ul>
                                    <li>
                                        <a href="#">USD</a>
                                        <img src={ArrowDownSVG} className="image-arrow-down" />
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <ul>
                                    <li>
                                        <img src={ShoopingCartSVG} className="shooping-cart" />
                                        <a href="#">CART (5)</a>
                                    </li>

                                    <li>
                                        <div className="sign-in-button">
                                            <span className="label-sign-in">SIGN IN</span>
                                            <img src={UserSVG} className="user-icon" />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
