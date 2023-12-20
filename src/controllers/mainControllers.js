const home = (req, res) => {
    res.render('home', {
        view: {
            title: "Home | Funkoshop"  
        }
    });
}

const contact = (req, res) => {
    res.render('main/contact', {
        view: {
            title: "Contact | Funkoshop"            
        }
    });
}

const about = (req, res) => {
    res.render('main/about', {
        view: {
            title: "About | Funkoshop"            
        }
    });
}

const faqs = (req, res) => {
    res.render('main/faqs', {
        view: {
            title: "FAQs | Funkoshop"            
        }
    });
}

const mainControllers = {
    home,
    contact,
    about,
    faqs
}

export default mainControllers;
