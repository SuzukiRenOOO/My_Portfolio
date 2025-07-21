'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import { Project } from '@/components/project';
import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { projectsData } from '@/lib/data';

export const Projects = () => {
  const { ref } = useSectionInView('作品');
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projectsData : projectsData.slice(0, 3);

  // Helper to chunk array into groups of 3
  const chunkProjects = (
    arr: (typeof projectsData)[number][],
    size: number
  ): (typeof projectsData)[number][][] => {
    const chunks: (typeof projectsData)[number][][] = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  };

  const projectGroups = chunkProjects(
    visibleProjects as (typeof projectsData)[number][],
    3
  );

  return (
    <section ref={ref} id="projects" className="my-10 scroll-mt-28 md:mb-20">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.175,
        }}
        viewport={{
          once: true,
        }}
      >
        <SectionHeading
          heading="作品"
          content="これまでに携わったプロジェクト（一部抜粋）"
        />
      </motion.div>
      <div className="flex flex-col gap-7">
        {projectGroups.map((group, groupIdx) => (
          <div key={groupIdx} className="flex flex-col gap-7 md:flex-row">
            {group.map(
              (project: (typeof projectsData)[number], index: number) => (
                <Project
                  key={project.title + (groupIdx * 3 + index)}
                  project={project}
                  index={groupIdx * 3 + index}
                />
              )
            )}
          </div>
        ))}
      </div>
      {!showAll && projectsData.length > 3 && (
        <button
          className="bg-primary text-primary-foreground hover:bg-primary/90 mx-auto mt-6 block rounded px-6 py-2 transition-colors"
          onClick={() => setShowAll(true)}
        >
          もっと見る
        </button>
      )}
    </section>
  );
};
