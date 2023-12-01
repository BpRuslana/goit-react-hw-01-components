import styled from 'styled-components';
export const StyledDivWrapper = styled.div`
  width: 350px;
  margin: 0 auto;
  margin-top: 10px;
  border-radius: 10px;
  background: rgb(236, 236, 236);
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

    & div {
        padding-top: 20px;
    }
`;

export const StyledImg = styled.img`
  overflow: hidden;
  object-fit: cover;
  width: 10rem;
  height: 10rem;
  border: 4px solid #7cdacc;
  border-radius: 999px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

export const StyledText = styled.p`
  margin: 10px 20px;
  font-weight: 600;
  font-size: 18px;
`;

export const StyledStats = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px;
  list-style: none;
`;
export const StyledLi = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const StyledSpanLabel = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 7px;
`;

export const StyledSpanQuantity = styled.span`
  font-size: 15px;
  font-weight: 400;
`;