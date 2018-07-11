import MusicSheet from '@/components/pages/MusicSheet'
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
  }
]

export default routes