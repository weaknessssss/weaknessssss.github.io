import React from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { 
  Code, 
  Database, 
  Palette, 
  Cpu, 
  GitBranch, 
  Bot,
  Terminal,
  Layers
} from 'lucide-react';

export function Technologies() {
  const techCategories = [
    {
      title: 'Frontend',
      icon: Code,
      color: 'text-chart-1',
      technologies: ['HTML/CSS', 'React', 'Vue', 'TypeScript', 'JavaScript']
    },
    {
      title: 'Backend & Languages',
      icon: Database,
      color: 'text-chart-2',
      technologies: ['Java (базовый)', 'C# (базовый)', 'Node.js', 'REST API']
    },
    {
      title: 'Mobile Development',
      icon: Layers,
      color: 'text-chart-3',
      technologies: ['Swift', 'SwiftUI', 'iOS Development', 'Xcode']
    },
    {
      title: 'AI & Tools',
      icon: Bot,
      color: 'text-chart-4',
      technologies: ['Claude 3.7', 'DeepSeek', 'AI-инструменты', 'Prompt Engineering']
    },
    {
      title: 'DevOps & Systems',
      icon: Terminal,
      color: 'text-chart-5',
      technologies: ['UNIX-системы', 'Linux', 'macOS', 'Terminal']
    },
    {
      title: 'Version Control',
      icon: GitBranch,
      color: 'text-primary',
      technologies: ['Git', 'GitHub', 'GitLab', 'Version Control']
    }
  ];

  const additionalSkills = [
    'Responsive Design',
    'Cross-platform Development',
    'Code Review',
    'Agile/Scrum',
    'Problem Solving',
    'Technical Documentation'
  ];

  return (
    <section id="technologies" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl mb-4">Технологии</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Мой технологический стек и инструменты, которые я использую для создания качественных продуктов
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-muted group-hover:bg-primary group-hover:text-primary-foreground transition-colors`}>
                      <category.icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: (categoryIndex * 0.1) + (techIndex * 0.05) }}
                        viewport={{ once: true }}
                      >
                        <Badge 
                          variant="outline" 
                          className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-accent/50 rounded-xl p-8"
        >
          <h3 className="text-xl mb-6 text-center">Дополнительные навыки</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalSkills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-background text-foreground rounded-full text-sm border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-muted rounded-xl p-6 max-w-2xl mx-auto">
            <Cpu className="h-8 w-8 mx-auto mb-4 text-primary" />
            <p className="text-muted-foreground">
              Постоянно изучаю новые технологии и следую лучшим практикам разработки. 
              Всегда готов к изучению новых инструментов для решения задач проекта.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}