import styled from 'styled-components';

export const Container = styled.div`
  div {
    display: inline-flex;
    align-items: center;
    input {
      padding: 5px;
      margin-right: 5px;
      width: 120px;
    }
    button {
      font-size: 12px;
      height: 30px;
    }
  }
`;

export const Infos = styled.table`
  margin-left: auto;
  width: 200px;

  th {
    text-align: left;
    padding-bottom: 5px;
  }

  td {
    text-align: left;
  }
`;
