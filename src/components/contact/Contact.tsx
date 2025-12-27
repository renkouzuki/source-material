import React from "react";
import ContactLayout from "./ContactLayout";

const Contact = ({ data }) => {
  return <ContactLayout>Contact: {JSON.stringify(data)}</ContactLayout>;
};

export default Contact;
