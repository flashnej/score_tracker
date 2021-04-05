import React, { useState } from "react";
import {Redirect} from "react-router-dom"

const AddCourse = (props) => {
    const [name, setName] = useState('')
    const [par, setPar] = useState()
    const [slopeRating, setSlopeRating] = useState('')
    const [courseRating, setCourseRating] = useState('')
    const [redirect, setRedirect] = useState(false)

    const onChange = event => {
        if (event.target.id === "name") {
            setName(event.target.value)
        } else if (event.target.id === "par"){
            setPar(event.target.value)
        } else if (event.target.id === "slopeRating") {
            setSlopeRating(event.target.value)
        } else if (event.target.id === "courseRating") {
            setCourseRating(event.target.value)
        }
    }

    const onSubmit = event => {
        event.preventDefault()
        if (!name || !par || !slopeRating || !courseRating) {
            alert("Course must have a name, par, slope rating and course rating")
        } else {
            if (!parseFloat(slopeRating || !parseInt(par) || !parseInt(courseRating))) {
                alert("Slope Rating, Par and Course Rating must be numbers")
            } else {
                if (parseFloat(par) % 1 === 0) {
                    createCourse()
                } else {
                    alert("Par must be a whole number")
                }
            }
        }
    }

    const createCourse = props => {
        fetch("/api/v1/courses", {
            credentials: "same-origin",
            method: "POST",
            body: JSON.stringify({name: name, par: par, slopeRating: slopeRating, courseRating: courseRating}),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        })
        .then((response) => {
            if (response.ok) {
                return response
            } else {
                debugger
            }
        })
        .then((response) => response.json())
        .then((body) => {
            if (body["error"]) {

            } else {
                setRedirect(true)
            }
        })
    }

    if (redirect) {
        return <Redirect to='/' />
    }

    return (
      <div className="AddCourse">
          <form onSubmit={onSubmit}>
              <label>Course Name:
                  <input id="name" type="text" onChange={onChange}/>
                </label>
                <label>Par:
                  <input id="par" type="text" onChange={onChange}/>
              </label>
              <label>Slope Rating:
                  <input id="slopeRating" type="text" onChange={onChange}/>
              </label>
              <label>Course Rating:
                  <input id="courseRating" type="text" onChange={onChange}/>
              </label>
              <input id="submit" type="submit" />
          </form>
          <p>{name}</p>
          <p>{par}</p>
          <p>{slopeRating}</p>
      </div>
    );
};

export default AddCourse;
