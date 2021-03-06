import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom"

import RoundTile from "../components/RoundTile"

const Home = (props) => {
    const [rounds, setRounds] = useState([])
    const [forceSignin, setForceSignin] = useState(false)

    useEffect(() => {
        fetch('/api/v1/rounds')
        .then((response) => {
            if (response.ok) {
                return response
            } else {
                debugger
            }
        })
        .then((response) => response.json())
        .then((body) => {
            if (body.error) {
                setForceSignin(true)
            } else {
                setRounds(body)
            }
        })
    }, [])

    if (forceSignin) {
        return window.location = "./users/sign_up";
    }

    let roundTiles = []
    if (rounds.length) {
        roundTiles = rounds.map((round) => {
            return <RoundTile
            key={round.id}
            round={round} />
        })
    }

    return (
      <div>
          <Link to='/addcourse' className="button">Add a Course</Link>
          <Link to='/addround' className="button">Add a Round</Link>
          {roundTiles}
      </div>
    );
};

export default Home;
