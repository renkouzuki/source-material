import React, { ReactNode } from "react";
import Layout from "../layout/Layout";

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Layout>
      <section className="max-w-7xl mx-auto p-4 h-screen">{children}</section>
    </Layout>
  );
};

export default HomeLayout;
