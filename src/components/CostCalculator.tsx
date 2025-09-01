import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

interface CalculatorData {
  width: number;
  height: number;
  depth: number;
  material: string;
  protection: string;
  accessories: string[];
  quantity: number;
  name: string;
  phone: string;
  email: string;
  message: string;
}

const CostCalculator = () => {
  const [formData, setFormData] = useState<CalculatorData>({
    width: 0,
    height: 0,
    depth: 0,
    material: '',
    protection: '',
    accessories: [],
    quantity: 1,
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [calculatedCost, setCalculatedCost] = useState<number>(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const basePrices = {
    material: {
      'steel': 1.0,
      'stainless': 2.5,
      'aluminum': 1.8
    },
    protection: {
      'ip54': 1.0,
      'ip65': 1.3,
      'ip66': 1.5
    }
  };

  const accessories = [
    { id: 'ventilation', name: 'Вентиляция', price: 2500 },
    { id: 'heating', name: 'Обогрев', price: 1800 },
    { id: 'lighting', name: 'Освещение', price: 1200 },
    { id: 'lock', name: 'Замок', price: 800 }
  ];

  const calculateCost = () => {
    const volume = (formData.width / 1000) * (formData.height / 1000) * (formData.depth / 1000);
    const baseCost = volume * 45000; // базовая стоимость за кубический метр
    
    const materialMultiplier = basePrices.material[formData.material as keyof typeof basePrices.material] || 1;
    const protectionMultiplier = basePrices.protection[formData.protection as keyof typeof basePrices.protection] || 1;
    
    const accessoriesCost = formData.accessories.reduce((sum, accessoryId) => {
      const accessory = accessories.find(a => a.id === accessoryId);
      return sum + (accessory ? accessory.price : 0);
    }, 0);
    
    const totalCost = (baseCost * materialMultiplier * protectionMultiplier + accessoriesCost) * formData.quantity;
    setCalculatedCost(totalCost);
  };

  const handleAccessoryChange = (accessoryId: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      accessories: checked 
        ? [...prev.accessories, accessoryId]
        : prev.accessories.filter(id => id !== accessoryId)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    calculateCost();
    setIsSubmitted(true);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      minimumFractionDigits: 0
    }).format(price);
  };

  if (isSubmitted) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <Icon name="CheckCircle" className="w-16 h-16 text-primary mx-auto mb-4" />
          <CardTitle className="text-2xl text-primary">Расчёт готов!</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <div className="bg-accent/10 p-6 rounded-lg">
            <p className="text-sm text-muted-foreground mb-2">Ориентировочная стоимость:</p>
            <p className="text-3xl font-bold text-primary">{formatPrice(calculatedCost)}</p>
          </div>
          <p className="text-muted-foreground">
            Наш менеджер свяжется с вами в ближайшее время для уточнения деталей заказа.
          </p>
          <Button 
            onClick={() => {
              setIsSubmitted(false);
              setCalculatedCost(0);
            }}
            variant="outline"
          >
            Сделать новый расчёт
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Icon name="Calculator" className="w-6 h-6 text-primary" />
          Калькулятор стоимости
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Параметры шкафа</h3>
            
            <div className="grid grid-cols-3 gap-4">
              <div>
                <Label htmlFor="width">Ширина (мм)</Label>
                <Input
                  id="width"
                  type="number"
                  value={formData.width || ''}
                  onChange={(e) => setFormData(prev => ({ ...prev, width: Number(e.target.value) }))}
                  placeholder="800"
                  required
                />
              </div>
              <div>
                <Label htmlFor="height">Высота (мм)</Label>
                <Input
                  id="height"
                  type="number"
                  value={formData.height || ''}
                  onChange={(e) => setFormData(prev => ({ ...prev, height: Number(e.target.value) }))}
                  placeholder="2000"
                  required
                />
              </div>
              <div>
                <Label htmlFor="depth">Глубина (мм)</Label>
                <Input
                  id="depth"
                  type="number"
                  value={formData.depth || ''}
                  onChange={(e) => setFormData(prev => ({ ...prev, depth: Number(e.target.value) }))}
                  placeholder="600"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="material">Материал</Label>
                <Select onValueChange={(value) => setFormData(prev => ({ ...prev, material: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите материал" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="steel">Сталь</SelectItem>
                    <SelectItem value="stainless">Нержавеющая сталь</SelectItem>
                    <SelectItem value="aluminum">Алюминий</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="protection">Степень защиты</Label>
                <Select onValueChange={(value) => setFormData(prev => ({ ...prev, protection: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Степень защиты" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ip54">IP54</SelectItem>
                    <SelectItem value="ip65">IP65</SelectItem>
                    <SelectItem value="ip66">IP66</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label>Дополнительные опции</Label>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {accessories.map((accessory) => (
                  <label key={accessory.id} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      onChange={(e) => handleAccessoryChange(accessory.id, e.target.checked)}
                      className="rounded border-border"
                    />
                    <span className="text-sm">{accessory.name} (+{formatPrice(accessory.price)})</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <Label htmlFor="quantity">Количество</Label>
              <Input
                id="quantity"
                type="number"
                min="1"
                value={formData.quantity}
                onChange={(e) => setFormData(prev => ({ ...prev, quantity: Number(e.target.value) }))}
                className="w-24"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Контактная информация</h3>
            
            <div>
              <Label htmlFor="name">Имя *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                required
              />
            </div>

            <div>
              <Label htmlFor="phone">Телефон *</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                required
              />
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              />
            </div>

            <div>
              <Label htmlFor="message">Дополнительные требования</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                rows={4}
                placeholder="Опишите особые требования к проекту..."
              />
            </div>

            <Button type="submit" className="w-full" size="lg">
              <Icon name="Calculator" className="w-4 h-4 mr-2" />
              Рассчитать стоимость
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default CostCalculator;