import React, { useState } from "react";

const AddCourse = (props) => {
    const [name, setName] = useState('')
    const [par, setPar] = useState()
    const [slopeRating, setSlopeRating] = useState()

    const onSubmit = event => {
        event.preventDefault()
        debugger
    }

    const onChange = event => {
        if (event.target.id === "name") {
            setName(event.target.value)
        } else if (event.target.id === "par"){
            setPar(event.target.value)
        } else if (event.target.id === "slopeRating") {
            setSlopeRating(event.target.value)
        }
    }

    return (
      <div className="AddCourse">
          <form onSubmit={onSubmit}>
              <label>Course Name:
                  <input id="name" type="text" onChange={onChange}/>
                </label>
                <label>Par:
                  <input id="par" type="number" onChange={onChange}/>
              </label>
              <label>Slope Rating:
                  <input id="slopeRating" type="number" onChange={onChange}/>
              </label>
          </form>
          <p>{name}</p>
          <p>{par}</p>
          <p>{slopeRating}</p>
      </div>
    );
};

export default AddCourse;
