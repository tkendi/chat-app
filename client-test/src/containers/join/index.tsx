import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <Wrap>
      <Container>
        <Head></Head>
        <div>
          <JoinInput
            placeholder="Name"
            type="text"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <JoinInput
            mt={true}
            placeholder="Room"
            type="text"
            onChange={(event) => setRoom(event.target.value)}
          />
        </div>
        <Link
          onClick={(event) => (!name || !room ? event.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <Button type="submit">Sign In</Button>
        </Link>
      </Container>
    </Wrap>
  );
};

export default Join;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  height: 100vh;
  align-items: center;
  background-color: #1a1a1d;
`;

const Container = styled.div`
  width: 20%;
`;

const Head = styled.h1`
  color: #fff;
  font-size: 2.5rem;
  padding-bottom: 10px;
  border-bottom: 2px solid #fff;
`;

const JoinInput = styled.input<{ mt?: boolean }>`
  border-radius: 0px;
  padding: 15px 20px;
  width: 100%;
  ${(props) =>
    props.mt &&
    css`
      margin-top: 20px;
    `}
`;

const Button = styled.button`
  color: #fff !important;
  text-transform: uppercase;
  background: #2979ff;
  padding: 20px;
  border-radius: 5px;
  display: inline-block;
  border: none;
  width: 100%;
  margin-top: 20px;
`;
