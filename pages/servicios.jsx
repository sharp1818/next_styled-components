import axios from "axios"

const servicios = ({services}) => {

  return (
    <>
      <div>
      <select>
        <option value="0">Ordenar:</option> 
        <option value="1">Precio Mayor a Menor</option> 
        <option value="2">Precio Menor a Mayor</option>
      </select>
      <select>
        <option value="0">Seleccione Categoria:</option> 
        <option value="1">Manicure</option> 
        <option value="2">Pedicure</option>
        <option value="3">Corte de Cabello</option> 
        <option value="4">Peinados</option>
        <option value="5">Pestañas</option> 
        <option value="6">Cejas</option>
        <option value="7">Depilaciones</option> 
        <option value="8">Maquillaje Semipermanente</option>
        <option value="9">Masajes</option> 
        <option value="10">Limpieza Facial</option>
        <option value="11">Botox Capilar</option> 
        <option value="12">Alisado</option> 
        <option value="13">Color</option>
        <option value="14">Eventos</option>
      </select>
        Servicios
        {/* {services.map(service => (
          <div key={service.id}>
            <h1>{service.name}</h1>
            <p>{service.price}</p>
            <p>{service.photo}</p>
          </div>
        ))} */}
      </div>
    </>
  )
}

export const getServerSideProps = async (context) => {
  const {data} = await axios.get('http://localhost:3000/api/servicios')
  console.log(await axios.get('http://localhost:3000/api/servicios/70'))
  console.log(await axios.get('http://localhost:3000/api/categorias/Pedicure'))
  console.log(await axios.get('http://localhost:3000/api/servicios/categoria/Cejas'))
  return {
    props: {
      services: data
    }
  }
}

export default servicios