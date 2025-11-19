import type { Post } from '~/types';

export enum SkillType {
  CrisisManagement = 'crisis-response',
  BusinessAnalysis = 'strategic-analytics',
  BusinessDevelopment = 'market-expansion',
  SalesManagement = 'sales-forces-optimization',
  MarketingAndAdv = 'adv-and-marketing',
  InternetMarketing = 'digital-performance',
  BusinessCommunicationAndMediation = 'deal-negotiation-and-mediation',
  FindInvestments = 'funding-and-investor-relations',
}

export interface Skill extends Post {
  type: SkillType;
}

export const getSkillTitle = (skill: SkillType): string => {
  switch (skill) {
    case SkillType.CrisisManagement:
      return 'Crisis Response';
    case SkillType.BusinessAnalysis:
      return 'Strategic Analytics';
    case SkillType.BusinessDevelopment:
      return 'Market Expansion';
    case SkillType.SalesManagement:
      return 'Sales Forces Optimization';
    case SkillType.MarketingAndAdv:
      return 'ADV & Marketing';
    case SkillType.InternetMarketing:
      return 'Digital Performance';
    case SkillType.BusinessCommunicationAndMediation:
      return 'Deal Negotiation & Mediation';
    case SkillType.FindInvestments:
      return 'Funding & Investor Relations';
  }
};

export const getSkillLink = (skill: SkillType): string => `/skills/${skill}`;
