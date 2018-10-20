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
        var bookmakrs = JSON.parse(localStorage.getItem('bookmarks'));
        // Add bookmark to array //
        bookmarks.push(bookmark);
        // Back to localStorage
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

    }


    //console.log(siteName);
    // Prevents from submitting //
    e.preventDefault();
}