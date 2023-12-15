import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // this is destructor , we could use props: Props, and then  props.items
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h3 className="text-5xl">{heading}</h3>
      {items.length === 0 && <p className="mt-5">No cities found</p>}
      <ul className="list-none basic-list">
        {items.map((item, key) => (
          <li
            key={key}
            onClick={() => {
              setSelectedIndex(key);
              onSelectItem(item);
            }}
            className={
              selectedIndex === key
                ? "cursor-pointer list-item active"
                : "cursor-pointer list-item"
            }
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
