import axios from "axios"
import NavComponent from "../components/Nav/NavComponent"
import ServicesBox from "../components/Servicios/ServicesBox"

const servicios = ({services}) => {

  return (
    <>
      <div>
        <NavComponent page_title={'Servicios'}/>
      {/* <select>
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
      </select> */}
        {services.map(service => (
          <ServicesBox 
            key={service.id_group} 
            photo1={`${service.photo1}`} 
            photo2={`${service.photo2}`} 
            id={`${service.id_group}`} 
            name={`${service.name_group}`} 
            description={`${service.description}`} 
            info1={`${service.info1}`} 
            info2={`${service.info2}`} 
            info3={`${service.info3}`} 
            info4={`${service.info4}`}
          />))}
      </div>
    </>
  )
}

export const getServerSideProps = async (context) => {
  const {data} = await axios.get('http://localhost:3000/api/servicios')
  return {
    props: {
      services: data
    }
  }
}

export default servicios