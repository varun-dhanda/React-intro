const Box = ({ myProduct }) => {
  return (
    <div
     className="card"
      key={myProduct.id}
    >
      <h2>{myProduct.name}</h2>
      <div>{myProduct.category}</div>
      <div>{myProduct.price}</div>
    </div>
  );
};

const MyCards = ({ products, heading = "heading" }) => {
  console.log(products, "products");

  return (
    <>
      <h1>{heading}</h1>
      {products.map((value) => {
        return <Box key={value.id} myProduct={value} />;
      })}
    </>
  );
};

export default MyCards;
