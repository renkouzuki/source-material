import ClientTest from "./ClientTest";
import TestLayout from "./TestLayout";
import Timeline from "./Timeline";

const Test = ({ data }) => {
  return (
    <TestLayout>
      <div>
        <p>title: test</p>
        {JSON.stringify(data)}
        <Timeline/>
        <ClientTest/>
      </div>
    </TestLayout>
  );
};

export default Test;
