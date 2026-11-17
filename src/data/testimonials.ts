export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
}

export const testimonials: TestimonialItem[] = [
  {
    id: '1',
    quote:
      'Codevia has been so attentive, caring from the day one for the development of our website.\n\nBest wishes. Go ahead.',
    author: 'Verified Client',
    role: 'Client',
    company: 'Website Development',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=160&h=160&fit=crop&crop=faces',
    rating: 5,
  },
  {
    id: '2',
    quote:
      'I had a wonderful experience working with you on the development of my law firm’s website. She understood my requirements perfectly, was professional, creative, responsive, and paid great attention to detail. The final website looks elegant, professional, and perfectly represents our firm. Highly recommended for anyone looking for quality website development!\n\nAll the best',
    author: 'Verified Client',
    role: 'Law Firm Partner',
    company: 'Legal Services',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=160&h=160&fit=crop&crop=faces&q=80',
    rating: 5,
  },
  {
    id: '3',
    quote:
      'The dedication, patience, and genuine passion for teaching make every class special. What I appreciate most is the ability to explain even the most difficult concepts in such a simple and understandable way. Feels like a teacher rather than a mere trainer.',
    author: 'Verified Student',
    role: 'Student',
    company: 'Training Program',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=160&h=160&fit=crop&crop=faces',
    rating: 5,
  },
];
