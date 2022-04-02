import {pool} from '../../../../config/db';

export default async function handler (req, res) {
  switch (req.method) {
    case "GET":
      return await GetServices(req, res)
  }
}

const GetServices = async (req, res) => {
  const [result] = await pool.query(
      ` SELECT servicios_lista.id, servicios_lista.name, servicios_lista.photo , servicios_lista.price 
        FROM products.servicios_lista
        INNER JOIN products.servicios_tipo
        ON servicios_lista.id_type = servicios_tipo.id
        WHERE services_name IN ('Pestañas', 'Cejas')`
    );
  return res.status(200).json(result)
}