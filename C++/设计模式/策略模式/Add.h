#ifndef __ADD__
#define __ADD__

#include "Calculation.h"

class Add : public Calculation {
    void operation() override { std::cout << "this is add operation" << std::endl; }
};

#endif