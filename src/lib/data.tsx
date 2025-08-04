import { Icons } from '@/components/icons';

export const links = [
  {
    name: 'ホーム',
    hash: '#home',
  },
  {
    name: '私について',
    hash: '#about',
  },
  {
    name: '経験',
    hash: '#experience',
  },
  {
    name: '作品',
    hash: '#projects',
  },
  {
    name: 'お問い合わせ',
    hash: '#contact',
  },
] as const;

export const projectsData = [
  {
    image: '/images/1.png',
    title: '町田鶴川ファミリーホール（サン・ライフ）',
    description:
      '2023年11月に東京都町田市野津田町でオープンした、サン・ライフ直営の少人数向け貸切型家族葬式場です。最大20名程度に対応し、個室安置室やバリアフリー設計、14台分の駐車場を備えています。緑を感じる明るい外観と、故人を偲ぶメモリアル祭壇も特徴です。',
    technologies: ['Next.js', 'Tailwind', 'Shadcn/ui', 'Next-auth', 'Prisma'],
    links: {
      preview: 'https://www.moshimo.net/lp_machida/',
      github: 'https://www.moshimo.net/lp_machida/',
      githubApi: 'https://www.moshimo.net/lp_machida/',
    },
  },
  {
    image: '/images/2.png',
    title: 'かがやき夢工場（就労継続支援B型）',
    description:
      '耳が不自由な方を対象とした福祉作業所です。軽作業などを通じて、働く力と自信を育てます。手話や筆談で安心して過ごせる環境です。',
    technologies: ['WordPress', 'TypeScript', 'Tailwind', 'Prisma'],
    links: {
      preview: 'https://kagayaki-pc.net/kdf',
      github: 'https://kagayaki-pc.net/kdf',
      githubApi: 'https://kagayaki-pc.net/kdf',
    },
  },
  {
    image: '/images/6.png',
    title: '越境ECのトータルサポートソリューションのLPの制作を致しました',
    description:
      '日本企業の中国進出をサポートするWeChatミニプログラム開発支援事業をご紹介しています。サイト全体は目を引く赤を基調としたカラーと黄色のアクセントを使い、「信頼」「信用」 を意識した文言、デザインで制作をしました。また、分かりやすさ・見やすさを意識しフラットデザインに仕上げています。',
    technologies: ['WordPress', 'TypeScript', 'Tailwind', 'three.js'],
    links: {
      preview: '/images/6.png',
      github: '/images/6.png',
      githubApi: '/images/6.png',
    },
  },
  {
    image: '/images/4.png',
    title: 'マドリル（MADORIRU）',
    description:
      '間取りから始める注文住宅の無料サポートサービスで、希望の間取り診断後に予算や条件に合ったハウスメーカーを紹介します。また、土地探しから住宅ローンや建築プランの相談まで、一貫して支援してくれます。',
    technologies: ['Shopify', 'TypeScript', 'Tailwind', 'Prisma'],
    links: {
      preview: 'https://madoriru.com/',
      github: 'https://madoriru.com/',
      githubApi: 'https://madoriru.com/',
    },
  },
  {
    image: '/images/3.png',
    title: '町田鶴川ファミリーホール',
    description:
      'このプロジェクトは、TypeScript、Tailwind CSS、WordPress、Eslint、Stripe、テストツールなど、豊富な機能を搭載しています。',
    technologies: ['WordPress', 'TypeScript', 'Tailwind', 'Prisma'],
    links: {
      preview: '/images/3.png',
      github: '/images/3.png',
      githubApi: '/images/3.png',
    },
  },
  {
    image: '/images/5.png',
    title: '美容看護師専門転職サービス（美容看護師向けLP）',
    description:
      '美容クリニックへの就職を希望する看護師向けのランディングページです。業界知識豊富なキャリアアドバイザーによる求人紹介や転職支援の流れが紹介されています。',
    technologies: ['Next.js', 'TypeScript', ' Nest.js', 'Tailwind', 'three.js'],
    links: {
      preview: 'https://biyou-kango.jp',
      github: 'https://biyou-kango.jp',
      githubApi: 'https://biyou-kango.jp',
    },
  },
  {
    image: '/images/8.png',
    title: 'Sae Arai Gallery（サエ・アライ・ギャラリー）',
    description:
      '東京・西麻布（乃木坂／六本木エリア）の企画画廊で、2003年創立以来、若手〜中堅アーティストの抽象的・現代美術作品を発表・販売しています。定期的に個展を開催し、美しい絵画や版画を展示・販売。ギャラリー併設のニュースや作家情報も掲載されています。',
    technologies: ['Shopify', 'TypeScript', 'Tailwind', 'Prisma'],
    links: {
      preview: 'https://saearai-gallery.tokyo/',
      github: 'https://saearai-gallery.tokyo/',
      githubApi: 'https://saearai-gallery.tokyo/',
    },
  },
  {
    image: '/images/9.png',
    title: 'Microtrac ウェブショップ（Microtrac Webshop）',
    description:
      '粒子解析機器を手がける Microtrac の製品をオンライン注文できるサイトです。アクセスには事前登録が必要で、登録後はレーザー回折装置や吸着計測装置などを購入できる専用購入ページへ案内されます。Microtrac は粒子・気孔構造測定技術に強みを持つグローバルな分析機器メーカーです。',
    technologies: ['Shopify', 'TypeScript', 'Tailwind', 'Prisma'],
    links: {
      preview: 'https://www.microtrac-webshop.jp/',
      github: 'https://www.microtrac-webshop.jp/',
      githubApi: 'https://www.microtrac-webshop.jp/',
    },
  },
  {
    image: '/images/7.png',
    title: 'キャリアGO',
    description:
      'このプロジェクトは、TypeScript、Tailwind CSS、WordPress、Eslint、Stripe、テストツールなど、豊富な機能を搭載しています。',
    technologies: ['WordPress', 'TypeScript', 'Tailwind', 'Prisma'],
    links: {
      preview: '/images/7.png',
      github: '/images/7.png',
      githubApi: '/images/7.png',
    },
  },
  {
    image: '/images/10.png',
    title: 'Microtrac ウェブショップ（Microtrac Webshop）',
    description:
      '粒子解析機器を手がける Microtrac の製品をオンライン注文できるサイトです。アクセスには事前登録が必要で、登録後はレーザー回折装置や吸着計測装置などを購入できる専用購入ページへ案内されます。Microtrac は粒子・気孔構造測定技術に強みを持つグローバルな分析機器メーカーです。',
    technologies: ['Shopify', 'TypeScript', 'Tailwind', 'Prisma'],
    links: {
      preview: 'https://morimoto-shinya.jp/',
      github: 'https://morimoto-shinya.jp/',
      githubApi: 'https://morimoto-shinya.jp/',
    },
  },
  {
    image: '/images/12.png',
    title: 'Ryubi Miyase LIVE 特設サイト（宮世琉弥）',
    description:
      '2024年開催の「Ryubi Miyase LIVE TOUR 2024 ‘NEVERLAND’」をはじめ、最新ライブ情報やチケット先行案内、公式グッズ情報などを掲載している宮世琉弥の公式ライブサイトです。',
    technologies: ['Next.js', 'TypeScript', ' Nest.js', 'Tailwind', 'Prisma'],
    links: {
      preview: 'https://live.miyaseryubi.jp/',
      github: 'https://live.miyaseryubi.jp/',
      githubApi: 'https://live.miyaseryubi.jp/',
    },
  },
  {
    image: '/images/11.png',
    title: 'シュガーダディ（SugarDaddy）',
    description:
      '「魅力的な女性」と「高収入の男性」をつなぐ、国内最大級のパパ活専用マッチングサービスです。女性は無料で利用でき、男性は月額制で利用可能。年収証明や24時間の監視体制、通報機能など、安全性にも配慮されています。',
    technologies: ['WordPress', 'TypeScript', 'Tailwind', 'Prisma'],
    links: {
      preview: 'https://sugardaddy.jp/',
      github: 'https://sugardaddy.jp/',
      githubApi: 'https://sugardaddy.jp/',
    },
  },
  {
    image: '/images/Service/13.png',
    title: 'キャリアGO（CareerGO）',
    description:
      'キャリアGOは転職するのではなく、現職・現在の環境の中でキャリアを磨きたい人向けのコンサルティングサービスです。キャリアコンサルタントによる対面面談を通じて、仕事だけでなく人生全体の視点からサポートしてくれます。',
    technologies: ['Studio', 'TypeScript', 'Tailwind', 'Prisma'],
    links: {
      preview: 'http://careergo.jp',
      github: 'http://careergo.jp',
      githubApi: 'http://careergo.jp',
    },
  },
  {
    image: '/images/Service/17.png',
    title: 'B型肝炎相談サイト（神戸ライズ法律事務所）',
    description:
      '神戸・三ノ宮にある法務事務所が運営する、B型肝炎被害者の相談専用サイトです。国の集団予防接種による感染と救済制度（給付金など）の説明や、弁護士による受給支援を案内しています。',
    technologies: ['Next.js', 'TypeScript', ' Nest.js', 'Tailwind', 'Prisma'],
    links: {
      preview: 'https://koberise-bkan.com',
      github: 'https://koberise-bkan.com',
      githubApi: 'https://koberise-bkan.com',
    },
  },
  {
    image: '/images/Service/16.png',
    title: 'サロンM&Aネット（Salon M&A ネット）',
    description:
      '美容業界（理・美容室、エステ、ネイル、アイラッシュなど）に特化した M&A マッチングサイトです。美容サロンの売却・買収案件を無料の会員登録で掲載・検索でき、売り手・買い手それぞれに「セルフプラン」「フルサポートプラン」から選べます（売却は成功報酬型、セルフプランなら完全無料）。',
    technologies: ['Studio', 'TypeScript', 'Tailwind', 'Prisma'],
    links: {
      preview: 'https://salonma.jp',
      github: 'https://salonma.jp',
      githubApi: 'https://salonma.jp',
    },
  },
  {
    image: '/images/Service/15.png',
    title: 'かくたまライターリスト',
    description:
      'フリー・所属問わず、ライターやディレクター、校正者、編集者などのコンテンツ制作に携わる専門家が無料で登録できるデータベースです。メディアオーナーとのマッチングを支援し、SEOやコンテンツプランニングなど多彩なスキルやジャンルで検索可能です。',
    technologies: ['WordPress', 'TypeScript', 'Tailwind', 'three.js'],
    links: {
      preview: 'https://cakutama.com/writer-list/',
      github: 'https://cakutama.com/writer-list/',
      githubApi: 'https://cakutama.com/writer-list/',
    },
  },
  {
    image: '/images/Service/14.png',
    title: '小さいわが家のお葬式（見積もりシミュレーション）',
    description:
      '神奈川・東京を中心に展開する低価格の家族葬サービスで、簡単な操作で葬儀プランや地域を選びながら費用をセルフ見積できるシミュレーション機能を提供しています。事前登録や資料請求をすると最大5万円の割引も適用されます。実際の葬儀準備前の費用目安として安心して利用できます。',
    technologies: ['Next.js', 'TypeScript', ' Nest.js', 'Tailwind', 'Prisma'],
    links: {
      preview: 'https://www.wagaya-ososhiki.com/simulation/',
      github: 'https://www.wagaya-ososhiki.com/simulation/',
      githubApi: 'https://www.wagaya-ososhiki.com/simulation/',
    },
  },
] as const;

