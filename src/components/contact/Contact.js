import React, { useEffect } from "react";
import "./contact.css";
import SmallInputs from "./SmallInputs";
import Message from "./Message";
import SubmitForm from "./SubmitForm";

const Contact = ({ classList }) => {
  useEffect(() => {
    document.title = "Quest App - Contact Us";
  }, []);
  return (
    <div className={classList}>
      <h2 className="mb-5">Contact Us</h2>
      <div className="container">
        <form className="row g-3">
          <SmallInputs />
          <Message />
          <SubmitForm />
        </form>
      </div>
    </div>
  );
};

export default Contact;
