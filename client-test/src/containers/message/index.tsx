import React from "react";
import styled, { css } from "styled-components";

import ReactEmoji from "react-emoji";

const Message = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <Container>
      <SentText>{trimmedName}</SentText>
      <MessageBox>
        <MessageText>{ReactEmoji.emojify(text)}</MessageText>
      </MessageBox>
    </Container>
  ) : (
    <Container start={true}>
      <MessageBox light={true}>
        <MessageText dark={true}>{ReactEmoji.emojify(text)}</MessageText>
      </MessageBox>
      <SentText pl={true}>{user}</SentText>
    </Container>
  );
};

export default Message;

const Container = styled.div<{ start?: boolean }>`
  display: flex;
  justify-content: flex-end;
  padding: 0px 5px;
  margin-top: 3px;
  ${(props) =>
    props.start &&
    css`
      justify-content: start;
    `}
`;

const MessageBox = styled.div<{ light?: boolean }>`
  background: #2979ff;
  border-radius: 20px;
  padding: 5px 20px;
  color: #fff;
  display: inline-block;
  max-width: 80%;

  ${(props) =>
    props.light &&
    css`
      background: #f3f3f3;
    `}
`;

const SentText = styled.p<{ pl?: boolean }>`
  display: flex;
  align-items: center;
  font-family: Helvetica;
  color: #828282;
  letter-spacing: 0.3px;
  padding-right: 10px;
  ${(props) =>
    props.pl &&
    css`
      padding-left: 10px;
    `}
`;

const MessageText = styled.p<{ dark?: boolean }>`
  width: 100%fit-content;
  letter-spacing: 0px;
  float: left;
  font-size: 1.1em;
  word-wrap: break-word;
  color: #fff;
  ${(props) =>
    props.dark &&
    css`
      color: #353535;
    `}
`;
