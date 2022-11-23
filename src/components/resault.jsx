import React from 'react'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'
const Container = styled.div`
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
border-bottom: 1px solid rgba(15,15,15,0.3)


`
const ResauiltArea= styled.div`
width:100%;
height:100%;
border:none;
font-family:"Lato",sans-serif ;
`

function Resault({markdown}) {
  return (
    <Container>
        <Title>Converted Text</Title>
        <ResauiltArea>
            <ReactMarkdown>{markdown}</ReactMarkdown>
        </ResauiltArea>
    </Container>
  )
}

export default Resault