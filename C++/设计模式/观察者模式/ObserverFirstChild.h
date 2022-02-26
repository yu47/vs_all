#ifndef __OBSERVER_FIRST_CHILD__
#define __OBSERVER_FIRST_CHILD__

#include "ObserverBase.h"

class ObserverFirstChild : public ObserverBase {
    void Update() override {
        std::cout << "first child receive notify" << std::endl;
    }
};

#endif