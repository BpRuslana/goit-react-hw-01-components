import styled from 'styled-components';
export const StyledTable = styled.table`
  padding-bottom: 30px;
  padding-top: 30px;
  width: 700px;
  margin: 0 auto;

  th,
  td {
    padding: 8px;
    text-align: center;
    border-bottom: 1px solid #ddd;
  }

  th {
    background-color: rgb(0, 128, 128, 0.4);
    font-weight: 700;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
`;
