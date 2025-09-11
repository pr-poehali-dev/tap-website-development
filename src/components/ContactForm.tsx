import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactForm = React.memo(({ isOpen, onClose }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    contactMethod: '',
    contact: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here would be form submission logic
    console.log('Form submitted:', formData);
    alert('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
    onClose();
    setFormData({ contactMethod: '', contact: '', message: '' });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md bg-white">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl font-semibold">Обратная связь</CardTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="h-8 w-8 p-0"
            >
              <Icon name="X" size={16} />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="contactMethod">Способ связи *</Label>
              <Select 
                value={formData.contactMethod} 
                onValueChange={(value) => setFormData({...formData, contactMethod: value})}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Выберите способ связи" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="phone">Телефон</SelectItem>
                  <SelectItem value="email">Email</SelectItem>
                  <SelectItem value="telegram">Telegram</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact">
                {formData.contactMethod === 'phone' ? 'Номер телефона' : 
                 formData.contactMethod === 'email' ? 'Email адрес' : 
                 formData.contactMethod === 'telegram' ? 'Telegram' : 'Контактные данные'} *
              </Label>
              <Input
                id="contact"
                type={formData.contactMethod === 'email' ? 'email' : 'text'}
                placeholder={
                  formData.contactMethod === 'phone' ? '+7 (xxx) xxx-xx-xx' :
                  formData.contactMethod === 'email' ? 'example@email.com' :
                  formData.contactMethod === 'telegram' ? '@username' :
                  'Введите контактные данные'
                }
                value={formData.contact}
                onChange={(e) => setFormData({...formData, contact: e.target.value})}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Сообщение (необязательно)</Label>
              <Textarea
                id="message"
                placeholder="Опишите ваш вопрос или требования..."
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                rows={4}
              />
            </div>

            <div className="flex gap-3 pt-4">
              <Button type="submit" className="flex-1">
                <Icon name="Send" className="w-4 h-4 mr-2" />
                Отправить
              </Button>
              <Button type="button" variant="outline" onClick={onClose}>
                Отмена
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
});

export default ContactForm;