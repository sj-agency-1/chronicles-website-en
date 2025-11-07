import type { Post } from '~/types';

export enum SkillType {
  CrisisManagement = 'crisis-management',
  BusinessAnalysis = 'business-analysis',
  BusinessDevelopment = 'business-development',
  SalesManagement = 'sales-management',
  MarketingAndAdv = 'marketing-and-adv',
  InternetMarketing = 'internet-marketing',
  BusinessCommunicationAndMediation = 'business-communication-and-mediation',
  FindInvestments = 'find-investments',
}

export interface Skill extends Post {
  type: SkillType;
}

export const getSkillTitle = (skill: SkillType): string => {
  switch (skill) {
    case SkillType.CrisisManagement:
      return 'Crisis Management';
    case SkillType.BusinessAnalysis:
      return 'Business Analysis';
    case SkillType.BusinessDevelopment:
      return 'Business Development';
    case SkillType.SalesManagement:
      return 'Sales Management';
    case SkillType.MarketingAndAdv:
      return 'Marketing and Advertising';
    case SkillType.InternetMarketing:
      return 'Internet Marketing';
    case SkillType.BusinessCommunicationAndMediation:
      return 'Business Negotiation. Mediation';
    case SkillType.FindInvestments:
      return 'Attracting Investments';
  }
};

export const getSkillLink = (skill: SkillType): string => `/skills/${skill}`;
