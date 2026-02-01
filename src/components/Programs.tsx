import { Calendar, Sparkles, MapPin, Clock, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Programs() {
  const { t } = useLanguage();

  const programs = [
    {
      icon: Calendar,
      titleKey: 'fasting.title',
      descKey: 'fasting.description',
      color: ' ',
      image: './Capture.JPG'
    },
    {
      icon: Sparkles,
      titleKey: 'miracles.title',
      descKey: 'miracles.description',
      image: './ec.jpeg'
    },
    {
      icon: MapPin,
      titleKey: 'kodesh.title',
      descKey: 'kodesh.description',
      image: './prier.jpeg'
    },
    {
      icon: Clock,
      titleKey: 'prayer247.title',
      descKey: 'prayer247.description',
      image: 'https://images.pexels.com/photos/8468395/pexels-photo-8468395.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <section id="programs" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t('programs.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('programs.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={program.image}
                    alt={t(`programs.${program.titleKey}`)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${program.color} opacity-60`}></div>
                  <div className="absolute top-4 right-4 p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {t(`programs.${program.titleKey}`)}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {t(`programs.${program.descKey}`)}
                  </p>
                  <button className="group/btn flex items-center space-x-2 text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                    <span>{t('programs.participate')}</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
