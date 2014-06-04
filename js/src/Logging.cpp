/* -*- Mode: C++; tab-width: 8; indent-tabs-mode: nil; c-basic-offset: 4 -*-
 * vim: set ts=8 sts=4 et sw=4 tw=99:
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

#include "Logging.h"
#include <cstdlib>

#include "jsapi.h"
#include "jsscript.h"
#include "jsproxy.h"
#include "jsfun.h"

using namespace js;

Logging* Logging::logger = new Logging();

void
Logging::releaseLogger()
{
    delete logger;
    logger = NULL;
}

Logging::Logging()
{
    type1a = 0;
    type1b = 0;
    type2a = 0;
    type2b = 0;
    atexit(releaseLogger);
}

void
Logging::log(JSContext *cx, JS::Value lhs, JS::Value rhs, bool result)
{
    if (lhs.isObject() && rhs.isObject()) {
        JSObject *lobj = &lhs.toObject();
        JSObject *robj = &rhs.toObject();
        if (IsProxy(lobj) && IsProxy(robj)) {
            // Type 2.

            JSObject *ltarget = GetIdentityObject(cx, lobj);
            JSObject *rtarget = GetIdentityObject(cx, robj);

            if (ltarget == rtarget)
                type2b++;
            else
                type2a++;
        } else {
            // Type 1.
            if (IsProxy(lobj)) {
                JSObject *ltarget = GetIdentityObject(cx, lobj);
                if (ltarget == robj)
                    type1b++;
                else
                    type1a++;
            } else if (IsProxy(robj)) {
                JSObject *rtarget = GetIdentityObject(cx, robj);
                if (rtarget == lobj)
                    type1b++;
                else
                    type1a++;
            }
        }
    }
}

Logging::~Logging()
{
    printf(";%d;%d;%d;%d\n", type1a, type1b, type2a, type2b);
}
