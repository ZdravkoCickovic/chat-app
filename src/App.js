import React, { useState, useEffect } from "react";
import "./App.css";
import Messages from "./components/Messages/Messages";
import Input from "./components/Input/Input";
import { randomColor, randomName } from "./utils/style/data";
import {
  AppHeader,
  AppWrapper,
  GlobalStyles,
  HeaderTitle,
} from "./utils/style/defaultStyles";


function App() {
  const [member, setMember] = useState({
    username: randomName(),
    color: randomColor(),
  });
  const [drone, setDrone] = useState(null);
  const [messages, setMessages] = useState([]);
  const [isDroneSet, setIsDroneSet] = useState(false);
  
  useEffect(() => {
    const drone = new window.Scaledrone("7IJPlwfF3zL37kgK", {
      data: member,
    });
    setDrone(drone);
  }, []);
  
  useEffect(() => {
    if (drone) {
      drone.on("open", error => {
        if (error) {
          return console.error(error);
        }
        setMember(member => ({ ...member, id: drone.clientId }));
      });
      drone.on("error", error => console.error(error));
      drone.on("disconnect", () => {
        console.log("Disconnected, Scaledrone reconnect");
      });
      drone.on("reconnect", () => {
        console.log("Reconnected");
      });
      setIsDroneSet(true);
    }
  }, [drone]);
  
  useEffect(() => {
    if (drone) {
      const room = drone.subscribe(`observable-room`);
      room.on("open", error => {
        if (error) {
          console.error(error);
        } else {
          console.log("Im here in room");
        }
      });
      room.on("data", (data, member) => {
        setMessages(message => [...message, { member: member, text: data }]);
      });
    }
  }, [isDroneSet, messages]);
  const onSendMessage = message => {
    drone.publish({
      room: "observable-room",
      message: message,
    });
  };
  
  
  return (
    <>
      <GlobalStyles />
      <AppWrapper>
        <AppHeader>
          <HeaderTitle>Scaledrone Chat App</HeaderTitle>
        </AppHeader>
        <Messages messages={messages} currentMember={member} />
        <Input onSendMessage={onSendMessage} />
      </AppWrapper>
    </>
  );
}
export default App; 