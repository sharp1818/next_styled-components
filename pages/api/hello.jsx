import {pool} from '../../config/db';

export default async function handler (req, res) {
  switch (req.method) {
    case "GET":
      return await GetServices_price_DESC(req, res)
  }
}

const GetServices = async (req, res) => {
  const [result] = await pool.query('SELECT * FROM services');
  return res.status(200).json(result)
}

const GetServices_price_DESC = async (req, res) => {
  const [result] = await pool.query('SELECT * FROM services ORDER BY price DESC');
  return res.status(200).json(result)
}

const GetServices_price_ASC = async (req, res) => {
  const [result] = await pool.query('SELECT * FROM services ORDER BY price ASC');
  return res.status(200).json(result)
}