import axios from "axios"
import NavComponent from "../components/Nav/NavComponent"
import ServiceBook from "../components/Servicios/ServiceBook"
import ServicesBox from "../components/Servicios/ServicesBox"
import { FormBox } from"../styles/servicios/style"

const servicios = ({services, category1, category2, category3, category4, category5, category6}) => {

  return (
    <>
      <NavComponent page_title={'Servicios'}/>
      <div className="background-NavComponent">
        {services.map(service => (
          <ServicesBox 
            key={service.id_group} 
            photo1={service.photo1} 
            photo2={service.photo2} 
            id={service.id_group} 
            name={service.name_group} 
            description={service.description} 
            info1={service.info1} 
            info2={service.info2} 
            info3={service.info3} 
            info4={service.info4}
            products={
              service.category == '1' ? category1 :
              service.category == '2' ? category2 : 
              service.category == '3' ? category3 :
              service.category == '4' ? category4 :
              service.category == '5' ? category5 : 
              service.category == '6' ? category6 :
              ''
            } 
          />))}
      </div>
      <FormBox>
          <ServiceBook/>
      </FormBox>
    </>
  )
}

export const getServerSideProps = async (context) => {
  const {data} = await axios.get('http://localhost:3000/api/servicios')
  const product1 = await axios.get('http://localhost:3000/api/servicios/category1')
  const product2 = await axios.get('http://localhost:3000/api/servicios/category2')
  const product3 = await axios.get('http://localhost:3000/api/servicios/category3')
  const product4 = await axios.get('http://localhost:3000/api/servicios/category4')
  const product5 = await axios.get('http://localhost:3000/api/servicios/category5')
  const product6 = await axios.get('http://localhost:3000/api/servicios/category6')
 
  return {
    props: {
      services: data,
      category1: JSON.stringify(product1.data),
      category2: JSON.stringify(product2.data),
      category3: JSON.stringify(product3.data),
      category4: JSON.stringify(product4.data),
      category5: JSON.stringify(product5.data),
      category6: JSON.stringify(product6.data),
    }
  }
}

export default servicios