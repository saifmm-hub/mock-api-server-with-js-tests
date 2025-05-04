module.exports = (req, res, next) => {
  const token = req.headers['authorization'];
  if (req.path.startsWith('/users') && token !== 'Bearer my-secret-token') {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
};
