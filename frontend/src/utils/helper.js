export function timestampToDate(timestamp) {
    var a = new Date(timestamp);
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours().toString().length === 2 ? a.getHours() : '0' + a.getHours();
    var min = a.getMinutes().toString().length === 2 ? a.getMinutes() : '0' + a.getMinutes();
    var sec = a.getSeconds().toString().length === 2 ? a.getSeconds() : '0' + a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
    return time;
}

export function sortPostsByTimestamp(posts) {
    return posts.sort((a, b) => (a.timestamp < b.timestamp) ? 1 : ((a.timestamp > b.timestamp) ? -1 : 0))
}

export function sortPostsByVoteScore(posts) {
    return posts.sort((a, b) => (a.voteScore < b.voteScore) ? 1 : ((a.voteScore > b.voteScore) ? -1 : 0))
}

export function replaceObjectInArrayById(array, obj) {
    return array.map(o => o.id === obj.id ? obj : o);
}

export function generateUUIDv4() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }

    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}