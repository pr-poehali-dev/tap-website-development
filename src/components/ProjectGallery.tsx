import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  specs: string[];
  year: string;
}

const ProjectGallery = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Система управления конвейером",
      category: "Шкафы управления",
      image: "/img/1642172b-c9b6-4c63-97a9-b2777e239ffe.jpg",
      description: "Автоматизированная система управления ленточным конвейером для горнодобывающего предприятия",
      specs: ["IP65", "2000×800×600 мм", "Нержавеющая сталь", "Вентиляция"],
      year: "2024"
    },
    {
      id: 2,
      title: "КИПиА для очистных сооружений",
      category: "КИПиА",
      image: "/img/246eeeb9-8ec6-41c9-af32-61c36ba29565.jpg",
      description: "Комплекс контрольно-измерительных приборов для мониторинга водоочистной станции",
      specs: ["Датчики pH", "Расходомеры", "ПЛК Siemens", "HMI панель"],
      year: "2024"
    },
    {
      id: 3,
      title: "Корпуса для пищевого производства",
      category: "Корпуса из нержавейки",
      image: "/img/bd325f34-14e9-4140-905f-54da6625e6d5.jpg",
      description: "Специализированные корпуса из пищевой нержавеющей стали для молочного комбината",
      specs: ["AISI 316L", "Санитарное исполнение", "IP66", "Быстросъемные панели"],
      year: "2023"
    },
    {
      id: 4,
      title: "Шкаф АВР для ТЭЦ",
      category: "Шкафы управления",
      image: "/img/1642172b-c9b6-4c63-97a9-b2777e239ffe.jpg",
      description: "Автоматический ввод резерва для критически важного оборудования теплоэлектроцентрали",
      specs: ["АВР 0.4кВ", "2500×1200×800 мм", "Дублированные системы", "Удаленный мониторинг"],
      year: "2023"
    },
    {
      id: 5,
      title: "Измерительная система для НПЗ",
      category: "КИПиА",
      image: "/img/246eeeb9-8ec6-41c9-af32-61c36ba29565.jpg",
      description: "Система измерения и учета нефтепродуктов с взрывозащищенным исполнением",
      specs: ["Взрывозащита Ex", "Ультразвуковые датчики", "HART протокол", "Резервирование"],
      year: "2023"
    },
    {
      id: 6,
      title: "Морские контейнеры",
      category: "Корпуса из нержавейки",
      image: "/img/bd325f34-14e9-4140-905f-54da6625e6d5.jpg",
      description: "Специальные корпуса для морского применения с усиленной антикоррозийной защитой",
      specs: ["Морское исполнение", "Дуплекс сталь", "IP67", "Виброустойчивость"],
      year: "2022"
    }
  ];

  const categories = ["Все проекты", "Шкафы управления", "КИПиА", "Корпуса из нержавейки"];
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
              <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/10 relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
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
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-foreground">Характеристики:</h4>
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