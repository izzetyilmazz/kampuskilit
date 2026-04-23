import React, { useState } from 'react';
import { 
  Lock, 
  Box, 
  Clock, 
  ShieldCheck, 
  MapPin, 
  Bike, 
  Briefcase, 
  Music, 
  ChevronRight,
  Menu,
  X
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(email) {
      setSubmitted(true);
      setEmail('');
      // Burada ileride form verisini (Google Sheets, Firebase vb.) gönderme işlemi yapılabilir
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="bg-indigo-600 p-2 rounded-lg text-white">
                <Lock size={24} />
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">
                KampüsKilit
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#nasil-calisir" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Nasıl Çalışır?</a>
              <a href="#ozellikler" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Özellikler</a>
              <a href="#kimler-icin" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Kimler İçin?</a>
              <a href="#erken-erisim" className="px-5 py-2.5 rounded-full bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition-all">
                Ön Kayıt Ol
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 px-4 pt-2 pb-4 space-y-1 shadow-lg">
            <a href="#nasil-calisir" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md">Nasıl Çalışır?</a>
            <a href="#ozellikler" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md">Özellikler</a>
            <a href="#kimler-icin" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md">Kimler İçin?</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-violet-50 opacity-90"></div>
          {/* Dekoratif çemberler */}
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-indigo-100 blur-3xl opacity-50"></div>
          <div className="absolute bottom-0 -left-24 w-72 h-72 rounded-full bg-violet-100 blur-3xl opacity-50"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left pr-0 md:pr-12">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-sm font-semibold mb-6">
              <MapPin size={16} className="mr-1.5" /> ODTÜ Kampüsü İçin Tasarlandı
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              Eşyalarını Taşıma, <br/>
              <span className="text-indigo-600">Kampüste Güvende Bırak!</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
              Spor çantanı, müzik aletini, bisikletini veya valizini her gün okula taşımak zorunda değilsin. Kampüs içi akıllı dolap ve depo sistemimizle yükünden kurtul.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#erken-erisim" className="inline-flex justify-center items-center px-8 py-4 text-base font-bold rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-200 transition-all hover:-translate-y-0.5">
                İlk Kullanan Sen Ol <ChevronRight size={20} className="ml-2" />
              </a>
              <a href="#nasil-calisir" className="inline-flex justify-center items-center px-8 py-4 text-base font-bold rounded-xl text-slate-700 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all">
                Nasıl Çalışır?
              </a>
            </div>
            <p className="mt-4 text-sm text-slate-500 font-medium">✨ İlk 100 öğrenciye ilk ay %50 indirim!</p>
          </div>
          
          <div className="md:w-1/2 mt-16 md:mt-0 relative">
            {/* UI Mockup İllüstrasyonu */}
            <div className="bg-white rounded-2xl shadow-2xl shadow-indigo-100/50 border border-slate-100 p-6 relative z-10 max-w-md mx-auto transform md:rotate-2 hover:rotate-0 transition-transform duration-300">
              <div className="flex justify-between items-center mb-6 pb-4 border-b border-slate-100">
                <div>
                  <h3 className="font-bold text-slate-800">Büyük Boy Dolap</h3>
                  <p className="text-sm text-emerald-600 font-medium">Müsait</p>
                </div>
                <div className="bg-slate-50 p-3 rounded-lg">
                  <Box className="text-indigo-600" size={24} />
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Kapasite:</span>
                  <span className="font-medium text-slate-700">Valiz + Sırt Çantası</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Konum:</span>
                  <span className="font-medium text-slate-700">Devrim Stadyumu Girişi</span>
                </div>
                <div className="flex justify-between items-center bg-slate-50 p-3 rounded-lg border border-slate-100 mt-2">
                  <span className="text-slate-500 text-sm font-medium">Aylık Kiralama</span>
                  <span className="font-bold text-indigo-600">₺250<span className="text-xs text-slate-400">/ay</span></span>
                </div>
                <button className="w-full mt-4 bg-slate-900 text-white font-semibold py-3 rounded-xl hover:bg-slate-800 transition-colors">
                  Hemen Kirala
                </button>
              </div>
            </div>
            
            {/* Arka plan dekoratif kartlar */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center space-x-3 z-20 animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="bg-orange-100 p-2 rounded-full text-orange-600">
                <Bike size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-500">Yeni Eklenen</p>
                <p className="text-sm font-bold text-slate-800">Scooter Park Alanı</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="ozellikler" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Neden KampüsKilit?</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Sadece bir dolap değil, kampüs hayatınızı kolaylaştıran güvenli bir altyapı sunuyoruz.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 mb-6">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Üst Düzey Güvenlik</h3>
              <p className="text-slate-600">7/24 güvenlik kamerası, dijital şifreli veya öğrenci kartıyla açılabilen akıllı kilit sistemi ile eşyalarınız güvende.</p>
            </div>
            
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-violet-100 rounded-xl flex items-center justify-center text-violet-600 mb-6">
                <Clock size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Esnek Süreler</h3>
              <p className="text-slate-600">İster 2 saatlik antrenman süresince, ister hafta sonu için, isterseniz tüm dönem boyunca kiralama imkanı.</p>
            </div>
            
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 mb-6">
                <Box size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Her İhtiyaca Uygun</h3>
              <p className="text-slate-600">Standart okul çantası boyutundan, büyük boy valizlere, enstrümanlara ve hatta bisiklet/scooter'lara özel alanlar.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="kimler-icin" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Kimler İçin Tasarladık?</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">Kampüste taşıma derdi yaşayan herkesin hayatını kolaylaştırıyoruz.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
              <Briefcase className="text-indigo-400 mb-4" size={32} />
              <h3 className="text-lg font-bold mb-2">Sporcular</h3>
              <p className="text-sm text-slate-400">Ders sonrası antrenmana giderken koca spor çantanızı tüm gün amfide yanınızda taşımayın.</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
              <Music className="text-pink-400 mb-4" size={32} />
              <h3 className="text-lg font-bold mb-2">Müzisyenler</h3>
              <p className="text-sm text-slate-400">Gitarınızı veya kemanınızı provalara kadar güvenle saklayın, hasar riskinden koruyun.</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
              <Box className="text-emerald-400 mb-4" size={32} />
              <h3 className="text-lg font-bold mb-2">Hafta Sonu Yolcuları</h3>
              <p className="text-sm text-slate-400">Cuma günü dersten direkt otogara geçmek isteyenler için valiz bırakma alanı.</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
              <Bike className="text-orange-400 mb-4" size={32} />
              <h3 className="text-lg font-bold mb-2">Günlük Gelenler</h3>
              <p className="text-sm text-slate-400">Kampüse scooter veya bisiklet ile gelip güvenli bir yere kilitlemek isteyenler.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist / Early Access Section */}
      <section id="erken-erisim" className="py-24 bg-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 -left-1/4 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">İlk Deneyenlerden Biri Olun!</h2>
          <p className="text-indigo-100 text-lg mb-10 max-w-2xl mx-auto">
            Sistemi yakında ODTÜ kampüsünde pilot olarak başlatıyoruz. Erken erişim listesine katılarak ilk kiralama işleminizde %50 indirim kazanın!
          </p>
          
          {submitted ? (
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl text-white">
              <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Tebrikler, listeye eklendiniz!</h3>
              <p className="text-indigo-100">Gelişmeleri size mail üzerinden bildireceğiz.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="ODTÜ E-posta Adresiniz (@metu.edu.tr)" 
                className="flex-1 px-6 py-4 rounded-xl text-slate-900 focus:outline-none focus:ring-4 focus:ring-white/30 text-base"
              />
              <button 
                type="submit" 
                className="px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors whitespace-nowrap"
              >
                Listeye Katıl
              </button>
            </form>
          )}
          <p className="mt-4 text-sm text-indigo-200">Sadece resmi duyurular için kullanılacaktır. Spam yapmıyoruz.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 py-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Lock size={20} className="text-indigo-600" />
            <span className="text-xl font-bold text-slate-900">KampüsKilit</span>
          </div>
          <div className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} KampüsKilit. ODTÜ öğrencileri tarafından geliştirilmektedir.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors">İletişim</a>
            <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors">Gizlilik</a>
          </div>
        </div>
      </footer>
    </div>
  );
}