import React from "react";
import styled from "styled-components";
const About = () => {
  return (
    <>
      <Container>
        <h1>Ahmad matene</h1>
        <button>Click me</button>
      </Container>
    </>
  );
};

export default About;

const Container = styled.div`
  display: flex;
  justify-content: center;

  button {
    margin: 40px;
    align-items: center;
    background-color: #379cca;
    border: none;
    padding: 10px;
    border-radius: 30px;
    :hover {
      background-color: black;
      color: white;
    }
  }
`;
