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
      image: "/img/project1.jpg",
      description: "Автоматизированная система управления ленточным конвейером для горнодобывающего предприятия",
      specs: ["IP65", "2000×800×600 мм", "Нержавеющая сталь", "Вентиляция"],
      year: "2024"
    },
    {
      id: 2,
      title: "КИПиА для очистных сооружений",
      category: "КИПиА",
      image: "/img/project2.jpg",
      description: "Комплекс контрольно-измерительных приборов для мониторинга водоочистной станции",
      specs: ["Датчики pH", "Расходомеры", "ПЛК Siemens", "HMI панель"],
      year: "2024"
    },
    {
      id: 3,
      title: "Корпуса для пищевого производства",
      category: "Корпуса из нержавейки",
      image: "/img/project3.jpg",
      description: "Специализированные корпуса из пищевой нержавеющей стали для молочного комбината",
      specs: ["AISI 316L", "Санитарное исполнение", "IP66", "Быстросъемные панели"],
      year: "2023"
    },
    {
      id: 4,
      title: "Шкаф АВР для ТЭЦ",
      category: "Шкафы управления",
      image: "/img/project4.jpg",
      description: "Автоматический ввод резерва для критически важного оборудования теплоэлектроцентрали",
      specs: ["АВР 0.4кВ", "2500×1200×800 мм", "Дублированные системы", "Удаленный мониторинг"],
      year: "2023"
    },
    {
      id: 5,
      title: "Измерительная система для НПЗ",
      category: "КИПиА",
      image: "/img/project5.jpg",
      description: "Система измерения и учета нефтепродуктов с взрывозащищенным исполнением",
      specs: ["Взрывозащита Ex", "Ультразвуковые датчики", "HART протокол", "Резервирование"],
      year: "2023"
    },
    {
      id: 6,
      title: "Морские контейнеры",
      category: "Корпуса из нержавейки",
      image: "/img/project6.jpg",
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
                <div className="absolute inset-0 flex items-center justify-center">
                  <Icon name="Image" className="w-16 h-16 text-muted-foreground/50" />
                </div>
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
          <Card className="inline-block p-8 bg-accent/5">
            <div className="flex items-center justify-center mb-4">
              <Icon name="FileText" className="w-8 h-8 text-primary mr-3" />
              <h3 className="text-xl font-semibold">Нужен детальный обзор проектов?</h3>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Запросите подробное портфолио с техническими характеристиками и фотографиями реализованных объектов
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+78432123456" className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                <Icon name="Phone" className="w-4 h-4 mr-2" />
                Позвонить
              </a>
              <a href="mailto:info@tap-tech.ru" className="inline-flex items-center px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors">
                <Icon name="Mail" className="w-4 h-4 mr-2" />
                Написать
              </a>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;