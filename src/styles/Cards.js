import styled from "styled-components";



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


export default Cards;