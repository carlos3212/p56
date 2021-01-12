process.env.PORT = process.env.PORT || 3000;
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cocoa';
} else {
    urlDB = "mongodb+srv://cocoa-user:Programar.1234@cluster0.azijh.mongodb.net/cocoa"
}

process.env.URLDB = urlDB;