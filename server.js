const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = require('./app');

process.on('uncaughtException', err => {
  console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});

dotenv.config({ path:'./config.env' });
const DB = process.env.DATABASE_LOCAL;

mongoose.connect( DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true 
})
.then(() => {
    console.log('Database connection was successful')
}).catch(e => {
    console.log(e);
})

const port = 3000 || process.env.PORT;
app.listen(port, () => {
    console.log(`App is up and running on port ${port}`);
})