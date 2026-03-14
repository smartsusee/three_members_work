import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const FormDataCollect = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");

  const [udata, setUdata] = useState({
    name: "",
    email: "",
  });

  const [ids, setIds] = useState(null);

  const [show, setShow] = useState(false);
  const [StudentData, setStudentData] = useState(
    JSON.parse(localStorage.getItem("details")) || []
  );

  const HandleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email) {
      alert("please enter you'r data's");
      return;
    }

    let UserData = {
      name,
      email,
      id: Date.now(),
    };

    //  ... spread operator => immer

    setStudentData([...StudentData, UserData]);

    setname("");
    setemail("");
  };

  const handleClose = () => setShow(false);

  const editData = ({ name, email, id }) => {
    setShow(true);

    // console.log(name, email, id);
    setIds(id);
    setUdata({ ...udata, name, email });
  };

  useEffect(() => {
    localStorage.setItem("details", JSON.stringify(StudentData));
  }, [StudentData]);

  const DeleteData = (itemId) => {
    console.log("data deleted Successfully", itemId);

    let filterData = StudentData.filter((v) => v.id !== itemId);

    console.log(filterData);

    setStudentData(filterData);
  };

  const UHandleSubmit = (e) => {
    e.preventDefault();
    console.log("click Update", ids);

    //
    // [{name:user123} , {name:admin}, ]

    let updateDetails = StudentData.map((v, i) => {
      return v.id === ids ? { ...v, name: udata.name, email: udata.email } : v;
    });

    setStudentData(updateDetails);

    setShow(false);
  };
  return (
    <div>
      <form onSubmit={HandleSubmit}>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => {
            setname(e.target.value);
          }}
        />
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />
        <button>submit</button>
      </form>

      <br />
      <br />
      <table>
        <thead>
          <tr>
            <th>S.no</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {StudentData.length === 0 ? (
            <>
              <tr>
                <td colSpan={4} className="text-danger">
                  Data Not Found
                </td>
              </tr>
            </>
          ) : (
            <>
              {StudentData.map((v, i) => {
                let { name, email, id } = v;
                return (
                  <tr key={id}>
                    <td>{i + 1}</td>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>
                      <Button
                        variant="primary"
                        onClick={() => {
                          editData(v);
                        }}
                      >
                        edit
                      </Button>

                      <Button
                        variant="primary"
                        className="mx-1"
                        onClick={() => {
                          DeleteData(id);
                        }}
                      >
                        delete
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </>
          )}
        </tbody>
      </table>

      {/* modal data */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <center>
            <form onSubmit={UHandleSubmit}>
              <input
                type="text"
                placeholder="name"
                value={udata.name}
                onChange={(e) => {
                  setUdata({ ...udata, name: e.target.value });
                }}
              />
              <br />
              <br />
              <input
                type="email"
                placeholder="email"
                value={udata.email}
                onChange={(e) => {
                  setUdata({ ...udata, email: e.target.value });
                }}
              />
              <br />
              <br />

              <button className="bg-primary p-1 border-0 rounded-3 text-white">
                submit
              </button>
            </form>
          </center>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default FormDataCollect;
