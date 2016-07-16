function getPublishedDate(data) {
    var context = data.context ? data.context[0] : null;
    if (data[context] && data[context].published_at) {
        return new Date(data[context].published_at).toISOString();
    }
    return null;
}

module.exports = getPublishedDate;
