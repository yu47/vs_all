
#include <list>
#include "ObserverFirstChild.h"
#include "ObserverSecondChild.h"

class NotifyBase {
   public:
    void Add(ObserverBase *ob) { observers.emplace_back(ob); };

    void Remove(ObserverBase *ob) { observers.remove(ob); }

    void Notify() {
        for (auto observer : observers) {
            observer->Update();
        }
    }

   private:
    std::list<ObserverBase *> observers;
};

int main() {
    ObserverBase *base1 = new ObserverFirstChild();
    ObserverBase *base2 = new ObserverSecondChild();

    NotifyBase notify;
    notify.Add(base2);
    notify.Add(base1);
    notify.Notify();
    notify.Remove(base1);
    notify.Notify();

    delete base2;
    delete base1;
    return 0;
}