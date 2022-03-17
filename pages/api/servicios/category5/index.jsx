import {pool} from '../../../../config/db';

export default async function handler (req, res) {
  switch (req.method) {
    case "GET":
      return await GetServices(req, res)
  }
}

const GetServices = async (req, res) => {
  const [result] = await pool.query(
      ` SELECT services.id, services.name, services.photo , services.price , types.id_types_group
        FROM products.services
        INNER JOIN products.types
        ON services.id_type = types.id
        WHERE services_name IN ('Depilaciones', 'Maquillaje Semipermanente', 'Masajes', 'Limpieza Facial')`
    );
  return res.status(200).json(result)
}