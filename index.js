module.exports = function convertSize(params) {
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (params === 0) {
        return 'n/a'; 
    }
    var i = parseInt(Math.floor(Math.log(params) / Math.log(1024)));
    if (i === 0) {
        return params + ' ' + sizes[i];
    }
    return (params / Math.pow(1024, i)).toFixed(1) + ' ' + sizes[i];
}
