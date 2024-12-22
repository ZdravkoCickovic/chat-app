import React from "react";
import { Formik } from "formik";
import { Button, InputText, MessageForm } from "../../utils/style/defaultStyles";

const Input = ({ onSendMessage }) => {
  return (
    <Formik
      initialValues={{ message: '' }}
      onSubmit={(values, actions) => {
        onSendMessage(values.message);
        actions.resetForm();
      }}
    >
      {({ values, handleChange }) => (
        <MessageForm>
         <InputText
            type="text"
            name="message"
            placeholder="Enter your message here"
            value={values.message}
            onChange={handleChange}
          />
          <Button>Send</Button>
          </MessageForm>
      )}
    </Formik>
  );
};

export default Input;
