import {pool} from '../../../config/db';

export default async function handler (req, res) {
  switch (req.method) {
    case "GET":
      return await GetServices(req, res)
  }
}

const GetServices = async (req, res) => {
  const [result] = await pool.query('SELECT * FROM products.types_group');
  return res.status(200).json(result)
}