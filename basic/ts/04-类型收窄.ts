const routes={
    home:'/',
    admin:'/admin',
    users:'/users'
} as const


const goToRoute = (r:'/'| '/admin' | '/users')=>{}


goToRoute(routes.admin)


// 如何拿到值的类型
// type Router=typeof routes[keyof typeof routes]

