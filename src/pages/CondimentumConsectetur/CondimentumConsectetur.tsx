import { NavBar } from '../../components/NavBar/NavBar';
import { RowFilter } from '../../components/RowFilter/RowFilter';
import FilterSVG from '../../assets/icons/filter.svg';
import AccordianArrowSVG from '../../assets/icons/accordian_arrow.svg';
import '../../assets/styles/App.css'

import './styles/CondimentumConsecteturStyles.css';
import { Card } from '../../components/Card/Card';
import { Pagination } from '../../components/Pagination/Pagination';
import { Footer } from '../../components/Footer/Footer';

export const CondimentumConsectetur = () => {
    return (
        <>
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
                                <div className='container-dropdown-sort container-sortby'>
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

            <Footer />
        </>
    )
}
