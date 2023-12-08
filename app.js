const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sensorRoute = require('./routes/sensorRoute'); // Update the import path

const app = express();

app.use(bodyParser.json());
app.use(cors());


app.use('/api', sensorRoute); // Use the correct path here

const PORT = process.env.PORT || 3004;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
