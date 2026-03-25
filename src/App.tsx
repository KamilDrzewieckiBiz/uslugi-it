/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, type FormEvent } from 'react';
import { 
  Terminal,
  Settings, 
  ShieldCheck, 
  Zap, 
  Lightbulb, 
  Handshake, 
  Mail, 
  MapPin, 
  ChevronRight,
  Menu,
  X,
  CreditCard,
  FileText,
  Banknote,
  Copy,
  Check
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { Toaster, toast } from 'sonner';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const services = [
  {
    title: "Projektowanie sieci",
    description: "Projektowanie i wdrażanie bezpiecznych, wydajnych sieci komputerowych (LAN/WAN) dopasowanych do potrzeb Twojej firmy.",
    icon: Terminal
  },
  {
    title: "Konfiguracja urządzeń",
    description: "Konfiguracja i optymalizacja urządzeń sieciowych, serwerów oraz systemów operacyjnych (Windows/Linux).",
    icon: Settings
  },
  {
    title: "Stały nadzór IT",
    description: "Bieżący monitoring i proaktywne utrzymanie infrastruktury IT w modelu wsparcia abonamentowego.",
    icon: ShieldCheck
  },
  {
    title: "Usuwanie awarii",
    description: "Szybka diagnostyka problemów i usuwanie usterek sprzętowych oraz programowych.",
    icon: Zap
  },
  {
    title: "Doradztwo techniczne",
    description: "Eksperckie doradztwo techniczne przy doborze rozwiązań IT i optymalizacji kosztów.",
    icon: Lightbulb
  },
  {
    title: "Model współpracy",
    description: "Współpraca z klientem na podstawie indywidualnych umów. Oferuję elastyczne podejście, a ceny ustalamy indywidualnie.",
    icon: Handshake
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('regulamin');

  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen]);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <Toaster position="top-center" richColors />
      
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-[60] origin-left"
        style={{ scaleX }}
      />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-lg border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 p-2 rounded-lg text-white">
                <Terminal size={24} />
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-800">Kamil Drzewiecki</span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#uslugi" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Usługi</a>
              <a href="#platnosci" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Płatności</a>
              <a href="#kontakt" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Kontakt</a>
              <a href="#regulamin" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Regulamin</a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-3 -mr-3 text-slate-600 hover:text-blue-600 transition-colors min-w-[48px] min-h-[48px] flex items-center justify-center"
                aria-label={isMenuOpen ? "Zamknij menu" : "Otwórz menu"}
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-slate-900/60 backdrop-blur-xl border-b border-white/10 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                <a href="#uslugi" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-300 hover:text-blue-400 hover:bg-white/5 rounded-md transition-colors">Usługi</a>
                <a href="#platnosci" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-300 hover:text-blue-400 hover:bg-white/5 rounded-md transition-colors">Płatności</a>
                <a href="#kontakt" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-300 hover:text-blue-400 hover:bg-white/5 rounded-md transition-colors">Kontakt</a>
                <a href="#regulamin" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-300 hover:text-blue-400 hover:bg-white/5 rounded-md transition-colors">Regulamin</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#0a192f]">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#1e3a8a_0%,transparent_50%)]"></div>
          <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 50 Q 25 25 50 50 T 100 50" fill="none" stroke="white" strokeWidth="0.1" />
            <path d="M0 60 Q 25 35 50 60 T 100 60" fill="none" stroke="white" strokeWidth="0.1" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6">
              <ShieldCheck size={14} /> Profesjonalne wsparcie IT
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
              Usługi informatyczne <br className="hidden md:block" />
              dla małych i średnich firm
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Kompleksowe projektowanie sieci, konfiguracja urządzeń i stały nadzór nad 
              Twoją infrastrukturą IT. Skup się na biznesie, technologię zostaw mi.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#uslugi" className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-900/20 active:scale-95">
                Poznaj ofertę
              </a>
              <a href="#kontakt" className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl border border-white/10 transition-all backdrop-blur-sm active:scale-95">
                Skontaktuj się
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="uslugi" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">W czym mogę Ci pomóc?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Świadczę szeroki zakres usług informatycznych, dbając o niezawodność i bezpieczeństwo Twoich systemów.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <service.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Payments Section */}
      <section id="platnosci" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Płatności i rozliczenia</h2>
              <p className="text-slate-600 mb-10 leading-relaxed">
                Cenię przejrzystość. Płatności dostosowane są do formy współpracy, z naciskiem na wygodę klienta.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-white rounded-lg border border-slate-200 flex items-center justify-center text-blue-600">
                    <Banknote size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Przelew bankowy</h4>
                    <p className="text-sm text-slate-600">Standardowa forma rozliczeń B2B.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-white rounded-lg border border-slate-200 flex items-center justify-center text-blue-600">
                    <CreditCard size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Płatności online</h4>
                    <p className="text-sm text-slate-600">Szybkie płatności elektroniczne dla zleceń doraźnych.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-white rounded-lg border border-slate-200 flex items-center justify-center text-blue-600">
                    <FileText size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Faktury VAT (termin 7 dni)</h4>
                    <p className="text-sm text-slate-600">Wystawiam faktury VAT z odroczonym terminem płatności dla stałych klientów.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                  <FileText size={20} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Przykład rozliczenia</h3>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between py-3 border-b border-slate-50">
                  <span className="text-slate-500">Usługa:</span>
                  <span className="font-medium text-slate-900">Stały nadzór IT (Support)</span>
                </div>
                <div className="flex justify-between py-3 border-b border-slate-50">
                  <span className="text-slate-500">Forma płatności:</span>
                  <span className="font-medium text-slate-900">Przelew bankowy</span>
                </div>
                <div className="flex justify-between py-3 border-b border-slate-50">
                  <span className="text-slate-500">Termin płatności:</span>
                  <span className="font-medium text-slate-900">7 dni od wystawienia FV</span>
                </div>
              </div>

              <a 
                href="#kontakt"
                className="block w-full py-4 bg-slate-900 hover:bg-slate-800 text-white text-center font-bold rounded-xl transition-all active:scale-95"
              >
                Zapytaj o wycenę dla Twojej firmy
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-24 bg-[#0a192f] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Skontaktuj się ze mną</h2>
              <p className="text-slate-400 mb-12 leading-relaxed">
                Chcesz porozmawiać o infrastrukturze IT w Twojej firmie? 
                Napisz wiadomość, a przygotuję indywidualną ofertę dopasowaną do Twoich potrzeb.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-600/30 flex items-center justify-center text-blue-400">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 uppercase font-bold tracking-wider mb-1">E-mail</p>
                    <div className="flex items-center gap-2">
                      <a href="mailto:kamil.drzewiecki.biz@gmail.com" className="text-lg font-medium hover:text-blue-400 transition-colors">kamil.drzewiecki.biz@gmail.com</a>
                      <CopyButton text="kamil.drzewiecki.biz@gmail.com" />
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-600/30 flex items-center justify-center text-blue-400">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 uppercase font-bold tracking-wider mb-1">Adres i dane firmy</p>
                    <p className="text-lg font-medium">Kamil Drzewiecki</p>
                    <p className="text-slate-400">ul. Wojciecha Żywnego 23/68</p>
                    <p className="text-slate-400">02-701 Warszawa</p>
                    <div className="flex items-center gap-2 mt-2">
                      <p className="text-xs text-slate-500 font-mono bg-white/5 inline-block px-2 py-1 rounded">NIP: 5322107261</p>
                      <CopyButton text="5322107261" label="NIP" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="dark-glass-card p-8 rounded-3xl">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Legal Section */}
      <section id="regulamin" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex border-b border-slate-200 mb-12">
            <button 
              onClick={() => setActiveTab('regulamin')}
              className={`px-6 py-4 text-sm font-bold transition-all border-b-2 ${activeTab === 'regulamin' ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-400 hover:text-slate-600'}`}
            >
              Regulamin
            </button>
            <button 
              onClick={() => setActiveTab('polityka')}
              className={`px-6 py-4 text-sm font-bold transition-all border-b-2 ${activeTab === 'polityka' ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-400 hover:text-slate-600'}`}
            >
              Polityka Prywatności
            </button>
          </div>

          <div className="prose prose-slate max-w-none">
            {activeTab === 'regulamin' ? (
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-8"
              >
                <h2 className="text-2xl font-bold text-slate-900">Regulamin świadczenia usług</h2>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p><strong>1. Usługodawca:</strong> Kamil Drzewiecki, prowadzący działalność gospodarczą pod firmą Kamil Drzewiecki, NIP: 5322107261, adres: ul. Wojciecha Żywnego 23/68, 02-701 Warszawa.</p>
                  <p><strong>2.</strong> Usługi świadczone są na podstawie indywidualnego zamówienia lub zawartej umowy.</p>
                  <p><strong>3.</strong> Ceny usług ustalane są indywidualnie i potwierdzane pisemnie (e-mail lub umowa).</p>
                  <p><strong>4.</strong> Płatność następuje na podstawie wystawionej faktury VAT, w terminie wskazanym na fakturze.</p>
                  <p><strong>5.</strong> Reklamacje należy zgłaszać e-mailem na adres <strong>kamil.drzewiecki.biz@gmail.com</strong> w ciągu 14 dni od wykonania usługi.</p>
                  <p><strong>6.</strong> Usługodawca zastrzega sobie prawo do odmowy realizacji usługi bez podania przyczyny.</p>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-8"
              >
                <h2 className="text-2xl font-bold text-slate-900">Polityka Prywatności</h2>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>Administratorem Twoich danych osobowych jest Kamil Drzewiecki, NIP: 5322107261, e-mail: kamil.drzewiecki.biz@gmail.com.</p>
                  <p>Twoje dane przetwarzane są wyłącznie w celu realizacji usług, kontaktu oraz wystawiania faktur, na podstawie art. 6 ust. 1 lit. b RODO (wykonanie umowy).</p>
                  <p>Dane nie są przekazywane podmiotom trzecim, za wyjątkiem biura rachunkowego prowadzącego księgowość. Dane przechowywane są przez okres wymagany przepisami prawa (5 lat dla dokumentów finansowych).</p>
                  <p>Masz prawo do wglądu, poprawiania oraz żądania usunięcia swoich danych osobowych.</p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 p-1.5 rounded flex items-center justify-center text-white">
                <Terminal size={16} />
              </div>
              <span className="text-sm font-bold text-slate-900">Kamil Drzewiecki IT</span>
            </div>
            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} Kamil Drzewiecki. Wszelkie prawa zastrzeżone.
            </p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <ScrollToTop />
    </div>
  );
}

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors focus:outline-none"
          aria-label="Wróć na górę"
        >
          <ChevronRight className="-rotate-90" size={24} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

