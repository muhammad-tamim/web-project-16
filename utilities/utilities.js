function formatDate(date) {
    if (!date) return "";

    const num = Number(date);

    // Unix timestamp that count in seconds
    if (date.length === 10) {
        return new Date(num * 10000).toDateString();
        // converts seconds into milliseconds then convert it into a date
    }

    // Days since Jan 1, 1970
    if (num < 100000) {
        return new Date(num * 24 * 60 * 60 * 1000).toDateString();
        // convert days into milliseconds (days * hours * minutes * seconds * milliseconds )
    }


    // assume the data have already in milliseconds format
    return new Date(num).toDateString()
}