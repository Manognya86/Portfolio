const config = {
    skills: [
        { name: 'Python', logo: 'assets/logos/python.svg' },
        { name: 'C++', logo: 'assets/logos/cpp.svg' },
        { name: 'SQL', logo: 'assets/logos/sql.svg' },
        { name: 'HTML', logo: 'assets/logos/html.svg' },
        { name: 'CSS', logo: 'assets/logos/css.svg' },
        { name: 'TensorFlow', logo: 'assets/logos/tensorflow.svg' },
        { name: 'Pandas', logo: 'assets/logos/pandas.svg' },
        { name: 'NumPy', logo: 'assets/logos/numpy.svg' },
        { name: 'Matplotlib', logo: 'assets/logos/matplotlib.svg' },
        { name: 'Google Cloud', logo: 'assets/logos/googlecloud.svg' },
        { name: 'PyTorch', logo: 'assets/logos/pytorch.svg' },
        { name: 'AWS', logo: 'assets/logos/aws.svg' },
        { name: 'Docker', logo: 'assets/logos/docker.svg' },
        { name: 'Kubernetes', logo: 'assets/logos/kubernets.svg' },
        { name: 'HuggingFace', logo: 'assets/logos/huggingface.svg' },
        { name: 'Tableau', logo: 'assets/logos/tableau.svg' },
        { name: 'Java', logo: 'assets/logos/java.svg' },
    ],

    education: [
        {
            institution: "University of Michigan-Dearborn",
            degree: "MS in Artificial Intelligence",
            timeline: "Jan 2025 – Dec 2026",
            gpa: "3.6 GPA",
            logo: "assets/logos/umich.png"
        },
        {
            institution: "Bangalore Institute of Technology",
            degree: "BE in AI & ML",
            timeline: "Nov 2020 – May 2024",
            gpa: "3.6 GPA",
            logo: "assets/logos/bit.png"
        }
    ],

    experience: [
        {
            company: 'Donyati India Pvt Ltd',
            logo: 'assets/logos/donyati.png',
            website: 'https://donyati.com/',
            position: 'Software Engineer Intern',
            timeline: 'Nov 2023 - Dec 2024',
            achievements: [
                'Developed end-to-end Time Series Forecasting ML application for MNCs',
                'Enhanced workflow for 20 teams (↑25% operational efficiency)',
                'Designed automated data pipelines reducing manual effort by 40%',
                'Optimized LSTM models achieving 15% accuracy improvement'
            ]
        },
        {
            company: 'Donyati India Pvt Ltd',
            logo: 'assets/logos/donyati.png',
            website: 'https://donyati.com/',
            position: 'Co-op Intern',
            timeline: 'Mar 2023 - Nov 2023',
            achievements: [
                'Implemented OCR-based insurance document processing system (97% accuracy)',
                'Designed automated text preprocessing pipelines (↓30% processing time)',
                'Fine-tuned OCR models with DL/NLP techniques (↑20% recognition accuracy)'
            ]
        },
        {
            company: 'Prinston Smart Engineer',
            logo: 'assets/logos/prinston.jpg',
            website: 'https://prinstonsmart.com/',
            position: 'Machine Learning Intern',
            timeline: 'Sept 2023',
            achievements: [
                'Developed Cancer Cell Prediction model (92-95% accuracy)',
                'Reduced false positives by 15% through feature selection',
                'Improved model interpretability for medical applications'
            ]
        }
    ],

    projects: [
        {
            name: "AEGAN + SRGAN for Hi-Res Image Synthesis",
            tech: ["Python", "PyTorch", "GANs"],
            description: "High-resolution image synthesis with 37% better FID scores",
            github: "https://github.com/Manognya86/Manognya86-AE-GAN-SRGAN-for-Hi-Res-Image-Synthesis-PyTorch",
            metrics: ["60% Faster Inference", "89% GPU Utilization"],
            tags: ["Computer Vision", "Generative AI"]
        },
        {
            name: "Docu Detective.AI",
            tech: ["Python", "LangChain", "OpenAI"],
            description: "Interactive PDF analysis tool with 40% accuracy improvement",
            github: "https://github.com/Manognya86/MultiPDF",
            metrics: ["↑40% Extraction Accuracy", "35% User Engagement"],
            tags: ["NLP", "LLM"]
        },
        {
            name: "Skin Disease Detection",
            tech: ["Python", "TensorFlow", "OpenCV"],
            description: "CNN model for skin disease classification with 90% accuracy",
            github: "https://github.com/Manognya86/Skin-disease-detection",
            metrics: ["90% Accuracy", "Data Augmentation"],
            tags: ["Medical AI"]
        },
        {
            name: "Bone Fracture Detection",
            tech: ["TensorFlow", "OpenCV", "CNNs"],
            description: "Medical imaging analysis system with 95% accuracy",
            github: "https://github.com/Manognya86/bone-fracture-detection-",
            metrics: ["92-95% Detection Accuracy", "FDA Compliance"],
            tags: ["Medical AI"]
        }
    ],

    certifications: [
        {
            name: "Oracle AI Vector Search Certified Professional",
            issuer: "Oracle",
            date: "Aug 2025",
            badge: "./assets/certificates/Oracle AI Vector Search Certified Professional badge.jpg"
        },
        {
            name: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
            issuer: "Oracle",
            date: "Mar 2025",
            badge: "./assets/certificates/Oracle Cloud Infrastructure 2025 Certified Data Science Professional Badge.jpg"
        },
        {
            name: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
            issuer: "Oracle",
            date: "Mar 2025",
            badge: "./assets/certificates/oracle-ai-2025.jpeg"
        },
        {
            name: "Oracle Certified Fusion Cloud Associate (SCM, CX, ERP, HCM)",
            issuer: "Oracle",
            date: "Mar 2025",
            badge: "./assets/certificates/oracle-fusion.png"
        },
        {
            name: "Oracle Certified GENAI Professional",
            issuer: "Oracle",
            date: "Jul 2024",
            badge: "./assets/certificates/oracle-genai.jpg"
        },
        {
            name: "Oracle Cloud Infrastructure 2023 Certified AI Foundations Associate",
            issuer: "Oracle",
            date: "Oct 2023",
            badge: "./assets/certificates/oracle-ai-2023.jpg"
        },
        {
            name: "Google Cloud Skill Boost: GCP Skill Badges",
            issuer: "Google",
            date: "Oct 2022",
            badge: "./assets/certificates/gcp-badge.png"
        }
    ],

    leadership: [
        {
            title: "Treasurer - Google Developer Student Club",
            timeline: "Jun 2023 – Jun 2024",
            achievements: [
                "Managed budgets for 10+ tech events",
                "Secured 5+ corporate sponsorships",
                "Increased event participation by 20%"
            ]
        },
        {
            title: "Secretary - Rotaract Club",
            timeline: "Jun 2022 – Jun 2023",
            achievements: [
                "Coordinated 25+ community service events",
                "Managed 100+ volunteers",
                "Increased engagement by 30%"
            ]
        },
        {
            title: "Event Coordinator - Rotaract Club",
            timeline: "Jun 2021 – Jun 2022",
            achievements: [
                "Executed 10+ events for 200+ participants",
                "Streamlined vendor communications",
                "Boosted social media engagement by 30%"
            ]
        },
        {
            title: "Lead Organizer - BIT MANTHAN",
            timeline: "Jan 2024",
            achievements: [
                "Managed talent fest for 300+ students",
                "Increased attendance by 75%",
                "Coordinated judges and performers"
            ]
        }
    ],

    events: [
        {
            name: "BIT Got Talent",
            date: "Jan 2024",
            role: "Lead Organizer",
            metrics: ["300+ participants", "75% attendance increase"],
            image: "assets/events/bit-got-talent.jpg"
        },
        {
            name: "Winter Donation Drive",
            date: "Dec 2023",
            role: "Project Lead",
            metrics: ["3000+ clothing items", "60% participation growth"],
            image: "assets/events/winter-drive.jpg"
        },
        {
            name: "Mega Trek Fundraiser",
            date: "Oct 2023",
            role: "Lead Organizer",
            metrics: ["50% contribution increase", "Environmental awareness campaign"],
            image: "assets/events/mega-trek.jpg"
        }
    ],

    publications: [
        {
            title: "Automated White Blood Cell Subtype Classification: A Robust Deep Learning Approach for Precision Diagnostics",
            journal: "IJARESM",
            date: "May 2025",
            link: "https://www.ijaresm.com/automated-white-blood-cell-subtype-classification-a-robust-deep-learning-approach-for-precision-diagnostics"
        },
        {
            title: "Built Docu Detective.AI – A PDF Referencing Chatbot",
            journal: "IRJIET",
            date: "Apr 2024",
            link: "https://irjiet.com/Volume-8/Issue-4-April-2024/Docu-Detective-AI-A-Pdf-Referencing-Chatbot/2226"
        },
        {
            title: "Bias and Fairness in AI Model: How can Bias in AI Models be Identified, Mitigated, and Prevented in Data Science Practices?",
            journal: "IJISRT",
            date: "Sept 2024",
            link: "https://www.ijisrt.com/bias-and-fairness-in-ai-models-how-can-bias-in-ai-models-be-identified-mitigated-and-prevented-in-data-science-practices"
        },
        {
            title: "Time Series Forecasting using Machine Learning Models",
            journal: "YouTube (Donyati)",
            date: "2023",
            link: "https://www.youtube.com/watch?v=qoJaSphj3jI"
        }
    ],

    extracurriculars: [
        {
            category: "Sports & Arts",
            icon: "fa-trophy",
            items: [
                "National-level swimmer (Backstroke)",
                "State-level football player",
                "Mridangam practitioner (10+ years)",
                "Graphic design with Canva"
            ]
        },
        {
            category: "Community Leadership",
            icon: "fa-users",
            items: [
                "Organized Winter Donation Drive (3000+ items)",
                "Led Mega Trek fundraiser for children's heart surgery",
                "Managed Dhruti Utsav women entrepreneurs event",
                "Raised ₹300,000 for breast cancer awareness"
            ]
        }
    ],

    testimonials: [
        {
            author: "Dr. John Smith",
            text: "Exceptional technical skills combined with strong leadership",
            role: "Professor, University of Michigan"
        }
    ]
};

export default config;


