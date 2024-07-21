import React from "react";

const NestedObjects = () => {
  const [customer, setCustomer] = React.useState({
    name: "Ali",
    address: {
      city: "Karachi",
      zipCode: 75120,
    },
  });

  const handleClick = () => {
    setCustomer({ ...customer, address: { ...customer.address, zipCode: 112345 } });
  };

  return (
    <div>
      <p>{customer.address.zipCode}</p>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default NestedObjects;
