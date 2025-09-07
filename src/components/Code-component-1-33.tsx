import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { 
  Lightbulb, 
  Target, 
  CheckCircle, 
  Palette,
  Heart,
  Zap
} from 'lucide-react';

export function PersonalQualities() {
  const qualities = [
    {
      icon: Lightbulb,
      title: 'Креативный',
      description: 'Нестандартный подход к решению задач и генерация инновационных идей',
      color: 'text-yellow-500'
    },
    {
      icon: Palette,
      title: 'Мыслит как художник',
      description: 'Визуальное восприятие и эстетическое чувство в каждом проекте',
      color: 'text-purple-500'
    },
    {
      icon: Target,
      title: 'Работа по ТЗ',
      description: 'Четкое следование техническому заданию и требованиям проекта',
      color: 'text-blue-500'
    },
    {
      icon: CheckCircle,
      title: 'Доводит до конца',
      description: 'Ответственность за результат и завершение всех начатых задач',
      color: 'text-green-500'
    }
  ];

  const additionalTraits = [
    { trait: 'Внимание к деталям', icon: '🔍' },
    { trait: 'Командная работа', icon: '🤝' },
    { trait: 'Быстрое обучение', icon: '⚡' },
    { trait: 'Открытость к фидбеку', icon: '💭' },
    { trait: 'Проактивность', icon: '🚀' },
    { trait: 'Адаптивность', icon: '🔄' }
  ];

  return (
    <section id="qualities" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl mb-4">Личные качества</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Что делает меня уникальным специалистом и как я подхожу к работе
          </p>
        </motion.div>

        {/* Main Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="bg-gradient-to-br from-primary/5 to-chart-1/5 border-primary/20">
            <CardContent className="p-8 text-center">
              <Heart className="h-12 w-12 mx-auto mb-6 text-primary" />
              <blockquote className="text-xl sm:text-2xl leading-relaxed mb-6">
                "Креативный, мыслит как художник, готов работать по ТЗ и доводить задачи до конца"
              </blockquote>
              <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Core Qualities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {qualities.map((quality, index) => (
            <motion.div
              key={quality.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg bg-muted group-hover:bg-primary group-hover:text-primary-foreground transition-colors`}>
                      <quality.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg mb-2 group-hover:text-primary transition-colors">
                        {quality.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {quality.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Traits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl text-center mb-8">Дополнительные качества</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {additionalTraits.map((item, index) => (
              <motion.div
                key={item.trait}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 p-4 bg-accent/50 rounded-lg hover:bg-accent transition-colors group"
              >
                <span className="text-2xl group-hover:scale-110 transition-transform">
                  {item.icon}
                </span>
                <span className="text-sm">{item.trait}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Work Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <Card className="text-center p-6 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
            <Target className="h-8 w-8 mx-auto mb-4 text-blue-600 dark:text-blue-400" />
            <h4 className="mb-2">Целеориентированность</h4>
            <p className="text-sm text-muted-foreground">
              Всегда фокусируюсь на достижении поставленных целей и KPI проекта
            </p>
          </Card>

          <Card className="text-center p-6 bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
            <Zap className="h-8 w-8 mx-auto mb-4 text-green-600 dark:text-green-400" />
            <h4 className="mb-2">Энергичность</h4>
            <p className="text-sm text-muted-foreground">
              Высокая мотивация и энтузиазм к новым вызовам и проектам
            </p>
          </Card>

          <Card className="text-center p-6 bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800">
            <Heart className="h-8 w-8 mx-auto mb-4 text-purple-600 dark:text-purple-400" />
            <h4 className="mb-2">Страсть к качеству</h4>
            <p className="text-sm text-muted-foreground">
              Стремление к совершенству в каждой детали и высоким стандартам
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}