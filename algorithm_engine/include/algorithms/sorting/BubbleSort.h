# pragma once

#include "engine/Algorithm.h"

namespace algorithms {
    namespace sorting {
        class BubbleSort : public engine::Algorithm {
        public:
            std::string name() const override;
            void run() const override;
        };
    }
}