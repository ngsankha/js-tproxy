// Tests for transparent proxies

var obj1 = { valueOf: () => 5 };

var obj2 = { valueOf: () => 5 };

var transparent = new TransparentProxy(obj1, {});

// transparent proxy is equal to target object
assertEq(transparent == obj1, true);
assertEq(transparent === obj1, true);
// transparent proxy is not equal to similar target object
assertEq(transparent == obj2, false);

transparent = false;
// opaque proxy is equal to target object
assertEq(transparent == obj1, false);
// opaque proxy is not equal to similar target object
assertEq(transparent == obj2, false);
