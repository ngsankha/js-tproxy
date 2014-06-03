// Tests for transparent proxies

var transparent = true;

var obj1 = { valueOf: function() {
  return 5;
}};

var obj2 = { valueOf: function() {
  return 5;
}};

var handler = { isTransparent: function() {
  return transparent;
}};

var p = new Proxy(obj1, handler);

// transparent proxy is equal to target object
assertEq(p == obj1, true);
assertEq(p === obj1, true);
// transparent proxy is not equal to similar target object
assertEq(p == obj2, false);

transparent = false;
// opaque proxy is equal to target object
assertEq(p == obj1, false);
// opaque proxy is not equal to similar target object
assertEq(p == obj2, false);
