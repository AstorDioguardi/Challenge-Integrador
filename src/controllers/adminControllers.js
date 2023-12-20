const admin = (req, res) => {
    const title = "Admin | Funkoshop";
    res.render('admin/admin', {title});
}

const create = (req, res) => {
    const title = "Create | Funkoshop";
    res.render('admin/create', {title});
}

const createItem = (req, res) => {
    res.send('Route for POST Create Item');
}

const edit = (req, res) => {
    const title = "Edit | Funkoshop";
    res.render('admin/edit', {title});
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