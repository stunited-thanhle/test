import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Clock from "./Clock";

const Part02 = () => {
  const [title, setTitle] = useState("");

  useEffect(() => {
    document.title = title;
  });

  // []
  // const [post, setPost] = useState([]);
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((response) => response.json())
  //     .then((post) => setPost(post));
  // }, []);

  //[deps]
  // const btns = ["posts", "users", "albums"];
  // const [action, setAction] = useState("users");
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   //componentDidmount & componentDidUpdate
  //   fetch(`https://jsonplaceholder.typicode.com/${action}`)
  //     .then((response) => response.json())
  //     .then((rs) => setData(rs));
  // }, [action]);

  //Cleanup
  const [toggle, setToggle] = useState(true);

  return (
    <div>
      {/* {btns.map((btn) => (
        <button key={btn} onClick={() => setAction(btn)}>
          {btn}
        </button>
      ))} */}
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {/* <div>
        {data?.map((item, index) => (
          <li key={index}>{item.title || "user"}</li>
        ))}
      </div> */}

      {toggle && <Clock />}
      <button onClick={() => setToggle(!toggle)}>Next Page</button>
    </div>
  );
};

export default Part02;
