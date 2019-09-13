import React from 'react'
import styled from "styled-components"

const Card = styled.div`
width: 300px;
height: 350px;
background: black;
display:flex;
flex-direction:column;
box-sizing:border-box;
margin: 20px;
border-radius: 8px;
border: 5px double #F1DE09;

h2{
    color:#F1DE09;
    font-family: 'Star Jedi', arial;
    text-decoration: underline;
}

p{
    color: #F1DE09;
}
`

function StarCard(props) {
    return (
        <Card key={props.key}>
            <h2>{props.name}</h2>
            <p>Birth Year: {props.birth}</p>
            <p>Eye Color: {props.eyes}</p>
            <p>Hair Color: {props.hair}</p>
            <p>Height: {props.height}</p>
            <p>Mass: {props.mass}</p>
        </Card>
    )
}

export default StarCard
