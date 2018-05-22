// Import libs***************
const express = require('express');
const path = require('path');

// Const declaration*********
const app = express();

// Settings *****************
app.set('port', process.env.PORT || 3000);

// Middlewares **************
// Routes********************
// Static files**************
app.use(express.static(path.join(__dirname, 'public')));

// Launch *******************
app.listen(app.get('port'), () => {
	console.log('Server running on port', app.get('port'));
});