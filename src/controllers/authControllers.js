const login = (req, res) => {
    const title = "Login | Funkoshop";
    res.render('auth/login', {title});
}

const loginPost = (req, res) => {
    console.log(req.body);
    res.send('Route for Login Post View');
}

const register = (req, res) => {
    const title = "Register | Funkoshop";
    res.render('auth/register', {title});
}

const registerPost = (req, res) => {
    console.log(req.body);
    res.send('Route for Register Post View');
}

const logout = (req, res) => {
    res.send('Route for Logout View');
}

const authControllers = {
    login,
    loginPost,
    register,
    registerPost,
    logout
}

export default authControllers;