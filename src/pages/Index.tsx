import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

const portfolioWorks = [
  {
    id: 1,
    title: 'Название проекта',
    category: 'Графический дизайн',
    image: 'https://cdn.poehali.dev/projects/ff1baa10-46aa-4ed5-8f5c-ae6a96c0f5d8/files/fd1d5d94-c0f2-4ba9-bbb4-300d85cf393e.jpg',
    description: 'Описание проекта появится здесь'
  },
  {
    id: 2,
    title: 'Название проекта',
    category: 'Веб-дизайн',
    image: 'https://cdn.poehali.dev/projects/ff1baa10-46aa-4ed5-8f5c-ae6a96c0f5d8/files/ef9d1d5a-3139-4340-a164-fff0ac38279b.jpg',
    description: 'Описание проекта появится здесь'
  },
  {
    id: 3,
    title: 'Название проекта',
    category: 'Инфографика',
    image: 'https://cdn.poehali.dev/projects/ff1baa10-46aa-4ed5-8f5c-ae6a96c0f5d8/files/ebf32c75-222a-496e-b390-31dd37faa44d.jpg',
    description: 'Описание проекта появится здесь'
  },
  {
    id: 4,
    title: 'Название проекта',
    category: 'Логотипы',
    image: 'https://cdn.poehali.dev/projects/ff1baa10-46aa-4ed5-8f5c-ae6a96c0f5d8/files/fd1d5d94-c0f2-4ba9-bbb4-300d85cf393e.jpg',
    description: 'Описание проекта появится здесь'
  },
  {
    id: 5,
    title: 'Название проекта',
    category: 'Презентации',
    image: 'https://cdn.poehali.dev/projects/ff1baa10-46aa-4ed5-8f5c-ae6a96c0f5d8/files/ef9d1d5a-3139-4340-a164-fff0ac38279b.jpg',
    description: 'Описание проекта появится здесь'
  }
];

const services = [
  {
    icon: 'Palette',
    title: 'Графический дизайн',
    description: 'Создание уникальных визуальных решений для вашего бренда'
  },
  {
    icon: 'Monitor',
    title: 'Веб-дизайн',
    description: 'Разработка современных и функциональных интерфейсов'
  },
  {
    icon: 'ShoppingBag',
    title: 'Инфографика для маркетплейсов',
    description: 'Привлекательные карточки товаров, повышающие продажи'
  },
  {
    icon: 'Sparkles',
    title: 'Логотипы',
    description: 'Запоминающиеся логотипы, отражающие суть вашего бизнеса'
  },
  {
    icon: 'Presentation',
    title: 'Дизайн презентаций',
    description: 'Эффектные презентации для бизнеса и личных проектов'
  }
];

const process = [
  { step: '01', title: 'Бриф', description: 'Обсуждаем задачи и цели проекта' },
  { step: '02', title: 'Концепция', description: 'Разрабатываем визуальные решения' },
  { step: '03', title: 'Реализация', description: 'Создаём финальный дизайн' },
  { step: '04', title: 'Правки', description: 'Вносим корректировки по вашим пожеланиям' }
];

const testimonials: Array<{
  name: string;
  role: string;
  text: string;
  rating: number;
}> = [];

