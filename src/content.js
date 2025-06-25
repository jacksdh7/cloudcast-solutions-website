const content = {
    name: "Jackson Hayward",
    tagline: "App Architecture | Cyber Security | MVP | Technical Advisor",
    portraitAlt: "Portrait",
    portraitSrc: "public/headshot.jpg",
    tabs: [
        { label: "About", value: "about" },
        { label: "Offerings", value: "offerings" },
        { label: "Education", value: "education" },
        { label: "Employment", value: "employment" },
        { label: "Projects", value: "projects" },
        { label: "Contact", value: "contact" }
    ],
    about: {
        title: "About Me",
        text: `I'm a seasoned consultant with decades of experience in software development, strategy, and cross-industry
problem solving. Now retired from full-time work, I help individuals and organizations navigate technical
and operational challenges through teaching, advising, and mentoring.`
    },
    offerings: {
        title: "Consulting Offerings",
        items: [
            "Technical and architectural advising",
            "Mentorship for junior and mid-level engineers",
            "Technology due diligence for startups and investors",
            "Codebase and infrastructure audits",
            "Strategy and roadmap planning support"
        ]
    },
    education: {
        title: "Education",
        text: `B.S. in Computer Engineering — Your University Name\nM.S. in Software Systems — Your Graduate School Name`
    },
    employment: {
        title: "Previous Employment",
        jobs: [
            {
                title: "Senior Software Engineer — MajorTech Corp",
                years: "2010-2023",
                desc: "Led development of large-scale distributed systems across multiple domains."
            },
            {
                title: "Principal Consultant — Freelance",
                years: "2003-2010",
                desc: "Worked with clients across industries to implement mission-critical solutions."
            }
        ]
    },
    projects: {
        title: "Selected Projects",
        projects: [
            {
                title: "Legacy System Modernization",
                desc: "Modernized a decades-old codebase for a financial client, cutting maintenance costs by 50%."
            },
            {
                title: "Startup Tech Due Diligence",
                desc: "Performed code audits and scalability assessments for VC-backed startups."
            }
        ]
    },
    contact: {
        title: "Contact",
        text: `Feel free to reach out for consulting, mentoring, or collaboration opportunities.`,
        email: "cloudcastsolutionsllc@gmail.com",
        phone: "405-928-3071"
    }
};

export default content;