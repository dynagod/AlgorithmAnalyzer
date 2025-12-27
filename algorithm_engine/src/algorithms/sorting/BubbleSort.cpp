#include <iostream>
#include "algorithms/sorting/BubbleSort.h"

namespace algorithms {
    namespace sorting {
        std::string BubbleSort::name() const {
            return "Bubble Sort";
        }

        void BubbleSort::run() const {
            std::cout << "Running the Bubble Sort algorithm....\n";
        }
    }
}