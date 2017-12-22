document.getElementById('myForm').addEventListener('submit', saveBookmark);

/*
function Bookmark(site, siteurl){
	this.siteName = site;
	this.siteUrl = siteurl;
}
*/


//save bookmark
function saveBookmark(e){
	//Get form values
	var siteName =document.getElementById('siteName').value;
	var siteUrl =document.getElementById('siteUrl').value;
	console.log('hello');
	

	//var bookmarItem = new Bookmark(siteName, siteurl);

	//console.log(bookmarkItem);

	// Prevent form from submitting
	e.preventDefault();
}