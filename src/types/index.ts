export interface User {
  id: string;
  name: string;
  email: string;
  profession: string;
  goals: Goal[];
  achievements: Achievement[];
  streak: number;
}

export interface Goal {
  id: string;
  title: string;
  description: string;
  deadline: Date;
  progress: number;
  milestones: Milestone[];
}

export interface Milestone {
  id: string;
  title: string;
  completed: boolean;
  date: Date;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: Date;
  badge: string;
}