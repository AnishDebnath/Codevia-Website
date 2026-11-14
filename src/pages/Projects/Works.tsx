import React from 'react';
import { Card, allProjects } from '../../components/product';
export type { ProjectItem } from '../../components/product';
export { allProjects };

interface WorksProps {
  selectedCategory: string;
}

// ponytail: Projects grid using shared product Card component
export const Works: React.FC<WorksProps> = ({ selectedCategory }) => {
  const filteredProjects = allProjects.filter((project) => {
    if (selectedCategory === 'All Work') return true;
    return (
      project.category === selectedCategory ||
      (project.subcategories && project.subcategories.includes(selectedCategory))
    );
  });

  return (
    <section className="pt-2 sm:pt-4 pb-20 sm:pb-24 lg:pb-28 relative select-none">
      {/* Background ambient lighting matching theme */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[350px] bg-gradient-to-r from-blue-100/20 via-purple-100/25 to-pink-100/15 blur-[130px] pointer-events-none rounded-full -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[550px] h-[300px] bg-gradient-to-l from-amber-100/20 via-pink-100/15 to-purple-100/20 blur-[120px] pointer-events-none rounded-full -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        {/* 2-Column Responsive Showcase Grid using shared Card component */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 sm:gap-8 lg:gap-9">
          {filteredProjects.map((project) => (
            <Card key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
