import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

export default function App() {

    //STATE PARA ARMAZENAR OS PRODUTOS
    const [produtos, setProdutos ] = useState([])
    useEffect(() => {
      //CRIAR UMA FUNÇÃO ASSINCRONA
        const getProdutos = async ()=>{
            const response = await fetch("http://localhost:8080/LojaApp/rest/produto")
            const data = await response.json()
            setProdutos(data)
        }

     //EXECUTAR A FUNÇÃO
        getProdutos()
    }, [])
    

    return (
    <div>
        <h1> CONSUMINDO API-REST</h1>

        <table border={1}>
            <tr>
                <th>ID</th>
                <th>TITULO</th>
                <th>PREÇO</th>
                <th>QUANTIDADE</th>
            </tr>

            {produtos.map((p,i)=>
            
                <tr key={i}>
                    <td>{p.codigo}</td>
                    <td>{p.titulo}</td>
                    <td>{p.preco}</td>
                    <td>{p.quantidade}</td>
                </tr>
            
            )}

        </table>



    </div>
  )
}

