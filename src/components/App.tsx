import { useState } from "react";

function App() {
  const [tags, setTags] = useState(["happy", "sad", "exciting"]);

  const [drink, setDrink] = useState({
    title: "Americano",
    price: 5,
  });

  const [customer, setCustomer] = useState({
    name: "John",
    address: {
      street: "Main",
      zipCode: "07205",
    },
  });

  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);

  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });

  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 1 },
    ],
  });

  const handleClick = () => {
    setDrink({ ...drink, price: 6 });
    setCustomer({
      ...customer,
      address: { ...customer.address, zipCode: "82103" },
    });
    setTags([...tags, "generous"]);
    setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
    setGame({ ...game, player: { ...game.player, name: "Bob" } });
    setPizza({ ...pizza, toppings: [...pizza.toppings, "ketchup"] });
    setCart({...cart, items: cart.items.map(item => item.id === 1 ? {...item, quantity: 2} : item)})
  };

  console.log(cart);

  return (
    <>
      {drink.price} <button onClick={handleClick}>Click me</button>
    </>
  );
}

export default App;
