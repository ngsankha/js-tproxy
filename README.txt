This is fork of the mozilla-central source tree. The original repository can
be found at http://hg.mozilla.org/mozilla-central/

This is an experimental implementation of Transparent Proxies in Spidermonkey.

This adds an isTransparent trap to the handler object for Proxies. When such a
proxy is subjected to equality tests, it results in a true or false after
evaluating the isTransparent trap. If the trap returns true, then the object
comparision takes place with the identity object. The implementations of Map,
Set, WeakMap have also been updated for the same. They hash against the target
object for all their operations.

Instructions for building SpiderMonkey can be found on MDN at
https://developer.mozilla.org/en-US/docs/Mozilla/Projects/SpiderMonkey/Build_Documentation

Please run the configure script with --disable-gcgenerational option when
building.

To enable the logger, run configure with the --enable-logging option. Then
after each run of the shell it will display the number of comparisions of each
type in semi-colon separated format.
