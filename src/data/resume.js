export const resumeData = {
  personal: {
    name: "Aarush Singh",
    title: "Graduate Software Engineer",
    subTitle: "Full-Stack • Cloud • IT Support",
    email: "aarushsingh0059@gmail.com",
    phone: "+61 405 547 398",
    location: "Melbourne, Australia",
    links: {
      github: "https://github.com/Aarush700",
      linkedin: "https://www.linkedin.com/in/aarush-singh-552684209/",
      portfolio: "#"
    },
    workRights: "Temporary Graduate Visa (Subclass 485) – Full work rights, valid until 19 March 2028",
    wwcc: "Working With Children Check (WWCC) – Current and valid"
  },
  summary: "Software Engineering graduate from Swinburne University of Technology with experience building production systems, resolving technical incidents, and supporting end users across IT and operations environments. Currently providing IT field support across Swinburne teaching spaces while actively seeking a full-time graduate role. Skilled across the full stack from React and FastAPI to PostgreSQL and AWS, with a genuine interest in writing software that works reliably in the real world.",
  education: {
    institution: "Swinburne University of Technology",
    period: "Feb 2022 – Dec 2025",
    degree: "Bachelor of Engineering (Honours) – Software Engineering",
    gpa: "GPA: 3.2 / 4.0",
    location: "Melbourne, Australia",
    coursework: [
      "Distributed Systems",
      "Cloud Computing (AWS)",
      "Database Management",
      "Computer Networks",
      "Software Architecture",
      "Linux Systems"
    ],
    awards: [
      "International Excellence Scholarship (75%)",
      "Industry Experience Certificate",
      "Swinburne Emerging Leader",
      "Sustainability Certificate"
    ]
  },
  skills: {
    languages: ["Python", "JavaScript (ES6+)", "TypeScript", "SQL", "Java", "C#", "C++", "HTML5", "CSS3"],
    webFrameworks: ["React.js", "React Native", "FastAPI", "Node.js/Express", "Flask", "ROS2", "Tailwind CSS"],
    databases: ["PostgreSQL (Supabase)", "MySQL", "MongoDB", "Firebase"],
    cloudDevops: ["AWS (CloudWatch, EC2, S3)", "Microsoft Azure", "Docker", "GitHub Actions (CI/CD)", "Vercel", "Render", "Git"],
    itSupport: ["Hardware troubleshooting", "AV systems", "Jira", "ServiceNow", "incident triage", "escalation documentation"],
    aiMl: ["CNNs", "LSTMs", "sensor fusion", "OCR (Tesseract, EasyOCR)", "TensorFlow", "OpenCV", "Claude API", "GitHub Copilot"],
    apis: ["RESTful APIs", "Webhooks", "JWT", "Stripe", "Postman", "HTTP/HTTPS debugging", "TLS/SSL", "PKI"],
    testing: ["PyTest", "Jest", "integration testing", "unit testing", "code review"]
  },
  experience: [
    {
      role: "IT Delivery Consultant",
      company: "Swinburne University of Technology, Infrastructure Services & Operations",
      location: "Hawthorn, VIC",
      period: "Jan 2026 – Present",
      bullets: [
        "Conduct daily readiness checks across teaching spaces and computer labs, verifying power-on status, network connectivity, and AV functionality for all workstations before classes begin; log all identified faults in the ticketing system with clear reproduction steps and escalation notes to ensure issues are resolved within service timelines.",
        "Provide first-line IT support to academic staff and students across in-person, phone, and email channels, resolving hardware, software, and AV incidents on-site and escalating complex cases to senior IT staff with thorough documentation.",
        "Contribute to team knowledge by documenting recurring incidents and their resolutions in internal knowledge base articles, reducing repeat ticket volume and improving handover quality across shifts."
      ]
    },
    {
      role: "Final Year Project Engineer – Autonomous Robotics",
      company: "Swinburne University of Technology, Faculty of Engineering",
      location: "Melbourne, VIC",
      period: "Feb 2025 – Nov 2025",
      bullets: [
        "Developed autonomous navigation algorithms in Python and C++ using ROS2 Nav2, achieving 95%+ accuracy on real robot hardware through iterative real-world testing across a warehouse simulation environment.",
        "Designed a sensor fusion pipeline integrating LiDAR, wheel encoders, and camera data with real-time filtering and anomaly detection, maintaining stable localisation under dynamic conditions; built a dual-engine OCR system (Tesseract and EasyOCR) with confidence scoring and fuzzy matching for reliable warehouse signage recognition.",
        "Diagnosed cross-subsystem failures spanning SLAM, navigation, and sensor layers; delivered structured technical progress reports and corrective action summaries to a senior academic client across a 10-month engagement."
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "YEMECompany Pty Ltd | AI-powered fintech platform – split payments and loyalty automation",
      location: "Melbourne, VIC",
      period: "Jul 2024 – Feb 2025",
      bullets: [
        "Diagnosed and resolved live production incidents involving Stripe API failures and webhook synchronisation errors by analysing AWS CloudWatch logs and tracing HTTP request flows; tracked all defects in Jira with reproduction steps, severity assessments, and escalation notes for senior engineers.",
        "Built and maintained RESTful API endpoints and webhook integrations in Node.js and Express with a PostgreSQL backend; delivered a vendor dashboard with real-time order updates and Stripe payment processing, and configured Docker, GitHub Actions CI/CD, and CloudWatch monitoring across the production environment.",
        "Shipped a full React Native mobile application end-to-end covering vendor authentication, flyer customisation, and loyalty reward flows; served as the primary technical contact for vendor stakeholders, translating incident findings into plain language and maintaining progress throughout resolution."
      ]
    },
    {
      role: "Airport Operations Specialist",
      company: "Uber",
      location: "Melbourne Airport, VIC",
      period: "Jun 2022 – Present",
      bullets: [
        "Delivered on-ground and in-app technical support to 100+ riders and drivers daily across Melbourne Airport terminals, resolving app issues including payment failures and authentication errors; compiled structured rider feedback reports that contributed to operational improvements rolled out across ANZ and APAC.",
        "Monitored Uber's Perfect Match bay-allocation system during peak shifts to ensure correct rider-to-bay assignments, reducing friction at high-volume pick-up points; supported the ground-level rollout of Uber Kiosks at MEL, Uber Child Seat, and UberMax – all piloted from Melbourne before expanding across ANZ.",
        "Managed real-time queue flow across multiple terminals during peak periods and provided structured feedback to the operations team on newly introduced technology and process changes, directly informing product and experience improvements deployed at network scale."
      ]
    }
  ],
  projects: [
    {
      title: "Full-Stack Restaurant Ordering Platform",
      timeline: "May 2026 - Jun 2026",
      link: "https://github.com/Aarush700",
      tech: ["React", "FastAPI", "PostgreSQL", "Stripe", "Cloudinary", "Vercel"],
      imageIndex: 1,
      problem: "A live cafe needed an autonomous contactless system for table orders, kitchen notifications, and client billing.",
      solution: "Developed a production ordering system featuring QR code ordering, interactive vendor dashboards, thermal receipt print hookups, and integrated Stripe payment flows.",
      achievements: [
        "Architected a scalable PostgreSQL schema deployed on Supabase.",
        "Integrated secure real-time status notifications for order flow.",
        "Configured robust customer loyalty and delivery-zone mapping handlers."
      ],
      impact: "Successfully digitized table operations, streamlining transaction times and establishing a self-managed ordering system."
    },
    {
      title: "Robot Vision System for Autonomous Warehouse Navigation (FYP)",
      timeline: "Feb 2025 - Nov 2025",
      link: "https://github.com/Aarush700",
      tech: ["Python", "C++", "ROS2 Nav2", "LiDAR", "OpenCV", "TensorFlow"],
      imageIndex: 2,
      problem: "Autonomous warehouse vehicles need high-accuracy positioning and target identification algorithms in dynamic layouts.",
      solution: "Developed navigation algorithms in ROS2, integrating LiDAR, camera feeds, and odometry metrics with fuzzy OCR matching.",
      achievements: [
        "Attained 95%+ navigation accuracy on physical robot platforms.",
        "Designed a real-time sensor fusion pipeline with adaptive filters.",
        "Built a dual-engine OCR reader (Tesseract + EasyOCR) for warehouse signage."
      ],
      impact: "Replaced baseline positioning modules with sensor-fused localization, ensuring reliable autonomous mapping under test workloads."
    },
    {
      title: "Expense Tracker App (Full-Stack Financial Management)",
      timeline: "Aug 2025 - Oct 2025",
      link: "https://github.com/Aarush700/track-my-expenses",
      tech: ["React.js", "Node.js", "Express", "MongoDB", "Docker", "Azure"],
      imageIndex: 3,
      problem: "Users need secure, isolated dashboards to catalog expenditures, isolate balances, and visualize category outputs.",
      solution: "Built a dashboard utilizing token authentication, protected REST routes, and custom analytics views.",
      achievements: [
        "Containerized the frontend and backend using Docker configurations.",
        "Deployed to Microsoft Azure using automated GitHub Actions CI/CD.",
        "Configured robust system health logging and alerts."
      ],
      impact: "Established a secure personal dashboard enabling immediate deployment updates under active cloud monitoring."
    },
    {
      title: "Facial Recognition Attendance System (Full-Stack Security App)",
      timeline: "Jun 2025 - Jul 2025",
      link: "https://github.com/Aarush700/FaceAttend",
      tech: ["Python", "Flask", "React", "OpenCV", "CNN", "TensorFlow"],
      imageIndex: 4,
      problem: "Traditional swipe attendance tools are prone to buddy-punching and lack biometric verification validation.",
      solution: "Built a secure verification portal combining CNN face recognition with anti-spoofing blink and emotion detection.",
      achievements: [
        "Achieved 95%+ liveness verification accuracy on local test suites.",
        "Created Flask endpoints to register and index biometric attendance logs.",
        "Built responsive React camera modules with live validation highlights."
      ],
      impact: "Automated identity logging at check-in points, preventing buddy-punching and securing audit trails."
    },
    {
      title: "Electronics E-Commerce Platform (Full-Stack E-Commerce)",
      timeline: "Mar 2025 - Jun 2025",
      link: "https://github.com/Aarush700/awe-online-electronics-store",
      tech: ["Flask", "React.js", "MySQL", "Tailwind CSS"],
      imageIndex: 5,
      problem: "Stores require reliable systems to synchronize inventory, check orders, and enforce role-based access.",
      solution: "Created an operations manager offering product listings, checkout procedures, and administrative dashboards.",
      achievements: [
        "Designed a normalized MySQL schema managing 20+ records.",
        "Integrated secure endpoints for staff versus customer permissions.",
        "Validated system reliability with automated integration testing."
      ],
      impact: "Provided a unified storefront guaranteeing synchronized stock levels and secure administrator logs."
    },
    {
      title: "Real Estate Price Prediction (Full-Stack ML App)",
      timeline: "Feb 2025 - Mar 2025",
      link: "https://github.com/Aarush700",
      tech: ["Python", "Flask", "React", "Scikit-Learn", "Pandas"],
      imageIndex: 6,
      problem: "Users need instantaneous, feature-based valuations without manually analyzing complex real estate tables.",
      solution: "Designed a data pipeline that feeds trained Scikit-Learn regression models to deliver real-time pricing predictions.",
      achievements: [
        "Created an end-to-end data cleaning and feature engineering workflow.",
        "Trained models using historical sales data with high correlation.",
        "Built a clean react interface to input metrics and get prediction results."
      ],
      impact: "Provided instant property valuations, reducing the manual overhead of analyzing historical real estate data."
    },
    {
      title: "5G Network Performance Prediction & Clustering System",
      timeline: "Jul 2024 - Nov 2024",
      link: "https://github.com/Aarush700",
      tech: ["Python", "TensorFlow", "Keras", "Scikit-Learn", "Pandas"],
      imageIndex: 7,
      problem: "Cell towers need preemptive bandwidth adjustment based on time-series telemetry and spatial user clusters.",
      solution: "Built a prediction system using LSTM networks for time-series forecasting and K-Means for performance clustering.",
      achievements: [
        "Built LSTM model pipelines predicting throughput spikes.",
        "Developed geographic clustering models separating low-coverage sectors.",
        "Parsed telemetry datasets to construct spatial features."
      ],
      impact: "Enabled spatial network traffic predictions, aiding proactive tower resource configuration."
    },
    {
      title: "Unified MQTT Security and IoT Cybersecurity",
      timeline: "Jul 2023 - Oct 2024",
      link: "https://github.com/Aarush700",
      tech: ["Mosquitto MQTT", "OpenSSL", "TLS/SSL", "Docker", "React"],
      imageIndex: 8,
      problem: "IoT deployments utilizing default configurations are highly vulnerable to packet sniffing and unauthenticated broker calls.",
      solution: "Hardened Mosquitto MQTT message pipelines by migrating default ports to TLS, introducing PKI chains, and creating an active simulation dashboard.",
      achievements: [
        "Configured PKI chains to authenticate client devices.",
        "Enforced Access Control Lists (ACLs) to establish role-based access.",
        "Simulated warehouse sensor traffic with a React dashboard."
      ],
      impact: "Secured messaging pathways against eavesdropping, ensuring authenticated data streams across simulated warehouse operations."
    },
    {
      title: "Serverless and Event-Driven AWS Architecture",
      timeline: "Jul 2023 - Oct 2023",
      link: "https://github.com/Aarush700",
      tech: ["AWS", "Lambda", "DynamoDB", "EventBridge", "CloudWatch"],
      imageIndex: 9,
      problem: "On-premise infrastructures suffer from scaling constraints and high maintenance overhead under variable loads.",
      solution: "Designed an event-driven AWS migration structure featuring auto-scaling servers, event broker pipelines, and budget alarms.",
      achievements: [
        "Designed multi-AZ architectures utilizing EC2 and Auto-Scaling Groups.",
        "Orchestrated task patterns using AWS EventBridge and Lambda functions.",
        "Set up CloudWatch alert metrics to surface cost overruns."
      ],
      impact: "Reduced infrastructure costs under variable workloads through automated scaling rules."
    }
  ],
  certifications: [
    { title: "Python 3", provider: "Udemy", year: "2020" },
    { title: "Python", provider: "Kaggle", year: "2020" },
    { title: "Intro to SQL", provider: "Kaggle", year: "2020" },
    { title: "Intro to Machine Learning", provider: "Kaggle", year: "2020" }
  ],
  achievements: [
    "Software Engineering graduate from Swinburne University of Technology",
    "International Excellence Scholarship (75%)",
    "Swinburne Emerging Leader",
    "Industry Experience Certificate",
    "Real-world production restaurant ordering system actively serving users",
    "Autonomous robotics navigation project with 95%+ accuracy",
    "AI-powered fintech software engineering internship",
    "Current university IT Delivery support consultant role"
  ]
};
