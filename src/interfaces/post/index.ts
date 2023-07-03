import { CommentInterface } from 'interfaces/comment';
import { LikeInterface } from 'interfaces/like';
import { UserInterface } from 'interfaces/user';
import { AccountInterface } from 'interfaces/account';
import { GetQueryInterface } from 'interfaces';

export interface PostInterface {
  id?: string;
  title: string;
  content: string;
  category?: string;
  tags?: string;
  user_id?: string;
  account_id?: string;
  created_at?: any;
  updated_at?: any;
  comment?: CommentInterface[];
  like?: LikeInterface[];
  user?: UserInterface;
  account?: AccountInterface;
  _count?: {
    comment?: number;
    like?: number;
  };
}

export interface PostGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  content?: string;
  category?: string;
  tags?: string;
  user_id?: string;
  account_id?: string;
}
