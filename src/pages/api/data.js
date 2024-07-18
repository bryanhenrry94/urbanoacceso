// pages/api/data.js
import { query } from '@lib/db';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(405).end(); // Method Not Allowed
    return;
  }

  try {
    // const result = await query('SELECT * FROM users');
    // res.status(200).json(result.rows);
    
    const rows = [
      {"id": 1, "name": "Bryan Navarrete"},
      {"id": 2, "name": "Erick Gilbert"},
      {"id": 3, "name": "Yailing Funsang"},
      {"id": 4, "name": "Catalina Rivas"},
      {"id": 5, "name": "Stalyn Aviles"},
      {"id": 6, "name": "John Navarrete"},
      {"id": 7, "name": "Alexis Palate"}
    ]

    res.status(200).json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
