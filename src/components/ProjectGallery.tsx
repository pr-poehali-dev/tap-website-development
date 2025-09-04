import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import ImageModal from '@/components/ImageModal';
import ImageSlider from '@/components/ImageSlider';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  images?: string[];
  description: string;
  specs: string[];
  year: string;
}

const ProjectGallery = () => {
  const [modalImage, setModalImage] = React.useState<{src: string, alt: string, images?: string[]} | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "CIP станция 3 контурная",
      category: "Пищевая промышленность",
      image: "/img/1642172b-c9b6-4c63-97a9-b2777e239ffe.jpg",
      images: [
        "/img/1642172b-c9b6-4c63-97a9-b2777e239ffe.jpg",
        "/img/246eeeb9-8ec6-41c9-af32-61c36ba29565.jpg",
        "/img/bd325f34-14e9-4140-905f-54da6625e6d5.jpg"
      ],
      description: "Шкаф управления на базе SIEMENS S7-1200\n\n🔹 Управление тремя контурами с гибкой настройкой процессов.\n🔹 15.6\" сенсорная панель Weintek – удобный контроль и настройка.\n🔹 4 независимые емкости – подготовка ёмкостей на разных контурах без остановки мойки.\n🔹 Мойка по 16 этапам с динамической подсветкой маршрута и индивидуальными параметрами.\n🔹 Полный мониторинг: журналы аварий, событий, графики температур и электропроводности.",
      specs: ["SIEMENS S7-1200", "Optimus Drive AD800", "Systeme Electric", "STEZ", "Пневматика EMC", "Weintek"],
      year: "2025"
    },
    {
      id: 2,
      title: "Пастеризационно-охладительная установка",
      category: "Теплоснабжение",
      image: "https://cdn.poehali.dev/files/a7015e22-3e72-4492-a189-1ed39e18d1aa.jpg",
      images: [
        "https://cdn.poehali.dev/files/a7015e22-3e72-4492-a189-1ed39e18d1aa.jpg",
        "https://cdn.poehali.dev/files/38b45870-1be3-4651-ad0f-9541dfcbd8f5.jpg",
        "https://cdn.poehali.dev/files/9058189b-5477-445c-8da9-80ecdcd17610.jpg"
      ],
      description: "Шкаф управления на базе SIEMENS S7-1200\n\n✔ 10.1\" сенсорная панель Weintek – удобный контроль и настройка.\n✔ Интеллектуальная автонастройка PID-регулятора – больше не нужны специальные знания для настройки, оборудование адаптируется автоматически!\n✔ Расширенные режимы работы – стандартные функции + мойка с 5 этапами и 30 рецептами для гибкости процессов.\n✔ Интуитивная мнемосхема с подсветкой пути движения продукта – наглядность и удобство контроля.",
      specs: ["SIEMENS S7-1200", "Optimus Drive AD800", "Systeme Electric", "STEZ", "Пневматика EMC", "Weintek"],
      year: "2024"
    },
    {
      id: 3,
      title: "Пастеризационно-охладительная установка",
      category: "Аграрная промышленность",
      image: "https://cdn.poehali.dev/files/1d400d9f-2a52-4145-9807-a0bd156ba0b3.jpg",
      images: [
        "https://cdn.poehali.dev/files/1d400d9f-2a52-4145-9807-a0bd156ba0b3.jpg",
        "https://cdn.poehali.dev/files/c16de542-05e9-40e5-8181-a8347ca4fb6b.jpg",
        "https://cdn.poehali.dev/files/4565a80a-10b7-4f21-9260-8a439930cc8a.jpg"
      ],
      description: "Шкаф управления на ОВЕН\n\n✔ GSM-контроль для удалённого мониторинга и управления.\n✔ Поддержание температуры с помощью котлов.\n✔ Каскадное управление подающими насосами.\n✔ Аварийное ручное управление.",
      specs: ["ОВЕН ПР200", "ELHART-PUMP", "DEKRAFT", "STEZ", "MEYERTEC", "IEK"],
      year: "2025"
    },
    {
      id: 4,
      title: "Лебёдка для подъёма земельных ископаемых",
      category: "Станкостроение",
      image: "https://cdn.poehali.dev/files/73ca4d66-c0a9-4eba-84b3-665da66c5ba7.jpg",
      images: [
        "https://cdn.poehali.dev/files/73ca4d66-c0a9-4eba-84b3-665da66c5ba7.jpg",
        "https://cdn.poehali.dev/files/57c189d7-0cf9-4b23-85d9-80fb1375670b.jpg",
        "https://cdn.poehali.dev/files/c203515f-65e8-406d-95c5-d033c6574ede.jpg"
      ],
      description: "Шкаф управления на базе ОВЕН ПЛК\n\n✔ Автоматическая регулировка и точное поддержание скорости подъёма платформы с помощью векторного частотного преобразователя.\n✔ Автоматическая коррекция скорости в зависимости от слоя намотки каната на барабан.\n✔ Измерение слоя намотки каната на барабан с помощью лазерного датчика расстояния.\n✔ Управление вспомогательным оборудованием.",
      specs: ["ОВЕН ПЛК200", "WEINTEK", "Optimus Drive AD800", "STEZ", "MEYERTEC", "DKC", "MEAN WELL", "IFM"],
      year: "2025"
    },
    {
      id: 5,
      title: "Система смазки мельницы тонкого помола сои",
      category: "Аграрная промышленность",
      image: "https://cdn.poehali.dev/files/27e57516-c2f8-44da-9117-dbd2b206eda4.jpg",
      images: [
        "https://cdn.poehali.dev/files/27e57516-c2f8-44da-9117-dbd2b206eda4.jpg",
        "https://cdn.poehali.dev/files/007eff64-e68b-4ce8-a4a8-878768c740c6.jpg",
        "https://cdn.poehali.dev/files/b9629c4b-b14d-4007-a2fc-68a96789bb30.jpg"
      ],
      description: "Шкаф управления на базе ОВЕН ПР\n\n✔ Автоматическая подача смазки в нужном объёме по заданному алгоритму.\n✔ Контроль всех нештатный ситуаций с фиксацией в журнале событий.\n✔ Удобное управление через сенсорную панель оператора.\n✔ Надежная и бюджетная база на оборудовании ОВЕН ПР200.",
      specs: ["ОВЕН ПР200", "WEINTEK", "STEZ", "MEYERTEC", "IEK", "MEAN WELL"],
      year: "2024"
    },
    {
      id: 6,
      title: "Дозирование удобрений",
      category: "Аграрная промышленность",
      image: "https://cdn.poehali.dev/files/89906699-377c-4cef-837f-5c867b4d9828.jpg",
      images: [
        "https://cdn.poehali.dev/files/89906699-377c-4cef-837f-5c867b4d9828.jpg",
        "https://cdn.poehali.dev/files/36f22fdf-fbc1-494f-9f07-81a2659796b0.jpg",
        "https://cdn.poehali.dev/files/6b1c3339-329c-48fb-a41c-c823b6a65c3f.jpg"
      ],
      description: "Шкаф управления на ОВЕН\n\n✔ Точная дозировка с минимальной погрешностью благодаря использованию частотного преобразователя дял насоса.\n✔ Ведение журнала учёта выдачи порций.\n✔ Выгрузка архивов на верхний уровень.\n✔ Режим самодиагностики.",
      specs: ["ОВЕН ПР200", "Optimus Drive AD30", "CHINT", "STEZ", "MEYERTEC", "IEK", "MEAN WELL"],
      year: "2024"
    }
  ];

  const categories = ["Все проекты", "Пищевая промышленность", "Теплоснабжение", "Аграрная промышленность", "Станкостроение"];
  const [selectedCategory, setSelectedCategory] = React.useState("Все проекты");

  const filteredProjects = selectedCategory === "Все проекты" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Выполненные проекты
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Портфолио реализованных решений для различных отраслей промышленности
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted hover:bg-accent text-muted-foreground hover:text-accent-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="relative">
                {project.images && project.images.length > 1 ? (
                  <ImageSlider
                    images={project.images}
                    alt={project.title}
                    onImageClick={(src) => setModalImage({src, alt: project.title, images: project.images})}
                    title="Нажмите для увеличения"
                  />
                ) : (
                  <div 
                    className="aspect-video bg-gradient-to-br from-accent/20 to-primary/10 relative overflow-hidden cursor-pointer group/image"
                    onClick={() => setModalImage({src: project.image, alt: project.title})}
                    title="Нажмите для увеличения"
                  >
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-2">
                        <Icon name="ZoomIn" className="text-gray-800" size={20} />
                      </div>
                    </div>
                  </div>
                )}
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary">{project.year}</Badge>
                </div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary/90">{project.category}</Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <div className="text-muted-foreground text-sm mb-4 whitespace-pre-line">
                  {project.description}
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-foreground">Комплектующие:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.specs.map((spec, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {spec}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-border flex items-center text-sm text-muted-foreground">
                  <Icon name="Calendar" className="w-4 h-4 mr-2" />
                  Реализован в {project.year} году
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <ImageModal 
          src={modalImage?.src || ''}
          alt={modalImage?.alt || ''}
          isOpen={!!modalImage}
          onClose={() => setModalImage(null)}
          images={modalImage?.images}
          onImageChange={(src) => setModalImage(prev => prev ? {...prev, src} : null)}
        />

        <div className="text-center mt-16">
          <Card className="inline-block p-8 max-w-2xl mx-auto bg-accent/5">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Контакты
            </h3>
            <p className="text-muted-foreground mb-6">
              Запросите подробное портфолио с техническими характеристиками и фотографиями реализованных объектов
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Icon name="Phone" className="text-white" size={20} />
                </div>
                <h4 className="font-semibold text-foreground mb-1">Телефон</h4>
                <a href="tel:+79225106088" className="text-sm text-muted-foreground hover:text-primary transition-colors">+7 (922) 510-60-88</a>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Icon name="Mail" className="text-white" size={20} />
                </div>
                <h4 className="font-semibold text-foreground mb-1">Email</h4>
                <a href="mailto:info@tap18.ru" className="text-sm text-muted-foreground hover:text-primary transition-colors">info@tap18.ru</a>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Icon name="MapPin" className="text-white" size={20} />
                </div>
                <h4 className="font-semibold text-foreground mb-1">Адрес</h4>
                <p className="text-sm text-muted-foreground">г. Ижевск, ул. Молодёжная 12Б</p>
              </div>
            </div>
            <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg transition-colors inline-flex items-center">
              <Icon name="MessageCircle" className="mr-2" size={20} />
              Связаться с нами
            </button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;