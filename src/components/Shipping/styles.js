import styled from 'styled-components';

export const Container = styled.div`
  form {
    display: inline-flex;
    align-items: center;
    margin-bottom: 10px;
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
  width: 250px;

  th {
    text-align: left;
    padding-bottom: 5px;
  }

  td {
    text-align: left;
  }
`;
