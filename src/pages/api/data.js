// pages/api/data.js
import { query } from '../../lib/db';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(405).end(); // Method Not Allowed
    return;
  }

  try {
    const result = await query('SELECT * FROM your_table');
    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
