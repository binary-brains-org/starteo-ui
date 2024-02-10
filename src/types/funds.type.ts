import { Idea } from '@/types/Idea.type';
import { User } from '@/types/User.type';

export interface Funds {
  id: string;
  idea: Idea;
  user: Omit<User, 'username'>;
  value: number;
}

export interface FundInput {
  userId: string;
  value: number;
}
