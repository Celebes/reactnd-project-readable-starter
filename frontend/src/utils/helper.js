export function timestampToDate(timestamp) {
    var a = new Date(timestamp * 1000);
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
    return time;
}

export function sortPostsByTimestamp(posts) {
    return posts.sort((a, b) => (a.timestamp < b.timestamp) ? 1 : ((a.timestamp > b.timestamp) ? -1 : 0))
}

export function sortPostsByVoteScore(posts) {
    return posts.sort((a, b) => (a.voteScore < b.voteScore) ? 1 : ((a.voteScore > b.voteScore) ? -1 : 0))
}