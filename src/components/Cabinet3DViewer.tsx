import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface CabinetModel {
  id: string;
  name: string;
  dimensions: { width: number; height: number; depth: number };
  material: string;
  protection: string;
  features: string[];
}

const Cabinet3DViewer = React.memo(() => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [selectedModel, setSelectedModel] = useState<string>('standard');
  const [rotation, setRotation] = useState([0]);
  const [isRotating, setIsRotating] = useState(false);
  
  const models: CabinetModel[] = [
    {
      id: 'standard',
      name: 'Стандартный шкаф управления',
      dimensions: { width: 800, height: 2000, depth: 600 },
      material: 'Сталь',
      protection: 'IP54',
      features: ['Замок', 'Вентиляционные решетки', 'DIN-рейки', 'Заземление']
    },
    {
      id: 'stainless',
      name: 'Шкаф из нержавеющей стали',
      dimensions: { width: 1000, height: 1800, depth: 500 },
      material: 'Нержавеющая сталь',
      protection: 'IP65',
      features: ['Морское исполнение', 'Усиленные петли', 'Уплотнители', 'Дренаж']
    },
    {
      id: 'compact',
      name: 'Компактный корпус',
      dimensions: { width: 400, height: 600, depth: 300 },
      material: 'Алюминий',
      protection: 'IP66',
      features: ['Легкий вес', 'Быстрый монтаж', 'Прозрачная дверца', 'LED подсветка']
    }
  ];

  const currentModel = models.find(m => m.id === selectedModel) || models[0];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const scale = 0.8;
      
      const rotationRad = (rotation[0] * Math.PI) / 180;
      
      const { width, height, depth } = currentModel.dimensions;
      const scaleRatio = Math.min(canvas.width, canvas.height) / Math.max(width, height) * scale * 0.3;
      
      const w = width * scaleRatio;
      const h = height * scaleRatio;
      const d = depth * scaleRatio;

      ctx.save();
      ctx.translate(centerX, centerY);

      const perspective = 0.6;
      const cos = Math.cos(rotationRad);
      const sin = Math.sin(rotationRad);

      // Задняя грань
      ctx.fillStyle = '#666';
      ctx.strokeStyle = '#333';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(-w/2 + d*sin*perspective, -h/2 + d*cos*perspective);
      ctx.lineTo(w/2 + d*sin*perspective, -h/2 + d*cos*perspective);
      ctx.lineTo(w/2 + d*sin*perspective, h/2 + d*cos*perspective);
      ctx.lineTo(-w/2 + d*sin*perspective, h/2 + d*cos*perspective);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Правая боковая грань
      ctx.fillStyle = '#888';
      ctx.beginPath();
      ctx.moveTo(w/2, -h/2);
      ctx.lineTo(w/2 + d*sin*perspective, -h/2 + d*cos*perspective);
      ctx.lineTo(w/2 + d*sin*perspective, h/2 + d*cos*perspective);
      ctx.lineTo(w/2, h/2);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Передняя грань (основная)
      const gradient = ctx.createLinearGradient(-w/2, -h/2, w/2, h/2);
      gradient.addColorStop(0, currentModel.material === 'Нержавеющая сталь' ? '#e8e8e8' : '#bbb');
      gradient.addColorStop(1, currentModel.material === 'Нержавеющая сталь' ? '#c0c0c0' : '#999');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.moveTo(-w/2, -h/2);
      ctx.lineTo(w/2, -h/2);
      ctx.lineTo(w/2, h/2);
      ctx.lineTo(-w/2, h/2);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Дверца
      ctx.fillStyle = 'rgba(200, 200, 200, 0.3)';
      ctx.strokeStyle = '#555';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(-w/2 + 20, -h/2 + 20);
      ctx.lineTo(w/2 - 20, -h/2 + 20);
      ctx.lineTo(w/2 - 20, h/2 - 20);
      ctx.lineTo(-w/2 + 20, h/2 - 20);
      ctx.closePath();
      ctx.stroke();

      // Ручка
      ctx.fillStyle = '#333';
      ctx.fillRect(w/2 - 30, -10, 15, 20);

      // Вентиляционные отверстия
      if (currentModel.features.includes('Вентиляционные решетки') || currentModel.features.includes('Усиленные петли')) {
        ctx.fillStyle = '#444';
        for (let i = 0; i < 5; i++) {
          for (let j = 0; j < 3; j++) {
            ctx.fillRect(-w/4 + j * 30, -h/2 + 40 + i * 20, 20, 4);
          }
        }
      }

      // Индикатор степени защиты
      ctx.fillStyle = currentModel.protection === 'IP66' ? '#dc2626' : currentModel.protection === 'IP65' ? '#ea580c' : '#16a34a';
      ctx.fillRect(-w/2 + 30, -h/2 + 30, 60, 20);
      ctx.fillStyle = 'white';
      ctx.font = '12px Arial';
      ctx.textAlign = 'center';
      ctx.fillText(currentModel.protection, -w/2 + 60, -h/2 + 43);

      ctx.restore();
    };

    draw();
  }, [rotation, selectedModel, currentModel]);

  useEffect(() => {
    let animationId: number;
    
    if (isRotating) {
      const animate = () => {
        setRotation(prev => [(prev[0] + 1) % 360]);
        animationId = requestAnimationFrame(animate);
      };
      animationId = requestAnimationFrame(animate);
    }

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isRotating]);

  return (
    <section className="py-20 bg-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            3D Модели шкафов
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Интерактивный просмотр наших решений с детальными характеристиками
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Box" className="w-6 h-6 text-primary" />
                  3D Просмотр
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <canvas
                    ref={canvasRef}
                    width={400}
                    height={400}
                    className="w-full max-w-md mx-auto border rounded-lg bg-gradient-to-br from-slate-50 to-slate-100"
                  />
                  <div className="absolute top-4 right-4">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => setIsRotating(!isRotating)}
                    >
                      <Icon name={isRotating ? "Pause" : "Play"} className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="mt-6 space-y-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Поворот: {rotation[0]}°
                    </label>
                    <Slider
                      value={rotation}
                      onValueChange={setRotation}
                      max={360}
                      step={1}
                      className="w-full"
                    />
                  </div>
                  
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => setRotation([0])}
                    >
                      Вид спереди
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => setRotation([90])}
                    >
                      Вид сбоку
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => setRotation([45])}
                    >
                      Изометрия
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Выберите модель</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {models.map((model) => (
                    <div
                      key={model.id}
                      className={`p-4 border rounded-lg cursor-pointer transition-all ${
                        selectedModel === model.id
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-accent hover:bg-accent/5'
                      }`}
                      onClick={() => setSelectedModel(model.id)}
                    >
                      <h4 className="font-semibold text-foreground">{model.name}</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        {model.dimensions.width}×{model.dimensions.height}×{model.dimensions.depth} мм
                      </p>
                      <div className="flex gap-2 mt-2">
                        <Badge variant="outline">{model.material}</Badge>
                        <Badge variant="outline">{model.protection}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Характеристики модели</CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold text-lg text-foreground mb-4">{currentModel.name}</h3>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <span className="text-sm text-muted-foreground">Размеры:</span>
                    <p className="font-medium">
                      {currentModel.dimensions.width}×{currentModel.dimensions.height}×{currentModel.dimensions.depth} мм
                    </p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Материал:</span>
                    <p className="font-medium">{currentModel.material}</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Защита:</span>
                    <p className="font-medium">{currentModel.protection}</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Объем:</span>
                    <p className="font-medium">
                      {((currentModel.dimensions.width * currentModel.dimensions.height * currentModel.dimensions.depth) / 1000000).toFixed(2)} м³
                    </p>
                  </div>
                </div>

                <div>
                  <span className="text-sm text-muted-foreground">Особенности:</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {currentModel.features.map((feature, index) => (
                      <Badge key={index} variant="secondary">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mt-6 p-4 bg-accent/10 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon name="Info" className="w-4 h-4 text-primary" />
                    <span className="font-medium">Примечание</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Все модели изготавливаются по индивидуальным размерам. Показанная 3D модель демонстрирует общий вид и пропорции изделия.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Cabinet3DViewer;