
const Note = require('mongoose').model('Note');

module.exports = {
    
    create(req, res){
        const note = new Note(req.body);
        console.log(note)
        note.save()
        .then(note => {
            console.log('Note created');
            Note.find({})
            .then(notes => res.json(notes))
        })
        .catch(err => res.json(err));
    },
    
    list(req, res){
        Note.find({})
        .then(notes => res.json(notes))
        .catch(err => console.log(err));
    },

}