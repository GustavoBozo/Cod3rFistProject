export default function lista1() {
    return (
        <div>
            <h1>Exemplo de lista</h1>
            {gerarLista().map((item) => {
                return (
                    <strong key={item}>{item}, </strong>
                )
            })}
        </div>  
    )
}

function gerarLista() {
    const lista = []
    for(let i = 0; i <= 20; i++){
        const frase = i
        lista.push(frase)
    }
    return lista
}