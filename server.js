const express = require("express");
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});

app.use(
    cors({
             credentials: true,
             origin: true
         })
);
app.options('*', cors());

// mongoose.connect('mongodb://localhost:27017/StartupDB',
//     {useNewUrlParser: true,
//         useUnifiedTopology: true});


mongoose.connect('mongodb://propenster:Olusegun487@cluster0.qk7pk.mongodb.net/StartupDB',
        {useNewUrlParser: true,
            useUnifiedTopology: true});

// try{
//     mongoose.connect('mongodb+srv://propenster:<Olusegun487#>/@cluster0.qk7pk.mongodb.net/<test>?retryWrites=true&w=majority',
//     {useNewUrlParser: true});
// }catch(error){
//     console.log(error);
// }


app.get('/', (req, res) => {
    res.json({ message: 'Welcome to Subaru' });
});

app.get('/api/v1/sources', (req, res) => sourceService.findAllSources().then(sources => res.json(sources)));

require("./controllers/book-controller")(app);
require("./controllers/source-controller")(app);
require("./controllers/airport-controller")(app);

app.listen(process.env.PORT || 5000, () =>
    console.log("Server is running @3000 ...")
);


//mongodb+srv://propenster:<password>@cluster0.qk7pk.mongodb.net/test

//mongodb+srv://propenster:<password>@cluster0.qk7pk.mongodb.net/test

//
