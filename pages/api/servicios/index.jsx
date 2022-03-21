import { pool } from "../../../config/db";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return await GetServices(req, res);
    case "POST":
      return await SaveData(req, res);
  }
}

const GetServices = async (req, res) => {
  const [result] = await pool.query("SELECT * FROM products.types_group");
  return res.status(200).json(result);
};
const SaveData = async (req, res) => {
  const { yourname, lastname, phone, service, day, hour } = req.body;
  const [result] = await pool.query("INSERT INTO citas SET ?", {
    name:yourname,
    lastname,
    phone,
    service,
    day,
    hour,
  });
  console.log(result);
};
