import React, { useEffect, useState } from "react";
import { UrlLink } from "../AuthAxios/Authaxios";
import Table from "react-bootstrap/Table";
const MainParentFile = () => {
  const [Details, setDetails] = useState({
    name: "",
    email: "",
  });
  const [UDetails, setUDetails] = useState({
    name: "",
    email: "",
  });

  const [show, setShow] = useState({
    showForm: false,
    ids: null,
  });

  const [refresh, setRefresh] = useState(false);
  const [data, setdata] = useState([]);

  function GetMethod() {
    try {
      UrlLink.get("/studentsDetails")
        .then((res) => {
          console.log(res.data);
          setdata(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (err) {
      console.log(err);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!Details.name || !Details.email) {
      alert("Please fill all the details");
      return;
    }

    console.log(Details);

    UrlLink.post("/studentsDetails", Details)
      .then(() => {
        setRefresh(!refresh);
        alert("Data Added Successfully");
      })
      .catch((err) => {
        console.log(err);
      });

    setDetails({ ...Details, name: "", email: "" });
  };

  const delFun = (userId) => {
    console.log(userId);

    UrlLink.delete(`/studentsDetails/${userId}`)
      .then(() => {
        setRefresh(!refresh);

        alert("Data Deleted Successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const UpdatehandleSubmit = (e) => {
    e.preventDefault();
    console.log("update", show.ids);

    UrlLink.put(`/studentsDetails/${show.ids}`, UDetails)
      .then(() => {
        alert("you'r data Updated Successfully....!");
        setRefresh(!refresh);
      })
      .catch((err) => {
        console.log(err);
      });

    setUDetails({ ...UDetails, name: "", email: "" });

    setShow({ ...show, showForm: false, ids: null });
  };

  const editFun = ({ name, email, id }) => {
    setUDetails({ ...UDetails, name, email });
    setShow({ ...show, showForm: true, ids: id });
  };

  useEffect(() => {
    GetMethod();
  }, [refresh]);

  return (
    <div>
      <br />
      <br />
      <center>
        <div
          style={{
            border: "1px solid grey",
            width: "300px",
            padding: "10px",
            borderRadius: "10px",
          }}
        >
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              value={Details.name}
              onChange={(event) => {
                setDetails({ ...Details, name: event.target.value });
              }}
            />
            <br />
            <br />
            <input
              type="text"
              placeholder="Email"
              value={Details.email}
              onChange={(event) => {
                setDetails({ ...Details, email: event.target.value });
              }}
            />
            <br />
            <br />

            <button>Click</button>
          </form>
        </div>
      </center>
      <br />
      <br />

      <Table
        striped
        bordered
        hover
        style={{ width: "500px", textAlign: "center" }}
      >
        <thead>
          <tr>
            <th>S.no</th>
            <th> Name</th>
            <th>Email</th>
            <th>Action </th>
          </tr>
        </thead>
        {data.length === 0 ? (
          <>
            <tbody>
              <tr>
                <td colSpan={4}>Data Not Found</td>
              </tr>
            </tbody>
          </>
        ) : (
          <>
            <tbody>
              {data &&
                data.map((item, index) => {
                  let { name, email, id } = item;
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{name}</td>
                      <td>{email}</td>
                      <td>
                        <button
                          onClick={() => {
                            editFun(item);
                          }}
                        >
                          edit
                        </button>
                        <button
                          className="mx-3"
                          onClick={() => {
                            delFun(id);
                          }}
                        >
                          delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </>
        )}
      </Table>

      {show.showForm && (
        <>
          <center>
            <div
              style={{
                border: "1px solid grey",
                width: "300px",
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              <form onSubmit={UpdatehandleSubmit}>
                <input
                  type="text"
                  placeholder="Name"
                  value={UDetails.name}
                  onChange={(event) => {
                    setUDetails({ ...UDetails, name: event.target.value });
                  }}
                />
                <br />
                <br />
                <input
                  type="text"
                  placeholder="Email"
                  value={UDetails.email}
                  onChange={(event) => {
                    setUDetails({ ...UDetails, email: event.target.value });
                  }}
                />
                <br />
                <br />

                <button>Update </button>
              </form>
            </div>
          </center>
        </>
      )}
    </div>
  );
};

export default MainParentFile;
