class QueueNode<T> {
	value: T;
	next: QueueNode<T> | null;

	constructor(inputValue: T) {
		this.value = inputValue;
		this.next = null;
	}
}

class Queue<T> {
	length: number;
	front: QueueNode<T> | null;
	back: QueueNode<T> | null;

	constructor() {
		this.length = 0;
		this.front = null;
		this.back = null;
	}

	isEmpty(): boolean {
		return this.length === 0;
	}

	size(): number {
		return this.length;
	}

	peek(): T | null {
		return this.front ? this.front.value : null;
	}

	enqueue(newNode: QueueNode<T>): void {
		if (this.length === 0) {
			this.front = newNode;
			this.back = newNode;
			this.length++;
			console.log(`${newNode.value} has been enqued successfully!`);
			return;
		}
		if (this.length === 1 && this.front) {
			this.back = newNode;
			this.front.next = newNode;
			this.length++;
			console.log(`${newNode.value} has been enqued successfully!`);
			return;
		}
		if (this.back) {
			this.back.next = newNode;
			this.back = newNode;
			this.length++;
			console.log(`${newNode.value} has been enqued successfully!`);
			return;
		}
	}

	dequeue(): QueueNode<T> | null {
		if (this.length === 0) {
			console.log("Nothing to dequeue.");
			return null;
		}
		if (this.length === 1) {
			const dequeuedItem = this.front;
			this.front = null;
			this.back = null;
			console.log(`${dequeuedItem?.value} has been dequeued!`);
			this.length--;
			return dequeuedItem;
		}

		let dequeuedItem: QueueNode<T> | null = null;
		if (this.front) {
			dequeuedItem = this.front;
			this.front = this.front.next;
			this.length--;
			console.log(`${dequeuedItem?.value} has been dequeued!`);
			return dequeuedItem;
		}
		return dequeuedItem;
		return null;
	}
}

const queue = new Queue<string>();
queue.isEmpty();
queue.enqueue(new QueueNode<string>('A'));
queue.enqueue(new QueueNode<string>('b'))
queue.peek();
queue.size();
queue.dequeue();
queue.dequeue();
queue.isEmpty();
queue.dequeue();
