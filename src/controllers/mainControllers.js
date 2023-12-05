const mainControllers = {

    home: (req, res) => res.render('home', {
        view: {
            title: "Home | Funkoshop"  
        }
    }),

    contact: (req, res) => res.render('admin/contact', {
        view: {
            title: "Contact | Funkoshop"            
        }
    }),

    about: (req, res) => res.render('admin/about', {
        view: {
            title: "About | Funkoshop"            
        }
    }),

    faqs: (req, res) => res.render('admin/faqs', {
        view: {
            title: "FAQs | Funkoshop"            
        }
    })
}

export default mainControllers;
