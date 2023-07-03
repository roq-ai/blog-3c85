const mapping: Record<string, string> = {
  accounts: 'account',
  comments: 'comment',
  likes: 'like',
  posts: 'post',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
