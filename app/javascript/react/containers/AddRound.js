import React, { useState, useEffect } from "react";

const AddRound = (props) => {
    const [courseList, setCourseList] = useState([])

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

    let courseOptions
    if (courseList.length) {
        courseOptions = courseList.map((course) => {
            return <option value={course}>{course}</option>
        }) 
    }

    const onChange = value => {
        
    }

    return (
      <div className="AddRound">
          <form>
              <label>Course:
                  <select id="course" onChange={onChange}>
                    {courseOptions}
                  </select>
              </label>
          </form>
      </div>
    );
};

export default AddRound;
