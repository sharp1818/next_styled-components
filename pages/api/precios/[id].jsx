import {pool} from '../../../config/db';

export default async function handler (req, res) {
  switch (req.method) {
    case "GET":
      return await GetServicesById(req, res)
  }
}

const GetServicesById = async (req, res) => {
  const [result] = await pool.query( `SELECT * FROM products.services WHERE id IN (${req.query.id})` );
  return res.status(200).json(result)
}
