// Queues
console.log("Queue")
class Queue {
	constructor() {
		this.items = {}
		this.frontIndex = 0
		this.backIndex = 0
	}
    // Add an item to the queue
	enqueue(item) {
		this.items[this.backIndex] = item
		this.backIndex++
		return item + ' inserted'
	}
    // Add an item to the back of the queue
    enqueueBack(item) {
        this.items[this.frontIndex - 1] = item
        this.frontIndex--
        return item + ' inserted'
    }
    // Remove an item from the queue
	dequeue() {
		const item = this.items[this.frontIndex]
		delete this.items[this.frontIndex]
		this.frontIndex++
		return item
	}
    // Remove an item from the back of the queue
    dequeueBack() {
        const item = this.items[this.backIndex - 1]
        delete this.items[this.backIndex - 1]
        this.backIndex--
        return item
    }
    // First item
	front() {
		return this.items[this.frontIndex]
	}
    // Last item
    back() {
        return this.items[this.backIndex - 1]
    }
    // Returns the queue
	get printQueue() {
		return this.items;
	}
}

// Testing the queue
const queue = new Queue()
console.log(queue.enqueue(7))
console.log(queue.enqueue(2))
console.log(queue.enqueue(6))
console.log(queue.enqueue(4))
console.log(queue.dequeue())
console.log(queue.front())
let str = queue.printQueue;
console.log(str)

console.log("=====================================")
console.log("List")

// Lists
// Creating a list
const myList = [1, 2, 3, 4, 5];

// Adding an element to the end of the list
myList.push(6);

// Removing an element from the end of the list
const removedElement = myList.pop();

// Accessing elements by index
console.log(myList[2]); // Output: 3

// Iterating through the list
for (const element of myList) {
  console.log(element);
}
