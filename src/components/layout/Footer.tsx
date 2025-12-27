
"use client"

const Footer = ({data}) => {
  return (
    <footer className="bg-gray-100 text-center p-4 mt-auto">
      {data.length > 0 ? JSON.stringify(data) : `&copy; ${new Date().getFullYear()} SEO Spam Kit`}
    </footer>
  );
};

export default Footer;
