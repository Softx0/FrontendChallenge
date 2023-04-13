import SwordSVG from '../../assets/icons/sword.svg';
import AccordianArrowSVG from '../../assets/icons/accordian_arrow.svg';
import SearchSVG from '../../assets/icons/search.svg';
import BagSVG from '../../assets/icons/item-bag.svg';
import FeatherSVG from '../../assets/icons/feather.svg';

import './RowFilter.css';

export const RowFilter = () => {
    return (
        <div className='row-filters'>
            <div className='container-dropdown container-select-game'>

                <div className='sword-title-container' >
                    <img src={SwordSVG} className='sword' />
                    <span className='title-dropdown'>Select a game</span>
                </div>

                <img src={AccordianArrowSVG} className='accordian-arrow' />
            </div>

            <div className='container-dropdown container-search-width'>
                <div className='container-search' >
                    <img src={SearchSVG} className='search' />
                    <span className='title-dropdown'>Search</span>
                </div>
            </div>

            <div className='container-dropdown container-item-bag'>

                <div className=' container-bag'>
                    <img src={BagSVG} className='search' />
                    <div className='container-price' >
                        <span className='title-price'>Price</span>
                        <span className='title-all'>All</span>
                    </div>
                </div>
                <img src={AccordianArrowSVG} className='accordian-arrow-price' />
            </div>

            <div className='container-dropdown container-item-bag'>

                <div className=' container-bag'>
                    <img src={FeatherSVG} className='search' />
                    <div className='container-price' >
                        <span className='title-price'>Item Type</span>
                        <span className='title-all'>All</span>
                    </div>
                </div>
                <img src={AccordianArrowSVG} className='accordian-arrow-price' />
            </div>
        </div>
    )
}
