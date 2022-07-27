import { useState } from 'react';
export default function lista1() {
    const [valor, setValor] = useState('')

    return (
        <div>
            <h1>Exemplo de lista</h1>
            <input type="text"
            onInput={e => setValor(e.target.value)} value={valor}/> <br />
            {gerarLista(valor).map((item) => {
                return (
                    <strong key={item}>{item}, </strong>
                )
            })}
        </div>  
    )
}

function gerarLista(valor = 10) {
    const lista = []
    
    if(valor !== ''){
        for(let i = 0; i <= valor; i++){
            const frase = i
            lista.push(frase)
        }
    }
    return lista
}