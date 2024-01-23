const globalErrorHandler = (err, req, res) => {
  return res.status(500).json("Something went wrong!");
};
