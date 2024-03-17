# JavaScript Algorithms

`✅ -> Added`
`❌ -> Not added`

* **Search Algorithms**
  * [Linear Seacrh Algorithm](#Linear-Seacrh-Algorithm) ✅
  * [Binary Seacrh Algorithm](#Binary-Seacrh-Algorithm) ✅
  * [Dept First Search Algorithm]() ❌
  * [Breadth First Seacrh Algorithm]() ❌
 
* **Sorting Algorithms**
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

Linear Search Algorithm, bir dizide belirli bir verinin varlığını tespit etmek için kullanılan basit bir yöntemdir. Dizi içinde aranan veriyi, ilk öğeden başlayarak son öğeye kadar tek tek karşılaştırır. Eğer algoritma, aranan veriye eşit olan bir öğe bulursa, onun indisini döndürür. Eğer aranan veriyle eşleşen bir öğe bulunamazsa, -1 değerini döndürür; bu durumda aranan öğenin dizide bulunmadığı anlamına gelir. Algoritma, dizi içindeki terimleri sıralı olarak aranan öğe ile karşılaştırdığı için sıklıkla doğrusal arama algoritması veya sıralı arama algoritması olarak da adlandırılır.

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



