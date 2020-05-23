exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
};

exports.restrictedAccess = (req, res) => {
    res.status(200).send("Restricted access.");
};