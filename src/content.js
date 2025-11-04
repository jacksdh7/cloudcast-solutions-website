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
        We specialize in minimum viable product (MVP) development, strategic technical advisory services, mobile 
        app development, data acquisition and integrity, embedded hardware development, and application architecture.`,
        text2: `Since 2019, we've partnered with businesses of all sizes—both locally and globally—to deliver 
        robust, scalable, and secure software and hardware solutions. Our mission is to empower our clients with high-quality 
        engineering expertise that drives results.`,
        text3: `Schedule a FREE 30-minute consultation call by clicking the button below!`,
        buttonText: "SCHEDULE NOW"
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
        desc: `Explore how Cloudcast Solutions LLC has delivered secure, scalable, and mission-critical software solutions across industries. 
        Below are select highlights from past engagements—showcasing technical depth, innovative design, and tangible results.`,
        lable1: "Client: ",
        lable2: "Industry: ",
        lable3: "Challenge: ",
        lable4: "Solution: ",
        lable5: "Outcome: ",
        projects: [
            {
                image: "/cloudcast-solutions-website/dukapaq_logo.webp",
                title: "Technical Advisory for a Fintech Startup",
                text1: "DUKAPAQ (Kenya & U.S.)",
                text2: 'Fintech / Startups',
                text3: "Guide a remote dev team building mobile Point-of-Sale and payment apps in an emerging market.",
                text4: "Provided codebase structure recommendations, performance tuning, secure feature development, and mentoring.",
                text5: "Helped the team successfully relaunch their mobile POS app and improved long-term maintainability. Delivered custom POS hardware solution for internal use and resale.",
            },
            {
                image: "/cloudcast-solutions-website/Inside_Rx.jpeg",
                title: "Mobile Prescription Drug Pricing Platform",
                text1: "Inside Rx",
                text2: 'Healthcare & Pharmaceutical',
                text3: "Help consumers find the best pricing for prescription medications based on location.",
                text4: "Led Kotlin development for a mobile app that integrates drug pricing APIs and geolocation to locate the cheapest prices at nearby pharmacies.",
                text5: "Maintained and enhanced the app post-launch, streamlining prescription price transparency for thousands of users.",
            },
            {
                image: "/cloudcast-solutions-website/kingsley_hird_logo.png",
                title: "Digital Evidence Recovery for Civil Litigation",
                text1: "Kingsley & Hird Law Firm",
                text2: 'Legal / Digital Forensics',
                text3: "Recover and verify potentially case-critical data from client's hard drive while preserving the chain of custody and meeting evidentiary standards.",
                text4: `Created a forensic image of the original drive to preserve data integrity. Used specialized recovery tools to extract files, including email archives 
                and document metadata. Verified file authenticity through checksums, timestamps, and cross-referencing with known data artifacts.`,
                text5: "Recovered requested data and maintained data formating and readability. The firm was able to admit the evidence in court, thanks to the validation protocols we provided.",
            },
            {
                image: "/cloudcast-solutions-website/Express_Scripts.png",
                title: "Pharmacy-to-Door Mobile App",
                text1: "Express Scripts",
                text2: 'Healthcare & Pharmaceutical',
                text3: "Simplify ordering and delivery of prescription medications through a secure mobile platform.",
                text4: "Served as the lead Kotlin developer, integrating secure authentication, delivery scheduling, and medication management.",
                text5: "Maintained and enhanced the app post-launch, ensuring compliance with HIPAA and improving user PII protections.",
            },
            {
                image: "",
                title: "Secure Telephony over the Internet",
                text1: "Confidential (Under NDA)",
                text2: 'Defense & Government',
                text3: "Build a secure, cloud-based and provider agnostic communication platform that masks user identity and protects call data.",
                text4: "Developed a VoIP solution using Asterisk PBX, encrypted tunnels, and custom secure APIs.",
                text5: "Delivered a fully encrypted, anonymous communications platform suitable for high-risk user scenarios and hostile networks that functions across the globe.",
            },
            {
                image: "/cloudcast-solutions-website/DAS_Logo03.png",
                title: "Digital Audio Processing on Embedded Hardware",
                text1: "Digital Audio Solutions",
                text2: 'Embedded Systems / Audio Engineering / Home Audio Products',
                text3: "Design a digital audio device capable of filtering and transforming audio in real time.",
                text4: "Developed firmware using the CMSIS DSP library for ARM Cortex-M7 microcontrollers and designed a custom PCB.",
                text5: "Completed a working MVP capable of high-quality digital audio processing on a constrained device and within budget.",
            },
            {
                image: "/cloudcast-solutions-website/nswc_logo.png",
                title: "Encrypted Mobile Communications for the U.S. Department of Defense",
                text1: "U.S.Naval Surface Warfare Center",
                text2: 'Defense & Government',
                text3: "Enable encrypted and encoded speech communication over extremely low-bandwidth signals for secure field operations.",
                text4: "Designed and implemented an encrypted speech transmission system capable of streaming audio over extremely low-bandwidth signals.",
                text5: "Successfully deployed in unsecure environments, extending secure communication capabilities in constrained tactical scenarios.",
            },
        ]
    },
    industries: {
        title: "Industries Served",
        desc: `At Cloudcast Solutions LLC, we've brought deep technical expertise to a wide range of industries. With 
        experience spanning commercial, defense, healthcare, legal, and emerging markets, we understand that each sector 
        has unique challenges. Our custom-engineered solutions are built for security, scalability, and mission-critical 
        performance.`,
        industry: {
            title1: "Startups & Product Development",
            title2: "Legal & Law Firms",
            title3: "Healthcare & Pharmaceutical",
            title4: "Embedded Systems & IoT",
            title5: "Telecommunications & Networking",
            title6: "Defense & Government",
        },
    },
    clients: {
        title: "Our Past Clients",
        items: [
            {
                name: "",
                logo: "kingsley_hird_logo.png"
            },
            {
                name: "DUKAPAQ",
                logo: "/cloudcast-solutions-website/dukapaq_logo.webp"
            },
            {
                name: "",
                logo: "/cloudcast-solutions-website/Inside_Rx.jpeg"
            },
            {
                name: "Express Scripts",
                logo: "/cloudcast-solutions-website/Express_Scripts.png"
            },
            {
                name: "",
                logo: "/cloudcast-solutions-website/DAS_Logo03.png"
            },
            {
                name: "",
                logo: "/cloudcast-solutions-website/nswc_logo.png"
            },
            {
                name: "",
                logo: "/cloudcast-solutions-website/secret_service_logo.png"
            },
            {
                name: "",
                logo: "/cloudcast-solutions-website/tpd_logo.png"
            },
        ]
    },
    contact: {
        title: "Contact",
        text: `Reach out by email or fill out the form below to setup a FREE 30 minute consultation call!`,
        email: "cloudcastsolutionsllc@gmail.com",
        formNameLabel: "Name",
        formEmailLabel: "Email",
        formMessageLabel: "Message",
        formButtonText: "Send Message"
    }
};

export default content;