import styled from 'styled-components';
export const Wrapper = styled.div`
width:50%;
height: auto;
background-color: white;
margin: 50px auto;
padding: 20px;
border-radius: 20px;
button{
    display: flex;
    background-color: purple;
    font-size: 15px;
    font-weight: bold;
    padding:5px;
}
`;

export const Text = styled.div`
width: 90%;
text-align: left;
font-size:20px;
font-weight: bold;
input{
    width: 100%;
    height: 20px;
    margin-bottom:20px;
    margin-top:4px;
    border-radius: 10px;
    border-color:rgba(0, 0, 0, 0.542);
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
`;