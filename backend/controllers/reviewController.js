const pool = require('../database');

exports.submitReview = async (req, res) => {
  console.log('Received review submission:', req.body);
  const { product_id, email, rating, review } = req.body;
  if (!product_id || !email) return res.status(400).json({ error: 'Missing data' });

  try {
    const [existing] = await pool.query('SELECT * FROM reviews WHERE product_id = ? AND email = ?', [product_id, email]);
    if (existing.length > 0) return res.status(400).json({ error: 'You already reviewed this product' });

    await pool.query('INSERT INTO reviews (product_id, email, rating, review) VALUES (?, ?, ?, ?)', [product_id, email, rating, review]);
    res.status(201).json({ message: 'Review submitted!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong' });
  }
};

exports.getReviewsByProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const [reviews] = await pool.query('SELECT * FROM reviews WHERE product_id = ?', [id]);
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching reviews' });
  }
};