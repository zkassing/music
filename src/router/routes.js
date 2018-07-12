import MusicSheet from '@/components/pages/MusicSheet'
import MusicSearch from '@/components/pages/MusicSearch'

import RecommentSheet from '@/components/Sheet'
import RecommentDetail from '@/components/Detail'
const routes = [
  {
    path: '/',
    component: MusicSheet,
    redirect: '/recomment',
    children: [
      {
        path: 'recomment',
        component: RecommentSheet
      },{
        path: 'recomment/:id',
        name: 'recomment',
        component: RecommentDetail
      }
    ]
  }, {
    path: '/search', 
    component: MusicSearch
  }
]

export default routes