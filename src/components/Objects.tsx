import { useState } from "react";

const Objects = () => {
  const [drink, setDrink] = useState({
    title: "Cola",
    price: 70,
  });

  const handleClick = () => {
    // drink.price = 6; // wrong

    // const newDrink = {
    //   title: drink.title,
    //   price: 80,
    // };

    // setDrink(newDrink);

    setDrink({ ...drink, price: 5 });
  };
  return (
    <div>
      {drink.price}
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default Objects;
