class Queue{
  constructor() {
    this._size = 0;
  }

  get isEmpty () {
    return (!Boolean (this._size))
  }

  get size () {
    return this._size;
  }

  enqueue (newElement) {
    let counter = this._size++;
    for (const item of this) {
      this[counter] = this [--counter];
    }
    this[0] = newElement;
    return this._size;
  }

  dequeue () {
    const deleteElement = this[this._size - 1];
    delete this[--this._size];
    return deleteElement;
  }

  front () {
    return this[this._size - 1];
  }
  
  [Symbol.iterator](){
    return new QueueIterator (this);
  }
}

class QueueIterator {
  constructor(queue) {
    this.queue = queue;
    this.currentValue = 0;
  }

  next() {
    return {
      value: this.queue[this.currentValue++],
      done: this.currentValue > this.queue._size,
    };
  }
}


