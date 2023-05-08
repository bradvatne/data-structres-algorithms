/*

1. Arrays: Implement a fixed-size array that stores integers. Your implementation should support the following methods:
    - **`create_array(size)`**: Initialize an array with a specified size.
    - **`get_element(index)`**: Retrieve the element at the given index.
    - **`set_element(index, value)`**: Set the value of the element at the given index.
    - **`length()`**: Return the length (size) of the array.

*/


class CustomArray {
    private array: number[];

    constructor(size: number) {
        this.array = new Array(size);
    }

    create_array(size: number) {
        this.array = new Array(size);
    }

    get_element(index: number) {
        return this.array[index];
    }

    set_element(index: number, value: number) {
        this.array[index] = value;
    }

    length() {
        return this.array.length;
    }
}