function CopyButton({ text, label }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      toast.success(`${label || 'Tekst'} skopiowany do schowka!`);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error('Błąd podczas kopiowania');
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="p-1.5 text-slate-500 hover:text-blue-400 hover:bg-white/10 rounded-md transition-all active:scale-90"
      title="Kopiuj"
    >
      {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
    </button>
  );
}

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://formspree.io/f/xykbgrdk", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        toast.success("Wiadomość została wysłana pomyślnie!", {
          description: "Odezwię się do Ciebie tak szybko, jak to możliwe."
        });
        (e.target as HTMLFormElement).reset();
      } else {
        toast.error("Wystąpił błąd podczas wysyłania wiadomości.");
      }
    } catch (error) {
      toast.error("Błąd połączenia. Spróbuj ponownie później.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-slate-400 mb-2">Imię i nazwisko / Firma</label>
        <input 
          type="text" 
          name="name" 
          required 
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
          placeholder="Jan Kowalski"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-400 mb-2">Adres e-mail</label>
        <input 
          type="email" 
          name="email" 
          required 
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
          placeholder="kontakt@firma.pl"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-400 mb-2">Wiadomość</label>
        <textarea 
          name="message" 
          required 
          rows={4} 
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors resize-none"
          placeholder="W czym mogę pomóc?"
        ></textarea>
      </div>
      <button 
        type="submit" 
        disabled={isSubmitting}
        className={cn(
          "w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all active:scale-[0.98] shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2",
          isSubmitting && "opacity-70 cursor-not-allowed"
        )}
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Wysyłanie...
          </>
        ) : (
          "Wyślij wiadomość"
        )}
      </button>
    </form>
  );
}