const Index = () => {
  const [activeSection, setActiveSection] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  const categories = ['all', 'Графический дизайн', 'Веб-дизайн', 'Инфографика', 'Логотипы', 'Презентации'];
  
  const filteredWorks = selectedCategory === 'all' 
    ? portfolioWorks 
    : portfolioWorks.filter(work => work.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold tracking-tight">Портфолио</h1>
            <div className="hidden md:flex gap-8">
              {['Главная', 'Обо мне', 'Услуги', 'Работы', 'Процесс', 'Отзывы', 'Контакты'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm text-gray-600 hover:text-accent transition-colors duration-300"
                >
                  {item}
                </button>
              ))}
            </div>
            <Button 
              variant="default" 
              size="sm" 
              className="hidden md:inline-flex"
              onClick={() => scrollToSection('контакты')}
            >
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      <section id="главная" className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center animate-fade-in">
            <h2 className="text-6xl md:text-7xl font-light mb-6 tracking-tight">
              Графический<br />дизайнер
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Создаю визуальные решения, которые работают на ваш бизнес
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" onClick={() => scrollToSection('работы')}>
                Смотреть работы
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('контакты')}>
                Связаться
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="обо мне" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-light mb-6">Обо мне</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Привет! Я дизайнер с {new Date().getFullYear() - 2018}+ летним опытом создания визуальных решений для бизнеса.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Моя специализация — создание дизайна, который не только красиво выглядит, но и решает бизнес-задачи. Работаю с брендами от стартапов до крупных компаний.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="Award" className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-1">100+ проектов</h3>
                    <p className="text-gray-600">Реализованных для клиентов из разных сфер</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Target" className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-1">Индивидуальный подход</h3>
                    <p className="text-gray-600">Каждый проект уникален и создается с учетом ваших целей</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Clock" className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-1">Соблюдение сроков</h3>
                    <p className="text-gray-600">Всегда сдаю проекты вовремя, без задержек</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 animate-scale-in">
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100">
                  <img
                    src="https://cdn.poehali.dev/projects/ff1baa10-46aa-4ed5-8f5c-ae6a96c0f5d8/files/2dfe173d-9878-4d54-a899-8df27ce50b91.jpg"
                    alt="Фото дизайнера"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-accent text-white p-6 rounded-2xl shadow-lg">
                  <div className="text-3xl font-bold">{new Date().getFullYear() - 2018}+</div>
                  <div className="text-sm">лет опыта</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="услуги" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-light mb-16 text-center">Услуги</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                  <Icon name={service.icon} className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-medium mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="работы" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-light mb-8 text-center">Работы</h2>
          
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-accent text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category === 'all' ? 'Все работы' : category}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWorks.map((work, index) => (
              <Dialog key={work.id}>
                <DialogTrigger asChild>
                  <div
                    className="group cursor-pointer animate-scale-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="relative overflow-hidden rounded-lg aspect-[4/3] mb-4">
                      <img
                        src={work.image}
                        alt={work.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Icon name="ZoomIn" className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-lg font-medium mb-1">{work.title}</h3>
                    <p className="text-sm text-gray-600">{work.category}</p>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-auto rounded-lg"
                  />
                  <div className="mt-4">
                    <h3 className="text-2xl font-medium mb-2">{work.title}</h3>
                    <p className="text-accent font-medium mb-2">{work.category}</p>
                    <p className="text-gray-600">{work.description}</p>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      <section id="процесс" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-light mb-16 text-center">Процесс работы</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-5xl font-light text-accent mb-4">{item.step}</div>
                <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {testimonials.length > 0 && (
        <section id="отзывы" className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl md:text-5xl font-light mb-16 text-center">Отзывы</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="p-8 animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                  <div>
                    <div className="font-medium">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      <section id="контакты" className="py-20 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8">Обсудим проект?</h2>
          <p className="text-xl mb-12 opacity-90">
            Напишите мне, и я отвечу в течение 24 часов
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-2 text-lg hover:opacity-80 transition-opacity"
            >
              <Icon name="Mail" className="w-5 h-5" />
              hello@example.com
            </a>
            <a
              href="tel:+79001234567"
              className="inline-flex items-center gap-2 text-lg hover:opacity-80 transition-opacity"
            >
              <Icon name="Phone" className="w-5 h-5" />
              +7 (900) 123-45-67
            </a>
          </div>
          <div className="flex gap-6 justify-center mt-12">
            <a href="#" className="hover:opacity-80 transition-opacity">
              <Icon name="Instagram" className="w-6 h-6" />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <Icon name="Linkedin" className="w-6 h-6" />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <Icon name="Facebook" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t">
        <div className="container mx-auto max-w-6xl text-center text-sm text-gray-600">
          © 2024 Все права защищены
        </div>
      </footer>
    </div>
  );
};

export default Index;