/* -*- Mode: C++; tab-width: 8; indent-tabs-mode: nil; c-basic-offset: 4 -*-
 * vim: set ts=8 sts=4 et sw=4 tw=99:
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

#ifndef Logging_h
#define Logging_h

#include "jsalloc.h"
#include "js/TypeDecls.h"

namespace js {

class Logging {
private:
  int type1a, type1b, type2a, type2b;

public:
  Logging();
  ~Logging();
  void log(JSContext *cx, JS::Value lhs, JS::Value rhs, bool result);
  static Logging* logger;
  static void releaseLogger();
};

}

#endif /* Logging_h */
