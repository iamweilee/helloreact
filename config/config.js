export default {
  plugins: [
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      // 这里暂时还没有添加配置，该插件还不会有作用，我们会在后面的课程按照需求打开相应的配置
    }],
  ],
  routes: [{
    path: '/',
    component: '../layout',
    routes: [
      {
        path: '/',
        component: 'HelloWorld',
      },
      {
        path: '/helloreact',
        component: 'HelloReact',
      },
      {
        path: '/dashboard',
        routes: [
          { path: '/dashboard/analysis', component: 'Dashboard/Analysis' },
          { path: '/dashboard/monitor', component: 'Dashboard/Monitor' },
          { path: '/dashboard/workplace', component: 'Dashboard/Workplace' }
        ]
      },
      {
        path: '/puzzlecards',
        component: './puzzlecards'
      },
      {
        path: '/list',
        component: 'list'
      }
    ],
  }],
  proxy: {
    '/dev': {
      target: 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com',
      changeOrigin: true,
    },
  },
  singular: true,
};