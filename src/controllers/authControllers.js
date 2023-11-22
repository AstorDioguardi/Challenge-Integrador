const authControllers = {
    login: (req, res) => res.send('Route for Login View'),
    loginBack: (req, res) => res.send('Route for Login Back View'),
    register: (req, res) => res.send('Route for Register View'),
    registerBack: (req, res) => res.send('Route for Register Back View'),
    logout: (req, res) => res.send('Route for Logout View')
}

export default authControllers;