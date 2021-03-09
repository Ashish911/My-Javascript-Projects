// Event handlers
document.addEventListener('DOMContentLoaded', fetcheverything);
document.getElementById('form').addEventListener('submit', saveLink);

// Function
function saveLink(e) {

    // Variables
    var moveiName = document.getElementById('movieName').value;
    var siteName = document.getElementById('siteName').value;
    var siteUrl = document.getElementById('siteUrl').value;

    if(!validation(moveiName, siteName, siteUrl)){
        return false;
    }

    var bookmark = {
        movie: movieName,
        name: siteName,
        url: siteUrl
    }

    // Check local storage
    if(localStorage.getItem('bookmarks') == null) {
        var bookmarks = [];
        bookmarks.push(bookmark);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    } else {
        var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        bookmarks.push(bookmark);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }

    document.getElementById('form').reset();

    fetcheverything();

    e.preventDefault();
}

function fetcheverything() {

}

function validation(movieName, siteName, siteUrl) {
    if(!movieName || !siteName || !siteUrl) {
        alert('Please fill in the form');
        return false;
    }

    var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);

    if(!siteUrl.match(regex)){
        alert('Please use a valid URL');
        return false;
    }

    return true;
}