import { useEffect, useState } from "react";

const Box = ({ myProduct }) => {
  return (
    <div className="card" key={myProduct.id}>
      <h2>{myProduct.name}</h2>
      <div>{myProduct.category}</div>
      <div>{myProduct.price}</div>
    </div>
  );
};

const MyCards = ({ products, heading = "heading" }) => {
  const [pageData, setPageData] = useState(products[0]);
  console.log(setPageData, typeof setPageData, "setPageData");

  useEffect(() => {
    console.log(pageData, "pageDatasda");
  }, [pageData]);

  const handleStateChange = (data) => {
    setPageData({ ...data });
  };

  console.log("hello")
  return (
    <>
      <nav className="nav">
        <h1>Logo</h1>
        <div className={`navItems`}>
          <a
            onClick={() => {
              handleStateChange({
                heading: "home",
                category: "Home category",
                name: "Home name",
                price: 100,
                className: "home",
                khusi:"khusi",
              });
            }}
          >
            home
          </a>
          <a
            onClick={() => {
              handleStateChange({
                heading: "Services",
                category: "Services category",
                name: "Services name",
                price: 200,
                className: "services",
              });
            }}
          >
            services
          </a>
          <a
            onClick={() => {
              handleStateChange({
                heading: "Contact",
                category: "Contact category",
                name: "Contact name",
                price: 300,
                className: "contact",
              });
            }}
          >
            contact
          </a>
          <a
            onClick={() => {
              handleStateChange({
                heading: "About",
                category: "About category",
                name: "About name",
                price: 400,
                className: "about",
              });
            }}
          >
            about
          </a>
        </div>
      </nav>
      <div className={`container ${pageData.className}`}>
        <h1 style={{}}>{pageData.heading || heading}</h1>
        <Box myProduct={pageData} />
      </div>
    </>
  );
};

export default MyCards;
