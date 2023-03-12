import { Card, cards } from "./turtles.js";

const GRID_SIZE = 3;

function matches(
  cardOne: Card,
  cardTwo: Card,
  orientation: "right" | "bottom"
): boolean {
  if (orientation === "right") {
    return (
      cardOne.turtles.right.color === cardTwo.turtles.left.color &&
      cardOne.turtles.right.part === "head" &&
      cardTwo.turtles.left.part === "tail"
    );
  }

  if (orientation === "bottom") {
    return (
      cardOne.turtles.bottom.color === cardTwo.turtles.top.color &&
      cardOne.turtles.bottom.part === "tail" &&
      cardTwo.turtles.top.part === "head"
    );
  }

  return false;
}

function checkOrder(gridSize: number, cards: Card[]) {
  for (let idx = 0; idx < cards.length; idx++) {
    const bottomIdx = idx + gridSize;
    const rightIdx = idx + 1;

    if (bottomIdx < cards.length) {
      if (!matches(cards[idx], cards[bottomIdx], "bottom")) {
        return false;
      }
    }

    if (Math.floor(idx / gridSize) === Math.floor(rightIdx / gridSize)) {
      if (!matches(cards[idx], cards[rightIdx], "right")) {
        return false;
      }
    }
  }

  return true;
}

function randomizeArr<T>(arr: T[]) {
  return [...arr].sort(() => Math.random() - 0.5);
}

function printOrder(arr: Card[]) {
  return arr.map((card: Card) => card.id).join(" ");
}

// Heap's method, time complexity O(N)
// from https://www.npmjs.com/package/permutation-iterator
function* permutate<T>(arr: T[]) {
  const { length } = arr;
  const c = new Array(length).fill(0);
  let i = 1;

  yield arr.slice();
  while (i < length) {
    if (c[i] < i) {
      const k = i % 2 && c[i];
      const p = arr[i];
      arr[i] = arr[k];
      arr[k] = p;
      ++c[i];
      i = 1;
      yield arr.slice();
    } else {
      c[i] = 0;
      ++i;
    }
  }
}

const it = permutate(randomizeArr(cards));
let next = it.next();
while (!next.done) {
  if (checkOrder(GRID_SIZE, next.value)) {
    console.log(printOrder(next.value));
    break;
  }

  next = it.next();
}
