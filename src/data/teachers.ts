import { TeacherData } from '../types';

export const teachers: Record<string, TeacherData> = {
  'f-teacher': {
    name: "F老师",
    title: "联邦学习专家",
    university: "香港科技大学",
    field: "联邦学习 / 图学习",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600",
    description: "香港科技大学人工智能学部博士，专注于联邦学习、图学习和数据挖掘研究。",
    longDescription: `F老师就读于香港科技大学人工智能学部，专注于联邦学习、图学习和数据挖掘。在博士期间主要研究方向包括分布式环境下的多级隐私保护、动态异构图的增强学习、技能供需预测、以及基于知识图谱的关系挖掘。`,
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
    title: "AI研究专家",
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
      "领域自适应",
      "图神经网络",
      "医疗影像",
      "遥感影像"
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
      "3篇A会2篇B会指导"
    ],
    stats: {
      papers: "20+",
      citations: "800+",
      experience: "5年+",
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
  }
};