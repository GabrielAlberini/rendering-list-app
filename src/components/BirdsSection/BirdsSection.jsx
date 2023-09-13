import { avesArgentinas } from "../../services/aves-db"

const BirdsSection = () => {
  return (
    <section className="cont-aves">
        {
          avesArgentinas.map((ave) => {
            return (
              <div key={ave.id}>
                <h4>{ave.id} - {ave.nombre}</h4>
                <p>Especie: {ave.especie}</p>
                <p>Colores: {ave.colores.map((color) => <span key={color}>{color}</span>)}</p>
              </div>
            )
          })
        }
      </section>
  )
}

export { BirdsSection }