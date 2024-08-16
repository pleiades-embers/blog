const routes={
    home:'/',
    admin:'/admin',
    users:'/users'
} as const


const goToRoute = (r:'/'| '/admin' | '/users')=>{}

goToRoute(routes.admin)