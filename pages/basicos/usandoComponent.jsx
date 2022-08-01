import Titulo from '../../components/Titulo'

export default function usandoTitulo(){
    return (
        <div>
            <Titulo
                principal="Página de Cadastro"
                secundario="Incluir, alterar, e exluir coisas" 
            />

            <Titulo
                principal="Página de Login"
                secundario="Informe o seu email e senha :)" 
                paragrafo
            />
        </div>
    )
}