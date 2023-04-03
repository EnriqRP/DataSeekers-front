import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// Conection Data
import * as UserServer from "../Data/server";

// Main Function
export const UserForm = () => {

    const navigate = useNavigate();
    const params = useParams();

    const initialState = { id: 0, name: "", connections: "" };

    const [user, setUser] = useState(initialState);

    const handleInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
      };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res;
            res = await UserServer.registerUser(user);
            const data = await res.json();
            if (data.message === "Success") {
              setUser(initialState);
            }
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    };

    return (

        <div className="col-md-12 mx-auto">
        <h2 className="mb-12 text-center">New User</h2>
        <form onSubmit={handleSubmit}>
          
          <div className="mb-12">
            <label className="form-label">User Name</label>
            <input type="text" name="name" value={user.name} onChange={handleInputChange} className="form-control" minLength="2" maxLength="50" autoFocus required />
          </div>
          <br/>
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-block btn-success">Add</button>
            <button className="btn btn-block btn-secondary" onClick={() => navigate("/")}>Cancel</button>
          </div>
        </form>
      
      </div>
    )
}

export default UserForm;