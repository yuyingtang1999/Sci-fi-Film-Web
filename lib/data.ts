// Personnel + institutions for the workshop. Photos live in public/images/people
// (amber-duotone portraits); logos in public/logos. `link`/`photo` are optional.

export interface Person {
  name: string;
  role: string;
  affiliation: string;
  link?: string;
  photo?: string; // relative path, e.g. "images/people/stanley-tong.jpg?v=6"
  photoScale?: number;
  photoPosition?: string;
  photoOrigin?: string;
}

export interface Group {
  id: string;
  title: string;
  code: string; // dossier section code
  description?: {
    prefix: string;
    emphasis: string;
    suffix: string;
  };
  people: Person[];
}

export const GROUPS: Group[] = [
  {
    id: "advisory-panel",
    title: "International Advisory & Review Panel",
    code: "A",
    people: [
      { name: "Stanley Tong", role: "Internationally Acclaimed Film Director, Producer & Action Choreographer · Hong Kong Film Award–Winning Filmmaker", affiliation: "", link: "https://en.wikipedia.org/wiki/Stanley_Tong", photo: "images/people/stanley-tong-2026.webp?v=10", photoPosition: "50% 48%" },
      { name: "Yan Wu", role: "Pioneer of Science-Fiction Education in China · Director, Science and Human Imagination Research Center · Award-Winning Science-Fiction Writer & Professor", affiliation: "Southern University of Science and Technology", link: "https://www.sustech.edu.cn/en/faculties/wuyan-2.html", photo: "images/people/yan-wu-cutout-card.webp?v=16" },
      { name: "Shengyi Ye", role: "Former Lead Scientist, NASA Cassini Data Analysis Program · Guangdong Pearl River Leading Talent · Professor of Planetary & Space Sciences", affiliation: "Southern University of Science and Technology", link: "https://www.sustech.edu.cn/en/faculties/yeshengyi.html", photo: "images/people/shengyi-ye.jpg?v=8" },
      { name: "Zhigang Wang", role: "Chair, Department of Information Art & Design, Founding Director, Tsinghua Academy of New Media Performance Innovation · Tenured Professor", affiliation: "Tsinghua University", link: "https://www.enad.tsinghua.edu.cn/info/1229/1363.htm", photo: "images/people/zhigang-wang.jpg?v=8" },
      { name: "Zhonghua Yao", role: "President, Planetary Sciences Section, Asia Oceania Geosciences Society · NASA Cassini Group Achievement Award Recipient · Associate Professor of Planetary Sciences", affiliation: "The University of Hong Kong", link: "https://www.earthsciences.hku.hk/people/academic-staff/dr-yao-zhonghua", photo: "images/people/zhonghua-yao.jpg?v=9" },
      { name: "Hongbo Fu", role: "ACM SIGGRAPH Academy · Acting Head & Professor, Division of Arts and Machine Creativity, Vice-Chairman, Asia Graphics Association", affiliation: "The Hong Kong University of Science and Technology", link: "https://hongbofu.people.ust.hk/", photo: "images/people/hongbo-fu.jpg?v=3" },
      { name: "Pan Hui", role: "International Fellow, Royal Academy of Engineering · IEEE Fellow · Member, Academia Europaea · Chair Professor & Director, Center for Metaverse and Computational Creativity", affiliation: "The Hong Kong University of Science and Technology (Guangzhou)", link: "https://panhui.people.ust.hk/", photo: "images/people/pan-hui.jpg?v=8" },
      { name: "Feng Gao", role: "Research Associate Professor · Interdisciplinary Research & Innovation Scholar & Artist", affiliation: "The Hong Kong University of Science and Technology", photo: "images/people/feng-gao.jpg?v=2" },
      { name: "Qiufan Chen", role: "President, World Chinese Science Fiction Association · Award-Winning Science-Fiction Author & Futurist · Assistant Professor", affiliation: "Hong Kong Metropolitan University", link: "https://www.hkmu.edu.hk/hlt/stanleychen/", photo: "images/people/qiufan-chen-2026.webp?v=10", photoPosition: "50% 49%" },
      { name: "Xian Xu", role: "Associate, Cambridge Digital Humanities · Award-Winning AI & Creative Technology Researcher · Assistant Professor of Digital Arts & Creative Industries", affiliation: "Lingnan University", link: "https://www.ln.edu.hk/daci/our-people/faculty/prof-xian-xu", photo: "images/people/xian-xu.jpg?v=9" },
      { name: "Baoyang Chen", role: "Art-Tech Artist & Curator · Chief Curator, Asia Digital Art Exhibition · Director, Advanced Visual Laboratory for AI & Digital Art", affiliation: "Central Academy of Fine Arts", link: "https://baoyangchen.com/", photo: "images/people/baoyang-chen.jpg?v=8" },
      { name: "Yansong Chen", role: "Digital Media Educator · XR, Immersive Media & Creative Technology Lecturer", affiliation: "Beijing Normal University", photo: "images/people/yansong-chen.jpg?v=4" },
      { name: "Shangchun Teng", role: "Planetary Space Physicist · Research Assistant Professor, Expert in Planetary Plasma Waves & Space Environments", affiliation: "The University of Hong Kong", link: "https://www.earthsciences.hku.hk/people/academic_staff/111/", photo: "images/people/shangchun-teng-adjusted.jpg?v=2" },
      { name: "Xiangsong Wang", role: "Planetary Geologist · Research Assistant Professor, Mercury & Lunar Exploration Researcher", affiliation: "The University of Hong Kong", link: "https://www.earthsciences.hku.hk/people/academic_staff/121/", photo: "images/people/xiangsong-wang.jpg?v=6" },
      { name: "Ziqing Song", role: "Acclaimed Screenwriter & Film Director · Member, Beijing Film Association & Beijing Television Artists Association", affiliation: "Peking University", photo: "images/people/ziqing-song.jpg?v=2" },
    ],
  },
  {
    id: "research-committee",
    title: "Research Advisory Committee",
    code: "B",
    people: [
      { name: "Huamin Qu", role: "Dean, Academy of Interdisciplinary Studies · Chair Professor of Computer Science", affiliation: "The Hong Kong University of Science and Technology", link: "https://cse.hkust.edu.hk/admin/people/faculty/profile/huamin", photo: "images/people/huamin-qu.jpg?v=6" },
      { name: "Xiaojuan Ma", role: "Associate Professor of Computer Science · Program Director in AI and Entrepreneurship", affiliation: "The Hong Kong University of Science and Technology", link: "https://cse.hkust.edu.hk/admin/people/faculty/profile/mxj", photo: "images/people/xiaojuan-ma.jpg?v=6" },
      { name: "Sebastian Deterding", role: "Chair in Design Engineering, Pioneer in Gameful Design & Gamification & Computational Creativity", affiliation: "Imperial College London", link: "https://profiles.imperial.ac.uk/s.deterding", photo: "images/people/sebastian-deterding.jpg?v=6" },
      { name: "Rebecca Fiebrink", role: "Professor of Creative Computing, Pioneer in Interactive Machine Learning for Creative Practice", affiliation: "University of the Arts London", link: "https://www.arts.ac.uk/creative-computing-institute/people/rebecca-fiebrink", photo: "images/people/rebecca-fiebrink.jpg?v=6" },
      { name: "Yulong Bian", role: "ACM China Rising Star Awardee · Executive Committee Member, ACM SIGCHI China", affiliation: "Nanyang Technological University", link: "https://ieeexplore.ieee.org/author/37085666170", photo: "images/people/yulong-bian.jpg?v=6" },
    ],
  },
  {
    id: "research-team",
    title: "Research Team",
    code: "C",
    people: [
      { name: "Yuying Tang", role: "Founder & Project Director · PhD Candidate in Human-AI Co-Creation", affiliation: "The Hong Kong University of Science and Technology", link: "https://yuyingtang1999.github.io/", photo: "images/people/yuying-tang.jpg?v=2" },
      { name: "Qingyue Cai", role: "Collaborator", affiliation: "Renmin University of China", photo: "images/people/qingyue-cai.jpg?v=3" },
      { name: "Haotian Li", role: "Researcher, Microsoft Research Asia · Award-Winning Human-Centered AI Researcher", affiliation: "Microsoft Research Asia", link: "https://www.microsoft.com/en-us/research/people/haotianli/", photo: "images/people/haotian-li.jpg?v=6" },
      { name: "Jiaxiong Hu", role: "Postdoctoral Researcher in Human-Computer Interaction", affiliation: "The Hong Kong University of Science and Technology", link: "https://jiaxiong.notion.site/Jiaxiong-Hu-fdd7394b52f74ae78ab438aa93164c3d", photo: "images/people/jiaxiong-hu.jpg?v=6" },
      { name: "Baiqiao Zhang", role: "PhD Student in Human-AI Alignment", affiliation: "The Hong Kong University of Science and Technology", link: "https://baiqiaozhang.cc/", photo: "images/people/baiqiao-zhang.jpg?v=6" },
    ],
  },
  {
    id: "london-exhibition-team",
    title: "London Exhibition Team",
    code: "D",
    description: {
      prefix: "Launching in ",
      emphasis: "London, UK",
      suffix: ", the exhibition marks the first chapter of a global journey connecting science, art, emerging technologies, and creative imagination across cultures.",
    },
    people: [
      { name: "Yuying Tang", role: "Founder & Project Director · PhD Candidate in Human-AI Co-Creation", affiliation: "The Hong Kong University of Science and Technology", link: "https://yuyingtang1999.github.io/", photo: "images/people/yuying-tang.jpg?v=2" },
      { name: "Minghe Lan", role: "Design Director & Co-Curator", affiliation: "Central Academy of Fine Arts", photo: "images/people/minghe-lan.jpg?v=2" },
      { name: "Tianxiao Wang", role: "PhD Student, Technical Director & Co-Curator", affiliation: "Imperial College London", link: "https://www.tianxiao.wang/", photo: "images/people/tianxiao-wang.jpg?v=3" },
    ],
  },
];

