import React from 'react';
import {MdGroup, MdOutlineAccessTime} from 'react-icons/md';
import {FaSchool, FaClipboardList} from 'react-icons/fa';
import BgWhite from '../styles/BgWhite'
import Cards from '../styles/Cards'
import CardDetail from '../styles/CardDetail'



export default function App () {
    return <div className='cards'>
        
        <BgWhite width="80%">
            <Cards width="15%" color="#0bb783">
                <MdGroup className='icon' size={"2rem"} color="#fff"/>
                <CardDetail>
                    2,969,102
                    <span>
                        O'quvchilar
                    </span>
                </CardDetail>
            </Cards> 
            <Cards width="15%" color="#8e67fb">
            <FaSchool className='icon' size={"2rem"} color="#fff"/>
                <CardDetail>
                    7,749
                    <span>
                        Maktab
                    </span>
                </CardDetail>
            </Cards> 
            <Cards width="15%" color="#4f95ff">
            <div className="icon">
            <FaClipboardList size={"2rem"} color="#fff"/>
            </div>
                <CardDetail>
                    1,449
                    <span>
                        Testlar
                    </span>
                </CardDetail>
            </Cards>
            <Cards width="15%" color="#f4970a">
            <FaClipboardList className='icon' size={"2rem"} color="#fff"/>
                <CardDetail>
                    4,394,715
                    <span>
                        Test yechilishlar soni
                    </span>
                </CardDetail>
            </Cards> 
            <Cards width="15%" color="#89b9c8">
            <MdOutlineAccessTime className='icon' size={"2rem"} color="#fff"/>
                <CardDetail>
                    79,042
                    <span>
                        Sessiyalar
                    </span>
                </CardDetail>
            </Cards>  
        </BgWhite>

        
    </div>
     
}


