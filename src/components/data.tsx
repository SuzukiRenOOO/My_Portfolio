import { Icons } from '@/components/icons';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const projectsData = [
  {
    image: '/images/project-2.webp',
    title: 'Next-starter',
    description:
      'このプロジェクトは、TypeScript、Tailwind CSS、Next-auth、Eslint、Stripe、テストツールなど、豊富な機能を搭載しています。',
    technologies: ['Next.js', 'Tailwind', 'Shadcn/ui', 'Next-auth', 'Prisma'],
    links: {
      preview: 'https://next-starter-skolaczk.vercel.app',
      github: 'https://github.com/Skolaczk/next-starter',
      githubApi: 'https://api.github.com/repos/Skolaczk/next-starter',
    },
  },
  {
    image: '/images/project-1.webp',
    title: 'SocialHub',
    description:
      'このプロジェクトは、TypeScript、Tailwind CSS、Next-auth、Eslint、Stripe、テストツールなど、豊富な機能を搭載しています。',
    technologies: ['Next.js', 'TypeScript', ' Nest.js', 'Tailwind', 'Prisma'],
    links: {
      preview: 'https://socialhub-ms.vercel.app/',
      github: 'https://github.com/Skolaczk/SocialHub',
      githubApi: 'https://api.github.com/repos/Skolaczk/SocialHub',
    },
  },
] as const;

export const experiencesData = [
  {
    title: 'ウェブ開発者インターン',
    company: 'Ignite Co., Ltd.',
    description:
      'このインターンシップ期間中、私は主に2つの主要な分野に焦点を当ててきました：WordPressプラグインの開発と、ウェブサイトの内容、プラグイン、設定の管理です。',
    period: '2017',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Wordpress'],
  },
  {
    title: 'フロントエンド開発者 & UIデザイナー',
    company: ' Ignite Co., Ltd.',
    description:
      'イグナイト株式会社でのインターンシップ期間中、経験豊富なITチームと協力し、Next.jsに関するタスクに注力しました。この経験はチームワークの重要性を深く理解する機会となり、Next.jsのスキルをさらに向上させることに繋がりました。',
    period: '2022 - 2023',
    technologies: ['Next.js', 'TypeScript', 'Sanity CMS', 'Tailwind'],
  },
  {
    title: 'フロントエンド開発者 & UIデザイナー',
    company: 'Freelancing, remote',
    description:
      'フリーランサーとして、Figmaを使用したグラフィックデザインと、Sanity CMSを組み合わせたNext.jsを用いたウェブサイト開発に特化してきました。デザインコンセプトの立案から最終的な実装まで、プロジェクトを独立して遂行し、クライアントの満足度を確保してきました。',
    period: '2024',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
  },
  {
    title: 'フロントエンド開発者 & UIデザイナー',
    company: 'Creative Netdoor Co., Ltd.',
    description: (
      <>
        クリエイティブ・ネットドア株式会社では、フロントエンド、バックエンド、GISの専門家と協力し、クリエイティブ・ネットドア株式会社の不動産レポート生成プラットフォーム「Creative
        Netdoor Co.,
        Ltd.-app.com」の構築に携わっています。私はフロントエンドの開発と維持管理を担当し、ユーザーが直感的で分かりやすい体験を得られるよう、UI/UXのデザインにも携わっています。
      </>
    ),
    period: '2025 - present',
    technologies: ['Next.js', 'TypeScript', 'Tailwind', 'Supabase', 'Leaflet'],
  },
] as const;

export const skillsData = [
  { icon: <Icons.html className="size-12" /> },
  { icon: <Icons.css className="size-12" /> },
  { icon: <Icons.sass className="size-12" /> },
  { icon: <Icons.tailwind className="size-12" /> },
  { icon: <Icons.javascript className="size-12" /> },
  { icon: <Icons.typescript className="size-12" /> },
  { icon: <Icons.react className="size-12" /> },
  { icon: <Icons.redux className="size-12" /> },
  { icon: <Icons.nextjs className="size-12" /> },
  { icon: <Icons.nestjs className="size-12" /> },
  { icon: <Icons.prisma className="size-12" /> },
  { icon: <Icons.docker className="size-12" /> },
] as const;
