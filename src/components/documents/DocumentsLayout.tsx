import React, { ReactNode } from "react";
import Layout from "../layout/Layout";

const DocumentsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Layout>
      <section className="max-w-7xl mx-auto p-4">{children}</section>
    </Layout>
  );
};

export default DocumentsLayout;
