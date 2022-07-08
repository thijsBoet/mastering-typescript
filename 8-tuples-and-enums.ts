let myTuple: [string, number] = ['hello', 4];

const color: [number, number, number] = [255, 255, 255];
// Cannot change order of elements in tuple
type HTTPResponse = [number, string];
const OK: HTTPResponse = [200, 'OK'];
// Does not complain after creation of Tuple
OK.push('hello');
OK.pop()
OK.pop()
const responses: HTTPResponse[] = [OK, [404, 'Not Found']];

enum Role {
	admin = 'admin',
	user = 'user',
	guest = 'guest'
}
const user1234: Role = Role.admin;

enum OrderStatus {
	PENDING, 	// 0
	SHIPPED, 	// 1
	DELIVERED,// 2
	RETURNED, // 3
}
const myStatus = OrderStatus.DELIVERED;

const isDelivered = (status: OrderStatus): boolean => status === OrderStatus.DELIVERED;

isDelivered(OrderStatus.RETURNED)

enum ArrowKeys {
	LEFT = 'ArrowLeft',
	RIGHT = 'ArrowRight',
	UP = 'ArrowUp',
	DOWN = 'ArrowDown'
}
ArrowKeys.LEFT