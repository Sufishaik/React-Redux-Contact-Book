import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Home() {
  const contacts = useSelector((state) => state);
  const dispatch = useDispatch();
  const deleteContact = (id) => {
    dispatch({ type: "DELETECONTACT", payload: id });
    toast.success("Contact is Deleted Successfullly");
  };
  return (
    <>
      <Link
        to="/add"
        className="btn btn-primary"
        style={{ marginLeft: "78rem", marginTop: "1rem" }}
      >
        Add Contact
      </Link>
      <div className="container" style={{ padding: "5rem" }}>
        <div className="card" style={{ padding: "2rem" }}>
          <div className="card-title">
            <h2 style={{ textAlign: "center" }}>
              Welcome to the React redux Contact Book
            </h2>
          </div>
          <div className="card-body col-md-30">
            <table className="table table-bordered">
              <thead className="bg-dark text-white">
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((item, id) => {
                  return (
                    <>
                      <tr>
                        <td>{id + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.number}</td>
                        {/* <td>{item.action}</td> */}
                        <td>
                          <Link
                            to={`/edit/${item.id}`}
                            className="btn btn-small btn-primary"
                          >
                            Edit
                          </Link>
                          <button
                            className="btn btn-small btn-danger"
                            onClick={() => deleteContact(item.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
