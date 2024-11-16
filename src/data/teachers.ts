import { TeacherData } from '../types';

export const teachers: Record<string, TeacherData> = {
  'f-teacher': {
    name: "F老师",
    title: "联邦学习专家",
    university: "香港科技大学",
    field: "联邦学习 / 图学习",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600",
    description: "香港科技大学人工智能博士，专注于联邦学习、图学习和数据挖掘研究。",
    longDescription: `F老师就读于清华大学和香港科技大学，专注于联邦学习、图学习和数据挖掘。在博士期间主要研究方向包括分布式环境下的多级隐私保护、动态异构图的增强学习、技能供需预测、以及基于知识图谱的关系挖掘。`,
    achievements: [
      "SIGKDD、AAAI等顶会多篇论文",
      "百度、腾讯等名企实习经历",
      "20+学生科研指导经验",
      "5名学生发表A会一作"
    ],
    stats: {
      papers: "15+",
      citations: "1000+",
      experience: "3年+",
      students: "20+"
    },
    researchAreas: [
      "联邦学习",
      "图学习",
      "数据挖掘",
      "知识图谱",
      "隐私计算"
    ],
    teachingStyle: [
      "创新思维培养",
      "精细化指导",
      "全面论文指导",
      "项目化管理"
    ],
    publications: [
      "SIGKDD 2024: Privacy-Preserving Federated Learning",
      "AAAI 2024: Dynamic Heterogeneous Graph Learning",
      "TVCG 2023: Knowledge Graph Visualization"
    ]
  },
  'simons-teacher': {
    name: "Simons老师",
    title: "高校助理教授",
    university: "QS前50名校",
    field: "深度学习 / 计算机视觉",
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=600",
    description: "QS世界排名前50高校助理教授，10年+AI研究经验，论文引用5000+次。",
    longDescription: `Simons老师，QS世界排名前50高校的助理教授，拥有超过10年人工智能和深度学习领域的研究经验，研究方向包括元学习、领域自适应、领域泛化、持续学习和图神经网络，以及它们在医疗影像和遥感影像中的创新应用。`,
    achievements: [
      "50+篇高水平论文",
      "5000+次论文引用",
      "30+名硕博生指导",
      "多个最佳论文提名"
    ],
    stats: {
      papers: "50+",
      citations: "5000+",
      experience: "10年+",
      students: "30+"
    },
    researchAreas: [
      "元学习",
      "领域泛化",
      "图神经网络",
      "持续学习",
      "医疗影像+机器人",
      "脑机接口"
    ],
    teachingStyle: [
      "严谨专业",
      "启发式教学",
      "跨学科思维",
      "渐进式指导"
    ],
    publications: [
      "ICLR 2024: Meta-Learning for Domain Adaptation",
      "NeurIPS 2023: Graph Neural Networks",
      "TPAMI 2023: Medical Image Analysis"
    ]
  },
  'mike-teacher': {
    name: "Mike老师",
    title: "推荐系统专家",
    university: "昆士兰大学",
    field: "推荐系统 / NLP",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=600",
    description: "昆士兰大学博士，专注推荐系统与NLP研究，20+篇SCI论文发表经验。",
    longDescription: `Mike老师是昆士兰大学计算机科学博士。他在推荐系统，自然语言处理、检索增强生成，大模型智能体，问答系统，搜索引擎等等多个前沿领域拥有深厚的研究背景。`,
    achievements: [
      "20+篇SCI索引论文",
      "多个顶会审稿人",
      "华为阿里等企业合作",
      "5篇A会12篇B会指导"
    ],
    stats: {
      papers: "20+",
      citations: "800+",
      experience: "4年+",
      students: "15+"
    },
    researchAreas: [
      "推荐系统",
      "自然语言处理",
      "大模型智能体",
      "搜索引擎",
      "问答系统"
    ],
    teachingStyle: [
      "系统规划",
      "实践导向",
      "个性化指导",
      "全程跟进"
    ]
  },
  'alex-teacher': {
    name: "Alex老师",
    title: "NLP专家",
    university: "北美Top10名校",
    field: "自然语言处理 / 大模型",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600",
    description: "北美顶尖高校博士，专注大模型和多模态研究，论文被Google等顶级团队引用。",
    longDescription: `Alex老师毕业于北美顶尖10强高校，博士研究方向涵盖大模型、逻辑推断、多模态、红队安全、LLM Agent等前沿领域。主要工作发表在EMNLP、NAACL、ACL等顶级会议上。`,
    achievements: [
      "多篇顶会一作论文",
      "谷歌研究团队引用",
      "优秀审稿人",
      "国际会议主席"
    ],
    stats: {
      papers: "20+",
      citations: "2000+",
      experience: "6年+",
      students: "25+"
    },
    researchAreas: [
      "大语言模型",
      "多模态系统",
      "逻辑推断",
      "Agent开发"
    ],
    teachingStyle: [
      "理论结合实践",
      "跨学科思维",
      "个性化指导",
      "创新思维培养"
    ]
  },

 // 新增老师
 'david-teacher': {
  name: "David老师",
  title: "LLM研究专家",
  university: "麻省理工学院",
  field: "大语言模型 / 知识图谱",
  image: "/avatars/teacher-david.svg", // 新的卡通头像
  description: "MIT博士，专注于大语言模型和知识图谱研究，前OpenAI研究员。",
  longDescription: `David老师是麻省理工学院计算机科学博士，曾在OpenAI担任研究科学家。他的研究重点是大语言模型的可解释性、知识注入和效率优化。他开发的知识增强型语言模型框架被广泛应用于学术界和工业界。同时，他在模型压缩和量化方面也有深入研究。`,
  achievements: [
    "OpenAI核心技术贡献者",
    "ACL最佳论文奖",
    "40+顶级会议论文",
    "多项专利持有者"
  ],
  stats: {
    papers: "45+",
    citations: "6000+",
    experience: "8年+",
    students: "35+"
  },
  researchAreas: [
    "大语言模型",
    "知识图谱",
    "模型压缩",
    "可解释AI",
    "自然语言处理"
  ],
  teachingStyle: [
    "理论结合实践",
    "前沿技术导向",
    "系统化培训",
    "开源项目实战"
  ],
  publications: [
    "ACL 2024: Knowledge-enhanced LLMs",
    "NeurIPS 2023: Model Compression",
    "EMNLP 2023: Interpretable NLP"
  ]
},

  'james-teacher': {
    name: "James 老师",
    title: "通用大模型研究专家",
    university: "牛津大学",
    field: "通用大模型预训练及迁移",
    image: "/avatars/teacher-james.svg", // 新的卡通头像
    description: "牛津大学计算机科学博士在读，专注于通用大模型的预训练和迁移研究，曾任商汤科技算法研究员。",
    longDescription: `James 老师目前是牛津大学计算机科学系的博士研究生，研究方向集中在通用视觉大模型的预训练及其在不同任务中的迁移应用。他曾任商汤科技算法研究员，期间积累了丰富的工业界实践经验。James 老师在计算机视觉领域取得了显著成就，以第一作者身份发表了多篇高水平论文，包括CVPR、ICCV、ECCV、AAAI、IJCAI 和 ICLR 等顶级会议。此外，他还曾获得CVPR Oral（录取率3%）和某CCFA类会议Best Paper Final List（录取率0.1%）。`,
    achievements: [
      "CVPR Oral (录取率3%)",
      "CCFA类会议Best Paper Final List (录取率0.1%)",
      "6篇A类会议第一作者论文",
      "指导本科生、硕士生发表过包含 AAAI、ACM MM、ICASSP、ICME论文共计16篇",
      "CVPR、ECCV、IJCAI、AAAI等多个领域A类会议审稿人"
    ],
    stats: {
      papers: "17+",
      citations: "2000+",
      experience: "5年+",
      students: "20+"
    },
    researchAreas: [
      "通用大模型",
      "预训练技术",
      "模型迁移",
      "计算机视觉",
      "NLP"
    ],
    teachingStyle: [
      "理论与实践相结合",
      "前沿技术引导",
      "系统化教学",
      "个性化指导"
    ],
    publications: [
      "CVPR 2023: Generalized Visual Pre-training",
      "ICCV 2023: Transfer Learning in Vision",
      "ECCV 2022: Efficient Model Compression",
      "AAAI 2022: Interpretable Computer Vision Models",
      "IJCAI 2021: Deep Learning for Video Analysis"
    ]
  }
};