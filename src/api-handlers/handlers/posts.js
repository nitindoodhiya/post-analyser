module.exports = async (req, res) => {
  console.log({ body: req.body });
  return res.status(200).json({ result: 1 });
};
