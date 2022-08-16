export default function Estilo(props) {
    const estilos = {
        backgroundColor: props.numero >= 0 ? "#2D2" : "#444",
        color: props.color,
        textAlign: props.direita ? "right" : "left",

    }

    const classeAplicada = props.numero >= 0 ? "azul" : "vermelho"

    return(
        <div>
            <h1 style={estilos}>
                Texto #1
            </h1>
            <h2 className={classeAplicada}>Text #2</h2>
        </div>
    )
}