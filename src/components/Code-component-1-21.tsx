import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Github, ExternalLink, Smartphone } from 'lucide-react';

export function Projects() {
  const project = {
    title: 'Himmle',
    description: 'Инновационное iOS-приложение, разработанное с использованием современных технологий Swift и SwiftUI. Проект демонстрирует глубокое понимание мобильной разработки и создания пользовательских интерфейсов.',
    technologies: ['Swift', 'SwiftUI', 'iOS', 'Git'],
    githubUrl: 'https://github.com/weaknessssss/Himmle',
    features: [
      'Нативная iOS разработка',
      'Современный SwiftUI интерфейс',
      'Оптимизированная производительность',
      'Интуитивный UX дизайн'
    ]
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl mb-4">Проекты</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Вот некоторые из моих работ, которые демонстрируют мои навыки в разработке
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary text-primary-foreground rounded-lg">
                    <Smartphone className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">{project.title}</CardTitle>
                    <CardDescription className="text-base mt-1">
                      iOS приложение - Стартап проект
                    </CardDescription>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="group/btn" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                      GitHub
                    </a>
                  </Button>
                  <Button size="sm" className="group/btn">
                    <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:translate-x-1 transition-transform" />
                    Детали
                  </Button>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                {project.description}
              </p>

              <div>
                <h4 className="mb-3">Ключевые особенности:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-2"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="mb-3">Технологии:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Badge variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                        {tech}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-accent rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Git репозиторий:</strong> weaknessssss/Himmle
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-6">
            Хотите увидеть больше проектов или обсудить сотрудничество?
          </p>
          <Button size="lg" variant="outline">
            <Github className="mr-2 h-4 w-4" />
            Все проекты на GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
}