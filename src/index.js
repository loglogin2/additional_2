module.exports = function flatten(array) {
  // your solution
    if (!Array.isArray(array)) {
        return [];
    }
    var ret = [];
    function flat(arr) {
        for (var i = 0; i < arr.length; i++) {
            if (!Array.isArray(arr[i])) {
                ret.push(arr[i]);
            }
            else {
                flat(arr[i]);
            }

        }
        return ret;
    }
    return flat(array);
}
