// Queues
console.log("Queue")
class Queue {
	constructor() {
		this.items = {}
		this.frontIndex = 0
		this.backIndex = 0
	}
    // Add an item to the back of the queue
	enqueue(item) {
		this.items[this.backIndex] = item
		this.backIndex++
		return item + ' inserted Back'
	}
    // Add an item to the front of the queue
    enqueueBack(item) {
        this.items[this.frontIndex - 1] = item
        this.frontIndex--
        return item + ' inserted Front'
    }
    // Remove an item from the front of the queue
	dequeue() {
		const item = this.items[this.frontIndex]
		delete this.items[this.frontIndex]
		this.frontIndex++
		return item  + ' removed Front'
	}
    // Remove an item from the back of the queue
    dequeueBack() {
        const item = this.items[this.backIndex - 1]
        delete this.items[this.backIndex - 1]
        this.backIndex--
        return item + ' removed Back'
    }
    // First item
	front() {
		return this.items[this.frontIndex] + ' is the first item'
	}
    // Last item
    back() {
        return this.items[this.backIndex - 1] + ' is the last item'
    }
    // Returns the queue
	get printQueue() {
		return this.items
	}
}

// Testing the queue
const queue = new Queue()
console.log(queue.enqueue(7))
console.log(queue.enqueue(2))
console.log(queue.enqueueBack(6))
console.log(queue.enqueue(4))
console.log(queue.dequeue())
console.log(queue.dequeueBack())
console.log(queue.front())
console.log(queue.back())
let str = queue.printQueue;
console.log(str)

console.log("=====================================")
console.log("List")

// Lists
// Creating a list
const myList = [1, 2, 3, 4, 5]

// Adding an element to the end of the list
myList.push(6)
console.log("Added 6 to the end of the list")
console.log(myList)

// Removing an element from the end of the list
myList.pop()
console.log("Removing an element from the end of the list")
console.log(myList)

// Adding an element to the front of the list
myList.unshift(5)
console.log("Added 5 to the front of the list")
console.log(myList)

// Removing an element from the front of the list
myList.shift()
console.log("Removing an element from the front of the list")
console.log(myList)

// Accessing elements by index
console.log(myList[2]); // Output: 3

// Iterating through the list
myList.forEach((element) => {
    console.log(element)
})
