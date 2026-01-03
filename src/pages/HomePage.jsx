import React from 'react';

const HomePage = () => {
  return (
    <>
      <div className="min-h-screen bg-black text-white">
        {/* Navbar */}
        <nav className="border-b border-gray-800">
          <div className="container mx-auto px-6 py-8">
            <div className="flex items-center justify-between">
              <h1 className="text-4xl font-bold bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                AlgoVisualizer
              </h1>
              <div className="hidden md:flex space-x-8 text-gray-300">
                <a href="#" className="hover:text-cyan-400 transition">Home</a>
                <a href="#" className="hover:text-cyan-400 transition">Visualizers</a>
                <a href="#" className="hover:text-cyan-400 transition">About</a>
                <a href="#" className="hover:text-cyan-400 transition">GitHub</a>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="container mx-auto px-6 py-24 text-center">
          <h2 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight">
            See Algorithms <br />
            <span className="bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Come to Life
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto">
            Interactive visualizations of sorting, searching, pathfinding, graphs, and more. 
            Built for learners, educators, and interview preparation.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-10 py-5 bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl text-xl font-semibold transition transform hover:scale-105 shadow-2xl shadow-cyan-500/20">
              Start Visualizing
            </button>
            <button className="px-10 py-5 border border-gray-700 hover:border-cyan-500 rounded-xl text-xl font-semibold transition hover:bg-gray-900">
              View on GitHub
            </button>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="container mx-auto px-6 pb-32">
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-100">
            Explore Algorithm Categories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Sorting */}
            <div className="group relative bg-gray-900/50 backdrop-blur border border-gray-800 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500 transform hover:-translate-y-3 shadow-xl">
              <div className="absolute inset-0 bg-linear-to-br from-cyan-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img
                src="https://repository-images.githubusercontent.com/295222188/2ab41f00-f69c-11ea-9fa5-5671fc8a3d17"
                alt="Sorting visualization"
                className="w-full h-72 object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="relative p-8">
                <h4 className="text-3xl font-bold mb-4">Sorting Algorithms</h4>
                <p className="text-gray-400 mb-8">
                  Watch Bubble Sort, Quick Sort, Merge Sort, and others animate in real-time with colorful bars.
                </p>
                <button className="px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-lg font-medium transition">
                  Explore Sorting →
                </button>
              </div>
            </div>

            {/* Pathfinding */}
            <div className="group relative bg-gray-900/50 backdrop-blur border border-gray-800 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500 transform hover:-translate-y-3 shadow-xl">
              <div className="absolute inset-0 bg-linear-to-br from-purple-500/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img
                src="https://repository-images.githubusercontent.com/764221468/e524a701-2600-4563-93a1-49356fe4fff9"
                alt="Pathfinding grid"
                className="w-full h-72 object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="relative p-8">
                <h4 className="text-3xl font-bold mb-4">Pathfinding</h4>
                <p className="text-gray-400 mb-8">
                  Visualize A*, Dijkstra, BFS, and DFS finding optimal paths through grids and mazes.
                </p>
                <button className="px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-lg font-medium transition">
                  Explore Pathfinding →
                </button>
              </div>
            </div>

            {/* Graph Algorithms */}
            <div className="group relative bg-gray-900/50 backdrop-blur border border-gray-800 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500 transform hover:-translate-y-3 shadow-xl flex flex-col justify-center items-center text-center p-12">
              <div className="text-8xl mb-6 opacity-20 group-hover:opacity-40 transition">
                🔗
              </div>
              <h4 className="text-3xl font-bold mb-4">Graph Algorithms</h4>
              <p className="text-gray-400 mb-8 max-w-xs">
                DFS, BFS, Dijkstra, Kruskal, and more — coming soon.
              </p>
              <span className="text-sm text-gray-500">Stay tuned!</span>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-800 py-10 text-center text-gray-500">
          <p>© 2025 AlgoVisualizer • Built with React + Vite + Tailwind CSS</p>
          <p className="mt-2 text-sm">Open source • Contributions welcome</p>
        </footer>
      </div>
    </>
  );
};

export default HomePage;