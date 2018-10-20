// Listen form submit //

document.getElementById('myForm').addEventListener('submit', saveBookmark);

function saveBookmark(e) {
    // get form value //
    var siteName = document.getElementById('siteName').value;
    var siteUrl = document.getElementById('siteUrl').value;

    var bookmark = {
        name: siteName,
        url: siteUrl
    }

    if (localStorage.getItem('bookmarks') === null) {
        // Init array //
        var bookmarks = [];
        // Add to array //
        bookmarks.push(bookmark);
        // Set to local storage //
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    } else {
        // Get bookmarks from local storage
        var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        // Add bookmark to array //
        bookmarks.push(bookmark);
        // Back to localStorage
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

    }


    // Prevents from submitting //
    e.preventDefault();
}

// Fetch bookmarks //
function fetchBookmarks() {
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    var bookmarksResults = document.getElementById('bookmarksResults');;

    bookmarksResults.innerHTML = '';

    for (var i = 0; i < bookmarks.length; i++) {
        var name = bookmarks[i].name;
        var url = bookmarks[i].url;

        bookmarksResults.innerHTML += '<div class="well">' +
            '<h3>' + name + '</h3>' + '</div>';
    }
}