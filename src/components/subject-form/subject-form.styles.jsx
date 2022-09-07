import styled from "styled-components";

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px 15px;
  background-color: white;
  box-shadow: 0px 0px 20px rgba(34, 34, 34, 0.658);
  border-radius: 10px;
  width: 300px;
  height: 220px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
`;

export const FormContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(34, 34, 34, 0.388);
  z-index: 2;
`;

export const ButtonContainer = styled.div`
width: 100%;
display flex;
justify-content: space-around;
`;
