import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calculator, 
  Shapes, 
  TrendingUp, 
  Brain, 
  Globe, 
  Cpu, 
  ChevronRight, 
  Home as HomeIcon, 
  BookOpen,
  Menu,
  X,
  ArrowRight,
  FunctionSquare,
  Compass,
  Activity
} from 'lucide-react';

// --- Components ---

const Navbar = ({ currentPage, setCurrentPage }: { currentPage: string, setCurrentPage: (p: string) => void }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: <HomeIcon size={18} /> },
    { id: 'topics', label: 'Topics', icon: <BookOpen size={18} /> },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setCurrentPage('home')}>
            <div className="p-2 bg-blue-600 rounded-lg text-white">
              <Calculator size={24} />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">MathSphere</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors rounded-md ${
                  currentPage === item.id 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                }`}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-slate-600 hover:text-blue-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`flex items-center gap-3 w-full px-4 py-3 text-base font-medium rounded-lg ${
                    currentPage === item.id 
                      ? 'text-blue-600 bg-blue-50' 
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {item.icon}
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-slate-900 text-slate-400 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 text-white mb-4">
            <Calculator size={20} />
            <span className="text-lg font-bold">MathSphere</span>
          </div>
          <p className="text-sm leading-relaxed">
            Exploring the beauty and power of mathematics to understand our world better.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Resources</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Newsletter</h4>
          <p className="text-sm mb-4">Stay updated with new mathematical insights.</p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Email address" 
              className="bg-slate-800 border-none rounded-md px-3 py-2 text-sm w-full focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
              Join
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs">
        &copy; {new Date().getFullYear()} MathSphere. All rights reserved.
      </div>
    </div>
  </footer>
);

const HomePage = ({ onExplore }: { onExplore: () => void }) => {
  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_45%_at_50%_50%,rgba(59,130,246,0.1)_0%,rgba(255,255,255,0)_100%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6">
              Welcome to <span className="text-blue-600">MathSphere</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10">
              Mathematics is one of the most powerful tools humans have ever developed. It helps us understand patterns, solve problems, and explain how the world works.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={onExplore}
                className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 flex items-center gap-2 group"
              >
                Start Exploring
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-full font-semibold text-lg hover:bg-slate-50 transition-all">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-bold text-slate-900">What is MathSphere?</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              MathSphere is a website designed to introduce and explain mathematical ideas in a simple and engaging way. Whether you are a student or simply curious about numbers, this site will help you explore the beauty of mathematics.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              From basic counting to advanced scientific discoveries, mathematics plays an essential role in everyday life.
            </p>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4">
            <div className="aspect-square bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
              <Calculator size={48} />
            </div>
            <div className="aspect-square bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600">
              <Shapes size={48} />
            </div>
            <div className="aspect-square bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600">
              <TrendingUp size={48} />
            </div>
            <div className="aspect-square bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600">
              <Brain size={48} />
            </div>
          </div>
        </div>
      </section>

      {/* Importance Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Mathematics Is Important</h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Problem Solving",
              desc: "Mathematics teaches logical thinking and problem-solving skills that are useful in many areas of life, including science, engineering, and finance.",
              icon: <Brain className="text-blue-600" size={32} />,
              color: "bg-blue-50"
            },
            {
              title: "Understanding the World",
              desc: "Many natural phenomena follow mathematical patterns. Mathematics helps scientists understand things like weather systems, space movement, and biological growth.",
              icon: <Globe className="text-emerald-600" size={32} />,
              color: "bg-emerald-50"
            },
            {
              title: "Technology and Innovation",
              desc: "Modern technology depends heavily on mathematics. Computers, artificial intelligence, and engineering all rely on mathematical principles.",
              icon: <Cpu className="text-amber-600" size={32} />,
              color: "bg-amber-50"
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all"
            >
              <div className={`w-16 h-16 ${item.color} rounded-xl flex items-center justify-center mb-6`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Main Areas Section */}
      <section className="bg-slate-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Main Areas of Mathematics</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Mathematics is a vast field, but it can be broadly categorized into several key pillars.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Algebra",
                desc: "Algebra studies relationships between numbers and variables and is used to solve equations and analyze patterns.",
                icon: <FunctionSquare size={24} />
              },
              {
                title: "Geometry",
                desc: "Geometry focuses on shapes, sizes, angles, and spatial relationships.",
                icon: <Compass size={24} />
              },
              {
                title: "Calculus",
                desc: "Calculus helps us understand change and motion and is widely used in physics and engineering.",
                icon: <Activity size={24} />
              }
            ].map((item, idx) => (
              <div key={idx} className="group p-8 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-blue-500/50 transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-blue-600/20 text-blue-400 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-all">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                </div>
                <p className="text-slate-400 leading-relaxed mb-6">{item.desc}</p>
                <button 
                  onClick={onExplore}
                  className="text-blue-400 font-medium flex items-center gap-2 hover:text-blue-300 transition-colors"
                >
                  Learn more <ChevronRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-blue-600 rounded-3xl p-12 text-white shadow-2xl shadow-blue-200">
          <h2 className="text-3xl font-bold mb-6">Ready to dive deeper?</h2>
          <p className="text-blue-100 text-lg mb-8">
            Explore the Mathematics Topics page to learn more about important mathematical concepts.
          </p>
          <button 
            onClick={onExplore}
            className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all"
          >
            Explore Topics
          </button>
        </div>
      </section>
    </div>
  );
};

const TopicsPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-3xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Mathematics Topics</h1>
        <p className="text-xl text-slate-600">
          Delve into the core branches that form the foundation of modern mathematical thought.
        </p>
      </motion.div>

      {/* Algebra Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-bold uppercase tracking-wider">
            <FunctionSquare size={16} />
            Algebra
          </div>
          <h2 className="text-3xl font-bold text-slate-900">The Language of Symbols</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Algebra is the branch of mathematics that deals with symbols and equations. Instead of working only with numbers, algebra introduces variables such as <span className="font-mono font-bold text-blue-600">x</span> and <span className="font-mono font-bold text-blue-600">y</span> to represent unknown values. This allows mathematicians to solve complex problems and model real-world situations.
          </p>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <p className="text-sm font-medium text-slate-500 mb-2">Example equation:</p>
            <p className="text-2xl font-mono font-bold text-slate-900">2x + 5 = 15</p>
          </div>
        </div>
        <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 grid grid-cols-2 gap-4">
          <div className="h-40 bg-blue-50 rounded-2xl flex items-center justify-center text-4xl font-mono font-bold text-blue-200">f(x)</div>
          <div className="h-40 bg-slate-50 rounded-2xl flex items-center justify-center text-4xl font-mono font-bold text-slate-200">∑</div>
          <div className="h-40 bg-slate-50 rounded-2xl flex items-center justify-center text-4xl font-mono font-bold text-slate-200">√</div>
          <div className="h-40 bg-blue-50 rounded-2xl flex items-center justify-center text-4xl font-mono font-bold text-blue-200">π</div>
        </div>
      </section>

      {/* Geometry Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 bg-white p-8 rounded-3xl shadow-xl border border-slate-100 flex items-center justify-center min-h-[300px]">
          <div className="relative w-48 h-48">
            <div className="absolute inset-0 border-4 border-emerald-500 rounded-full opacity-20" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[60px] border-l-transparent border-r-[60px] border-r-transparent border-b-[100px] border-b-emerald-500" />
            <div className="absolute bottom-0 left-0 w-32 h-32 border-4 border-emerald-500 rotate-45 opacity-40" />
          </div>
        </div>
        <div className="order-1 lg:order-2 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-sm font-bold uppercase tracking-wider">
            <Compass size={16} />
            Geometry
          </div>
          <h2 className="text-3xl font-bold text-slate-900">Shapes and Space</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Geometry studies shapes, sizes, and the properties of space. It includes concepts such as triangles, circles, angles, and lines. Geometry is used in architecture, engineering, and design.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {['Triangles', 'Squares', 'Circles', 'Polygons'].map((shape) => (
              <div key={shape} className="flex items-center gap-3 px-4 py-3 bg-emerald-50 text-emerald-700 rounded-xl font-medium">
                <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                {shape}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculus Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 text-amber-600 rounded-full text-sm font-bold uppercase tracking-wider">
            <Activity size={16} />
            Calculus
          </div>
          <h2 className="text-3xl font-bold text-slate-900">The Study of Change</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Calculus is the study of change and motion. It helps scientists analyze things that are constantly changing, such as speed, population growth, or the movement of planets.
          </p>
          <div className="space-y-4">
            <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4">
              <div className="w-10 h-10 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center shrink-0 font-bold">D</div>
              <div>
                <h4 className="font-bold text-slate-900">Differential Calculus</h4>
                <p className="text-slate-500 text-sm">Focuses on rates of change and slopes of curves.</p>
              </div>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4">
              <div className="w-10 h-10 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center shrink-0 font-bold">I</div>
              <div>
                <h4 className="font-bold text-slate-900">Integral Calculus</h4>
                <p className="text-slate-500 text-sm">Focuses on accumulation of quantities and areas under curves.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-slate-900 p-8 rounded-3xl shadow-xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 blur-3xl rounded-full" />
          <div className="relative h-64 flex items-end justify-between gap-2">
            {[40, 70, 45, 90, 65, 80, 50, 100, 75].map((h, i) => (
              <motion.div 
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ delay: i * 0.1, duration: 1 }}
                className="w-full bg-amber-500/40 rounded-t-lg border-t border-amber-400"
              />
            ))}
          </div>
          <div className="mt-4 text-center text-amber-400 font-mono text-sm">Motion & Change Analysis</div>
        </div>
      </section>

      {/* Real-World Uses Section */}
      <section className="bg-slate-50 rounded-3xl p-12 border border-slate-200">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Real-World Uses of Mathematics</h2>
          <p className="text-slate-600">Mathematics isn't just theory—it's the engine of our modern civilization.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Engineering', desc: 'Designing bridges, buildings, and machines.', icon: <Compass /> },
            { title: 'Finance', desc: 'Managing money, investments, and economic systems.', icon: <TrendingUp /> },
            { title: 'Computer Science', desc: 'Creating algorithms and software.', icon: <Cpu /> },
            { title: 'Science', desc: 'Understanding the laws of nature.', icon: <Globe /> }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <div className="text-blue-600 mb-4">{item.icon}</div>
              <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
              <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Conclusion */}
      <section className="text-center max-w-3xl mx-auto pb-20">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Conclusion</h2>
        <p className="text-lg text-slate-600 leading-relaxed mb-8">
          Mathematics is a universal language that helps us describe and understand the world. By learning mathematics, we gain powerful tools to solve problems, innovate, and explore new possibilities.
        </p>
        <div className="inline-block p-1 bg-blue-100 rounded-full">
          <div className="px-6 py-2 bg-white rounded-full text-blue-600 font-bold text-sm">
            Keep Exploring, Keep Learning
          </div>
        </div>
      </section>
    </div>
  );
};

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {currentPage === 'home' ? (
            <motion.div
              key="home"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <HomePage onExplore={() => setCurrentPage('topics')} />
            </motion.div>
          ) : (
            <motion.div
              key="topics"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <TopicsPage />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
