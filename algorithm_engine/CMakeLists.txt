cmake_minimum_required(VERSION 3.16)

project(algorithm_engine LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

add_executable(cli_demo
    examples/cli_demo.cpp
    src/engine/Engine.cpp
    src/algorithms/sorting/BubbleSort.cpp
    src/algorithms/sorting/QuickSort.cpp
)

target_include_directories(cli_demo
    PRIVATE
        ${CMAKE_CURRENT_SOURCE_DIR}/include
)