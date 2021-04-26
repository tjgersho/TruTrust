//getMasterNodeIP

exports.getMasterNodeIP = (req,res) => {
  const masterNodeIP = "13.56.171.193";
  res.status(200).send(masterNodeIP);
};

