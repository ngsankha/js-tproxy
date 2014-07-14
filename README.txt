This is fork of the mozilla-central source tree. The original repository can
be found at http://hg.mozilla.org/mozilla-central/

This is an experimental implementation of Transparent Proxies in Spidermonkey.

This adds a TransparentProxy global object. Such a proxy returns true for
equality tests if the reference of the target identity object is the same.
The implementations of Map, Set, WeakMap have also been updated for the same.
They hash against the target object for all their operations.

Instructions for building SpiderMonkey can be found on MDN at
https://developer.mozilla.org/en-US/docs/Mozilla/Projects/SpiderMonkey/Build_Documentation

Please run the configure script with --disable-gcgenerational option when
building.
