import { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Testimonials() {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);

  const testimonials = [
    {
      text: t('testimonials.testimonial1'),
      author: 'Andre G.',
      role: 'Prophète Andre G.',
      image: './GUEI (1).png'
    },
    {
      text: t('testimonials.testimonial2'),
      author: 'Mme AMON',
      role: 'Disciple ',
      image: './GUEI (2).png'
    },
    {
      text: t('testimonials.testimonial3'),
      author: 'Arsène D.',
      role: 'Prophète Arsène',
      image: './GUEI (3).png'
    }
  ];

  const next = () => setCurrent((current + 1) % testimonials.length);
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 dark:from-gray-900 dark:to-blue-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-xl text-blue-100">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 md:p-12">
            <Quote className="w-12 h-12 text-yellow-500 mb-6" />

            <div className="min-h-[200px] flex flex-col justify-between">
              <p className="text-xl md:text-2xl text-gray-800 dark:text-gray-200 leading-relaxed mb-8 italic">
                "{testimonials[current].text}"
              </p>

              <div className="flex items-center space-x-4">
                <img
                  src={testimonials[current].image}
                  alt={testimonials[current].author}
                  className="w-16 h-16 rounded-full object-cover border-4 border-yellow-500"
                />
                <div>
                  <div className="font-bold text-lg text-gray-900 dark:text-white">
                    {testimonials[current].author}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">
                    {testimonials[current].role}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-4 mt-8">
            <button
              onClick={prev}
              className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full text-white transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === current
                      ? 'w-8 bg-yellow-500'
                      : 'w-2 bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full text-white transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
