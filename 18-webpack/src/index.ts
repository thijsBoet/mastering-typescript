import Dog from './Dog';
import ShelterDog from './ShelterDog';
import { add, subtract, multiply, divide } from './utils';

const elton = new Dog('Elton', 'Labrador', 2);
elton.bark();

console.log(add(1, 2));
console.log(subtract(1, 2));
console.log(multiply(1, 2));
console.log(divide(1, 2));

const buffy = new ShelterDog(
	'Buffy',
	'Labrador',
	2,
	'Desert Springs Animal Shelter'
);

buffy.bark();
