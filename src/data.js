const miniStyleDemoUrl = import.meta.env.VITE_MINISTYLE_DEMO_URL?.trim();

export const languages = {
  vi: {
    code: "VI",
    label: "Tiếng Việt",
    nextLabel: "English",
    nav: [
      { label: "Trang chủ", href: "#home" },
      { label: "Giới thiệu", href: "#about" },
      { label: "Kỹ năng", href: "#skills" },
      { label: "Dự án", href: "#projects" },
      { label: "Kinh nghiệm", href: "#experience" },
      { label: "Học vấn", href: "#education" },
      { label: "Liên hệ", href: "#contact" },
    ],
    hero: {
      eyebrow: "Sinh viên CNTT - Software Developer Intern",
      name: "Nguyễn Ngọc Thiên",
      headline: "THIEN.OS",
      tagline:
        "Tôi là sinh viên Công nghệ thông tin, đang phát triển theo hướng lập trình phần mềm thực tế với nền tảng OOP, cơ sở dữ liệu, mô hình MVC và Java/SQL.",
      primaryCta: "Xem dự án",
      secondaryCta: "Liên hệ tôi",
      downloadCv: "Tải xuống CV",
      stats: [
        ["Java", "Ngôn ngữ chính"],
        ["MVC", "Định hướng nền tảng"],
        ["SQL", "Cơ sở dữ liệu"],
      ],
      focusLabel: "Định hướng hiện tại",
      focus: "Java Servlet/JSP - JDBC - MySQL - MVC",
      available: "Sẵn sàng thực tập / Available for internship",
      techBadge: "tech // java.sql",
      statusBadge: "sys // learning mode",
      diagnosticTitle: "THIEN-OS DIAGNOSTICS",
      diagnosticRows: [
        ["ROLE", "Software Developer Intern"],
        ["STACK", "Java / JDBC / MySQL"],
        ["STATUS", "Open to internship"],
      ],
      consoleTitle: "CONSOLE LOG STREAM",
      consoleLines: [
        "boot portfolio_os --profile thien",
        "connect database: mysql [ok]",
        "load mvc_pattern: active",
        "deploy mindset: learn_fast",
      ],
      meta: ["Location: Ho Chi Minh City", "Network: secure", "Kernel: React + Vite"],
    },
    about: {
      kicker: "Giới thiệu",
      title: "Tập trung vào nền tảng lập trình, cơ sở dữ liệu và sản phẩm có thể vận hành.",
      body:
        "Tôi là sinh viên Công nghệ thông tin, yêu thích việc xây dựng phần mềm có cấu trúc rõ ràng, giao diện dễ dùng và dữ liệu được tổ chức tốt. Tôi đang phát triển kỹ năng theo hướng Software Developer, đặc biệt với Java, SQL, mô hình MVC và các quy trình CRUD thực tế.",
      strengths: [
        {
          title: "Tư duy logic",
          body: "Có nền tảng OOP, cấu trúc dữ liệu, giải thuật và khả năng phân tích yêu cầu theo từng luồng chức năng.",
        },
        {
          title: "Xây dựng hệ thống",
          body: "Đã thực hành Servlet/JSP, JDBC, MySQL, phân quyền người dùng, upload ảnh, dashboard và xuất báo cáo.",
        },
        {
          title: "Tinh thần học hỏi",
          body: "Chủ động tự học, làm việc nhóm, đọc tài liệu kỹ thuật và sử dụng AI hỗ trợ lập trình một cách có kiểm soát.",
        },
      ],
    },
    skills: {
      kicker: "Kỹ năng",
      title: "Bộ kỹ năng phù hợp cho vị trí Software Developer Intern.",
      body:
        "Tập trung vào Java, cơ sở dữ liệu, web backend cơ bản và khả năng triển khai chức năng hoàn chỉnh từ giao diện đến dữ liệu.",
      groups: [
        {
          title: "Ngôn ngữ lập trình",
          skills: ["Java", "JavaScript", "Python"],
        },
        {
          title: "Backend",
          skills: ["Java Servlet/JSP", "JDBC", "Maven", "MVC", "CRUD", "REST API cơ bản"],
        },
        {
          title: "Frontend",
          skills: ["HTML", "CSS", "Bootstrap", "Responsive UI"],
        },
        {
          title: "Database & Công cụ",
          skills: ["MySQL", "SQL Server", "Git", "GitHub", "Eclipse", "VS Code"],
        },
        {
          title: "AI hỗ trợ lập trình",
          skills: ["Viết prompt", "ChatGPT", "Codex/Gemini", "Debug code", "Tài liệu kỹ thuật"],
        },
        {
          title: "Kỹ năng mềm",
          skills: ["Tư duy logic", "Tự học", "Làm việc nhóm", "Giao tiếp kỹ thuật"],
        },
      ],
    },
    projects: {
      kicker: "Dự án",
      title: "Dự án học tập gắn với chức năng quản lý thực tế.",
      body:
        "Các dự án tập trung vào CRUD, phân quyền, thiết kế database, xử lý dữ liệu và xây dựng luồng chức năng rõ ràng.",
      demoButton: "Trao đổi",
      codeButton: "GitHub",
      items: [
        {
          title: "Web Quản Lý Tin Tức",
          image: "/visual-ui.svg",
          imageAlt: "Minh họa giao diện ứng dụng quản lý tin tức",
          description:
            "Website đọc và quản lý tin tức với trang chủ, chi tiết bài viết, lọc danh mục, tin mới và tin xem nhiều.",
          stack: [
            { name: "Java Servlet/JSP", type: "java" },
            { name: "JDBC", type: "java" },
            { name: "MySQL", type: "db" },
            { name: "Maven", type: "tool" },
          ],
          highlights: [
            "Đăng nhập, đăng ký, phân quyền Admin/Tác giả.",
            "CRUD bài viết, danh mục và người dùng.",
            "Upload ảnh, Cookie, newsletter email và dashboard thống kê.",
          ],
        },
        {
          title: "Gym Management System",
          image: "/visual-data.svg",
          imageAlt: "Minh họa hệ thống quản lý dữ liệu và báo cáo",
          description:
            "Ứng dụng desktop quản lý hội viên, gói tập, huấn luyện viên, nhân viên và doanh thu.",
          stack: [
            { name: "Java Swing", type: "java" },
            { name: "JDBC", type: "java" },
            { name: "MySQL", type: "db" },
            { name: "MVC", type: "pattern" },
          ],
          highlights: [
            "Áp dụng mô hình MVC kết nối MySQL bằng JDBC.",
            "CRUD dữ liệu, đăng nhập phân quyền.",
            "Xuất báo cáo CSV phục vụ quản lý.",
          ],
        },
        {
          title: "Portfolio Glassmorphism",
          image: "/visual-code.svg",
          imageAlt: "Minh họa không gian làm việc lập trình",
          description:
            "Website portfolio cá nhân song ngữ, có giao diện Glassmorphism, Dark/Light Mode và bố cục responsive.",
          stack: [
            { name: "React", type: "web" },
            { name: "Tailwind CSS", type: "web" },
            { name: "Vite", type: "tool" },
            { name: "localStorage", type: "tool" },
          ],
          highlights: [
            "Chuyển đổi Tiếng Việt/Tiếng Anh.",
            "Lưu theme và ngôn ngữ đã chọn.",
            "Thiết kế hiện đại, phù hợp hồ sơ thực tập IT.",
          ],
        },
        {
          title: "MiniStyle - Website bán quần áo",
          image: "/visual-ui.svg",
          imageAlt: "Minh họa giao diện website bán quần áo MiniStyle",
          demoUrl: miniStyleDemoUrl,
          demoLabel: "Xem demo",
          codeUrl: "https://github.com/ngocthien2100/WebsiteMiniShopQuanAo",
          description:
            "Website bán quần áo mini với giao diện cửa hàng, danh sách sản phẩm, giỏ hàng, đặt hàng và phân quyền người dùng.",
          stack: [
            { name: "React", type: "web" },
            { name: "TypeScript", type: "web" },
            { name: "Vite", type: "tool" },
            { name: "Supabase", type: "db" },
          ],
          highlights: [
            "Đăng nhập, đăng ký, xác thực email, quên mật khẩu và phân quyền Admin/Nhân viên/Khách hàng.",
            "Quản lý sản phẩm, đơn hàng, giỏ hàng và dữ liệu bằng Supabase hoặc localStorage fallback.",
            "Tích hợp chatbot n8n, Messenger, email template và cấu hình deploy Vercel.",
          ],
        },
      ],
    },
    experience: {
      kicker: "Kinh nghiệm",
      title: "Trải nghiệm kỹ thuật thực tế tại môi trường doanh nghiệp.",
      body:
        "Quá trình thực tập giúp tôi hiểu rõ hơn về quy trình hỗ trợ kỹ thuật, giao tiếp khách hàng và môi trường làm việc chuyên nghiệp.",
      items: [
        {
          period: "2023",
          duration: "3 tháng",
          title: "Thực tập sinh kỹ thuật",
          company: "FPT Telecom — Chi nhánh Gò Vấp, TP.HCM",
          type: "internship",
          detail:
            "Hỗ trợ lắp đặt và cấu hình modem, router, camera; kiểm tra kết nối mạng, xử lý lỗi thiết bị, hướng dẫn người dùng và rèn luyện giao tiếp khách hàng theo quy trình kỹ thuật.",
          achievements: [
            "Lắp đặt và cấu hình thiết bị mạng (modem, router, camera IP).",
            "Chẩn đoán và xử lý sự cố kết nối mạng tại nhà khách hàng.",
            "Hướng dẫn người dùng sử dụng thiết bị và dịch vụ.",
          ],
        },
      ],
    },
    education: {
      kicker: "Học vấn",
      title: "Nền tảng học tập xây dựng tư duy lập trình và kỹ thuật.",
      body:
        "Quá trình học tập giúp tôi xây dựng nền tảng lập trình vững chắc, từ tư duy thuật toán đến thiết kế phần mềm thực tế.",
      items: [
        {
          period: "2024 - hiện tại",
          title: "Trường Cao đẳng Văn Lang Sài Gòn",
          degree: "Ngành Công nghệ Thông tin",
          detail:
            "Tích lũy kiến thức về tư duy lập trình, OOP, cấu trúc dữ liệu và giải thuật, thiết kế cơ sở dữ liệu và quy trình phát triển phần mềm.",
        },
        {
          period: "2018 - 2021",
          title: "Trường Cao đẳng Lý Tự Trọng TP.HCM",
          degree: "THPT & Trung cấp nghề - Kỹ thuật phần cứng",
          detail:
            "Hoàn thành chương trình song song, có kỹ năng lắp ráp, cài đặt, chẩn đoán lỗi và bảo trì hệ thống máy tính, mạng cơ bản.",
        },
      ],
    },
    contact: {
      kicker: "Liên hệ",
      title: "Tôi sẵn sàng cho cơ hội thực tập Software Developer Intern.",
      body:
        "Nếu bạn đang tìm một thực tập sinh có nền tảng Java/SQL, tinh thần học hỏi và khả năng xây dựng chức năng thực tế, hãy liên hệ với tôi.",
      nameLabel: "Họ tên",
      emailLabel: "Email",
      messageLabel: "Nội dung",
      namePlaceholder: "Tên của bạn",
      emailPlaceholder: "you@example.com",
      messagePlaceholder: "Bạn muốn trao đổi về điều gì?",
      submit: "Gửi tin nhắn",
      formNote: "Form minh họa; email, điện thoại và GitHub là cách liên hệ nhanh nhất.",
      email: "toilaboi400@gmail.com",
      phone: "090 669 0582",
      github: "https://github.com/ngocthien2100",
      linkedin: "https://linkedin.com/in/ngocthien2100",
      address: "Phường Tân Sơn Nhất, TP. Hồ Chí Minh",
    },
    footer: {
      tagline: "Software Developer Intern · Java · MySQL · MVC",
      available: "Sẵn sàng thực tập",
      copyright: "Nguyễn Ngọc Thiên",
      builtWith: "Xây dựng bằng React & Vite",
      quickLinksTitle: "Điều hướng nhanh",
      connectTitle: "Kết nối",
    },
  },
  en: {
    code: "EN",
    label: "English",
    nextLabel: "Tiếng Việt",
    nav: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Projects", href: "#projects" },
      { label: "Experience", href: "#experience" },
      { label: "Education", href: "#education" },
      { label: "Contact", href: "#contact" },
    ],
    hero: {
      eyebrow: "IT Student - Software Developer Intern",
      name: "Nguyen Ngoc Thien",
      headline: "THIEN.OS",
      tagline:
        "I am an IT student growing toward practical software development with a foundation in OOP, databases, MVC, Java, and SQL.",
      primaryCta: "View Projects",
      secondaryCta: "Contact Me",
      downloadCv: "Download CV",
      stats: [
        ["Java", "Core language"],
        ["MVC", "Main foundation"],
        ["SQL", "Database focus"],
      ],
      focusLabel: "Current focus",
      focus: "Java Servlet/JSP - JDBC - MySQL - MVC",
      available: "Available for internship / Ready to collaborate",
      techBadge: "tech // java.sql",
      statusBadge: "sys // learning mode",
      diagnosticTitle: "THIEN-OS DIAGNOSTICS",
      diagnosticRows: [
        ["ROLE", "Software Developer Intern"],
        ["STACK", "Java / JDBC / MySQL"],
        ["STATUS", "Open to internship"],
      ],
      consoleTitle: "CONSOLE LOG STREAM",
      consoleLines: [
        "boot portfolio_os --profile thien",
        "connect database: mysql [ok]",
        "load mvc_pattern: active",
        "deploy mindset: learn_fast",
      ],
      meta: ["Location: Ho Chi Minh City", "Network: secure", "Kernel: React + Vite"],
    },
    about: {
      kicker: "About",
      title: "Focused on programming fundamentals, databases, and maintainable software.",
      body:
        "I am an IT student who enjoys building structured software, usable interfaces, and well-organized data flows. I am developing toward a Software Developer role, especially with Java, SQL, MVC, and practical CRUD workflows.",
      strengths: [
        {
          title: "Logical thinking",
          body: "Solid basics in OOP, data structures, algorithms, and feature-by-feature requirement analysis.",
        },
        {
          title: "System building",
          body: "Hands-on practice with Servlet/JSP, JDBC, MySQL, authorization, image upload, dashboards, and reports.",
        },
        {
          title: "Learning mindset",
          body: "Self-learning, teamwork, technical reading, and responsible use of AI coding support.",
        },
      ],
    },
    skills: {
      kicker: "Skills",
      title: "A skill set aligned with Software Developer Intern roles.",
      body:
        "Focused on Java, databases, basic web backend development, and complete feature delivery from interface to data.",
      groups: [
        { title: "Programming Languages", skills: ["Java", "JavaScript", "Python"] },
        {
          title: "Backend",
          skills: ["Java Servlet/JSP", "JDBC", "Maven", "MVC", "CRUD", "Basic REST API"],
        },
        { title: "Frontend", skills: ["HTML", "CSS", "Bootstrap", "Responsive UI"] },
        {
          title: "Database & Tools",
          skills: ["MySQL", "SQL Server", "Git", "GitHub", "Eclipse", "VS Code"],
        },
        {
          title: "AI Coding Support",
          skills: ["Prompt writing", "ChatGPT", "Codex/Gemini", "Code debugging", "Technical docs"],
        },
        { title: "Soft Skills", skills: ["Logical thinking", "Self-learning", "Teamwork", "Technical communication"] },
      ],
    },
    projects: {
      kicker: "Projects",
      title: "Academic projects connected to practical management workflows.",
      body:
        "These projects focus on CRUD, authorization, database design, data handling, and clear functional flows.",
      demoButton: "Discuss",
      codeButton: "GitHub",
      items: [
        {
          title: "News Management Website",
          image: "/visual-ui.svg",
          imageAlt: "UI illustration for news management website",
          description:
            "A news reading and management website with homepage, article details, category filtering, latest posts, and most-viewed posts.",
          stack: [
            { name: "Java Servlet/JSP", type: "java" },
            { name: "JDBC", type: "java" },
            { name: "MySQL", type: "db" },
            { name: "Maven", type: "tool" },
          ],
          highlights: [
            "Login, registration, and Admin/Author authorization.",
            "CRUD for articles, categories, and users.",
            "Image upload, cookies, newsletter email, and statistics dashboard.",
          ],
        },
        {
          title: "Gym Management System",
          image: "/visual-data.svg",
          imageAlt: "Database and analytics illustration",
          description:
            "A desktop application for managing members, membership packages, trainers, employees, and revenue.",
          stack: [
            { name: "Java Swing", type: "java" },
            { name: "JDBC", type: "java" },
            { name: "MySQL", type: "db" },
            { name: "MVC", type: "pattern" },
          ],
          highlights: [
            "MVC architecture connected to MySQL with JDBC.",
            "CRUD data management and role-based login.",
            "CSV report export for management needs.",
          ],
        },
        {
          title: "Glassmorphism Portfolio",
          image: "/visual-code.svg",
          imageAlt: "Code workspace illustration",
          description:
            "A bilingual personal portfolio with Glassmorphism UI, Dark/Light Mode, and responsive layout.",
          stack: [
            { name: "React", type: "web" },
            { name: "Tailwind CSS", type: "web" },
            { name: "Vite", type: "tool" },
            { name: "localStorage", type: "tool" },
          ],
          highlights: [
            "Vietnamese/English language switching.",
            "Saved theme and language preference.",
            "Modern design for an IT internship profile.",
          ],
        },
        {
          title: "MiniStyle - Clothing Shop Website",
          image: "/visual-ui.svg",
          imageAlt: "UI illustration for the MiniStyle clothing shop website",
          demoUrl: miniStyleDemoUrl,
          demoLabel: "Live Demo",
          codeUrl: "https://github.com/ngocthien2100/WebsiteMiniShopQuanAo",
          description:
            "A mini clothing e-commerce website with storefront UI, product browsing, cart, checkout, and user roles.",
          stack: [
            { name: "React", type: "web" },
            { name: "TypeScript", type: "web" },
            { name: "Vite", type: "tool" },
            { name: "Supabase", type: "db" },
          ],
          highlights: [
            "Login, registration, email verification, password recovery, and Admin/Staff/Customer authorization.",
            "Product, order, cart, and data management with Supabase plus localStorage fallback.",
            "Integrated n8n chatbot, Messenger link, email templates, and Vercel deployment setup.",
          ],
        },
      ],
    },
    experience: {
      kicker: "Experience",
      title: "Practical technical experience in a professional enterprise environment.",
      body:
        "My internship gave me firsthand insight into technical support workflows, customer communication, and professional workplace practices.",
      items: [
        {
          period: "2023",
          duration: "3 months",
          title: "Technical Intern",
          company: "FPT Telecom — Go Vap Branch, Ho Chi Minh City",
          type: "internship",
          detail:
            "Supported modem, router, and camera installation and configuration; checked network connections, handled device issues, guided users, and practiced customer communication in technical workflows.",
          achievements: [
            "Installed and configured network devices (modems, routers, IP cameras).",
            "Diagnosed and resolved network connectivity issues at customer sites.",
            "Guided users on device operation and service usage.",
          ],
        },
      ],
    },
    education: {
      kicker: "Education",
      title: "Academic foundation building programming thinking and technical skills.",
      body:
        "My studies build a strong software foundation, from algorithmic thinking to practical software design and development.",
      items: [
        {
          period: "2024 - Present",
          title: "Van Lang Sai Gon College",
          degree: "Information Technology",
          detail:
            "Studying programming thinking, OOP, data structures and algorithms, database design, and software development processes.",
        },
        {
          period: "2018 - 2021",
          title: "Ly Tu Trong College of Ho Chi Minh City",
          degree: "High School & Vocational — Computer Hardware Engineering",
          detail:
            "Learned computer assembly, installation, troubleshooting, maintenance, and basic networking.",
        },
      ],
    },
    contact: {
      kicker: "Contact",
      title: "I am ready for Software Developer Intern opportunities.",
      body:
        "If you are looking for an intern with Java/SQL fundamentals, a learning mindset, and hands-on feature-building experience, feel free to contact me.",
      nameLabel: "Name",
      emailLabel: "Email",
      messageLabel: "Message",
      namePlaceholder: "Your name",
      emailPlaceholder: "you@example.com",
      messagePlaceholder: "Tell me what you would like to discuss...",
      submit: "Send Message",
      formNote: "This form is a demo; email, phone, and GitHub are the fastest ways to reach me.",
      email: "toilaboi400@gmail.com",
      phone: "090 669 0582",
      github: "https://github.com/ngocthien2100",
      linkedin: "https://linkedin.com/in/ngocthien2100",
      address: "Tan Son Nhat Ward, Ho Chi Minh City",
    },
    footer: {
      tagline: "Software Developer Intern · Java · MySQL · MVC",
      available: "Available for internship",
      copyright: "Nguyen Ngoc Thien",
      builtWith: "Built with React & Vite",
      quickLinksTitle: "Quick Links",
      connectTitle: "Connect",
    },
  },
};
