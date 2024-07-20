import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Message from "./Message";

function App() {
  // let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };

  const [alertVisiable, setAlertVisibable] = useState(false);

  return (
    <div>
      {/* <Message /> */}
      {/* <ListGroup /> */}
      {/* <ListGroup items={items} heading={"List"} onSelectItem={handleSelectItem} /> */}
      {alertVisiable && <Alert onClose={() => setAlertVisibable(false)}>My alert</Alert>}
      <Button color="danger" onClick={() => setAlertVisibable(true)}>
        My Button
      </Button>
    </div>
  );
}
export default App;
