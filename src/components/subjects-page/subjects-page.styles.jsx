import styled from "styled-components";

export const SubjectPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 1;
`;

export const SubjectCardsWrapper = styled.div`
  padding: 20px 200px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 10px;
  row-gap: 20px;

  @media (max-width: 1100px) {
    padding: 20px 50px;
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 8px;
    row-gap: 10px;
    padding: 10px 10px;
  }
`;

export const ButtonContainer = styled.div`
  width: 150px;
  margin-top: 15px;
  align-self: flex-end;
`;

export const Heading = styled.span`
  text-align: center;
  color: #2c306f;
  font-size: 35px;
  margin-top: 10px;
  transform: translateX(-18%);
`;

export const SubHeading = styled.span`
  color: #1565c0;
  font-size: 28px;
`;
