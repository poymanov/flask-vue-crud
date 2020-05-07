import Ping from '@/components/Ping';
import Books from '@/components/Books';

export const routes = [
  { path: '/', name: 'Books', component: Books},
  { path: '/ping', name: 'Ping', component: Ping },
];
