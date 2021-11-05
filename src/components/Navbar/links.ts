export interface ILink {
  exact?: boolean;
  path: string;
  title: string;
}

export const Links: ILink[] = [
  {
    exact: true,
    path: '/welcome',
    title: 'Welcome',
  },
  {
    exact: true,
    path: '/stories/new',
    title: 'New',
  },
  {
    exact: true,
    path: '/stories/top',
    title: 'Top',
  },
  {
    exact: true,
    path: '/stories/best',
    title: 'Best',
  },
  {
    exact: true,
    path: '/stories/ask',
    title: 'Ask',
  },
  {
    exact: true,
    path: '/stories/show',
    title: 'Show',
  },
];
