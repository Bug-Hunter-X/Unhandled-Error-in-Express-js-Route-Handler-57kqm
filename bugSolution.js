const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Check if the userId is valid (e.g., numeric and exists)
  if (!/^[0-9]+$/.test(userId) || isNaN(parseInt(userId))){
    return res.status(400).json({ error: 'Invalid user ID' });
  }
  // ...rest of your code to fetch and send user data...
  // Example error handling using try-catch
  try{
    // database query or other operation that might throw an error
  } catch (error) {
    console.error('Error fetching user:', error);
    return res.status(500).json({ error: 'Failed to fetch user' });
  }
});