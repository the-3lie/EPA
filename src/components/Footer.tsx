import { Facebook, Youtube, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  const quickLinks = [
    { labelKey: 'about', href: '#' },
    { labelKey: 'legal', href: '#' },
    { labelKey: 'privacy', href: '#' },
    { labelKey: 'contact', href: '#contact' }
  ];

  return (
    <footer id="contact" className="bg-gray-900 dark:bg-black text-gray-300 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                  <img src="./Capture.JPG" alt="" />
              </div>
              <span className="font-bold text-xl text-white">E.P.A</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
                Une génération qui manifeste la joie de DIEU
                Formant des disciples équipés dans la connaissance des Écritures            
           </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="p-2 bg-gray-800 hover:bg-blue-600 rounded-lg transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">{t('footer.quickLinks')}</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.labelKey}>
                  <a
                    href={link.href}
                    className="hover:text-yellow-500 transition-colors flex items-center space-x-2"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                    <span>{t(`footer.${link.labelKey}`)}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Programmes</h3>
            <ul className="space-y-3">
              <li>
                <a href="#academy" className="hover:text-yellow-500 transition-colors flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                  <span>C'EST QUE LES VENDREDIS</span>
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-yellow-500 transition-colors flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                  <span>Nos Programmes & Événements</span>
                </a>
              </li>
              <li>
                <a href="#live" className="hover:text-yellow-500 transition-colors flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                  <span>Evangelisation, Prier & Communauté</span>
                </a>
              </li>
              <li>
                <a href="#offerings" className="hover:text-yellow-500 transition-colors flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                  <span>Faire un don</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">{t('footer.contact')}</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                <span className="text-gray-400">Residence Hôtel Rockville, Abidjan, Côte d'Ivoire</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span className="text-gray-400">+225 0708866588</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                <span className="text-gray-400">epaegliselaparoleenaction@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              {t('footer.copyright')}
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-yellow-500 transition-colors">
                Conditions d'utilisation
              </a>
              <span>•</span>
              <a href="#" className="hover:text-yellow-500 transition-colors">
                Politique de confidentialité
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
