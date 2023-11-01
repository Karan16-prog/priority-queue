// Array implementation of Priority Queue
// Time Complexities for operations
// Enqueue - O(1)
// Dequeue - O(n)
// Peek -  O(n)

// structure for an element in a priority queue
class item {
  constructor() {
    this.value;
    this.priority;
  }
}

// Store the element of a priority queue
let pr = [];
for (let i = 0; i < 10000; i++) pr.push(new item());

// Pointer to the last index
let size = -1;

function enqueue(value, priority) {
  size++;
  pr[size] = new item();
  pr[size].value = value;
  pr[size].priority = priority;
}

// return the element with the highest priority
function peek() {
  let highestPriority = Number.MIN_SAFE_INTEGER;
  let ind = -1;
  for (let i = 0; i <= size; i++) {
    if (
      highestPriority === pr[i].priority &&
      ind > -1 &&
      pr[ind].value < pr[i].value
    ) {
      highestPriority = pr[i].priority;
      ind = i;
    } else if (highestPriority < pr[i].priority) {
      highestPriority = pr[i].priority;
      ind = i;
    }
  }
  return ind;
}

// function to remove the element with the highest priority
function dequeue() {
  let ind = peek();
  for (let i = ind; i < size; i++) {
    pr[i] = pr[i + 1];
  }
  size--;
}

enqueue(10, 2);
enqueue(11, 3);
enqueue(123, 2);
enqueue(13, 4);

let index = peek();
console.log(pr[index].value);
dequeue();
index = peek();
console.log(pr[index].value);
dequeue();
index = peek();
console.log(pr[index].value);
