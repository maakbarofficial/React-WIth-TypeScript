import { useState } from "react";
import styles from "./ListGroup.module.css";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

interface ListItemProps {
  active: boolean;
}

const ListItem = styled.li<ListItemProps>`
  padding: 5px;
  background: ${(props) => (props.active ? "blue" : "none")};
`;

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  let [selectedIndex, setSelectedIndex] = useState(0);

  // let selectedIndex = 0;

  // items = [];

  // bad practice
  // if (items.length === 0)
  //   return (
  //     <>
  //       <h1>List</h1>
  //       <p>No item found</p>
  //     </>
  //   );

  // const message = items.length === 0 ? <p>No item found</p> : null;

  // const getMessage = () => {
  //   return items.length === 0 ? <p>No item found</p> : null;
  // };

  // const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>{heading}</h1>
      {/* {items.length === 0 ? <p>No item found</p> : null} */}
      {items.length === 0 && <p>No item found</p>}
      {/* <ul className={[styles.listGroup, styles.container].join(" ")}>
        {items.map((item, index) => (
          <li
            key={item}
            className={selectedIndex === index ? "list-group-item active" : "list-group-item"}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul> */}
      <List>
        {items.map((item, index) => (
          <ListItem
            active={index === selectedIndex}
            // style={{ padding: "2px" }}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
