import React from "react";
import {
  MessagesList,
  MessagesMessage,
  MessageContent,
} from "../../utils/style/defaultStyles";
import { useRef, useEffect } from "react";

const Messages = ({ messages, currentMember }) => {
  const messagesEnd = useRef(null);

  useEffect(() => {
    messagesEnd.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <MessagesList>
      {messages.map((message, index) => {
        const isFromCurrentMember = message.member.id === currentMember.id;
        const username = isFromCurrentMember
          ? "messageFromMe"
          : "messageFromThem";
        const timestamp = new Date().toLocaleTimeString();

        return (
          <MessagesMessage key={index} className={username}>
            <MessageContent className="MessageContent">
              <p className={username}>{message.member.clientData.username}</p>
              <p className="text">{message.text}</p>
              <p className="timestamp">Sent at: {timestamp}</p>
            </MessageContent>
          </MessagesMessage>
        );
      })}
      <div ref={messagesEnd} />
    </MessagesList>
  );
};

export default Messages;
