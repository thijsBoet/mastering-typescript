var myTuple = ['hello', 4];
var color = [255, 255, 255];
var OK = [200, 'OK'];
// Does not complain after creation of Tuple
OK.push('hello');
OK.pop();
OK.pop();
var responses = [OK, [404, 'Not Found']];
var Role;
(function (Role) {
    Role["admin"] = "admin";
    Role["user"] = "user";
    Role["guest"] = "guest";
})(Role || (Role = {}));
var user1234 = Role.admin;
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["PENDING"] = 0] = "PENDING";
    OrderStatus[OrderStatus["SHIPPED"] = 1] = "SHIPPED";
    OrderStatus[OrderStatus["DELIVERED"] = 2] = "DELIVERED";
    OrderStatus[OrderStatus["RETURNED"] = 3] = "RETURNED";
})(OrderStatus || (OrderStatus = {}));
var myStatus = OrderStatus.DELIVERED;
var isDelivered = function (status) { return status === OrderStatus.DELIVERED; };
isDelivered(OrderStatus.RETURNED);
var ArrowKeys;
(function (ArrowKeys) {
    ArrowKeys["LEFT"] = "ArrowLeft";
    ArrowKeys["RIGHT"] = "ArrowRight";
    ArrowKeys["UP"] = "ArrowUp";
    ArrowKeys["DOWN"] = "ArrowDown";
})(ArrowKeys || (ArrowKeys = {}));
ArrowKeys.LEFT;
