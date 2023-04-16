
import ArrowLeftSVG from '../../assets/icons/arrow-left.svg';
import ArrowRightSVG from '../../assets/icons/arrow-right.svg';
import './Pagination.css'

export const Pagination = () => {
    return (
        <div className='container-pagination'>
            <div className='container-left-arrow'>
                <img src={ArrowLeftSVG} className='left-arrow' />
            </div>

            <div>
                <div className='container-numbers-pagination'>
                    <span className='generic-text numer-pagination selected'>1</span>
                    <span className='generic-text numer-pagination'>2</span>
                    <span className='generic-text numer-pagination'>3</span>
                    <span className='generic-text numer-pagination'>4</span>
                    <span className='generic-text numer-pagination'>...</span>
                    <span className='generic-text numer-pagination'>11</span>
                </div>
            </div>


            <div className='container-right-arrow'>
                <img src={ArrowRightSVG} className='left-arrow' />
            </div>
        </div>
    )
}
