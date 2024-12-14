export interface TeacherData {
  name: string;
  title: string;
  university: string;
  field: string;
  image: string;
  description: string;
  longDescription: string;
  achievements: string[];
  stats: {
    papers?: string;
    citations?: string;
    experience?: string;
    students?: string;
    projects?: string;
  };
  researchAreas: string[];
  teachingStyle?: string[];
  publications?: string[];
}

export interface CaseStudy {
  title: string;
  category: string;
  image: string;
  background: {
    title: string;
    content: string;
  };
  challenge: {
    title: string;
    content: string;
  };
  process: {
    title: string;
    content: string;
  }[];
  result: {
    title: string;
    content: string;
  };
  stats: {
    [key: string]: string;
  };
}