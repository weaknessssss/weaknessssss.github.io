import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { 
  Figma, 
  Palette, 
  Layout, 
  Pen, 
  Eye, 
  Users,
  Lightbulb,
  Layers
} from 'lucide-react';

export function Design() {
  const designSkills = [
    {
      title: 'UI/UX Design',
      icon: Layout,
      description: 'Создание интуитивных пользовательских интерфейсов с фокусом на user experience',
      tools: ['User Research', 'Wireframing', 'User Journey', 'A/B Testing']
    },
    {
      title: 'Прототипирование',
      icon: Layers,
      description: 'Быстрое создание интерактивных прототипов для тестирования идей',
      tools: ['Interactive Prototypes', 'Clickable Mockups', 'User Flow', 'Rapid Prototyping']
    },
    {
      title: 'Типографика',
      icon: Pen,
      description: 'Работа с шрифтами, типографической иерархией и читаемостью',
      tools: ['Font Pairing', 'Text Hierarchy', 'Readability', 'Typography Systems']
    },
    {
      title: 'Визуальный дизайн',
      icon: Palette,
      description: 'Создание привлекательных и согласованных визуальных решений',
      tools: ['Color Theory', 'Design Systems', 'Brand Identity', 'Visual Consistency']
    }
  ];

  const figmaFeatures = [
    'Создание дизайн-систем',
    'Компонентный подход',
    'Адаптивный дизайн',
    'Прототипирование',
    'Командная работа',
    'Handoff для разработки'
  ];

  const designProcess = [
    { step: '01', title: 'Исследование', description: 'Анализ пользователей и требований' },
    { step: '02', title: 'Концепция', description: 'Создание концепции и wireframes' },
    { step: '03', title: 'Дизайн', description: 'Визуальное оформление и UI' },
    { step: '04', title: 'Прототип', description: 'Интерактивные прототипы' },
    { step: '05', title: 'Тестирование', description: 'Пользовательское тестирование' },
    { step: '06', title: 'Итерация', description: 'Улучшение на основе фидбека' }
  ];

  return (
    <section id="design" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl mb-4">Дизайн</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Мой опыт в области UI/UX дизайна и работы с современными дизайн-инструментами
          </p>
        </motion.div>

        {/* Figma Expertise */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20 border-purple-200 dark:border-purple-800">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-xl">
                  <Figma className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <CardTitle className="text-2xl">Figma Expert</CardTitle>
                  <p className="text-muted-foreground">Профессиональный опыт работы дизайнером</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Имею большой опыт работы в Figma как дизайнер. Создаю современные пользовательские интерфейсы, 
                дизайн-системы и интерактивные прототипы. Понимаю принципы UI/UX и умею работать в команде.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {figmaFeatures.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2 p-3 bg-white/50 dark:bg-gray-900/50 rounded-lg"
                  >
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Design Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {designSkills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-muted group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <skill.icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg">{skill.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">{skill.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {skill.tools.map((tool, toolIndex) => (
                      <motion.div
                        key={tool}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: (index * 0.1) + (toolIndex * 0.05) }}
                        viewport={{ once: true }}
                      >
                        <Badge variant="outline" className="text-xs">
                          {tool}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Design Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl text-center mb-8">Мой дизайн-процесс</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {designProcess.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative mb-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto text-lg font-medium">
                    {item.step}
                  </div>
                  {index < designProcess.length - 1 && (
                    <div className="hidden lg:block absolute top-6 left-full w-full h-0.5 bg-border -translate-y-0.5"></div>
                  )}
                </div>
                <h4 className="mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-accent/50 rounded-xl p-8 max-w-3xl mx-auto">
            <Lightbulb className="h-8 w-8 mx-auto mb-4 text-primary" />
            <h3 className="text-xl mb-4">Философия дизайна</h3>
            <p className="text-muted-foreground leading-relaxed">
              Верю, что хороший дизайн должен быть не только красивым, но и функциональным. 
              Каждое решение основано на потребностях пользователей и бизнес-целях. 
              Стремлюсь создавать интерфейсы, которые интуитивно понятны и приятны в использовании.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}