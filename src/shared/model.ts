export type ItemType = 'job' | 'story' | 'poll' | 'comment' | 'pollopt';

export interface IItem {
  by: string;
  deleted?: boolean;
  descendants?: number;
  id: number;
  kids?: number[];
  parent?: number;
  score: number;
  text?: string;
  time: number;
  title?: string;
  type: ItemType;
  url?: string;
}

export interface IUser {
  about?: string;
  created: number;
  id: number;
  karma: number;
  submitted: number[];
}
