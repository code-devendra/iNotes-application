const notFound = (req, res) => {
  res.status(404).json({ success: false, message: "Unnknown Route!!" });
};

module.exports = notFound;
