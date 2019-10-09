const BookRepository = require('./book.repository');
const db = require('./db')

const repository = new BookRepository(db);


repository.save({
    'id' : 4,
    "name" :"Book4",
    'price' :37.2,
    "added_at" : '2019-03-15'
});