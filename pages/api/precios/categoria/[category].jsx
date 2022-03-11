import {pool} from '../../../../config/db';

export default async function handler (req, res) {
  switch (req.method) {
    case "GET":
      return await GetServicesByCategory(req, res)
  }
}

const GetServicesByCategory = async (req, res) => {
  const [result] = await pool.query( `
  SELECT services.name, services.price , types.services_name
  FROM products.services
  INNER JOIN products.types
  ON services.id_type = types.id
  WHERE services_name IN ('${req.query.category}')
  `);
  return res.status(200).json(result)
}

//   (${req.query.id})
