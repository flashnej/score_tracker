import React, { useState, useEffect } from "react";
import {Redirect} from "react-router-dom"

const AddRound = (props) => {
    const [courseList, setCourseList] = useState([])
    const [selectedCourse, setSelectedCourse] = useState("")
    const [score, setScore] = useState()
    const [redirect, setRedirect] = useState(false)

    useEffect(() => {
        fetch('/api/v1/courses')
        .then((response) => {
            if (response.ok) {
                return response
            } else {
                debugger
            }
        })
        .then((response) => response.json())
        .then((body) => {
            setCourseList(body.courses)
        })
    }, [])

    let courseOptions = [<option value=''></option>]
    if (courseList.length) {
        courseList.forEach((course) => {
            courseOptions.push(<option value={course}>{course}</option>)
        }) 
    }

    const onChange = value => {
        if (value.target.id === "course") {
            setSelectedCourse(value.target.value)
        } else if (value.target.id === "score") {
            setScore(value.target.value)
        }
    }

    const onSubmit = event => {
        event.preventDefault()
        if (!score) {
            alert("You must enter a score")
        } else {
            if (parseFloat(score) % 1 === 0 && Math.sign(parseFloat(score)) === 1) {
                createRound()
            } else {
                alert("Score must be a positive, whole number")
            }
        }
    }

    const createRound = props => {
        fetch("/api/v1/rounds", {
            credentials: "same-origin",
            method: "POST",
            body: JSON.stringify({course: selectedCourse, score: score}),
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
      <div className="AddRound">
          <form onSubmit={onSubmit}>
              <label>Course:
                  <select id="course" onChange={onChange}>
                    {courseOptions}
                  </select>
                </label>
                <label>Score:
                  <input type="number" id="score" onChange={onChange} />
              </label>
              <input type="submit" id="submit"/>
          </form>
      </div>
    );
};

export default AddRound;
