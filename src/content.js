const content = {
    name: "Cloudcast Solutions & Consulting",
    tagline: "App Architecture | Cyber Security | MVP | Technical Advisory",
    portraitAlt: "Portrait",
    portraitSrc: "/cloudcast-solutions-website/headshot.jpg",
    tabs: [
        { label: "Home", value: "home" },
        { label: "Case Studies", value: "projects" },
        { label: "Industries Served", value: "industries" },
        { label: "Clients", value: "clients" },
        { label: "Contact", value: "contact" }
    ],
    home: {
        title: "About Cloudcast Solutions",
        text1: `Cloudcast Solutions LLC is a premier computer engineering consulting firm based in Tulsa, OK. 
        We specialize in application architecture, cybersecurity, data acquisition and integrity, minimum 
        viable product (MVP) development, and strategic technical advisory services.`,
        text2: `Since 2019, we've partnered with businesses of all sizes—both locally and globally—to deliver 
        robust, scalable, and secure software solutions. From guiding MVP launches to supporting secure data 
        acquisition, storage, and recovery, our mission is to empower our clients with high-quality engineering 
        expertise that drives results.`,
        text3: `Our team of seasoned professionals is dedicated to helping organizations overcome complex 
        technical challenges and achieve their technology goals with confidence and clarity. Schedule a FREE 
        30-minute consultation call `,
    },
    services: {
        title: "Services",
        items: [
            "Technical and architectural advising",
            "Mentorship for junior and mid-level engineers",
            "Technology due diligence for startups and investors",
            "Codebase and infrastructure audits",
            "Strategy and roadmap planning support"
        ],
    },
    projects: {
        title: "Case Studies",
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
    industries: {
        title: "Industries Served",
        desc: `At Cloudcast Solutions LLC, we've brought deep technical expertise to a wide range of industries. With 
        experience spanning commercial, defense, healthcare, legal, and emerging markets, we understand that each sector 
        has unique challenges. Our custom-engineered solutions are built for security, scalability, and mission-critical 
        performance.`,
        industry: [
            {
                title: "Startups & Product Development",
                desc: `We serve as technical advisors and development leads for early-stage companies, helping bring 
                ideas to life quickly through lean MVPs. Our team guides founders through architecture, compliance, 
                and scaling decisions.`,
                items: [
                    "MVP development and technical planning",
                    "Mobile app architecture and codebase reviews",
                    "Time-sensitive bug resolution and go-to-market readiness",
                ],
            },
            {
                title: "Legal & Law Firms",
                desc: `We support law firms by aligning technical solutions with legal compliance and case needs. From 
                data acquisition and chain-of-custody preservation to digital forensics and recovery, we help legal teams 
                handle sensitive data with precision and integrity.`,
                items: [
                    "Secure data acquisition and verification for litigation support",
                    "Recovery and reconstruction of deleted or corrupted files",
                    "Digital forensics for civil and criminal cases",
                    "Ensuring evidentiary standards in data handling and reporting",
                ],
            },
            {
                title: "Healthcare & Pharmaceutical",
                desc: `From mobile prescription platforms to patient engagement tools, we've helped build HIPAA-conscious, 
                secure, and scalable healthcare applications. Whether integrating pharmacy systems or designing 
                mobile-first health apps, our solutions support medication access, data privacy, and seamless 
                user experience.`,
                items: [
                    "Mobile app development for pharmacies and patients",
                    "Drug pricing APIs and location-based services",
                    "Secure patient communications and data handling",
                ],
            },
            {
                title: "Embedded Systems & IoT",
                desc: `We design and deploy firmware and low-level applications for embedded hardware across industrial and 
                research settings. From digital signal processing to sensor data acquisition, our embedded solutions operate 
                in the real world with high reliability.`,
                items: [
                    "Microcontroller-based communication systems",
                    "Digital signal processing for audio and sensors",
                    "Custom PCB design and hardware efficient firmware development",
                ],
            },
            {
                title: "Telecommunications & Networking",
                desc: `With hands-on experience in real-time communication systems, VoIP, and secure network communications, 
                we've engineer software that connects users reliably and privately. Our cloud-based and embedded telecom work is 
                used in both public and private sectors.`,
                items: [
                    "Real-time encrypted VoIP over cloud based architectures",
                    "Heterogeneous wireless communication systems",
                    "Network automation and provisioning",
                ],
            },
            {
                title: "Defense & Government",
                desc: `With a background in cybersecurity, embedded systems, and encrypted communications, we've 
                delivered mission-critical solutions for defense and federal agencies. We specialize in hardened 
                systems, secure messaging, and embedded software for rugged environments.`,
                items: [
                    "Encrypted communication and embedded security",
                    "Real-time tracking and surveillance systems",
                    "Linux kernel modules for embedded devices",
                    "Secure provisioning and automation pipelines",
                ],
            },
        ]
    },
    clients: {
        title: "Our Past Clients",
        items: [
            {
                name: "Kingsley & Hird Law Firm",
                description: "Data Acquisition and Integrity",
                logo: "kingsley_hird_logo.png"
            },
            {
                name: "DUKAPAQ",
                description: "Mobile App Development and Release, Custom POS Devices Integration",
                logo: "/cloudcast-solutions-website/dukapaq_logo.webp"
            },
            {
                name: "Express Scripts",
                description: "Mobile App Maintenance, Code Review, and Security Upgrades",
                logo: "/cloudcast-solutions-website/express-scripts-logo.png"
            },
            {
                name: "Digital Audio Solutions",
                description: "Home Audio Product MVP Firmware Development",
                logo: "/cloudcast-solutions-website/DAS_Logo03.png"
            },
            {
                name: "Naval Surface Warfare Center Dahlgren Division",
                description: "Multiple MVP Releases, Code Base Review, and Penetration Testing",
                logo: "/cloudcast-solutions-website/nswc_logo.png"
            },
            {
                name: "United States Secret Service",
                description: "Penetration Testing and Hardware Development",
                logo: "/cloudcast-solutions-website/secret_service_logo.png"
            },
            {
                name: "Tulsa Police Department Cyber Crimes Unit",
                description: "Data Recovery and Verification",
                logo: "/cloudcast-solutions-website/tpd_logo.png"
            },
        ]
    },
    contact: {
        title: "Contact",
        text: `Reach out by email to setup a FREE 30 minute consultation call!`,
        email: "cloudcastsolutionsllc@gmail.com",
        phone: "918-280-8058"
    }
};

export default content;