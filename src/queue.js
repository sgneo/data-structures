class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class Queue {
  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }

  enqueue(data) {
    const newNode = new Node(data)

    if (this.head === null) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }

    this.size +=1
  }

  dequeue() {
    let newNode

    if (this.head !== null) {
      newNode = this.head.data
      this.head = this.head.next
    }

    return newNode
  }

  print() {
    let curr = this.head

    while (curr) {
      console.log(curr.data)
      curr = curr.next
    }
  }
}

export default Queue