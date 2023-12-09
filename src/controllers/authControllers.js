const authControllers = {
    login: (req, res) => res.render('admin/login', {
        view: {
            title: "Login | Funkoshop"  
        }
    }),

    loginPost: (req, res) => {
        console.log(req.body);
        res.send('Route for Login Post View')
    } ,

    register: (req, res) => res.render('admin/register', {
        view: {
            title: "Register | Funkoshop"  
        }
    }),

    registerPost: (req, res) => {
        console.log(req.body)
        res.send('Route for Register Post View')
    },
    
    logout: (req, res) => res.send('Route for Logout View')
}

export default authControllers;