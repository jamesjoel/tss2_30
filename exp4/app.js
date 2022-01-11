// var pdfmake = require('../js/index'); // only during development, otherwise use the following line
var pdfmake = require('pdfmake');

// var Roboto = require('../fonts/Roboto');
// pdfmake.addFonts(Roboto);

// or you can define the font manually:

pdfmake.addFonts({
	Roboto: {
		normal: './fonts/Roboto-Regular.ttf',
		bold: './fonts/Roboto-Medium.ttf',
		italics: './fonts/Roboto-Italic.ttf',
		bolditalics: './fonts/Roboto-MediumItalic.ttf'
	}
});


var docDefinition = {
	content: [
		'First paragraph',
		'Another paragraph, this time a little bit longer to make sure, this line will be divided into at least two lines'
	]
};



var pdf = pdfmake.createPdf(docDefinition);
pdf.write('files/basics.pdf').then(() => {
	console.log("success");
}, err => {
	console.error(err);
});