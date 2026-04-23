import React, { useState } from 'react';
import { 
  Lock, 
  Unlock,
  Smartphone, 
  MapPin, 
  Box, 
  Clock, 
  LogOut, 
  Menu,
  X,
  ChevronRight,
  ShieldCheck,
  Briefcase,
  Users
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(email) {
      try {
        // BURAYA Google Apps Script'ten aldığınız URL'yi yapıştırın
        const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwb5aYRVUxm8KdlZEGEjAeWqjWwJ7E-WVov9lsTVgRZASU-C6HxurzqwPjP0z241Aye7Q/exec';
        
        await fetch(SCRIPT_URL, {
          method: 'POST',
          body: JSON.stringify({ email: email }),
        });
        
        setSubmitted(true);
        setEmail('');
      } catch (error) {
        console.error("Hata!", error);
        alert("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900 selection:bg-red-200 selection:text-red-900">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2 group cursor-pointer">
              <div className="bg-red-600 p-2 rounded-md text-white group-hover:bg-red-700 transition-colors">
                <Lock size={20} className="hidden group-hover:block" />
                <Unlock size={20} className="block group-hover:hidden" />
              </div>
              <span className="text-xl font-black tracking-tight text-zinc-900">
                LockUp! <span className="text-red-600">Campus</span>
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#problem" className="text-sm font-semibold text-zinc-600 hover:text-red-600 transition-colors">The Problem</a>
              <a href="#features" className="text-sm font-semibold text-zinc-600 hover:text-red-600 transition-colors">Features</a>
              <a href="#how-it-works" className="text-sm font-semibold text-zinc-600 hover:text-red-600 transition-colors">How it Works</a>
              <a href="#team" className="text-sm font-semibold text-zinc-600 hover:text-red-600 transition-colors">Team</a>
              <a href="#wishlist" className="px-5 py-2.5 rounded-md bg-red-600 text-white text-sm font-bold shadow-md hover:bg-red-700 hover:shadow-lg transition-all transform hover:-translate-y-0.5">
                Join Wishlist
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-zinc-600 hover:text-red-600 transition-colors">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-zinc-100 px-4 pt-2 pb-4 space-y-1 shadow-2xl absolute w-full">
            <a href="#problem" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-semibold text-zinc-700 hover:bg-red-50 hover:text-red-600 rounded-md">The Problem</a>
            <a href="#features" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-semibold text-zinc-700 hover:bg-red-50 hover:text-red-600 rounded-md">Features</a>
            <a href="#how-it-works" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-semibold text-zinc-700 hover:bg-red-50 hover:text-red-600 rounded-md">How it Works</a>
            <a href="#team" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-semibold text-zinc-700 hover:bg-red-50 hover:text-red-600 rounded-md">Team</a>
            <a href="#wishlist" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-bold text-red-600 bg-red-50 rounded-md mt-4">Join Wishlist</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
        {/* Abstract Background patterns */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-50 to-transparent opacity-70"></div>
          <div className="absolute -top-48 -right-48 w-96 h-96 rounded-full border-[40px] border-red-100 opacity-50"></div>
          <div className="absolute top-1/2 -left-24 w-64 h-64 bg-red-100 rounded-full blur-3xl opacity-40"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center">
          <div className="lg:w-3/5 text-center lg:text-left pr-0 lg:pr-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-700 text-sm font-bold mb-8 border border-red-200">
              <ShieldCheck size={18} className="mr-2" /> Your private space on Campus
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-zinc-900 leading-tight mb-6 tracking-tight">
              Safe, secure, <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">
                convenient.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-600 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              From handbags to sports attires, instruments, books, devices or any other belongings, <strong>LockUp!</strong> specialized lockers provide you the safe, comfortable and customizable solution for personal storage.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#wishlist" className="inline-flex justify-center items-center px-8 py-4 text-lg font-bold rounded-md text-white bg-red-600 hover:bg-red-700 shadow-xl shadow-red-600/30 transition-all hover:-translate-y-1">
                Join Wishlist <ChevronRight size={20} className="ml-2" />
              </a>
              <a href="#problem" className="inline-flex justify-center items-center px-8 py-4 text-lg font-bold rounded-md text-zinc-700 bg-white border-2 border-zinc-200 hover:border-red-600 hover:text-red-600 transition-all">
                Learn More
              </a>
            </div>
          </div>
          
          {/* Locker Mockup Graphic */}
          <div className="lg:w-2/5 mt-16 lg:mt-0 relative w-full max-w-md mx-auto">
            <div className="grid grid-cols-2 gap-3 p-4 bg-zinc-200 rounded-xl shadow-2xl border-4 border-zinc-300 transform lg:rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Locker 1 */}
              <div className="bg-white p-4 rounded-md shadow-inner flex flex-col items-center justify-center aspect-square border-2 border-zinc-100 relative group cursor-pointer">
                <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500"></div>
                <Lock size={32} className="text-zinc-400 mb-2" />
                <span className="text-xs font-bold text-zinc-400">01</span>
              </div>
              {/* Locker 2 - Active */}
              <div className="bg-red-600 p-4 rounded-md shadow-[inset_0_-4px_0_rgba(0,0,0,0.2)] flex flex-col items-center justify-center aspect-square relative transform scale-105 z-10 cursor-pointer">
                <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                <Smartphone size={32} className="text-white mb-2" />
                <span className="text-xs font-bold text-red-200">YOURS</span>
                <div className="absolute -bottom-10 bg-zinc-900 text-white text-xs py-1 px-3 rounded-full font-semibold whitespace-nowrap shadow-lg">
                  Unlocked via App
                </div>
              </div>
              {/* Locker 3 */}
              <div className="bg-white p-4 rounded-md shadow-inner flex flex-col items-center justify-center aspect-square border-2 border-zinc-100 relative cursor-pointer">
                <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500"></div>
                <Lock size={32} className="text-zinc-400 mb-2" />
                <span className="text-xs font-bold text-zinc-400">03</span>
              </div>
              {/* Locker 4 */}
              <div className="bg-white p-4 rounded-md shadow-inner flex flex-col items-center justify-center aspect-square border-2 border-zinc-100 relative cursor-pointer">
                <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500"></div>
                <Lock size={32} className="text-zinc-400 mb-2" />
                <span className="text-xs font-bold text-zinc-400">04</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section id="problem" className="py-24 bg-white border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-2">
              <div className="p-10 lg:p-16 bg-red-600 text-white flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-black mb-6 leading-tight">
                  Do you take long commutes to campus carrying your belongings over and over again?
                </h2>
                <p className="text-red-100 text-lg mb-8 font-medium">
                  ...because there is nowhere to store them safely?
                </p>
                <div className="space-y-6 mt-auto">
                  <div className="flex items-start">
                    <div className="text-4xl font-black mr-4 pt-1 text-red-200">50%</div>
                    <p className="text-sm font-medium text-red-50">of every METU student takes commutes longer than 45 minutes everyday, round trip.</p>
                  </div>
                  <div className="flex items-start">
                    <div className="text-4xl font-black mr-4 pt-1 text-red-200">90%</div>
                    <p className="text-sm font-medium text-red-50">of these students carry some type of belonging with them every time they go to school, and 94% take them back home.</p>
                  </div>
                </div>
              </div>
              <div className="p-10 lg:p-16 text-zinc-300 flex flex-col justify-center relative">
                {/* Decorative quotes */}
                <div className="absolute top-8 left-8 text-7xl text-zinc-800 font-serif leading-none">"</div>
                <h3 className="text-2xl font-bold text-white mb-6 relative z-10 mt-6">
                  To fix this strenuous problem, we have come up with the solution our campus had been long needing.
                </h3>
                <p className="text-lg leading-relaxed text-zinc-400 mb-8">
                  <strong className="text-red-500 font-bold">Personalized lockers!</strong> With LockUp!, you can rent your personal lockers for how long you want, store whatever you want, and access whenever or wherever you are using our mobile app.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 rounded-full bg-zinc-800 flex items-center justify-center text-red-500">
                    <Briefcase size={24} />
                  </div>
                  <div className="h-12 w-12 rounded-full bg-zinc-800 flex items-center justify-center text-red-500">
                    <Smartphone size={24} />
                  </div>
                  <div className="h-12 w-12 rounded-full bg-zinc-800 flex items-center justify-center text-red-500">
                    <Clock size={24} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-red-600 font-bold tracking-wide uppercase text-sm mb-2">Why LockUp!</h2>
            <h3 className="text-3xl md:text-4xl font-black text-zinc-900">Designed for your convenience</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-xl p-8 border border-zinc-200 shadow-sm hover:shadow-xl hover:border-red-200 transition-all group">
              <div className="w-14 h-14 bg-red-50 border border-red-100 rounded-md flex items-center justify-center text-red-600 mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
                <MapPin size={28} />
              </div>
              <h4 className="text-xl font-bold text-zinc-900 mb-3">Convenient locations</h4>
              <p className="text-zinc-600 leading-relaxed">
                Our lockers will be deployed in department buildings, sports facilities, and the library. Just so you can access it easily!
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white rounded-xl p-8 border border-zinc-200 shadow-sm hover:shadow-xl hover:border-red-200 transition-all group">
              <div className="w-14 h-14 bg-red-50 border border-red-100 rounded-md flex items-center justify-center text-red-600 mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
                <Box size={28} />
              </div>
              <h4 className="text-xl font-bold text-zinc-900 mb-3">Different lockers, for different needs!</h4>
              <p className="text-zinc-600 leading-relaxed">
                You don't have to rent a whole wardrobe if you are only going to store your hygiene products. LockUp! lets you choose how much space you need between various options.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white rounded-xl p-8 border border-zinc-200 shadow-sm hover:shadow-xl hover:border-red-200 transition-all group">
              <div className="w-14 h-14 bg-red-50 border border-red-100 rounded-md flex items-center justify-center text-red-600 mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
                <LogOut size={28} />
              </div>
              <h4 className="text-xl font-bold text-zinc-900 mb-3">You don't need it anymore? Exit instantly!</h4>
              <p className="text-zinc-600 leading-relaxed">
                LockUp! charges by duration. If you are going to store only for a five hours, do so! You can exit the service whenever you feel like it.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-xl p-8 border border-zinc-200 shadow-sm hover:shadow-xl hover:border-red-200 transition-all group">
              <div className="w-14 h-14 bg-red-50 border border-red-100 rounded-md flex items-center justify-center text-red-600 mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
                <Smartphone size={28} />
              </div>
              <h4 className="text-xl font-bold text-zinc-900 mb-3">Mobile app integration</h4>
              <p className="text-zinc-600 leading-relaxed">
                Access from your home. You can remotely lock or unlock your lockers, change the password, or access the features of your locker through our mobile app.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section id="how-it-works" className="py-24 bg-white border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-zinc-900">How it works?</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mt-6"></div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-zinc-200 z-0"></div>

            {/* Step 1 */}
            <div className="relative z-10 flex flex-col items-center text-center max-w-xs mb-12 md:mb-0">
              <div className="w-20 h-20 bg-white border-4 border-red-600 rounded-md flex items-center justify-center text-2xl font-black text-red-600 mb-6 shadow-lg shadow-red-100 transform rotate-3">
                1
              </div>
              <h4 className="text-xl font-bold text-zinc-900 mb-3">Choose</h4>
              <p className="text-zinc-600 font-medium">You can choose whatever locker you want, depending on your needs.</p>
            </div>

            {/* Step 2 */}
            <div className="relative z-10 flex flex-col items-center text-center max-w-xs mb-12 md:mb-0">
              <div className="w-20 h-20 bg-red-600 rounded-md flex items-center justify-center text-2xl font-black text-white mb-6 shadow-xl shadow-red-600/40 transform -rotate-3">
                2
              </div>
              <h4 className="text-xl font-bold text-zinc-900 mb-3">Lock!</h4>
              <p className="text-zinc-600 font-medium">Secure your locker for an hour, a week, or a full semester. It's your call!</p>
            </div>

            {/* Step 3 */}
            <div className="relative z-10 flex flex-col items-center text-center max-w-xs">
              <div className="w-20 h-20 bg-zinc-900 rounded-md flex items-center justify-center text-2xl font-black text-white mb-6 shadow-lg transform rotate-3">
                3
              </div>
              <h4 className="text-xl font-bold text-zinc-900 mb-3">Done, exit.</h4>
              <p className="text-zinc-600 font-medium">Take your things and leave the service, just like that!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 bg-zinc-50 border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4 text-red-600">
              <Users size={40} />
            </div>
            <h2 className="text-red-600 font-bold tracking-wide uppercase text-sm mb-2">Built By</h2>
            <h3 className="text-3xl md:text-4xl font-black text-zinc-900">TomorrowBringers</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {['Aras Telli', 'Bahar Acar', 'Buğra Kağan Yazıcı', 'İzzet Yılmaz'].map((name, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-zinc-200 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="w-20 h-20 bg-zinc-100 rounded-full mx-auto mb-4 border-2 border-dashed border-zinc-300 flex items-center justify-center">
                  <span className="text-2xl font-black text-zinc-400">{name.charAt(0)}</span>
                </div>
                <h4 className="text-lg font-bold text-zinc-900">{name}</h4>
                <p className="text-sm text-red-600 font-semibold mt-1">Co-founder</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Early Access / Wishlist Section */}
      <section id="wishlist" className="py-24 bg-red-600 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-30"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Lock size={48} className="text-red-300 mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
            Ready to have your personal space in campus?
          </h2>
          <p className="text-red-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-medium">
            Register for early access now and be the first to secure your customized locker at METU!
          </p>
          
          {submitted ? (
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-xl text-white max-w-xl mx-auto transform animate-fade-in-up">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-green-500/50">
                <ShieldCheck size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-black mb-2">You're on the list!</h3>
              <p className="text-red-100 font-medium">We'll notify you as soon as LockUp! Campus is ready.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Your student mail (@metu.edu.tr)" 
                className="flex-1 px-6 py-4 rounded-md text-zinc-900 font-medium focus:outline-none focus:ring-4 focus:ring-red-400/50 text-base shadow-lg"
              />
              <button 
                type="submit" 
                className="px-8 py-4 bg-zinc-900 text-white font-bold rounded-md hover:bg-zinc-800 transition-colors shadow-lg whitespace-nowrap"
              >
                Join Wishlist
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 py-12 text-zinc-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="bg-red-600 p-1.5 rounded text-white">
              <Lock size={16} />
            </div>
            <span className="text-xl font-black text-white tracking-tight">
              LockUp! <span className="text-red-600">Campus</span>
            </span>
          </div>
          <div className="text-sm font-medium">
            &copy; {new Date().getFullYear()} TomorrowBringers. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}