module.exports = {
    base: "/",
    title: "Recruitment",
    description: "Create your own recruitment portal",
    head: [
        ['link', { rel: 'icon', href: '/assets/img/logo.png' }]
    ],
    themeConfig: {
        logo: '/assets/img/logo.png',
        sidebar: [
            {
                title: "Getting Started",
                children: [
                    "/getting-started/installation",
                    "/getting-started/configuration",
                ]
            },
            {
                title: "Components",
                children: [
                    "/components/joblist",
                    "/components/jobdetails",
                    "/components/jobform",
                    "/components/jobspostedlist",
                    "/components/jobsappliedlist",
                    "/components/jobapplications",
                    "/components/companyform",
                    "/components/companiescreatedlist",
                    "/components/applicationdetails",
                ]
            },
            ['features', 'Upcoming Features !'],
            ['screenshots', 'Screenshots']
        ],
        nav: [
            { text: "Guide", link: "/" },
            {
                text: "Marketplace",
                link: "https://octobercms.com/plugin/fytinnovations-recruitment"
            },
            {
                text: "FYT innovations",
                link: "https://www.fytinnovations.com"
            }
        ],
        docsRepo: "fytinnovations/oc-recruitment",
        editLinks: true,
        editLinkText: "Help us improve this page!"
    }
};