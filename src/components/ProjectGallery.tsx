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

const ProjectGallery = React.memo(() => {
  const [modalImage, setModalImage] = React.useState<{src: string, alt: string, images?: string[]} | null>(null);

  const projects: Project[] = [
    {
      id: 0,
      title: "Насосная станция поддержания давления",
      category: "Теплоснабжение",
      image: "/image/projects/pump-station-1.jpg",
      images: [
        "/image/projects/pump-station-1.jpg",
        "/image/projects/pump-station-2.jpg",
        "/image/projects/pump-station-3.jpg"
      ],
      description: "Шкаф управления на базе ОВЕН ПР\n\n✔ Каскадное управление насосами с ведущим мастером.\n✔ Поддержание заданного давления с помощью ПИД регулятора.\n✔ Подключение насосов подпитки при старте основной системы.\n✔ Предусмотрена возможность расширения с дооснащением шкафа управления оборудованием ещё для двух насосов.",
      specs: ["ОВЕН ПР200", "ELHART-PUMP", "STEZ", "MEYERTEC", "ESB", "MEAN WELL", "DEKRAFT", "SUPU"],
      year: "2025"
    },
    {
      id: 1,
      title: "Кофемашина для производства кофейного концентрата",
      category: "Пищевая промышленность",
      image: "/image/projects/coffee-machine-1.jpg",
      images: [
        "/image/projects/coffee-machine-1.jpg",
        "/image/projects/coffee-machine-2.jpg",
        "/image/projects/coffee-machine-3.jpg"
      ],
      description: "Шкаф управления на базе ОВЕН ПР\n\n✔ Система рецептов для быстрого переключения между настройками.\n✔ Автоматическое поддержание давления с учётом необходимого расхода.\n✔ Автоматический режим работы для приготовления концентра.\n✔ Автоматический режим промывки установки.",
      specs: ["ОВЕН ПР103", "WEINTEK", "ELHART", "STEZ", "MEYERTEC", "DKC", "MEAN WELL", "Пневматика EMC"],
      year: "2025"
    },
    {
      id: 2,
      title: "Автоматическая CIP станция для 3-х контуров",
      category: "Пищевая промышленность",
      image: "/image/projects/cip-station-1.jpg",
      images: [
        "/image/projects/cip-station-1.jpg",
        "/image/projects/cip-station-2.jpg",
        "/image/projects/cip-station-3.jpg"
      ],
      description: "Шкаф управления на базе SIEMENS S7-1200\n\n🔹 Управление тремя контурами с гибкой настройкой процессов.\n🔹 15.6\" сенсорная панель Weintek – удобный контроль и настройка.\n🔹 4 независимые емкости – подготовка ёмкостей на разных контурах без остановки мойки.\n🔹 Мойка по 16 этапам с динамической подсветкой маршрута и индивидуальными параметрами.\n🔹 Полный мониторинг: журналы аварий, событий, графики температур и электропроводности.",
      specs: ["SIEMENS S7-1200", "Optimus Drive AD800", "Systeme Electric", "STEZ", "Пневматика EMC", "Weintek"],
      year: "2025"
    },
    {
      id: 4,
      title: "Пастеризационно-охладительная установка",
      category: "Пищевая промышленность",
      image: "/image/projects/pasteurization-1.jpg",
      images: [
        "/image/projects/pasteurization-1.jpg",
        "/image/projects/pasteurization-2.jpg",
        "/image/projects/pasteurization-3.jpg"
      ],
      description: "Шкаф управления на базе SIEMENS S7-1200\n\n✔ 10.1\" сенсорная панель Weintek – удобный контроль и настройка.\n✔ Интеллектуальная автонастройка PID-регулятора – больше не нужны специальные знания для настройки, оборудование адаптируется автоматически!\n✔ Расширенные режимы работы – стандартные функции + мойка с 5 этапами и 30 рецептами для гибкости процессов.\n✔ Интуитивная мнемосхема с подсветкой пути движения продукта – наглядность и удобство контроля.",
      specs: ["SIEMENS S7-1200", "Optimus Drive AD800", "Systeme Electric", "STEZ", "Пневматика EMC", "Weintek"],
      year: "2025"
    },
    {
      id: 5,
      title: "Ванна длительной пастеризации ВДП-300",
      category: "Пищевая промышленность",
      image: "/image/projects/pasteurization-bath-1.jpg",
      images: [
        "/image/projects/pasteurization-bath-1.jpg",
        "/image/projects/pasteurization-bath-2.jpg",
        "/image/projects/pasteurization-bath-3.jpg"
      ],
      description: "Шкаф управления на базе ОВЕН ТРМ\n\n✔ Нагрев до заданной температуры с учётом температуры продукта и рубашки.\n✔ Блокировка мешалки при открытии люка.\n✔ Контроль верхнего и нижнего уровня рубашки.\n✔ Защита от обрыва фазы, нуля, пониженного и повышенного напряжения, а также от перекоса фаз.",
      specs: ["ОВЕН 2ТРМ1", "WEINTEK", "STEZ", "MEYERTEC", "IEK", "MEAN WELL", "CHINT", "SUPU"],
      year: "2025"
    },
    {
      id: 6,
      title: "Индивидуальный тепловой пункт в ЖК г. Казань",
      category: "Теплоснабжение",
      image: "/image/projects/thermal-point-1.jpg",
      images: [
        "/image/projects/thermal-point-1.jpg",
        "/image/projects/thermal-point-2.jpg",
        "/image/projects/thermal-point-3.jpg"
      ],
      description: "Шкаф управления на базе ОВЕН ПР\n\n✔ GSM-контроль для удалённого мониторинга и управления.\n✔ Поддержание температуры с помощью котлов.\n✔ Каскадное управление подающими насосами.\n✔ Аварийное ручное управление.",
      specs: ["ОВЕН ПР200", "ELHART-PUMP", "DEKRAFT", "STEZ", "MEYERTEC", "IEK"],
      year: "2025"
    },
    {
      id: 7,
      title: "Лебёдка для подъёма земельных ископаемых",
      category: "Станкостроение",
      image: "/image/projects/winch-1.jpg",
      images: [
        "/image/projects/winch-1.jpg",
        "/image/projects/winch-2.jpg",
        "/image/projects/winch-3.jpg"
      ],
      description: "Шкаф управления на базе ОВЕН ПЛК\n\n✔ Автоматическая регулировка и точное поддержание скорости подъёма платформы с помощью векторного частотного преобразователя.\n✔ Автоматическая коррекция скорости в зависимости от слоя намотки каната на барабан.\n✔ Измерение слоя намотки каната на барабан с помощью лазерного датчика расстояния.\n✔ Управление вспомогательным оборудованием.",
      specs: ["ОВЕН ПЛК200", "WEINTEK", "Optimus Drive AD800", "STEZ", "MEYERTEC", "DKC", "MEAN WELL", "IFM"],
      year: "2025"
    },
    {
      id: 8,
      title: "Система смазки подшипников мельницы тонкого помола сои",
      category: "Аграрная промышленность", 
      image: "/image/projects/lubrication-system-1.jpg",
      images: [
        "/image/projects/lubrication-system-1.jpg",
        "/image/projects/lubrication-system-2.jpg",
        "/image/projects/lubrication-system-3.jpg"
      ],
      description: "Шкаф управления на базе ОВЕН ПР\n\n✔ Автоматическая подача смазки в нужном объёме по заданному алгоритму.\n✔ Контроль всех нештатный ситуаций с фиксацией в журнале событий.\n✔ Удобное управление через сенсорную панель оператора.\n✔ Надежная и бюджетная база на оборудовании ОВЕН ПР200.",
      specs: ["ОВЕН ПР200", "WEINTEK", "STEZ", "MEYERTEC", "IEK", "MEAN WELL"],
      year: "2024"
    },
    {
      id: 9,
      title: "Дозирование удобрений",
      category: "Аграрная промышленность",
      image: "/image/projects/fertilizer-dosing-1.jpg",
      images: [
        "/image/projects/fertilizer-dosing-1.jpg",
        "/image/projects/fertilizer-dosing-2.jpg",
        "/image/projects/fertilizer-dosing-3.jpg"
      ],
      description: "Шкаф управления на базе ОВЕН ПР\n\n✔ Точная дозировка с минимальной погрешностью благодаря использованию частотного преобразователя дял насоса.\n✔ Ведение журнала учёта выдачи порций.\n✔ Выгрузка архивов на верхний уровень.\n✔ Режим самодиагностики.",
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
                      loading="lazy"
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


      </div>
    </section>
  );
});

export default ProjectGallery;