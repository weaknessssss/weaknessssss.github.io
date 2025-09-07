import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { 
  Github, 
  Mail, 
  Linkedin, 
  ExternalLink,
  ArrowUp
} from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/weaknessssss',
      description: 'Мои проекты и код'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:contact@example.com',
      description: 'Связаться со мной'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: '#',
      description: 'Профессиональная сеть'
    }
  ];

  const quickLinks = [
    { name: 'Проекты', href: '#projects' },
    { name: 'Технологии', href: '#technologies' },
    { name: 'Дизайн', href: '#design' },
    { name: 'О себе', href: '#qualities' }
  ];

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h3 className="text-xl mb-4">Давайте создадим что-то великое вместе</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Я всегда открыт для новых возможностей и интересных проектов. 
              Если у вас есть идея, которую хотите воплотить в жизнь, 
              давайте поговорим об этом!
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="group">
                <Mail className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Связаться со мной
              </Button>
              <Button variant="outline" size="lg" className="group" asChild>
                <a href="https://github.com/weaknessssss" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  GitHub Profile
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="mb-4">Быстрые ссылки</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => {
                      const element = document.querySelector(link.href);
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="mb-4">Контакты</h4>
            <div className="space-y-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target={social.name !== 'Email' ? '_blank' : undefined}
                  rel={social.name !== 'Email' ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <social.icon className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="text-sm">{social.name}</div>
                    <div className="text-xs text-muted-foreground">{social.description}</div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <Separator className="mb-8" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <div className="text-sm text-muted-foreground">
            © {currentYear} Портфолио разработчика. Создано с ❤️ используя React и TypeScript.
          </div>
          
          <Button
            variant="outline"
            size="sm"
            onClick={scrollToTop}
            className="group"
          >
            <ArrowUp className="mr-2 h-4 w-4 group-hover:-translate-y-1 transition-transform" />
            Наверх
          </Button>
        </motion.div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-chart-1/5 rounded-full blur-3xl"></div>
      </div>
    </footer>
  );
}