// Tests for transparent proxies behaviour in Map, Set, WeakMap

var obj = { x: 8 };

// tests for transparent proxies

var transparent = new TransparentProxy(obj, {});

// check if transparent proxies behave properly with Map
var m = new Map();
m.set(transparent, 2);
assertEq(m.has(obj), true);
assertEq(m.get(obj), 2);

// check if transparent proxies behave properly with Set
var s = new Set();
s.add(transparent);
assertEq(s.has(obj), true);

// check if transparent proxies behave properly with WeakMap
var wm = new WeakMap();
wm.set(transparent, 2);
assertEq(wm.has(obj), true);
assertEq(wm.get(obj), 2);

// make sure that our implementation didn't mess with opaque proxies

var opaque = new Proxy(obj, {});

// check if opaque proxies behave properly with Map
var m = new Map();
m.set(opaque, 2);
assertEq(m.has(obj), false);
assertEq(m.get(obj), undefined);

// check if opaque proxies behave properly with Set
var s = new Set();
s.add(opaque);
assertEq(s.has(obj), false);

// check if opaque proxies behave properly with WeakMap
var wm = new WeakMap();
wm.set(opaque, 2);
assertEq(wm.has(obj), false);
assertEq(wm.get(obj), undefined);
