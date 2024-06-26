# JavaScript Algorithms

`✅ -> Added`
`❌ -> Not added`

* **Search Algorithms**
  * [Linear Seacrh Algorithm](#Linear-Seacrh-Algorithm) ✅
  * [Binary Seacrh Algorithm](#Binary-Seacrh-Algorithm) ✅
  * [Dept First Search Algorithm]() ❌
  * [Breadth First Seacrh Algorithm]() ❌
 
* **Sorting Algorithms**
  * [Bubble Sort Algorithm](#Bubble-Sort-Algorithm) ✅
  * [Insertion Sort Algorithm]() ❌
  * [Selection Sort Algorithm]() ❌
  * [Heap Sort Algorithm]() ❌
  * [Merge Sort Algorithm]() ❌
  * [Quick Sort Algorithm]() ❌
  * [Counting Sort Algorithm]() ❌

* **Graph Algorithms**
  * [Kruskal Algorithm]() ❌
  * [Dijkstra Algorithm]() ❌
  * [Bellman Ford Algorithm]() ❌
  * [Floyd Warshall Algorithm]() ❌
  * [Topological Sort Algorithm]() ❌
  * [Flood Fill Algorithm]() ❌
  * [Lee Algorithm]() ❌

* **Array Algorithms**
  * [Kadane Algorithm]() ❌
  * [Floyd's Cycle Detection Algorithm]() ❌
  * [KMP Algorithm]() ❌
  * [Quickselect Algorithm]() ❌
  * [Boyer-Moore Maority Vote Algorithm]() ❌

* **Basic Algorithms**
  * [Huffman Coding Compression Algorithm]() ❌
  * [Euclid Algorithm]() ❌
  * [Union Find Algorithm]() ❌
  
  <hr>

## Linear Seacrh Algorithm

Linear Search Algorithm is a simple algorithm used to determine whether a data exists within an array. The algorithm compares the searched data with each term in the array, starting from the first element to the last. If the algorithm finds a term in the array that is equal to the searched data, it returns its index. If it cannot find a term equal to the searched data, it returns -1. When it returns -1, it means that the searched item is not in the array. Since the algorithm sequentially compares the terms of the array with the searched item, it is also referred to as the linear search algorithm.

```
const arr =  [1,23,546,234,2,56,98,34,-21,31]

function LinearSeacrh(arr,element){
    const len = arr.length
    for (let i = 0; i < len; i++){
        if(arr[i] === element){
            return i
        }        
    }
    return -1
}


console.log(LinearSeacrh(arr,98)) // 6
console.log(LinearSeacrh(arr,221)) // -1

```

## Binary Seacrh Algorithm

Binary search algorithm is a highly efficient method used to locate a target value within a sorted array or list. It operates by continually dividing the search interval in half until the target is found or the interval becomes empty. Beginning with the entire array, the algorithm compares the target value with the middle element. If they match, the index of the target is returned. If the target is less than the middle element, the right half of the array is discarded and the search continues on the left half. Conversely, if the target is greater, the left half is discarded and the search proceeds on the right half. This process is repeated until the target is located or the search interval becomes empty. With a time complexity of O(log n), binary search is notably efficient for large datasets, although it requires the array or list to be sorted beforehand.

```
const shortedArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

function BinarySearch(arr,target) {
    let left = 0;
    let right = arr.length-1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        if(arr[mid] === target){
            return mid
        }else if(arr[mid] < target){
            left = mid+1
        }else{
            right = mid-1
        }
    }
    return -1
}

console.log(BinarySearch(shortedArr,7)) // 6
console.log(BinarySearch(shortedArr,23)) // -1

```

## Bubble Sort Algorithm

Bubble Sort is a sorting algorithm that iterates over a list, comparing adjacent elements and swapping them if they are in the wrong order. This process continues until the list is sorted. Each iteration "bubbles" the largest (or smallest) element to its correct position. The algorithm's time complexity is O(n^2), making it inefficient for large datasets compared to other sorting algorithms such as Quick Sort or Merge Sort. However, it can be useful for educational purposes or sorting small datasets.

```
let arr = [1, 32, 45, 2, 5, 78, 3, 23];

function BubbleSort(arr) {
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len-i; j++){
           if(arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
               arr[j+1] = temp
           }
        }
    }
    return arr
}

console.log(BubbleSort(arr)) // [1,  2,  3,  5, 23, 32, 45, 78]
```
