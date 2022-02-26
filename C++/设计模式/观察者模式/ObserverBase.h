#ifndef __OBSERVER__
#define __OBSERVER__

#include <iostream>

class ObserverBase {
   public:
    ObserverBase() {}
    virtual ~ObserverBase() {}

    virtual void Update() {}
};

#endif