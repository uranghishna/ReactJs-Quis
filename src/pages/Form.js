import React, { useState } from 'react'

const Form = () => {
    const [form, setForm] = useState({
      title: "",
      status: "",
    });

    const {title,status} = form;

    const onChange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value});
    };
  
    return (
        <div className="container mt-4">
          <form onSubmit={() => alert(JSON.stringify(form))}>
              <div className="form-group">
                  <label>Title</label> 
                <input name="title" value={title} onChange={(e) => onChange(e)} type="text" class="form-control" />
              </div>
              <div className="form-group">
                  <label>Status</label> 
                <select name="status" value={status} onChange={(e) => onChange(e)} class="form-control">
                    <option value="" holder>Select Status</option>
                    <option value="done" holder>Done</option>
                    <option value="notDone" holder>Not Done</option>
                </select>
              </div>
              <div className="mt-4">
                  <button type="submit" className="btn btn-primary btn-block">Submit</button>
              </div>
          </form>
        </div>
    )
}

export default Form