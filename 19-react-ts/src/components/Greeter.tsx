import React, { JSXElementConstructor } from 'react';

interface Props {
	person: string;
}

const Greeter = ({person}: Props): JSX.Element => {
	return <h1>Hej, {person}</h1>;
};

// React.FC discouraged older syntax
// const Greeter: React.FC = () => {
// 	return (
// 		<h1>Hello</h1>
// 	);
// }

export default Greeter;
