
const notes = require('../controllers/notesController');

module.exports = (router) => {

    router.use((req, res, next) => {
        console.log('Notes:', req.method, req.url)
        next();
    })

    router.post('/create', notes.create);
    router.get('/list', notes.list);

};