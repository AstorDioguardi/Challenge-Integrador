const authControllers = {
    login: (req, res) => res.render('admin/login',{
        view: {
            title: "Login | Funkoshop"  
        }
    }),
    loginBack: (req, res) => res.send('Route for Login Back View'),
    register: (req, res) => res.render('admin/register',{
        view: {
            title: "Register | Funkoshop"  
        }
    }),
    registerBack: (req, res) => res.send('Route for Register Back View'),
    logout: (req, res) => res.send('Route for Logout View')
}

export default authControllers;