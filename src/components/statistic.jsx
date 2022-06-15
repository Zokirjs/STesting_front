import React from 'react';
import styled from 'styled-components';
import {MdGroup, MdOutlineAccessTime} from 'react-icons/md';
import {FaSchool, FaClipboardList} from 'react-icons/fa';


const BgWhite = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    width: ${prop => prop.width ? prop.width : '60%'};
    height: 80px;
    border-radius: 10px;
    padding: 20px;
    margin: 0px auto;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const Cards = styled.div`
    background-color: ${prop => prop.color ? prop.color : '#fff'};
    width: ${prop => prop.width ? prop.width : '100%'};
    height: 80px;
    border-radius: 10px;
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
    color: #fff;
    .icon {
        padding-top: 20px;
    }
`

const CardDetail = styled.div`
    font-weight: bold;
    display: flex;
    font-size: 18px;
    flex-direction: column;
    padding-top: 20px;
    span {
        opacity: 0.5;
        font-size: 12px;
    }
`



export default function App () {
    return <div>
        
        <BgWhite width="80%">
            <Cards width="15%" color="#0bb783">
                <MdGroup className='icon' size={40} color="#fff"/>
                <CardDetail>
                    2,969,102
                    <span>
                        O'quvchilar
                    </span>
                </CardDetail>
            </Cards> 
            <Cards width="15%" color="#8e67fb">
            <FaSchool className='icon' size={40} color="#fff"/>
                <CardDetail>
                    7,749
                    <span>
                        Maktab
                    </span>
                </CardDetail>
            </Cards> 
            <Cards width="15%" color="#4f95ff">
            <FaClipboardList className='icon' size={40} color="#fff"/>
                <CardDetail>
                    1,449
                    <span>
                        Testlar
                    </span>
                </CardDetail>
            </Cards>
            <Cards width="15%" color="#f4970a">
            <FaClipboardList className='icon' size={40} color="#fff"/>
                <CardDetail>
                    4,394,715
                    <span>
                        Test yechilishlar soni
                    </span>
                </CardDetail>
            </Cards> 
            <Cards width="15%" color="#89b9c8">
            <MdOutlineAccessTime className='icon' size={40} color="#fff"/>
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


