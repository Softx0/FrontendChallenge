import "./NavBar.css";
import ArrowDownSVG from "../../assets/icons/arrow-down.svg";
import ChicksGoldLogo from "../../assets/icons/chicks-logo-large.svg";
import ShoopingCartSVG from "../../assets/icons/shooping-cart.svg";
import UserSVG from "../../assets/icons/user.svg";
import { useState } from "react";

export const NavBar = () => {

    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const handleHamburguerButton = () => {
        setIsNavExpanded(!isNavExpanded);
    }

    return (
        <div>
            <nav className="navigation">
                <div>
                    <a href="#" className="brand-name">
                        <img src={ChicksGoldLogo} />
                    </a>
                </div>
                <div className="divisor-line">

                </div>
                <button className="hamburger" onClick={handleHamburguerButton}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                        <path fill-rule="evenodd" d="M2 3.75A.75.75 0 012.75 3h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 3.75zm0 4.167a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75zm0 4.166a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75zm0 4.167a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
                    </svg>
                </button>

                <div
                    className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu navigation-left"}>
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

                <div
                    className={isNavExpanded ? "navigation-menu navigation-belong-right expanded" : "navigation-menu navigation-belong-right"}>
                    <ul>
                        <li>
                            <a href="#">USD</a>
                            <img src={ArrowDownSVG} className="image-arrow-down" />
                        </li>
                    </ul>
                </div>

                <div
                    className={isNavExpanded ? "navigation-menu navigation-right expanded" : "navigation-menu navigation-right"}>
                    <ul>
                        <li>
                            <img src={ShoopingCartSVG} className="image-arrow-down shooping-cart" />
                            <a href="#">CART (5)</a>
                        </li>
                        <li>
                            <button className="sign-in-button">
                                SIGN IN
                                <img src={UserSVG} className="image-arrow-down user-icon" />
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
