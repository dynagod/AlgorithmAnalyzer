# pragma once

namespace engine {
    class Algorithm {
    public:
        virtual ~Algorithm() = default;
        virtual std::string name() const = 0;
        virtual void run() const = 0;
    };
}