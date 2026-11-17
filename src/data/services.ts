import type { LucideIcon } from 'lucide-react';
import { Code2, Smartphone, PenTool, Sparkles, Lightbulb } from 'lucide-react';

export interface ServiceItem {
  number: string;
  title: string;
  descLine1: string;
  descLine2: string;
  icon: LucideIcon;
}

export const services: ServiceItem[] = [
  {
    number: '01.',
    title: 'Website Design &\nDevelopment',
    descLine1: 'Fast. Responsive.',
    descLine2: 'Scalable.',
    icon: Code2,
  },
  {
    number: '02.',
    title: 'Mobile App\nDevelopment',
    descLine1: 'Intuitive. Native.',
    descLine2: 'iOS & Android.',
    icon: Smartphone,
  },
  {
    number: '03.',
    title: 'UI / UX\nDesign',
    descLine1: 'Human-Centered.',
    descLine2: 'Conversion-Led.',
    icon: PenTool,
  },
  {
    number: '04.',
    title: 'Artificial\nIntelligence',
    descLine1: 'Practical AI.',
    descLine2: 'Process Automation.',
    icon: Sparkles,
  },
  {
    number: '05.',
    title: 'Digital\nStrategy',
    descLine1: 'Clear Roadmap.',
    descLine2: 'Measurable Impact.',
    icon: Lightbulb,
  },
];
