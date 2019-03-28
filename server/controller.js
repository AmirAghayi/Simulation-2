module.exports ={
    getAll: (req,res) => {
        const db = req.app.get('db');
        db.get_houses()
        .then( response => {
            res.status(200).send(response);
        }).catch((err) => {
            consolke.log('getAll:', err)
        });
    }

}