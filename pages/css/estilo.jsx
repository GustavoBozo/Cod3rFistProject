import Estilo from "../../components/usandoEstilo"

export default function usandoEstilo() {
    return(
        <div>
            <Estilo numero={3} color="#fff"/>
            <Estilo numero={-13} color="#000" direita={true}/>
        </div>
        
    )
}