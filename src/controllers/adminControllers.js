const admin = (req, res) => {
    res.render('admin/admin', {
        view: {
            title: "Admin | Funkoshop"  
        }
    });
}

const create = (req, res) => {
    res.render('admin/create', {
        view: {
            title: "Create | Funkoshop"  
        }
    });
}

const createItem = (req, res) => {
    res.send('Route for POST Create Item');
}

const edit = (req, res) => {
    res.render('admin/edit', {
        view: {
            title: "Edit | Funkoshop"  
        }
    });
}

const editItem = (req, res) => {
    const itemId = req.params.id;
    res.send(`Route for POST Edit Item ${itemId}`);
}

const deleteItem = (req, res) => {
    const itemId = req.params.id;
    res.send(`Route for Delete Item ${itemId}`);
}

const adminControllers = {
    admin,
    create,
    createItem,
    edit,
    editItem,
    deleteItem
}

export default adminControllers;