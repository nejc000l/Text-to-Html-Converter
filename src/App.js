import "./App.css";
import styled from "styled-components";
import Markedinput from './components/markedinput'
import Resault from "./components/resault";
import React,{useState,useEffect} from 'react'
import ReactMarkdown from 'react-markdown'

function App() {
  const [markdown, setMarkdown] = useState('## Input your text bellow')
  return (
    <div>
      <AppContainer className="App-header">
      <Title>HTML Converter</Title>
      <EditorContainer>
        <Markedinput markdown={markdown} setMarkdown={setMarkdown}/>
        <Resault markdown={markdown}/>
      </EditorContainer>
      </AppContainer>
    </div>
  );
}
const EditorContainer = styled.div`
width: 100%;
height: 100vh;
display:flex;
`
const Title = styled.div`
margin-top:10px ;
font-size:25px;
font-weight:700;
font-family:'Lato', sans-serif;
margin-bottom:1em;
`
const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default App;
