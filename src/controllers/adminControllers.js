const adminControllers = {
    admin: (req, res) => res.render('admin/admin',{
        view: {
            title: "Admin | Funkoshop"  
        }
    } ),
    create: (req, res) => res.render('admin/create',{
        view: {
            title: "Create | Funkoshop"  
        }
    }),
    createItem: (req,res) => res.send('Route for POST Create Item'),
    edit: (req, res) => res.render('admin/edit',{
            view: {
                title: "Edit | Funkoshop"  
            }
        }),
    editItem: (req, res) => {
        const itemId = req.params.id;
        res.send(`Route for POST Edit Item ${itemId}`)
    },
    deleteItem: (req, res) => {
        const itemId = req.params.id;
        res.send(`Route for Delete Item ${itemId}`)
    }
}

export default adminControllers;