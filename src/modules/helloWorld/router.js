export default [
  {
    path: '/',
    name: 'Layout',
    meta: { title: '预览' },
    component: () => import('@/components/Layout'),
    children: [
      {
        path: '/helloWorld',
        name: 'HelloWorld',
        component: () => import('./components/HelloWorld.vue'),
        meta: { title: 'HelloWorld' }
      }
    ]
  }
]
