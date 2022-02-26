#ifndef __SUB__
#define __SUB__

#include "calculation.h"

class Sub : public Calculation {
    void operation() override { std::cout << "this is sub operation" << std::endl; }
};

#endif