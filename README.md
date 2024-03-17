# JavaScript Algorithms

* **Search Algorithms**
  * [Linear Seacrh Algorithm](#Linear-Seacrh-Algorithm)
  * [Binary Seacrh Algorithm](Algorithms/SearchAlgorithms/BinarySearch.js)
  * [Dept First Search Algorithm](Algorithms/SearchAlgorithms/)
  * [Breadth First Seacrh Algorithm](Algorithms/SearchAlgorithms/)
 
* **Sorting Algorithms**
  * [Insertion Sort Algorithm](Algorithms/SearchAlgorithms/)
  * [Selection Sort Algorithm](Algorithms/SearchAlgorithms/)
  * [Heap Sort Algorithm](Algorithms/SearchAlgorithms/)
  * [Merge Sort Algorithm](Algorithms/SearchAlgorithms/)
  * [Quick Sort Algorithm](Algorithms/SearchAlgorithms/)
  * [Counting Sort Algorithm](Algorithms/SearchAlgorithms/)

* **Graph Algorithms**
  * [Kruskal Algorithm](Algorithms/GraphAlgorithms/)
  * [Dijkstra Algorithm](Algorithms/GraphAlgorithms/)
  * [Bellman Ford Algorithm](Algorithms/GraphAlgorithms/)
  * [Floyd Warshall Algorithm](Algorithms/GraphAlgorithms/)
  * [Topological Sort Algorithm](Algorithms/GraphAlgorithms/)
  * [Flood Fill Algorithm](Algorithms/GraphAlgorithms/)
  * [Lee Algorithm](Algorithms/GraphAlgorithms/)

* **Array Algorithms**
  * [Kadane Algorithm](Algorithms/ArrayAlgorithms/)
  * [Floyd's Cycle Detection Algorithm](Algorithms/ArrayAlgorithms/) 
  * [KMP Algorithm](Algorithms/ArrayAlgorithms/)
  * [Quickselect Algorithm](Algorithms/ArrayAlgorithms/)
  * [Boyer-Moore Maority Vote Algorithm](Algorithms/ArrayAlgorithms/)

* **Basic Algorithms**
  * [Huffman Coding Compression Algorithm](Algorithms/BasicAlgorithms/)
  * [Euclid Algorithm](Algorithms/BasicAlgorithms/)
  * [Union Find Algorithm](Algorithms/BasicAlgorithms/)
  
  <hr>

## Linear Seacrh Algorithm
```
const arr =  [1,23,546,234,2,56,98,34,-21,31]

const LinearSeacrh = (arr,element) =>{
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