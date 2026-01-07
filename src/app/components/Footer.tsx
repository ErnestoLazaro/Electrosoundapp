import { Facebook, Instagram, Twitter, Youtube, Mail } from 'lucide-react';
import imgLogoPrincipal from "figma:asset/2bf557ab640857322a6181cca9c5c40ad1edc3c4.png";

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-black to-gray-900 border-t border-purple-500/20 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={imgLogoPrincipal} alt="Electrosound" className="h-16 w-auto" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Tu tienda online de música electrónica Alternativa. Descubre los mejores beats desde 2010.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-purple-500/10 hover:bg-purple-500/20 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-purple-500/10 hover:bg-purple-500/20 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-purple-500/10 hover:bg-purple-500/20 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-purple-500/10 hover:bg-purple-500/20 rounded-lg flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#albums" className="text-gray-400 hover:text-[#eff6b2] text-sm transition-colors">
                  Catálogo de Discos
                </a>
              </li>
              <li>
                <a href="#artists" className="text-gray-400 hover:text-[#eff6b2] text-sm transition-colors">
                  Artistas
                </a>
              </li>
              <li>
                <a href="#genres" className="text-gray-400 hover:text-[#eff6b2] text-sm transition-colors">
                  Géneros Musicales
                </a>
              </li>
              <li>
                <a href="#new" className="text-gray-400 hover:text-[#eff6b2] text-sm transition-colors">
                  Novedades
                </a>
              </li>
              <li>
                <a href="#bestsellers" className="text-gray-400 hover:text-[#eff6b2] text-sm transition-colors">
                  Más Vendidos
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-white font-bold mb-4">Atención al Cliente</h3>
            <ul className="space-y-2">
              <li>
                <a href="#faq" className="text-gray-400 hover:text-[#eff6b2] text-sm transition-colors">
                  Preguntas Frecuentes
                </a>
              </li>
              <li>
                <a href="#shipping" className="text-gray-400 hover:text-[#eff6b2] text-sm transition-colors">
                  Envíos
                </a>
              </li>
              <li>
                <a href="#returns" className="text-gray-400 hover:text-[#eff6b2] text-sm transition-colors">
                  Devoluciones
                </a>
              </li>
              <li>
                <a href="#payment" className="text-gray-400 hover:text-[#eff6b2] text-sm transition-colors">
                  Métodos de Pago
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-[#eff6b2] text-sm transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">
              Suscríbete para recibir las últimas novedades y ofertas exclusivas.
            </p>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  type="email"
                  placeholder="Tu email"
                  className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-purple-500/20 rounded-lg text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>
              <button className="px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded-lg text-white text-sm font-medium transition-colors">
                Enviar
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-purple-500/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © 2026 Electrosound. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#privacy" className="text-gray-500 hover:text-gray-400 text-sm transition-colors">
                Privacidad y Cookies
              </a>
              <a href="#terms" className="text-gray-500 hover:text-gray-400 text-sm transition-colors">
                Términos y Condiciones
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}