import React, {useState } from "react";
import { useNavigate } from "react-router-dom";


// CSS Components
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// Components:
import * as UserServer from "../Data/server";

// Temporal JSON Data
import {data} from "../Data/data"
import { FormControl, InputGroup } from "react-bootstrap";


export const ViewUsers = () => {

    const navigate = useNavigate();

    // Filters
    const [search, setSearch] = useState("");
    const [filterOption, setFilterOption] = useState("all");
    const handleFilterOptionChange = (e) => {
      setFilterOption(e.target.value);
    };

    const filteredData = data.filter(
      (
        item => {
          if (filterOption === "all") {
            
            return search.toLowerCase() === '' ? item : item.name.toLowerCase().includes(search)
          }
          else if (filterOption === "connected") {

            if(item.connections.length >0){
              return search.toLowerCase() === '' ? item : item.name.toLowerCase().includes(search);
            }
          }
        }
      )
    )
    

    // Modal 
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    return (
        <div className="col-md-12 mx-auto">
        <h2 className="mb-12 text-center">User List</h2>

        <form>
        <InputGroup className="my-3">
            <FormControl onChange ={(e)=>setSearch(e.target.value)} placeholder="Search User"/>
            <select id="filter-select" className="form-control" value={filterOption} onChange={handleFilterOptionChange}>
              <option value="all">All Users</option>
              <option value="connected">Connected</option>
            </select>
        
        </InputGroup>

        <br/>
        </form>

        <Table striped bordered hover>
        <thead>
            <tr>
            <th>Name</th>
            <th>Connections</th>
            </tr>
        </thead>
        <tbody>
            {
            
            filteredData.map((item)=>(
            <tr key={item.id}>
            <td>{item.name}</td>
            <td>
            <Button variant="btn btn-block btn-primary" size="sm" onClick={handleShow}> 0{item.connections.length}</Button>{' '}     

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>User Connections</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>Connections IDs</p>


              </Modal.Body>
              <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
            </Modal>
  

            </td>

            </tr>
            ))}
 
        </tbody>
        </Table>


        <button type="submit" className="btn btn-block btn-success" onClick={() => navigate("/addUser")}> Add User </button>


        </div>

    );
}

export default ViewUsers;
