#include <iostream>
#include "algorithms/sorting/QuickSort.h"

namespace algorithms {
    namespace sorting {
        std::string QuickSort::name() const {
            return "Quick Sort";
        }

        void QuickSort::run() const {
            std::cout << "Running the Quick Sort algorithm....\n";
        }
    }
}