import { CaseStudy } from '../types';

export const cases: Record<string, CaseStudy> = {
  'case-1': {
    title: "Z同学的多模态大模型研究成功之路",
    category: "科研突破",
    image: "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?auto=format&fit=crop&q=80&w=800",
    background: {
      title: "学生背景",
      content: "Z同学是一名来自某211高校的大三本科生，最初对学术研究缺乏明确方向。"
    },
    challenge: {
      title: "需求与挑战",
      content: "由于研究经验较少，Z同学对如何选择适合的研究课题并形成系统的科研思路感到迷茫。"
    },
    process: [
      {
        title: "初期方向选择",
        content: "导师团队建议他将研究方向聚焦在多模态大模型领域。"
      },
      {
        title: "科研能力提升",
        content: "从零开始学习大模型和多模态技术的基础理论。"
      },
      {
        title: "实验设计与数据处理",
        content: "手把手指导实验设计，帮助选取适当的数据集。"
      },
      {
        title: "论文撰写与发表",
        content: "逐字逐句修改和反馈，针对AAAI会议标准进行打磨。"
      }
    ],
    result: {
      title: "最终成果",
      content: "论文被AAAI会议接受，成功保研中国科学院自动化研究所。"
    },
    stats: {
      duration: "4个月",
      paper: "AAAI",
      result: "成功保研"
    }
  },
  'case-2': {
    title: "X同学的顶尖院校申请之路",
    category: "留学申请",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800",
    background: {
      title: "学生背景",
      content: "X同学来自国内一所普通211高校，绩点3.0，缺乏显著科研成果。"
    },
    challenge: {
      title: "需求与挑战",
      content: "目标申请北美TOP30计算机科学硕士项目，但背景较为薄弱。"
    },
    process: [
      {
        title: "背景提升",
        content: "指导发表ICML论文和SCI一区期刊文章。"
      },
      {
        title: "实习安排",
        content: "推荐至头部互联网公司实习，积累项目经验。"
      },
      {
        title: "文书优化",
        content: "精心打造个人陈述，突出研究成果和实践经验。"
      },
      {
        title: "面试准备",
        content: "系统性模拟面试训练，提升表达能力。"
      }
    ],
    result: {
      title: "最终成果",
      content: "成功获得USC和Duke的CS直博全奖录取。"
    },
    stats: {
      duration: "8个月",
      offers: "2所名校",
      type: "全额奖学金"
    }
  },
  'case-3': {
    title: "Y同学的顶会论文突破",
    category: "学术成果",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800",
    background: {
      title: "学生背景",
      content: "Y同学是电子信息工程专业的大四本科生，对深度学习研究充满热情但缺乏经验。"
    },
    challenge: {
      title: "需求与挑战",
      content: "希望在毕业前发表高水平论文，提升研究生申请竞争力。"
    },
    process: [
      {
        title: "理论学习",
        content: "系统性学习深度学习理论和前沿技术。"
      },
      {
        title: "课题选择",
        content: "选择智能信号处理方向进行深入研究。"
      },
      {
        title: "实验指导",
        content: "一对一指导实验设计和代码实现。"
      },
      {
        title: "论文撰写",
        content: "严格把控论文质量，多轮修改完善。"
      }
    ],
    result: {
      title: "最终成果",
      content: "论文被NIPS接收，并成功保研清华大学。"
    },
    stats: {
      duration: "6个月",
      paper: "NIPS",
      result: "保研清华"
    }
  }
};