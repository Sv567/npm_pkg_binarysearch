
const binarySearch = (arr, target) => {
    let start = 0;
    let end = arr.length - 1;


    while (start <= end) {

        const mid = Math.floor((start + end) / 2);

        if (arr[mid] > target) {
            end = mid - 1;
        }
        else if (arr[mid] < target) {
            start = mid + 1;
        }
        else {
            return mid;
        }

    }

    return -1;

}

module.exports = binarySearch;