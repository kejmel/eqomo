// import ListGroup from "./ListGroup";
 import Alert from "./Alert";

import Button from "./Button";
import { useState } from "react";

function App() {
  // const items = ["Oslo", "Berlin", "Kosice", "Bratislava"];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // }

  const [alertVisible, setAlertVisibility] = useState(false);

  // const handleOnClick = () => {
  //   console.log("clicked");
  // };


  return (
    <>
      <div className="flex items-center text-gray-200 flex-col justify-center">
        <h1 className="text-9xl font-bold underline">Hello world!</h1>
        <div className="mt-24">
          { alertVisible && <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>}
          <Button onClick={() => setAlertVisibility(true)} color="primary">
            {/* <Button onClick={() => console.log("clicked")} color="red"> */}
            My button
          </Button>
          {/* <Alert>
            Hello World <span className="text-purple-600">It's me</span>
          </Alert> */}
          {/* <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} /> */}
        </div>
      </div>
    </>
  );
}

export default App;
