'use client';

import { motion } from 'framer-motion';

import { SectionHeading } from '@/components/section-heading';
import { Skills } from '@/components/skills';
import { useSectionInView } from '@/hooks/use-section-in-view';

export const About = () => {
  const { ref } = useSectionInView('私について');

  return (
    <motion.section
      ref={ref}
      id="about"
      className="my-10 flex w-full scroll-mt-28 flex-col items-center md:mb-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading heading="私について" />
      <div className="-mt-5 max-w-2xl text-center leading-7">
        <p className="mb-4">
          鈴木蓮と申します。日本在住のフルスタックエンジニアです。7年以上プログラミングを学び、問題解決の面白さに魅了されてきました。React、Next.js、TypeScript、Tailwind
          CSSを中心に、WordPressやLaravelなどのCMSも扱えます。個人・チーム問わず様々なプロジェクトに携わり、常に新しい技術を学び続けています。
        </p>
        <p>
          成長できる環境で貢献したいと考えています。ご縁がありましたら、ぜひお気軽にご連絡ください。
        </p>
      </div>
      <Skills />
    </motion.section>
  );
};
