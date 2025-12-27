#include <iostream>
#include "engine/Engine.h"
#include "algorithms/sorting/BubbleSort.h"
#include "algorithms/sorting/QuickSort.h"

int main() {
    engine::Engine eng;
    eng.hello();

    algorithms::sorting::BubbleSort bubbleAlgo;
    std::cout << "Algorithm name: " << bubbleAlgo.name() << "\n";
    bubbleAlgo.run();

    algorithms::sorting::QuickSort quickAlgo;
    std::cout << "Algorithm name: " << quickAlgo.name() << "\n";
    quickAlgo.run();

    return 0;
}