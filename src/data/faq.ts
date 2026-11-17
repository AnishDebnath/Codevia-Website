export interface FAQItem {
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    question: 'How long does a typical project take?',
    answer:
      'Depending on scope and complexity, typical projects range from 4 to 8 weeks from kickoff to launch. We work in structured sprints across our 4-stage framework (Discover, Define, Build, Scale) with regular milestone sign-offs so there are never any surprises.',
  },
  {
    question: 'What services does Codevia provide?',
    answer:
      'We deliver end-to-end digital solutions across 5 core pillars: Website Design & Development, Mobile App Development (iOS & Android), UI / UX Design, Artificial Intelligence integrations, and Digital Strategy.',
  },
  {
    question: 'What technology stack do you build with?',
    answer:
      'We choose technology based on the problem, not the trend. Our primary stack includes React, Next.js, TypeScript, Node.js, Python for AI & Data, AWS Cloud infrastructure, and modern databases like PostgreSQL and MongoDB.',
  },
  {
    question: 'How do you integrate Artificial Intelligence into products?',
    answer:
      'We develop practical AI solutions that automate workflows, generate intelligent insights, and unlock new efficiencies for your business—from custom LLM integrations and automated agents to smart search and recommendation engines.',
  },
  {
    question: 'Do you provide ongoing support after launch?',
    answer:
      'Yes. In our Scale phase, we provide continuous monitoring, performance optimization, security updates, and iterative feature development to ensure your product operates smoothly as your business grows.',
  },
  {
    question: 'How does the collaboration process work?',
    answer:
      'We partner closely with your team from day one. You get direct access to our leads, weekly sprint demos, clear milestone approvals, and transparent communication throughout the entire journey.',
  },
];
