class StackNode {
	value: number;
	next: StackNode | null;

	constructor(value: number) {
		this.value = value;
		this.next = null;
	}
}

class Stack {
	length: number;
	top: StackNode | null;
	bottom: StackNode | null;

	constructor() {
		this.length = 0;
		this.top = null;
		this.bottom = null;
	}

	isEmpty() {
		console.log(this.length === 0 ? 'The stack is empty' : 'The stack is not empty')
		return this.length === 0;
	}

	size() {
		console.log(`The size of the stack is at ${this.length} items`)
		return this.length;
	}

	push(item: StackNode): void {
		if (this.length === 0) {
			this.top = item;
			this.bottom = item;
			this.length++;
			console.log(`Added ${item.value} to the top of the stack`);
			return;
		}

		if (this.length === 1) {
			item.next = this.bottom;
			this.top = item;
			this.length++;
			console.log(`Added ${item.value} to the top of the stack.`);
			return;
		}

		item.next = this.top;
		this.top = item;
		this.length++;
		console.log(`Added ${item.value} to the top of the stack.`);
		return;
	}

	pop() {
		if (this.length === 0) {
			console.log("Nothing to pop!");
			return null;
		}
		if (this.length === 1) {
			const popped = this.top;
			this.top = null;
			this.bottom = null;
			this.length--;
			console.log(`Popped ${popped?.value} from the top of the stack`);
			return popped;
		}

		if (this.top !== null && this.top.next !== null) {
			const popped = this.top;
			this.top = this.top.next;
			this.length--;
			console.log(`Popped ${popped.value} from the top of the stack`);
			return popped;
		}
	}

	peek() {
		if (this.length === 0) {
			console.log("Nothing to see.");
			return null;
		}
		if (this.top) {
			console.log(`Top of the stack is ${this.top.value}`);
			return this.top.value;
		}
	}
}

const stack = new Stack();
stack.isEmpty();
stack.push(new StackNode(12));
stack.push(new StackNode(44));
stack.push(new StackNode(132));
stack.peek();
stack.size();
stack.pop();
stack.pop();
stack.isEmpty();
stack.pop();
stack.pop();
stack.peek();
