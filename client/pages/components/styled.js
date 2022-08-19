import styled, { keyframes } from "styled-components";
export const Nav = styled.nav`
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 1200px;
  width: 100%;
  margin: auto;
`;
export const Button = styled.button`
  font-size: 17px;
  padding: 7px 22px;
  border-radius: 30px;
  cursor: pointer;
  border: 1px solid #fff;
  transition: 0.3s ease;
  margin: 0 5px;
  &:hover {
    background-color: transparent;
    color: #fff;
    border-color: #fff;
  }
`;
export const NavigationBar = styled.div`
  display: inherit;
  align-items: center;
`;
export const Main = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const onload = keyframes`
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`;
export const H1 = styled.h1`
  margin: -100px auto 30px;
  font-size: 50px;
  animation: ${onload} 0.5s ease;
`;
export const H2 = styled.h2`
  margin-top: 30px;
  animation: ${onload} 0.5s ease;
`;
