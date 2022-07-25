import axios from 'axios' // comes with own typescript declaration file index.d.ts
// Can add type declaration with consumer npm install @types/lodash
import _ from 'lodash' // without type declaration file
const baseUrl = "https://jsonplaceholder.typicode.com"

_.sample([1,2,3,4,5,6,7,8,9,10])

interface User {
	id: number;
	name: string;
	username: string;
	email: string;
	address: {
		street: string;
		suite: string;
		city: string;
		zipcode: string;
		geo: {
			lat: string;
			lng: string;
		};
	};
	phone: string;
	website: string;
	company: {
		name: string;
		catchPhrase: string;
		bs: string;
	};
}

// Get request returns of type User
axios
	.get<User[]>(`${baseUrl}/users`)
	.then(res => res.data.forEach(printUser))
	.catch(err => console.log(err))

function printUser(user: User) {
	console.log(user.name)
	console.log(user.email);
	console.log(user.phone);
	console.log('------------------------------');
}