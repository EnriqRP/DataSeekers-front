import React from 'react'

export const AddConnection = () => {
  return (

    <div className="col-md-12 mx-auto">
    <h2 className="mb-12 text-center">New Connection</h2>
    <form onSubmit={handleSubmit}>
      
      <div className="mb-12">
        

        <label className="form-label"></label>
        <input type="text" name="name" value="" onChange="" className="form-control" minLength="2" maxLength="50" autoFocus required />

        
      </div>
      <br/>
      <div className="d-grid gap-2">
        <button type="submit" className="btn btn-block btn-success">
            Add Connection
        </button>
      </div>
    </form>
  </div>
  )
}

export default AddConnection;