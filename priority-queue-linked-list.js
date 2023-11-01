// priority queue implemented via linked list

// In Linked List implementation, entries are sorted in descending order based on their priority. Highest priority is always added to the front of the queue.

class LinkedListNode {
  constructor(value, priority, next) {
    this.value = value ? value : 0;
    this.next = next ? next : null;
    this.priority = priority;
  }
}

function newNode(v, p) {
  let temp = new LinkedListNode(v, p);
  return temp;
}

function peek(head) {
  return head.value;
}
// dequeue
function pop(head) {
  head = head.next;
  return head;
}

function push(head, v, p) {
  var start = head;
  let temp = newNode(v, p);
  if (head.priority < p) {
    temp.next = head;
    head = temp;
  } else {
    while (start.next !== null && start.next.priority > p) {
      start = start.next;
    }
    temp.next = start.next;
    start.next = temp;
  }

  return head;
}

function isEmpty(head) {
  return head === null;
}

var pq = newNode(4, 11);
pq = push(pq, 5, 2);
pq = push(pq, 6, 3);
pq = push(pq, 7, 0);

while (!isEmpty(pq)) {
  console.log(peek(pq), " ");
  pq = pop(pq);
}
