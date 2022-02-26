#ifndef __CALCULATION__
#define __CALCULATION__

#include <iostream>

class Calculation {
   public:
    Calculation() {}

    virtual ~Calculation() {}

    virtual void operation() { std::cout << "base operation" << std::endl; }
};

#endif