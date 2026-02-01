import { Smartphone, CreditCard, Building2, Shield, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Offerings() {
  const { t } = useLanguage();

  const methods = [
    {
      icon: Smartphone,
      titleKey: 'mobileMoney',
      providers: ['Orange Money', 'MTN Mobile', 'Moov Money'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: CreditCard,
      titleKey: 'card',
      providers: ['Visa', 'Mastercard', 'Amex'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Building2,
      titleKey: 'transfer',
      providers: ['IBAN', 'Swift', 'Local'],
      color: 'from-blue-600 to-blue-700'
    }
  ];

  return (
    <section id="offerings" className="py-20 bg-white dark:bg-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 rounded-full text-sm font-semibold mb-6">
            <Heart className="w-4 h-4" />
            <span>Soutenir la mission</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t('offerings.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t('offerings.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {methods.map((method, index) => {
            const Icon = method.icon;
            return (
              <div
                key={index}
                className="group bg-gray-50 dark:bg-gray-700/50 rounded-2xl p-8 hover:bg-white dark:hover:bg-gray-700 border-2 border-transparent hover:border-yellow-500 transition-all duration-300 hover:shadow-xl"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t(`offerings.${method.titleKey}`)}
                </h3>

                <ul className="space-y-2">
                  {method.providers.map((provider, idx) => (
                    <li
                      key={idx}
                      className="flex items-center space-x-2 text-gray-600 dark:text-gray-400"
                    >
                      <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                      <span>{provider}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-700 dark:to-blue-900 rounded-2xl shadow-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Prêt à faire une différence ?
            </h3>
            <p className="text-blue-100 mb-8">
              Chaque contribution compte et permet de transformer des vies pour Christ
            </p>

            <button className="px-10 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-bold rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 text-lg hover:scale-105">
              {t('offerings.give')}
            </button>

            <div className="mt-8 flex items-center justify-center space-x-2 text-blue-100">
              <Shield className="w-5 h-5" />
              <span className="text-sm">{t('offerings.secure')}</span>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
}
