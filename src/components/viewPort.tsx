import styled from "styled-components";
import { GameTracker } from "../pages/gameTracker";

const SmallViewPortDiv = styled.div`
  display: flex;
  flex-direction: column;
  vertical-align: middle;
`;

const LargeViewportDiv = styled.div`
  display: flex;
  vertical-align: middle;
  display: flex;
  flex-direction: row;
  height: 100%;
`;

export const NavBarDiv = styled.nav`
  display: flex;
  padding-top: 20vh;
  text-align: center;
  height: 100vh;
  min-width: 15rem;
  flex-direction: column;
  overflow: hidden;
  position: sticky;
  top: 0px;
`;

const DivBackground = styled.div`
  display: flex;
  align-items: stretch;
  background-color: #413e4a;
  flex: 1;
`;

export const LargeContentWindow = styled.div`
  display: flex;
  flex-direction: column;
`;

const VerticalNavBar = () => {
  return (
    <DivBackground>
      <NavBarDiv>
        <h1>TracMag</h1>
        <h2>Tracking Magic Games since 2024</h2>
      </NavBarDiv>
    </DivBackground>
  );
};

export const SmallViewPort = () => {
  return <SmallViewPortDiv></SmallViewPortDiv>;
};
export const LargeViewPort = () => {
  return (
    <LargeViewportDiv>
      <VerticalNavBar />
      <LargeContentWindow>
        <GameTracker />
      </LargeContentWindow>
    </LargeViewportDiv>
  );
};
