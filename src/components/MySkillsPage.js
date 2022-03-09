import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { LightTheme } from "./Themes";
import { Design, Develope } from "./AllSvg";

import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitle";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  cursor: pointer;

  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }
  & > *:first-child {
    margin-right: 1rem;
  }
`;

const DesCription = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 1vw);
padding: 0.5rem 0;
${Main}:hover &{
   
        color:${props => props.theme.body};
    
}
strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
}
ul,p{
    margin-left: 2rem;
}
`

function MySkillsPage() {
  return (
    <ThemeProvider theme={LightTheme}>
      <Box>
        <LogoComponent theme="light"  />
        <SocialIcons theme="light" />
        <PowerButton  />
        <ParticleComponent   theme="light"/>
        <Main>
          <Title>
            <Design width={40} height={40} /> Designer
          </Title>
          <DesCription>
            I love to create design which speaks, Keep it clean, minimal and
            simple.
          </DesCription>
          <DesCription>
            <strong>I LIKE TO DESIGN</strong>
            <ul>
              <li>Web Design</li>
              <li>Mobile Apps</li>
            </ul>
          </DesCription>
          <DesCription>
            <strong>TOOLS</strong>
            <ul>
              <li>Figma</li>
            </ul>
          </DesCription>
        </Main>
        <Main>
          <Title>
            <Develope width={40} height={40} /> Frontend Developer
          </Title>
          <DesCription>
            I value business or brand for which i'm creating, thus i enjoy
            bringing new ideas to life.
          </DesCription>
          <DesCription>
            <strong>Skills</strong>
            <p>
              Html, Css, Js, React, Redux, Sass, Bootstrap, Tailwind, Firebase
              etc.
            </p>
          </DesCription>
          <DesCription>
            <strong>TOOLS</strong>
            <p>VScode, Github, Codepen etc.</p>
          </DesCription>
        </Main>
        <BigTitle text="Skills" top='80%' right="25%" />
      </Box>
    </ThemeProvider>
  );
}

export default MySkillsPage;
