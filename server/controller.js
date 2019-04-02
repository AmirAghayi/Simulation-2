module.exports ={
    getAll: (req,res) => {
        const db = req.app.get('db');
        db.get_houses()
        .then( response => {
            res.status(200).send(response);
        }).catch((err) => {
            console.log('getAll:', err)
        });
    },

    newHouse: (req,res) => {
        const {property_name, address, city, state, zip } = req.body; 
        const db = req.app.get('db')

        db.create_house([property_name, address, city, state, zip])
        .then( response => {
            res.status(200).send('all good');
        }).catch((err) => {
              console.log('newHouse:', err)
        })
    },

    removeHouse: (req,res) => {
        const db = req.app.get('db')
        const {id} = req.params;


        db.remove_house([id])
        .then( response => {
            res.status(200).send('all good');
        }).catch( err => {
            console.log('removeHouse:', err)
        });
    }

}