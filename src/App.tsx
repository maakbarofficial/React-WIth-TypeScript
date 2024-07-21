import { useState } from "react";
import Arrays from "./components/Arrays";
import ArrayOfObjects from "./components/ArrayOfObjects";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import ExpandableText from "./components/ExpandableText";
import Objects from "./components/Objects";
import NestedObjects from "./components/NestedObjects";

function App() {
  const [cartItems, setCartItems] = useState(["Product 1", "Product2"]);
  return (
    <div>
      <Objects />
      <NestedObjects />
      <Arrays />
      <ArrayOfObjects />
      <Navbar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
      <ExpandableText maxChars={10}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum rerum quidem repudiandae quam quod voluptate, dolorem at! Harum repellat voluptates nulla, sunt, similique minima voluptatibus
        mollitia error sapiente, temporibus iure nam fugit id quo modi dolores accusamus asperiores maxime! Blanditiis, provident impedit corrupti architecto accusamus nihil voluptates cumque labore
        inventore debitis ducimus reiciendis aut quibusdam? Ipsa, quaerat quos? Laboriosam praesentium atque dolorem, commodi perferendis at animi quasi eum, sed reprehenderit libero reiciendis ad
        ipsam eaque quisquam consectetur deserunt ea optio impedit consequatur porro nesciunt nobis? Nobis laborum, nulla et dignissimos molestias, ratione quod veritatis aspernatur tenetur culpa quis
        accusamus nisi!
      </ExpandableText>
    </div>
  );
}
export default App;
