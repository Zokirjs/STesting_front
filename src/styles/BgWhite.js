import styled from "styled-components";


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

export default BgWhite;