export const experiencesData = [
  {
    title: 'ウェブ開発者インターン',
    company: 'Ignite Co., Ltd.',
    description:
      'このインターンシップ期間中、私は主に2つの主要な分野に焦点を当ててきました：WordPressプラグインの開発と、ウェブサイトの内容、プラグイン、設定の管理です。',
    period: '2017 - 2018',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Wordpress', 'Laravel'],
  },
  {
    title: 'フロントエンド開発者 & UIデザイナー',
    company: ' Ignite Co., Ltd.',
    description:
      'イグナイト株式会社でのインターンシップ期間中、経験豊富なITチームと協力し、Next.jsに関するタスクに注力しました。この経験はチームワークの重要性を深く理解する機会となり、Next.jsのスキルをさらに向上させることに繋がりました。',
    period: '2018 - 2021',
    technologies: [
      'Next.js',
      'TypeScript',
      'Sanity CMS',
      'Tailwind',
      'Wordpress',
      'Studio',
    ],
  },
  {
    title: 'フロントエンド開発者 & UIデザイナー',
    company: 'Freelancing, remote',
    description:
      'フリーランサーとして、Figmaを使用したグラフィックデザインと、Sanity CMSを組み合わせたNext.jsを用いたウェブサイト開発に特化してきました。デザインコンセプトの立案から最終的な実装まで、プロジェクトを独立して遂行し、クライアントの満足度を確保してきました。',
    period: '2022 - 2023',
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Figma',
      'Wordpress',
      'Studio',
    ],
  },
  {
    title: 'フロントエンド開発者 & UIデザイナー',
    company: 'Creative Netdoor Co., Ltd.',
    description: (
      <>
        クリエイティブ・ネットドア株式会社では、フロントエンド、バックエンド、GISの専門家と協力し、
        クリエイティブ・ネットドア株式会社の不動産レポート生成プラットフォーム「
        Creative Netdoor Co., Ltd.-app.com」の構築に携わっています。
        私はフロントエンドの開発と維持管理を担当し、ユーザーが直感的で分かりやすい体験を得られるよう、UI/UXのデザインにも携わっています。
      </>
    ),
    period: '2023 - 2024',
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind',
      'Supabase',
      'Studio',
      'Wordpress',
      'three.js',
    ],
  },
  {
    title: 'フロントエンド開発者 & UIデザイナー',
    company: 'Self-employed, remote',
    description:
      'フリーランサーとして、Figmaを使用したグラフィックデザインと、Sanity CMSを組み合わせたNext.jsを用いたウェブサイト開発に特化してきました。デザインコンセプトの立案から最終的な実装まで、プロジェクトを独立して遂行し、クライアントの満足度を確保してきました。',
    period: '2025 - present',
    technologies: [
      'Next.js',
      'TypeScript',
      'Sanity CMS',
      'Tailwind',
      'Wordpress',
      'XD',
      'Figma',
    ],
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
