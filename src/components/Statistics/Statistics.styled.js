import styled from 'styled-components';
export const StyledSection = styled.section`
  h2{
    text-align: center;
  }

  width: 750px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 3px,
    rgba(0, 0, 0, 0.2) 0px 7px 7px -2px, rgba(0, 0, 0, 0.2) 0px -1px 0px inset;
`;
export const StyledUl = styled.ul`
      list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 0;
`;

export const StyledLi = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    border: 1px solid yellow;
    padding: 10px;
    width: 120px;
    background-color: yellowgreen;
`;
export const StyledSpanLabel = styled.span`
      font-size: 20px;
    font-weight: 500;
`;
export const StyledSpanPercentage = styled.span`
      margin-top: 5px;
    font-size: 25px;
    color: teal;
`;