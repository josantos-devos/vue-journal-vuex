
export default () => ({
    isloading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Mollit voluptate ullamco laborum aliquip excepteur aliquip voluptate dolore laborum eu voluptate Lorem elit mollit.',
            picture: null
        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: 'Elit ex do cupidatat ullamco et aliquip cupidatat dolor ullamco laboris culpa qui magna.',
            picture: null
        },
        {
            id: new Date().getTime() + 2000,
            date: new Date().toDateString(),
            text: 'Qui culpa exercitation irure sint qui mollit laborum commodo occaecat dolore consequat.',
            picture: null
        },
    ]
})