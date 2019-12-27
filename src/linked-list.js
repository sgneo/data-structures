class Node {
  constructor(data) {
    this.data = data
    this.next = null
    this.prev = null
  }
}

/**
 * Linked list class
 */
class LinkedList {
  /**
   * Constructor
   */
  constructor() {
    this.head = null
    this.tail = null
  }

  /**
   *
   * Method that inserts a new node at the start of the list (head)
   *
   *
   * @param data
   * @returns {Node}
   */
  push(data) {
    const newNode = new Node(data)

    /* Make next of newNode as head and prev as null */
    newNode.next = this.head
    newNode.prev = null

    /* change prev of head newNode */
    if (this.head !== null) {
      this.head.prev = newNode
    }

    /* Move the head to point to newNode */
    this.head = newNode

    if (newNode.next === null) {
      this.tail = newNode
    }

    return newNode
  }

  /**
   *
   * Method that inserts a new node as a new Node after {prevNode}
   *
   * @param {Node} prevNode
   * @param data
   * @returns {Node}
   */
  insertAfter(prevNode, data) {
    this._validateNode(prevNode)

    const newNode = new Node(data)

    /* Make next of newNode as next of prevNode */
    newNode.next = prevNode.next

    /* Make next of prevNode to be newNode */
    prevNode.next = newNode

    /* Make prev of nextNode as prevNode */
    newNode.prev = prevNode

    /* Change previous of newNode's next node */
    if (newNode.next === null) {
      this.tail = newNode
    } else {
      newNode.next.prev = newNode
    }

    return newNode
  }

  /**
   *
   * Method that appends a new node at the end of the list (tail)
   *
   * @param data
   * @returns {Node}
   */
  append(data) {
    const newNode = new Node(data)

    /* this newNode will be the last(tail) so it's next is null */
    newNode.next = null

    /* if the list is empty then make newNode as head and tail*/
    if (this.head === null) {
      newNode.prev = null
      this.head = newNode
      this.tail = newNode

      return newNode
    }


    this.tail.next = newNode
    newNode.prev = this.tail
    this.tail = newNode

    return newNode
  }

  /**
   *
   * Validates node to be a correct instance of class Node
   *
   * @param node
   * @private
   */
  _validateNode(node) {
    if (node == null) {
      throw new Error('previous node cannot be null')
    }

    if (!(node instanceof Node)) {
      throw new Error('previous node must be an instance of Node class')
    }
  }

  print() {
    let currentNode = this.head

    while (currentNode !== null) {
      console.log(currentNode.data + '\n')
      currentNode = currentNode.next
    }
  }
}

export default LinkedList