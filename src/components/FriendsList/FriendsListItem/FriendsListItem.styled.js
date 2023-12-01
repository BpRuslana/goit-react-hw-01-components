import styled from 'styled-components';
export const StyledLi = styled.li`
    display: flex;
    width: 120px;
    height: 120px;
    border-radius: 30px;
    background: #e0e0e0;
    box-shadow: 10px 10px 20px #bebebe, -10px -10px 20px #ffffff;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const StyledName = styled.p`
    margin: 10px;
    font-weight: 600;
    font-size: 14px;
`;
export const StyledSpanOnline = styled.span`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${props => (props.$isOnline ? "green" : "red")};
    margin: 5px;
`;