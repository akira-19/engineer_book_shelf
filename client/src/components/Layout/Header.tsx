import React, { FC } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Image from 'next/image';
import ColorStyle from '../../../styles/ColorStyle';

const Header: FC = () => {
  return (
    <Wrapper>
      <Container>
        <TitleLogo>EBS</TitleLogo>
        <Content>
          <Login>ログイン</Login>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  width: 100%;
`;

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  padding-top: 15px;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${ColorStyle.GREEN.DARK};
  font-family: 'Righteous', cursive;
`;

const TitleLogo = styled.div`
  font-size: 32px;
  line-height: 32px;
`;
const Content = styled.div`
  padding-top: 5px;
`;

const Login = styled.a`
  color: #fff;
  background-color: ${ColorStyle.GREEN.ORIGINAL};
  padding: 8px 10px;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  &:active {
    color: #fff;
    background: ${ColorStyle.GREEN.ORIGINAL};
    opacity: 0.9;
  }
`;

const MainContainer = styled.main`
  width: 100vw;
`;

const TopContainer = styled.div`
  height: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const TitleTextContainer = styled.div`
  width: 400px;
  margin: 0 auto;
  font-size: 50px;
  font-weight: 600;
  color: ${ColorStyle.GREEN.DARK};
  text-align: center;
`;

const TitleImageContainer = styled.div`
  width: 400px;
  margin: 0 auto;
  text-align: center;
`;

const SecondContainer = styled.div`
  width: 100%;
  height: 400px;
  background: ${ColorStyle.GREEN.ORIGINAL};
  opacity: 0.5;
`;
