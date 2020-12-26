module.exports = {
    base: "/",
    title: "Job Portal",
    description: "Create your own jobportal portal",
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
                link: "https://octobercms.com/plugin/fytinnovations-jobportal"
            },
            {
                text: "FYT innovations",
                link: "https://www.fytinnovations.com"
            }
        ],
        docsRepo: "fytinnovations/oc-jobportal",
        editLinks: true,
        editLinkText: "Help us improve this page!"
    }
};