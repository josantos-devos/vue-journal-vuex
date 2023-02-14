
export default {
    name: 'daybook',
    component: () => import(/*webpackChunkName:'DayBookLayout'*/ '@/modules/daybook/layouts/DayBookLayout'),
    children: [
        {
            path: '',
            name: 'daybook-no-entry',
            component: () => import(/*webpackChunkName:'DayBookNoEntrySelected'*/ '@/modules/daybook/views/NoEntrySelected'),
        },
        {
            path: ':id',
            name: 'daybook-entry',
            component: () => import(/*webpackChunkName:'DayBookEntryView'*/ '@/modules/daybook/views/EntryView'),
        }
    ]
}