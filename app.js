const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
/*

    HTTP Methods

    * GET
    * POST
    * PUT
    * DELETE
    * OPTIONS
     
    For more insgiht details check 

    *Link : https://www.tutorialspoint.com/http/http_methods.htm

    ES6 (New Version Of Javascript)
        > Arrow Function (e.g Same Lambda Function in java)
        > let, const (for variable)

    Ecmscript 3 (Browser Supports this version)

    Node > 5 : (Support ES6)


    (req, res) => res.send('Hello World!')
            |(req, res) => res.send('xyz!')
            |


    fumction(req, res) {
        return res.send('Hello World!')
    }

    (req, res) => {
        console.log(withour return )
    }

*/
app.get('/', (req, res) => {
    res.send('hello to home route');
});

app.get('/cart', (req, res) => {
    res.send('You have 5 items in cart');
});


app.post('/', (req, res) => {
    console.log(req.body);
    res.send('You have posted one message');
});


app.post('/register', (req, res) => {
    /*

        Required Fields: username, password, email
        
        1. Connection to mongodb
        2. Collection of users should be prepared before you express code
        3. Check the required data has been pushed by client or not (if not send the error message)
        4. If required data found create an entry in table of user 
    */
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))