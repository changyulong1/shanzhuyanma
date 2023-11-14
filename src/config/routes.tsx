import { Aoo } from '../views/Aoo'
import { Foo } from '../views/Foo'
import { welcome } from '../views/welcome'
import { First } from '../components/welcome/Frst'
import { Forth } from '../components/welcome/Forth'
import { Second } from '../components/welcome/Second'
import { Third } from '../components/welcome/Third'

export const routes = [
    { path: '/', component: Aoo },
    { path: '/about', component: Foo },
    {
        path: '/welcome',
        component: welcome,
        children: [
            { path: '1', component: First },
            { path: '2', component: Forth },
            { path: '3', component: Second },
            { path: '4', component: Third }
        ]
    }
]