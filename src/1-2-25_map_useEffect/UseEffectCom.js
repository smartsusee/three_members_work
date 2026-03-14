import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const UseEffectCom = () => {
  const [api, setApi] = useState([]);

  const [num, setnum] = useState(0);
  const [num1, setnum1] = useState(0);
  const [data, setdata] = useState([
    { name: "suresh", email: "suresh@gmail.com", id: 1 },
    { name: "rahul", email: "rahul@gmail.com", id: 2 },
  ]);

  function FetchTheData() {
    try {
      axios
        .get("https://jsonplaceholder.typicode.com/todos")
        .then((res) => {
          console.log(res.data);

          setApi(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  }

  //  axios
  useEffect(() => {
    FetchTheData();
  }, [num]);

  return (
    <div>
      {/* <table>
        <thead>
          <tr>
            <th className="">S.no</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => {
            let { name, email, id } = item;

            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>
                  <button onClick={() => {}}>edit</button>
                  <button>delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table> */}
      {/* 
      <div>
        <button
          onClick={() => {
            setnum((num) => {
              return num + 1;
            });
          }}
        >
          + {num}
        </button>
        <button
          onClick={() => {
            setnum1((num1) => {
              return num1 - 1;
            });
          }}
        >
          - {num1}
        </button>
      </div> */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(120px , 300px))",
          justifyContent: "space-around",
          justifyItems: "center",
          padding: "10px",
          gap: "10px",
        }}
      >
        {api.length === 0 ? (
          <h1>...Loading</h1>
        ) : (
          <>
            {api &&
              api?.map((item, index) => {
                return (
                  <Card key={index} style={{ width: "18rem" }}>
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>
                        {item.completed ? "completed" : "not-Completetd"}
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                );
              })}
          </>
        )}
      </div>
    </div>
  );
};

export default UseEffectCom;
