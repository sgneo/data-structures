class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class Stack {
  constructor() {
    this.top = null
  }

  push(data) {
    const newNode = new Node(data);
  }

  pop() {
    if (this.top !== null) {
      const topItem = this.top.data
      this.top = this.top.next

      return topItem
    }

    return null
  }

  print() {
    let curr = this.top

    while (curr) {
      console.log(curr.data)
      curr = curr.next
    }
  }
}

export default Stack