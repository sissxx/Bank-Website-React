import React, { useState } from "react";
import Video from "../../videos/video.mp4";
import { Button } from "../ButtonElement";
import {
  HomeContainer,
  HomeBg,
  VideoBg,
  HomeContent,
  HomeH1,
  HomeP,
  HomeBtnWrapper,
  ArrowFordard,
  ArrowRight,
} from "./HomeElements";

const HomePage = ({ primary, dark }) => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HomeContainer id="home">
      <HomeBg>
        <VideoBg autoPlay muted loop src={Video} type="video/mp4" />
      </HomeBg>
      <HomeContent>
        <HomeH1>Work with your money.</HomeH1>
        <HomeP>
          Lorem ipsum dolor sit amet, sed do
          eiusmod tempor incididunt aliqua.
        </HomeP>
        <HomeBtnWrapper>
          <Button
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Get started
            {hover ? <ArrowFordard /> : <ArrowRight />}
          </Button>
        </HomeBtnWrapper>
      </HomeContent>
    </HomeContainer>
  );
};

export default HomePage;
