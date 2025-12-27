import ServiceLayout from "./ServiceLayout";

const Service = ({ data }) => {
  return <ServiceLayout>Service: {JSON.stringify(data)}</ServiceLayout>;
};

export default Service;
