import "./styles.css";
import * as React from "react";
import TC from "./TC";

const headerData: string[] = [
  "asdf",
  "fghj",
  "qwerty",
  "foo",
  "bar",
  "biz",
  "biz",
  "biz",
  "biz"
];
const bodyData: string[] = [
  "blue",
  "black",
  "brown",
  "indigo",
  "yellow",
  "orange",
  "orange",
  "orange",
  "orange"
];

export default function App() {
  //const classes = useStyles()

  return (
    <div className="App">
      <TC headerArray={headerData} bodyArray={bodyData} />
    </div>
  );
}
