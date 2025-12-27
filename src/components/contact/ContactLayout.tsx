import React from "react";
import Layout from "../layout/Layout";

const ContactLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout>
      <section className="max-w-7xl mx-auto p-4 h-screen">{children}</section>
    </Layout>
  );
};

export default ContactLayout;
