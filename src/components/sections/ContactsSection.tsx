import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface ContactsSectionProps {
  className?: string;
}

const ContactsSection = ({ className = '' }: ContactsSectionProps) => {
  return (
    <section id="contacts" className={`py-16 px-6 bg-secondary ${className}`}>
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Контакты</h2>
          <p className="text-slate-300">Свяжитесь с нами для обсуждения вашего вопроса</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <a href="tel:+79225106088" className="block hover:scale-105 transition-transform">
            <Card className="bg-accent border-border h-full">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" className="text-white" size={24} />
                </div>
                <CardTitle className="text-white">Телефон</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-white">+7 (922) 510-60-88</p>
              </CardContent>
            </Card>
          </a>
          <a href="mailto:info@tap18.ru" className="block hover:scale-105 transition-transform">
            <Card className="bg-accent border-border h-full">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" className="text-white" size={24} />
                </div>
                <CardTitle className="text-white">Email</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-white">info@tap18.ru</p>
              </CardContent>
            </Card>
          </a>
          <a href="https://yandex.ru/maps/?text=г.%20Ижевск,%20улица%20Молодёжная,%20дом%2012Б" target="_blank" rel="noopener noreferrer" className="block hover:scale-105 transition-transform">
            <Card className="bg-accent border-border h-full">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" className="text-white" size={24} />
                </div>
                <CardTitle className="text-white">Адрес</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-white mb-2">г. Ижевск,</p>
                <p className="text-white">ул. Молодёжная, д. 12Б</p>
              </CardContent>
            </Card>
          </a>
        </div>
        <div className="text-center mt-12">
          <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
            <a href="https://t.me/tap18_channel" target="_blank" rel="noopener noreferrer">
              <svg className="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
              Написать в Телеграмм
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;