import { pool } from "../../../config/db";

export default async function handler(req, res) {
  switch (req.method) {
    case "POST":
      return await SaveData(req, res);
  }
}

const SaveData = async (req, res) => {
  const { yourname, lastname, phone, message } = req.body;
  const [result] = await pool.query("INSERT INTO contacto_form_db SET ?", {
    name: yourname,
    lastname,
    phone,
    message
  });
};
