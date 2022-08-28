const express = require('express');
const cors = require('cors');

const app = express();

app.use( cors() );

app.get( '/', (req, res) => [
    res.json([
        {
            "id": "1",
            "title": "Book review: The Bear and the Nightingale"
        },
        {
            "id": "2",
            "title": "Game review: Pokemon Brillian Diamond"
        },
        {
            "id": "3",
            "title": "Show review: Alice in wonderland"
        }
    ])
] )

app.listen(4000, () => {
    console.log( 'listening for requests on port 4000' )
})