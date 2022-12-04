import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  gap: 20px;
  color: #212121;
  font-size: 20px;
  font-weight: 700;
`;

export const UserName = styled.b`
  text-decoration: none;
  color: #064927;
  font-size: 20px;
  font-weight: 700;
`;

export const ExitBtn = styled.button`
  display: block;
  width: 100px;
  height: 30px;
  padding: 5px;
  border: 1px solid #2c7953;
  border-radius: 4px;
  cursor: pointer;

  color: #064927;
  background-color: #fff;
  font-size: 16px;
  font-weight: 500;

  :hover {
    font-weight: 600;
  }
`;
