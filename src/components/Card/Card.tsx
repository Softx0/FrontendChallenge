import ArrowUp from "../../assets/icons/arrow-up.svg";
import ArrowDown from "../../assets/icons/arrow-down.svg";
import ShoopingCart from "../../assets/icons/shooping-cart.svg";
import IconCard from "../../assets/images/blue-partyhat.png";
import LoLIcon from "../../assets/images/lol-icon.png";
import './Card.css';

export const Card = () => {
    return (
        <div className="card">
            <div className="container-one">

                <div className="container-span-onsale-stock">
                    <span className="title-onsale">ON SALE</span>
                    <div className="container-instock"><span className="title-stock ">In Stock</span></div>
                </div>

                <div className="container-number">
                    <span className="title-number">1</span>
                    <div className="container-arrow">
                        <img src={ArrowUp} className='arrow' />
                        <img src={ArrowDown} className='arrow' />
                    </div>
                </div>

            </div>

            <div>
                <img src={IconCard} className="icon-card" />
            </div>

            <div className="container-game">
                <span className="title-game">Blue Partyhat</span>
                <img src={LoLIcon} className='icon-game' />
            </div>

            <div className="container-amount">
                <p className="generic-text discount-amount">$450.00</p>
                <p className="generic-text original-amount">$522.50</p>
            </div>


            <div>
                <p className="generic-text item-description">Lorem Ipfndfsdjkfjksdfjsdfj dfdfdf </p>
            </div>

            <div className="container-button">
                <div className="button-details">
                    <span className="generic-text text-details">DETAILS</span>
                </div>

                <div className="container-add">
                    <span>ADD</span>
                    <div className="container-shooping-cart">
                        <img src={ShoopingCart} className='filter' />
                    </div>
                </div>
            </div>
        </div>
    )
}
