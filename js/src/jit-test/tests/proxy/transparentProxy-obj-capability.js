// tests for Transparent proxy capability object

// test with secret being an object
var obj = { x: 7 };
var secretObj = { key: "abc" };

var p = new TransparentProxy(obj, {}, secretObj);
var q = new TransparentProxy(obj, {});

assertEq(p, q);
assertEq(p, obj);
assertEq(q, obj);
assertEq(Object.equals(p, obj), true);
assertEq(Object.equals(p, obj, secretObj), false);
assertEq(Object.equals(p, q), true);
assertEq(Object.equals(p, q, secretObj), false);

// test with object being a primitive value
obj = { x: 7 };
secret = "abc";

p = new TransparentProxy(obj, {}, secret);
q = new TransparentProxy(obj, {});

assertEq(p, q);
assertEq(p, obj);
assertEq(q, obj);
assertEq(Object.equals(p, obj), true);
assertEq(Object.equals(p, obj, secret), false);
assertEq(Object.equals(p, q), true);
assertEq(Object.equals(p, q, secret), false);
assertEq(Object.equals(p, q, secretObj), true);
