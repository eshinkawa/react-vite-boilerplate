import axios from 'axios'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Tela2() {
  useEffect(() => {
    getDados()
  , []}) 


  // Função para buscar dados da API
  const getDados = async () => {
    const data = await axios.getDados('ENDPOINT_DA_SUA_API')
    if(data){
      // Faça algo com os dados, por exemplo:
      // setDados(data) (lembrando que você precisa criar um estado para isso, usando useState)
    } else {
      console.log("Erro ao buscar dados");
    }

  }

  

  return (
    <>
      <h1>Tela 2</h1>
      <Link to="/">Ir para tela principal</Link>
    </>
  )
}

export default Tela2