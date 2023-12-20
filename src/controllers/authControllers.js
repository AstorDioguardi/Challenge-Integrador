const login = (req, res) => {
    res.render('auth/login', {
        view: {
            title: "Login | Funkoshop"  
        }
    });
}

const loginPost = (req, res) => {
    console.log(req.body);
    res.send('Route for Login Post View');
}

const register = (req, res) => {
    res.render('auth/register', {
        view: {
            title: "Register | Funkoshop"  
        }
    });
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