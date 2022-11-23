import React from "react";

import styled from 'styled-components'



function Markedinput({markdown,setMarkdown}) {
  return (
    <Container>
        <Title>Input Text</Title>
        <TextArea onChange={(e)=> setMarkdown(e.target.value)} value={markdown}></TextArea>
    </Container>
  )
}
const Container = styled.div `
width: 50%;
height: 50%;
padding:12px;
border-right:1.5px solid rgba(15,15,15, 0.5);
font-family: 'Lato', sans-serif;

`
const Title = styled.div`

font-size:25px;
font-weight:700;
font-family:'Lato', sans-serif;
margin-bottom:1em;
border-bottom: 1px solid rgba(15,15,15,0.3);
`
const TextArea = styled.textarea `
    width: 100%;
    height:100%;
    resize:none;
    border:none;
    outline:none; 
    font-size:15px;
`
export default Markedinput