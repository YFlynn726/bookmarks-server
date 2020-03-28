const uuid = require('uuid/v4')

const bookmarks = [{
    id: uuid(),
    title: 'Book One',
    url: 'www.google.com',
    description: 'suspenseful and full of drama',
    rating: 5
},
{
    id: uuid(),
    title: 'Book Two',
    url: 'www.yahoo.com',
    description: 'Misunderstoon and not easy to follow storyline.',
    rating: 5
},
{
    id: uuid(),
    title: 'Book Three',
    url: 'www.w3schools.com',
    description: 'Dry humor.',
    rating: 5
}];

module.exports = { bookmarks }