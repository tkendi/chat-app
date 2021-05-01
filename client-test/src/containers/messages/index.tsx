import React from "react";
import styled from "styled-components";

import ScrollToBottom from "react-scroll-to-bottom";

import Message from "../message";

const Messages = ({ messages, name }: any) => (
  <CustomScrollBottom>
    {messages.map((message: any, i: number) => (
      <div key={i}>
        <Message message={message} name={name} />
      </div>
    ))}
  </CustomScrollBottom>
);

export default Messages;

const CustomScrollBottom = styled(ScrollToBottom)`
  padding: 5% 0;
  overflow: auto;
  flex: auto;
`;