export interface Institution {
  name: string;
  logo: string; // relative path, e.g. "logos/hkust-c.png"
  featured?: boolean; // the five lead institutions — shown larger / first
}

// Order: five lead institutions first (HKUST → IC → UAL → MSRA → HKU), then the rest.
export const INSTITUTIONS: Institution[] = [
  { name: "The Hong Kong University of Science and Technology", logo: "logos/hkust-c.png", featured: true },
  { name: "Imperial College London", logo: "logos/imperial-c.png", featured: true },
  { name: "University of the Arts London", logo: "logos/ual-c.png", featured: true },
  { name: "Microsoft Research Asia", logo: "logos/msra-c.png", featured: true },
  { name: "The University of Hong Kong", logo: "logos/hku-c.png", featured: true },
  { name: "Tsinghua University", logo: "logos/tsinghua-c.png" },
  { name: "Peking University", logo: "logos/pku-official-wordmark.png" },
  { name: "Nanyang Technological University", logo: "logos/ntu-c.png" },
  { name: "The Central Academy of Drama", logo: "logos/cad-c.png" },
  { name: "Central Academy of Fine Arts", logo: "logos/cafa-c.png" },
  { name: "The Hong Kong University of Science and Technology (Guangzhou)", logo: "logos/hkust-gz-c.png" },
  { name: "Beijing Film Academy", logo: "logos/bfa-c.png" },
  { name: "Communication University of China", logo: "logos/cuc-c.png" },
  { name: "Southern University of Science and Technology", logo: "logos/sustech-c.png" },
  { name: "Renmin University of China", logo: "logos/ruc-official-wordmark-transparent.png" },
  { name: "Beijing Normal University", logo: "logos/bnu-c.png" },
  { name: "Lingnan University", logo: "logos/lingnan-c.png" },
];
