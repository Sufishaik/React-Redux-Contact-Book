import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

function Add() {
    const [name,setname] = useState('');
    const [email,setemail] = useState('');
    const [number,setnumber] = useState('');
    const contacts = useSelector((state) => state);
    const navitage =  useNavigate()
    const dispatch = useDispatch()
    console.log(contacts)
    const handleSubmit = (e) => {
        const checkEmail = contacts.find(contact => contact.email === email  && contact);
        const checkNumber = contacts.find(contact => contact.number ===  parseInt(number));
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
            id : contacts[contacts.length-1].id+1,
            name,
            email,
            number,
        }
        dispatch({type : 'ADDCONTACT', payload : data})
        toast.success("Student added Successfully");
        navitage("/")
    }
  return (
    <>
      <div className="container">
        <div className="row">
          <h1 className="display-3 my-5 text-center">Add Contact</h1>
          <div className="col-md-6 shadow mx-auto p-5">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
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
                  value="Add Student"
                  className="btn btn-block btn-dark mt-3 w-100"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Add;
