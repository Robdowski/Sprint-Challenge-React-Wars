import React, { useEffect, useState } from "react";
import axios from "axios";
import StarCard from "./StarCard";
import styled from "styled-components";

const StarDiv = styled.div`
display:flex;
flex-direction:row;
flex-wrap: wrap;
max-width: 70%;
margin: 0 auto;
justify-content: center;
`

function StarGet(props) {
  const [star, setStar] = useState([]);
  const [page, setPage] = useState(1)
  useEffect(() => {
    axios.get(`https://swapi.co/api/people/?page=${page}`).then(res => {
      console.log(res);
      let people = res.data.results;
      setStar(people);
      console.log(people);
    });
  }, [page]);
  return (
      <>
    <StarDiv>
      {star.map(star => (
        <StarCard
          key={star.created}
          name={star.name}
          birth={star.birth_year}
          eyes={star.eye_color}
          mass={star.mass}
          height={star.height}
          hair={star.hair_color}
        />
      ))}
    </StarDiv>
    <div>
        <button onClick={function(){
            page === 1 ? setPage(1) : setPage(page - 1)
        }}>Previous</button>
        <button onClick={function(){
            page === 9 ? alert("You have reached the final page") : setPage(page + 1)
        }}>Next</button>
    </div>
    </>
  );
}

export default StarGet;
