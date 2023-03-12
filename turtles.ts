export type Orientation = "top" | "right" | "bottom" | "left";

export interface Card {
  id: string;
  turtles: Record<Orientation, Turtle>;
}

interface Turtle {
  color: "brown" | "red" | "black" | "blue";
  part: "head" | "tail";
}

export const cards: Card[] = [
  {
    id: "0",
    turtles: {
      top: {
        color: "red",
        part: "head",
      },
      right: {
        color: "brown",
        part: "head",
      },
      bottom: {
        color: "red",
        part: "tail",
      },
      left: {
        color: "black",
        part: "tail",
      },
    },
  },

  {
    id: "1",
    turtles: {
      top: {
        color: "blue",
        part: "head",
      },
      right: {
        color: "black",
        part: "head",
      },
      bottom: {
        color: "blue",
        part: "tail",
      },
      left: {
        color: "brown",
        part: "tail",
      },
    },
  },

  {
    id: "2",
    turtles: {
      top: {
        color: "red",
        part: "head",
      },
      right: {
        color: "black",
        part: "head",
      },
      bottom: {
        color: "blue",
        part: "tail",
      },
      left: {
        color: "brown",
        part: "tail",
      },
    },
  },

  {
    id: "3",
    turtles: {
      top: {
        color: "blue",
        part: "head",
      },
      right: {
        color: "red",
        part: "head",
      },
      bottom: {
        color: "brown",
        part: "tail",
      },
      left: {
        color: "black",
        part: "tail",
      },
    },
  },

  {
    id: "4",
    turtles: {
      top: {
        color: "blue",
        part: "head",
      },
      right: {
        color: "brown",
        part: "head",
      },
      bottom: {
        color: "black",
        part: "tail",
      },
      left: {
        color: "red",
        part: "tail",
      },
    },
  },

  {
    id: "5",
    turtles: {
      top: {
        color: "blue",
        part: "head",
      },
      right: {
        color: "black",
        part: "head",
      },
      bottom: {
        color: "red",
        part: "tail",
      },
      left: {
        color: "brown",
        part: "tail",
      },
    },
  },

  {
    id: "6",
    turtles: {
      top: {
        color: "red",
        part: "head",
      },
      right: {
        color: "blue",
        part: "head",
      },
      bottom: {
        color: "black",
        part: "tail",
      },
      left: {
        color: "brown",
        part: "tail",
      },
    },
  },

  {
    id: "7",
    turtles: {
      top: {
        color: "red",
        part: "head",
      },
      right: {
        color: "brown",
        part: "head",
      },
      bottom: {
        color: "blue",
        part: "tail",
      },
      left: {
        color: "black",
        part: "tail",
      },
    },
  },

  {
    id: "8",
    turtles: {
      top: {
        color: "blue",
        part: "head",
      },
      right: {
        color: "black",
        part: "head",
      },
      bottom: {
        color: "red",
        part: "tail",
      },
      left: {
        color: "brown",
        part: "tail",
      },
    },
  },
];
