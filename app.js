const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Define routes
app.use('/api/users', require('./routes/user'));
app.use('/api/companies', require('./routes/company'));
app.use('/api/clients', require('./routes/client'));

// Sync Sequelize models with the database
sequelize.sync().then(() => {
  console.log('Database synced');
  // Start the server
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
