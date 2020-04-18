module.exports = function convertSize(params) {
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (params[0] === 0) {
        return 'n/a'; 
    }
    var i = parseInt(Math.floor(Math.log(params[0]) / Math.log(1024)));
    if (i === 0) {
        return params[0] + ' ' + sizes[i];
    }
    return (params[0] / Math.pow(1024, i)).toFixed(1) + ' ' + sizes[i];
}
