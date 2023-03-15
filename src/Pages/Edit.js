import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

function Edit() {
  const { id } = useParams();
  const contacts = useSelector((state) => state);
  const navitage =  useNavigate()
  const dispatch = useDispatch()
  const currentContact = contacts.find((item) => item.id === parseInt(id));
  const [name,setname] = useState('');
  const [email,setemail] = useState('');
  const [number,setnumber] = useState('');
  useEffect(() => {
    if(currentContact) {
      setname(currentContact.name);
      setemail(currentContact.email);
      setnumber(currentContact.number);
    }
  }, [currentContact])

  const handleSubmit = (e) => {
    const checkEmail = contacts.find(contact => contact.id !== parseInt(id) && contact.email === email );
    const checkNumber = contacts.find(contact => contact.id !==  parseInt(id) && contact.number === parseInt(number));
    e.preventDefault();
    if(!email || !number || !name) {
        return toast.warning("Please Enter The Details");
    }
    if(checkEmail) {
        return toast.error("This Email is already Exists");
    }
    if(checkNumber) {
        return toast.error("This Number is already Exists");
    }

    const data = {
        id : parseInt(id),
        name,
        email,
        number,
    }
    dispatch({type : 'UPDATECONTACT', payload : data})
    toast.success("Student Updated Successfully");
    navitage("/")
}
  
  return (
    <>
      <div className="container">
        {currentContact ? (
          <>
            <div className="row">
              <h1 className="display-3 my-5 text-center">Edit Contact {id}</h1>
              <div className="col-md-6 shadow mx-auto p-5">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      name=""
                      id=""
                      value={name}
                      onChange={(e) => setname(e.target.value)}
                      placeholder="Name"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name=""
                      id=""
                      value={email}
                      onChange={(e) => setemail(e.target.value)}
                      placeholder="Email"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name=""
                      id=""
                      value={number}
                      onChange={(e) => setnumber(e.target.value)}
                      placeholder="Phone Number"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      name=""
                      id=""
                      
                      value="Update Student"
                      className="btn  btn-dark mt-3 w-100"
                    />
                    <Link to="/" className="btn btn-danger mt-3 w-100">
                      Cancle
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </>
        ) : (
          <h1 className="display-3 my-5 text-center">
            StudentContact with id {id} is not exists
          </h1>
        )}
      </div>
    </>
  );
}

export default Edit;
