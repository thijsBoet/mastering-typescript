const activeUsers: string[] = ["Max", "Anna"];
activeUsers.push("Margot");

const ageList: number[] = [32, 33, 34, 35];

// Alternative clunky syntax
const bool: Array<boolean> = [];

// Custom Type Array
type Point = {
	x: number;
	y: number;
}

const coords: Point[] = [];
coords.push({ x: 23, y: 8 });

// Multidimensional Arrays
const board: string[][] = [
	["X", "O", "X"],
	["O", "X", "O"],
	["X", "O", "X"]
];

const demo: number[][][] = [[[1]]];