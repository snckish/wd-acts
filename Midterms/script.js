function capitalizeFirstLetter(str) {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function getCover(coverId, size) {
    if (coverId) {
        return 'https://covers.openlibrary.org/b/id/' + coverId + '-' + size + '.jpg';
    }
    return 'https://placehold.co/200x300?text=No+Cover';
}