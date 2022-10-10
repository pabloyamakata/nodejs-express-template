const getUsers = (req, res) => {
    console.log(req.query);
    res.send(`Requested resource at ${req.url}`);
};

const getUser = (req, res) => {
    const user = req.params.user;
    res.send(`Requested resource at ${req.url}. Get user: ${user}`);
};

module.exports = {
    getUsers,
    getUser
};
