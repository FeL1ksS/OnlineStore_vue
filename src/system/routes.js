import main     from '../pages/main.vue'
import catalog  from '../pages/catalog.vue'
import item from '../pages/item.vue'
import error404  from '../pages/404.vue'


export const routes = [
    { path: '/', component: main },
    { path: '/catalog', component: catalog },
    { path: '/item', component: item },
    { path: '*', component: error404 }
]