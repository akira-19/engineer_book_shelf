import React, { FC } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Image from 'next/image';
import ColorStyle from '../../styles/ColorStyle';
import Header from '../components/Layout/Header';

const Home: FC = () => {
  return (
    <Container>
      <Head>
        <title>エンジニアの本棚</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <MainContainer>
        <TopContainer>
          <TitleTextContainer>エンジニアの本棚</TitleTextContainer>

          <TitleImageContainer>
            <Image
              src="/top-image.png"
              alt="top image"
              width={300}
              height={200}
            />
          </TitleImageContainer>
        </TopContainer>
        <SecondContainer></SecondContainer>
      </MainContainer>

      <footer></footer>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  width: 100%;
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
  padding-top: 50px;
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
