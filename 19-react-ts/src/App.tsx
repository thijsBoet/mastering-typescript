import React, { useState } from 'react';
import Item from './models/Item';
import ShoppingListForm from './components/ShoppingListForm';
import ShoppingList from './components/ShoppingList';

import Greeter from './components/Greeter';

import './App.css';

function App() {
	const [items, setItems] = useState<Item[]>([]);
	const randomId = () => Math.floor(Math.random() * 1000) * Date.now();
	const addItem = (product: string, quantity: number) => {
		setItems([
			...items,
			{
				id: randomId(),
				product,
				quantity,
			},
		]);
	};
	// const items = [
	// 	{ id: 1, product: 'Milk', quantity: 1 },
	// 	{ id: 2, product: 'Bread', quantity: 2 },
	// 	{ id: 3, product: 'Eggs', quantity: 12 },
	// ];
	return (
		<div>
			<ShoppingList items={items} />
			<ShoppingListForm onAddItem={addItem} />
		</div>
	);
}

export default App;
