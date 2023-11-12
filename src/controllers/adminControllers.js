const adminControllers = {
    admin: (req, res) => res.send('Route for Admin View'),
    create: (req, res) => res.send('Route for GET Create Item'),
    createItem: (req,res) => res.send('Route for POST Create Item'),
    edit: (req, res) => {
        const itemId = req.params.id;
        res.send(`Route for GET Edit Item ${itemId}`)
    },
    editItem: (req, res) => {
        const itemId = req.params.id;
        res.send(`Route for POST Edit Item ${itemId}`)
    },
    deleteItem: (req, res) => {
        const itemId = req.params.id;
        res.send(`Route for Delete Item ${itemId}`)
    }
}

module.exports = adminControllers;