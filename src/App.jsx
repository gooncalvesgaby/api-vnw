import React, { useState, useEffect } from "react"
import axios from "axios"
import * as S from "./StyleApi.jsx"
import { createGlobalStyle } from "styled-components"
const GlobalStyle = createGlobalStyle`
* {
  margin:0;
  padding:0;
  box-sizing: border-box;
}
`

function App() {

const [data, setData] = useState([])

const getData = async()=>{
  const resp = await axios.get('https://api.sampleapis.com/movies/comedy')
  setData(resp.data)

  console.log(resp)
}

useEffect(()=>{
  getData()
}, [])

  return(
    <S.Cinema>
      <GlobalStyle />

    {data.map((item)=>(
      <S.Filmes>
      <img src={item.posterURL} alt="" />
      <h2> {item.title} </h2>
      </S.Filmes>

    ))}
  
    </S.Cinema>
  )
}

export default App