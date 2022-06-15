import styled from "styled-components";

const Cards = styled.div`
    background-color: ${prop => prop.color ? prop.color : '#fff'};
    width: ${prop => prop.width ? prop.width : '100%'};
    height: 80px;
    border-radius: 10px;
    margin: 0 auto;
    display: flex;
    color: #fff;
    .icon {
        display: flex;
        padding-top: 20px;
        width: 100px;
        text-align: center;
    }
    .icon * {
        margin: 0 auto;
    }
    @media (max-width: 1200px) {
        width: 100%;
        margin: 10px auto;
    }
`;

export default Cards;