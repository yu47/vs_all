#ifndef __OBSERVER_SECOND_CHILD__
#define __OBSERVER_SECOND_CHILD__

#include "ObserverBase.h"

class ObserverSecondChild : public ObserverBase {
    void Update() override {
        std::cout << "second child receive notify" << std::endl;
    }
};

#endif