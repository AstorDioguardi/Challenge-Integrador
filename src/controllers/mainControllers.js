const home = (req, res) => {
    const title = "Home | Funkoshop";
    res.render('home', {title});
}

const contact = (req, res) => {
    const title = "Contact | Funkoshop" ;
    res.render('main/contact', {title});
}

const about = (req, res) => {
    const title = "About | Funkoshop";
    res.render('main/about', {title});
}

const faqs = (req, res) => {
    const title = "FAQs | Funkoshop";
    res.render('main/faqs', {title});
}

const mainControllers = {
    home,
    contact,
    about,
    faqs
}

export default mainControllers;