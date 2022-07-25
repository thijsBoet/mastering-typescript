function add(a:number, b:number):number {
	return a + b;
}

function sample<T>(arr: T[]): T {
	const index = Math.floor(Math.random() * arr.length);
	return arr[index];
}

export { add, sample };