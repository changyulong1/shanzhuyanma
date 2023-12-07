import { welcome } from '../views/Welcome'
import { First } from '../components/welcome/First'
import { Forth } from '../components/welcome/Forth'
import { Second } from '../components/welcome/Second'
import { Third } from '../components/welcome/Third'
import { StartPages } from '../views/StartPage'
import { ForthAction } from '../components/welcome/ForthAction'
import { FirstAction } from '../components/welcome/FirstAction'
import { SecondAction } from '../components/welcome/SecondAction'
import { ThirdAction } from '../components/welcome/ThirdAction'


export const routes = [
    { path: '/', redirect: '/welcome' },
    {
        path: '/welcome',
        component: welcome,
        children: [
            { path: '', redirect: '/welcome/1' },
            { path: '1', name: "Welcome1", components: { main: Forth, footer: ForthAction } },
            { path: '2', name: "Welcome2", components: { main: First, footer: FirstAction } },
            { path: '3', name: "Welcome3", components: { main: Second, footer: SecondAction } },
            { path: '4', name: "Welcome4", components: { main: Third, footer: ThirdAction } }
        ]
    },
    { path: '/Start', component: StartPages },

]