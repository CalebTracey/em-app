// const express = require('express');
// const cors = require('cors');
// const app = express();

// app.use(cors());

// app.use('/login', (req, res) => {
//   res.send({
//     token: 'test123',
//   });
// });

// app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));
const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/'));
app.listen(process.env.PORT || 8080);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('build'));
  app.get('*', (req, res) => {
    res.sendFile(path.join('build', 'index.html'));
  });
}
