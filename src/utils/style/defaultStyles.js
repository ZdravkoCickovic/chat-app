import { Field, Form } from "formik";
import styled from "styled-components";

export const GlobalStyles = styled.div`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

// Header

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  background: linear-gradient(-45deg, #f55b31, #88d424, #508efa, #ed6b98);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  height: 100vh;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export const AppHeader = styled.div`
  overflow: hidden;
  width: 100%;
  text-align: center;
  font-family: "Roboto", sans-serif;
  color: black;
  flex-shrink: 0;
  background: transparent;
`;

export const HeaderTitle = styled.h1`
  display: inline-block;
  margin: 10px;
  padding: 10px;
  letter-spacing: 1px;
`;

// Message Form,Messages and users

export const MessageForm = styled(Form)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  max-width: 900px;
  margin: 0 auto 40px;
  margin-top: 10px;
`;

export const MessagesList = styled.ul`
  padding: 20px 15px;
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  list-style: none;
  padding-left: 0;
  flex-grow: 1;
  overflow: auto;

  /* Scrollbar */
  ::-webkit-scrollbar {
    width: 10px;
    background-color: black;
    border-radius: 6px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: white;
  }
`;

export const MessagesMessage = styled.li`
  display: flex;
  margin-top: 10px;

  &.messageFromMe {
    flex-direction: row-reverse;
    text-align: right;

    > .MessageContent {
      align-items: flex-end;
      .text {
        background-color: green;
      }
    }
  }
`;

export const MessageContent = styled.div`
  display: inline-block;

  .username {
    display: block;
    color: rgb(0, 0, 0);
    font-size: 14px;
    padding-bottom: 4px;
    border: 2px solid black;
  }

  > .text {
    padding: 10px;
    max-width: 400px;
    margin: 0;
    border-radius: 12px;
    background-color: black;
    color: white;
    display: inline-block;
    overflow-wrap: break-word;
  }

  > .timestamp {
    font-size: 4px;
    padding-top: 5px;
  }
`;

// Input

export const InputText = styled(Field)`
  padding: 15px;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid black;
  flex-grow: 1;
`;

// Button

export const Button = styled.button`
  padding: 15px 40px;
  font-size: 16px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 8px;
  margin-left: 20px;
  font-family: "Prompt", sans-serif;
`;
