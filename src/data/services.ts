import { 
  Code, 
  Globe, 
  PenTool, 
  Database, 
  Search, 
  Megaphone, 
  BarChart, 
  Palette, 
  FileText, 
  MapPin, 
  DollarSign, 
  Users, 
  Monitor, 
  Smartphone, 
  Link2, 
  Server, 
  Briefcase 
} from 'lucide-react';

export const services = [
  {
    id: 'website-development',
    icon: Monitor,
    title: 'Website Development',
    shortDescription: 'Professional websites tailored to your business needs',
    fullDescription: 'Our website development services ensure your online presence is impactful and user-friendly. We create responsive, secure, and visually stunning websites tailored to your goals.',
    features: [
      {
        title: 'Custom website design',
        objective: 'Build unique, tailor-made websites from scratch.',
        features: ['Fully customized design', 'Intuitive navigation', 'Dynamic functionality'],
        outcome: 'A website that stands out and perfectly matches your brand’s goals.'
      },
      {
        title: 'E-Commerce Development',
        objective: 'Create robust online stores that convert visitors into buyers.',
        features: ['Secure payment gateways', 'Product catalogs', 'Customer management tools'],
        outcome: 'Higher sales and a seamless shopping experience for your customers.'
      },
      {
        title: 'CMS-Based Development',
        objective: 'Provide websites powered by content management systems like WordPress, Joomla, or Drupal.',
        features: ['Easy-to-use interfaces', 'Flexible content updates', 'Scalable design'],
        outcome: 'A website you can easily manage, update, and grow.'
      },
      {
        title: 'Responsive Design & Development',
        objective: 'Ensure your website looks perfect on all devices.',
        features: ['Mobile-friendly designs', 'Cross-browser compatibility', 'Dynamic layouts'],
        outcome: 'Increased engagement across desktops, tablets, and smartphones.'
      },
      {
        title: 'Website Redesign Services',
        objective: 'Revamp outdated websites to meet modern standards.',
        features: ['Enhanced aesthetics', 'Improved navigation', 'Updated features'],
        outcome: 'A fresh, modern look that resonates with your audience.'
      },
      
    ],
    faqs: [
      {
        question: 'How long does it take to develop a website?',
        answer: 'The timeline varies depending on the complexity of the project. A standard website typically takes 4-6 weeks.',
      },
      {
        question: 'Can you redesign an existing website?',
        answer: 'Yes! Our redesign services ensure your website meets modern standards while retaining its core identity.',
      },
      {
        question: 'Do you offer maintenance services?',
        answer: 'Absolutely. We provide ongoing support and maintenance to keep your website updated and running smoothly.',
      },
    ]    
  },
  {
    id: 'seo-services',
    icon: Search,
    title: 'SEO Services',
    shortDescription: 'Improve your search engine visibility',
    fullDescription: 'Our SEO services help your website rank higher on search engines, attract organic traffic, and increase your online presence.',
    features: [
      {
        title: 'On-Page SEO',
        objective: 'Optimize individual pages to improve search engine rankings.',
        features: ['Keyword research', 'Meta tag optimization', 'Internal linking', 'Content structuring'],
        outcome: 'Enhanced visibility and better user engagement.'
      },
      {
        title: 'Off-Page SEO',
        objective: 'Build authority and trust through high-quality backlinks.',
        features: ['Link building', 'Social signals', 'Outreach campaigns'],
        outcome: 'Improved domain authority and stronger search engine presence.'
      },
      {
        title: 'Technical SEO',
        objective: 'Ensure your website meets technical requirements for search engines.',
        features: ['Site speed optimization', 'Mobile-friendliness', 'Schema markup', 'Crawlability enhancements'],
        outcome: 'Faster load times, higher mobile rankings, and improved user experience.'
      },
      {
        title: 'Local SEO',
        objective: 'Boost visibility in local search results for businesses targeting a geographic audience.',
        features: ['Google Business Profile optimization', 'Local citations', 'Geo-targeted content'],
        outcome: 'Increased foot traffic and local lead generation.'
      },
      {
        title: 'E-Commerce SEO',
        objective: 'Drive sales through better search visibility for product pages.',
        features: ['Product keyword optimization', 'Structured data', 'User-friendly navigation'],
        outcome: 'Increased sales and improved product discoverability.'
      }
    ],
    faqs: [
      {
        question: 'How long does it take to see results from SEO services?',
        answer: 'SEO is a long-term strategy, and results typically appear within 3-6 months. However, this timeline varies based on competition and current site performance.',
      },
      {
        question: 'Do you work with small businesses?',
        answer: 'Yes! We provide affordable SEO solutions tailored for small businesses to help them grow.',
      },
      {
        question: 'What tools do you use for SEO?',
        answer: 'We use industry-leading tools like Google Analytics, SEMrush, Ahrefs, and Screaming Frog to deliver precise insights and strategies.',
      },
    ]
    
  },  
  {
    id: 'custom-software',
    icon: Code,
    title: 'Custom Software Development',
    shortDescription: 'Tailored software solutions for your business needs',
    fullDescription: 'We create custom software solutions that perfectly align with your business processes and objectives. Our experienced developers use cutting-edge technologies to build scalable, secure, and efficient applications.',
    features: [
      {
        title: 'Business Software Development',
        objective: 'Optimize day-to-day operations with software tailored to your organization.',
        features: ['Inventory management', 'ERP systems', 'CRM tools'],
        outcome: 'Streamlined workflows and increased operational efficiency.'
      },
      {
        title: 'Mobile App Development',
        objective: 'Create powerful mobile applications for Android, iOS, or cross-platform solutions.',
        features: ['E-commerce apps', 'On-demand services', 'Customer engagement platforms'],
        outcome: 'Enhanced user experience and wider audience reach.'
      },
      {
        title: 'Enterprise Software Solutions',
        objective: 'Solve complex enterprise challenges with robust, secure, and scalable solutions.',
        features: ['Automation tools', 'Data analytics platforms', 'Custom reporting systems'],
        outcome: 'Improved productivity and better business decisions.'
      },
      {
        title: 'SaaS Development',
        objective: 'Build scalable cloud-based solutions accessible from anywhere.',
        features: ['Subscription-based platforms', 'Project management tools', 'Collaborative software'],
        outcome: 'Flexible and cost-effective business solutions.'
      },
      {
        title: 'API Integration and Development',
        objective: 'Seamlessly connect software systems for improved functionality.',
        features: ['Payment gateways', 'Third-party integrations', 'Social media platforms'],
        outcome: 'Enhanced system capabilities and data flow.'
      },
      {
        title: 'Legacy Software Modernization',
        objective: 'Upgrade outdated software to improve performance, security, and usability.',
        features: ['Migrating to modern platforms', 'Cloud integration', 'Feature enhancement'],
        outcome: 'Increased reliability and future-proof systems.'
      }
    ],
    faqs: [
      {
        question: 'How much does custom software development cost?',
        answer: 'Costs depend on the complexity, features, and scope of the project. Contact us for a detailed estimate.',
      },
      {
        question: 'How long does it take to develop custom software?',
        answer: 'Development timelines vary based on requirements but typically range from 3-6 months.',
      },
      {
        question: 'Do you provide post-launch support?',
        answer: 'Yes, we offer ongoing maintenance, updates, and support to ensure the software performs optimally.',
      },
    ]    
  },  
  {
    id: 'erp-solutions',
    icon: Database,
    title: 'ERP Solutions',
    shortDescription: 'Streamline and integrate your business processes',
    fullDescription: 'Our ERP solutions help businesses automate and integrate key functions such as inventory, accounting, HR, and more, enabling efficient workflows and data-driven decisions.',
    features: [
      {
        title: 'Financial Management',
        objective: 'Centralized accounting and financial planning.',
        features: ['Real-time insights', 'Expense tracking', 'Budgeting tools'],
        outcome: 'Improved financial control and strategic planning.'
      },
      {
        title: 'Supply Chain Management',
        objective: 'Optimize inventory control and logistics.',
        features: ['Inventory tracking', 'Order management', 'Cost efficiency tools'],
        outcome: 'Faster delivery and reduced operational costs.'
      },
      {
        title: 'Customer Relationship Management (CRM)',
        objective: 'Manage customer data and interactions seamlessly.',
        features: ['Customer data tracking', 'Sales automation', 'Personalized solutions'],
        outcome: 'Enhanced customer satisfaction and loyalty.'
      },
      {
        title: 'Human Resource Management (HRM)',
        objective: 'Streamline payroll, recruitment, and employee performance tracking.',
        features: ['Workforce planning', 'Compliance management', 'Employee self-service portals'],
        outcome: 'Efficient HR processes and employee satisfaction.'
      },
      {
        title: 'Manufacturing and Production Planning',
        objective: 'Automate production schedules and monitor efficiency.',
        features: ['Resource allocation', 'Waste reduction tools', 'Efficiency tracking'],
        outcome: 'Reduced waste and maximized production output.'
      },
      {
        title: 'Data Analytics and Reporting',
        objective: 'Comprehensive dashboards and customizable reports.',
        features: ['Real-time analytics', 'Custom reporting tools', 'Actionable insights'],
        outcome: 'Data-driven decisions and improved business strategies.'
      }
    ],
    faqs: [
      {
        question: 'How much does ERP implementation cost?',
        answer: 'The cost varies based on the scope, complexity, and features of the ERP system. Contact us for a tailored quote.',
      },
      {
        question: 'How long does it take to implement an ERP system?',
        answer: 'The timeline typically ranges from 3 to 6 months, depending on the project requirements.',
      },
      {
        question: 'Do you offer ERP solutions for small businesses?',
        answer: 'Yes, our scalable ERP solutions are ideal for businesses of all sizes, including startups and SMEs.',
      },
    ]    
  },  
  {
    id: 'ecommerce-development',
    icon: Globe,
    title: 'Ecommerce Website Development',
    shortDescription: 'Scalable solutions for online businesses',
    fullDescription: 'We design and develop powerful e-commerce platforms that offer seamless shopping experiences and drive sales.',
    features: [
      {
        title: 'Custom Ecommerce Website Design',
        objective: 'Unique, mobile-responsive designs that align with your brand identity.',
        features: ['Engaging UI/UX', 'Brand-focused design', 'Mobile-first approach'],
        outcome: 'Optimized user engagement and conversions.'
      },
      {
        title: 'Platform Integration',
        objective: 'Expertise in platforms like Shopify, WooCommerce, Magento, and BigCommerce.',
        features: ['CRM integration', 'ERP systems', 'Inventory management'],
        outcome: 'Seamless workflows and increased productivity.'
      },
      {
        title: 'Payment Gateway Solutions',
        objective: 'Support for multiple payment gateways like PayPal, Stripe, and more.',
        features: ['Secure transactions', 'PCI compliance', 'Multiple currency support'],
        outcome: 'Improved user trust and global reach.'
      },
      {
        title: 'Product Management Systems',
        objective: 'Easy-to-use dashboards for managing product catalogs.',
        features: ['Bulk uploads', 'Inventory tracking', 'Dynamic pricing'],
        outcome: 'Efficient catalog management and operational ease.'
      },
      {
        title: 'SEO and Marketing Integration',
        objective: 'Boost online visibility and customer engagement.',
        features: ['SEO tools', 'Abandoned cart recovery', 'Email marketing integration'],
        outcome: 'Increased traffic and higher conversions.'
      },
      {
        title: 'Advanced Features',
        objective: 'Incorporate features that enhance customer experience.',
        features: ['Multi-language support', 'AI-driven recommendations', 'Customer analytics'],
        outcome: 'Improved user experience and global scalability.'
      }
    ],
    faqs: [
      {
        question: 'How long does it take to build an ecommerce website?',
        answer: 'The timeline varies based on complexity but typically ranges from 4 to 8 weeks.',
      },
      {
        question: 'Can you integrate third-party apps with my ecommerce website?',
        answer: 'Yes, we can integrate CRM, ERP, payment gateways, shipping APIs, and more.',
      },
      {
        question: 'Is the website optimized for mobile users?',
        answer: 'Absolutely! All our ecommerce websites are mobile-responsive for seamless shopping experiences.',
      },
    ]
  },  
  {
    id: 'social-media-management',
    icon: Search,
    title: 'Social Media Management',
    shortDescription: 'Engage your audience effectively',
    fullDescription: 'We manage your social media profiles to ensure consistent, high-quality engagement with your audience.',
    features: [
      {
        title: 'Social Media Strategy Development',
        objective: 'In-depth analysis of your audience and competitors to create tailored strategies aligned with your business goals.',
        features: ['Audience analysis', 'Competitor research', 'Goal-driven strategy'],
        outcome: 'Enhanced engagement and brand presence.'
      },
      {
        title: 'Content Creation and Curation',
        objective: 'Crafting high-quality posts including text, images, videos, and infographics.',
        features: ['Consistent storytelling', 'Platform-specific formats', 'Creative visuals'],
        outcome: 'Increased follower engagement and retention.'
      },
      {
        title: 'Community Management',
        objective: 'Active engagement with your audience through comments, messages, and reviews.',
        features: ['Timely responses', 'Building community trust', 'User interaction'],
        outcome: 'A loyal and engaged follower base.'
      },
      {
        title: 'Paid Social Media Advertising',
        objective: 'Data-driven ad campaigns on platforms like Facebook, Instagram, and LinkedIn.',
        features: ['Targeted campaigns', 'A/B testing', 'Retargeting strategies'],
        outcome: 'Maximized ROI from advertising efforts.'
      },
      {
        title: 'Analytics and Reporting',
        objective: 'Regular performance insights to track growth and refine strategies.',
        features: ['Detailed reports', 'Engagement metrics', 'Conversion tracking'],
        outcome: 'Optimized social media strategy for sustained success.'
      }
    ],
    faqs: [
      {
        question: 'What platforms do you specialize in managing?',
        answer: 'We manage all major platforms, including Facebook, Instagram, LinkedIn, Twitter, and TikTok.',
      },
      {
        question: 'Can you help with paid social media campaigns?',
        answer: 'Yes, we specialize in designing and managing cost-effective ad campaigns.',
      },
      {
        question: 'How do you measure the success of social media management?',
        answer: 'Success is measured through KPIs like engagement rates, follower growth, website traffic, and ROI.',
      },
    ]    
  },
  {
    id: 'lead-generation',
    icon: Megaphone,
    title: 'Lead Generation',
    shortDescription: 'Capture and nurture potential customers',
    fullDescription: 'We implement proven strategies to attract and convert leads, ensuring a steady flow of potential customers for your business.',
    features: [
      {
        title: 'Inbound Lead Generation',
        objective: 'Engage audiences with blogs, videos, and SEO-optimized content.',
        features: ['Content marketing', 'Social media campaigns', 'SEO optimization'],
        outcome: 'Increased organic leads and engagement.'
      },
      {
        title: 'Outbound Lead Generation',
        objective: 'Strategic communication to capture and nurture leads.',
        features: ['Email marketing', 'Cold outreach', 'Telemarketing'],
        outcome: 'Expanded reach and higher lead conversion.'
      },
      {
        title: 'Paid Advertising for Lead Generation',
        objective: 'Drive targeted traffic through Google Ads and Social Media Ads.',
        features: ['Campaign planning', 'Real-time targeting', 'Budget optimization'],
        outcome: 'Efficient lead acquisition with measurable results.'
      },
      {
        title: 'CRM and Lead Management',
        objective: 'Streamline lead management with CRM integration and nurturing strategies.',
        features: ['Automated follow-ups', 'Lead scoring', 'Conversion tracking'],
        outcome: 'Seamless lead tracking and improved conversion rates.'
      }
    ],
    faqs: [
      {
        question: 'What platforms do you use for lead generation?',
        answer: 'We utilize Google Ads, social media platforms, email marketing, and CRM tools for comprehensive strategies.',
      },
      {
        question: 'How do you ensure the quality of leads?',
        answer: 'Through audience analysis, targeting, and continuous optimization, we focus on delivering pre-qualified leads.',
      },
      {
        question: 'Can lead generation strategies be customized?',
        answer: 'Absolutely! We design strategies tailored to your specific industry, goals, and audience.',
      },
      {
        question: 'What is the cost of your lead generation services?',
        answer: 'Costs depend on the scope and platforms used. Contact us for a customized quote.',
      },
    ]    
  },
  {
    id: 'content-marketing',
    icon: FileText,
    title: 'Content Marketing',
    shortDescription: 'Content that resonates with your audience',
    fullDescription: 'Our content marketing services focus on creating valuable content that attracts, engages, and converts customers.',
    features: [
      {
        title: 'Content Strategy Development',
        objective: 'Analyze audience, competitors, and goals to create a roadmap.',
        features: ['Comprehensive research', 'Distribution strategy', 'Promotional tactics'],
        outcome: 'Effective content plans aligned with business goals.'
      },
      {
        title: 'SEO Content Creation',
        objective: 'Develop blog posts, articles, and website copy optimized for search engines.',
        features: ['Keyword research', 'Search-friendly writing', 'Engaging formats'],
        outcome: 'Improved search rankings and visibility.'
      },
      {
        title: 'Social Media Content',
        objective: 'Engaging posts optimized for each platform to grow your audience.',
        features: ['Reels and videos', 'Carousel posts', 'Platform-specific designs'],
        outcome: 'Higher audience engagement and growth.'
      },
      {
        title: 'Video Marketing',
        objective: 'Craft compelling videos for enhanced brand storytelling.',
        features: ['Script writing', 'Editing and production', 'Multi-platform distribution'],
        outcome: 'Increased engagement and brand awareness.'
      },
      {
        title: 'Analytics and Reporting',
        objective: 'Measure content performance and adjust strategies for continuous improvement.',
        features: ['Custom dashboards', 'Performance insights', 'Real-time feedback'],
        outcome: 'Data-driven content strategies with improved ROI.'
      }
    ],
    faqs: [
      {
        question: 'How long does it take to see results?',
        answer: 'Content marketing is a long-term strategy. You may start seeing results in 3-6 months, with consistent efforts yielding exponential growth.',
      },
      {
        question: 'Do you handle content distribution?',
        answer: 'Yes, we ensure your content reaches your target audience through the right channels.',
      },
      {
        question: 'Can you help with content repurposing?',
        answer: 'Absolutely! We can repurpose blogs into videos, social media posts, or email newsletters to maximize ROI.',
      },
      {
        question: 'What metrics do you track for performance?',
        answer: 'Traffic, engagement, lead generation, conversion rates, and ROI are some of the key metrics.',
      },
    ]    
  },  
  {
    id: 'digital-pr-social-media',
    icon: Briefcase,
    title: 'Digital PR & Social Media',
    shortDescription: 'Boost your online reputation and engagement',
    fullDescription: 'We help businesses amplify their online presence through targeted digital PR campaigns and social media strategies.',
    features: [
      {
        title: 'Online Reputation Management',
        objective: 'Monitor and manage your online image to maintain credibility.',
        features: ['Reputation monitoring', 'Crisis management', 'Proactive strategies'],
        outcome: 'Improved trust and credibility for your brand.'
      },
      {
        title: 'Influencer Outreach',
        objective: 'Collaborate with industry influencers to expand your brand’s reach.',
        features: ['Influencer identification', 'Partnership strategies', 'Campaign execution'],
        outcome: 'Greater visibility and audience engagement.'
      },
      {
        title: 'Social Media Strategy',
        objective: 'Tailor campaigns for each platform to maximize engagement.',
        features: ['Platform-specific planning', 'Trend analysis', 'Content alignment'],
        outcome: 'Higher engagement and brand consistency.'
      },
      {
        title: 'Content Creation and Curation',
        objective: 'Develop engaging posts, stories, videos, and graphics.',
        features: ['Creative visuals', 'Story-driven content', 'Consistent posting'],
        outcome: 'Stronger audience connection and engagement.'
      },
      {
        title: 'Performance Monitoring',
        objective: 'Track campaign performance and refine strategies.',
        features: ['Detailed analytics', 'Engagement metrics', 'Strategy optimization'],
        outcome: 'Improved ROI and campaign effectiveness.'
      }
    ],
    faqs: [
      {
        question: 'How do Digital PR and Social Media work together?',
        answer: 'Digital PR builds your brand\'s credibility through authoritative content, while social media engages your audience directly, amplifying your message across platforms.',
      },
      {
        question: 'Can you manage all our social media accounts?',
        answer: 'Yes, we offer end-to-end management for all major social media platforms.',
      },
      {
        question: 'How do you measure success in Digital PR and Social Media campaigns?',
        answer: 'We track metrics like website traffic, engagement rates, follower growth, and conversion rates to gauge performance.',
      },
      {
        question: 'Do you offer crisis management services?',
        answer: 'Yes, we provide proactive and reactive strategies to handle PR crises effectively.',
      },
    ]    
  },
  {
    id: 'mobile-app-development',
    icon: Smartphone,
    title: 'Mobile App Development',
    shortDescription: 'Apps that empower your business on-the-go',
    fullDescription: 'Our mobile app development services deliver high-performance, feature-rich applications for Android and iOS.',
    features: [
      {
        title: 'Custom App Design',
        objective: 'Create visually appealing and functional designs tailored to your business.',
        features: ['User-centric design', 'Brand-aligned aesthetics', 'Intuitive interfaces'],
        outcome: 'Enhanced user satisfaction and engagement.'
      },
      {
        title: 'Native and Cross-Platform Apps',
        objective: 'Develop robust apps for specific platforms or cross-platform compatibility.',
        features: ['Platform-specific optimization', 'Scalability', 'Efficient development'],
        outcome: 'Seamless user experience across devices.'
      },
      {
        title: 'API Integrations',
        objective: 'Integrate APIs to enhance functionality and connectivity.',
        features: ['Third-party integrations', 'Backend connectivity', 'Custom API solutions'],
        outcome: 'Improved app functionality and user experience.'
      },
      {
        title: 'Performance Optimization',
        objective: 'Ensure the app runs smoothly and efficiently.',
        features: ['Bug fixing', 'Speed enhancement', 'Resource management'],
        outcome: 'Faster and more reliable apps.'
      },
      {
        title: 'App Store Deployment',
        objective: 'Ensure seamless app publishing on Google Play and Apple App Store.',
        features: ['App submission', 'Compliance checks', 'Post-launch support'],
        outcome: 'Successful app launch with maximum visibility.'
      }
    ],
    faqs: [
      {
        question: 'How long does it take to develop a mobile app?',
        answer: 'The timeline depends on the app\'s complexity. On average, it can take 3-6 months.',
      },
      {
        question: 'Do you provide post-launch support?',
        answer: 'Yes, we offer maintenance and updates to ensure your app stays up-to-date and functional.',
      },
      {
        question: 'Can you integrate third-party tools into the app?',
        answer: 'Absolutely! We can integrate APIs, payment gateways, analytics tools, and more.',
      },
      {
        question: 'What platforms do you develop apps for?',
        answer: 'We specialize in iOS, Android, and cross-platform app development.',
      },
    ]    
  },
  {
    id: 'api-development',
    icon: Code,
    title: 'API Development',
    shortDescription: 'Seamlessly connect systems and applications',
    fullDescription: 'Our API development services facilitate smooth communication between different software components.',
    features: [
      {
        title: 'Custom API Creation',
        objective: 'Build APIs tailored to your business requirements.',
        features: ['Custom endpoints', 'Scalable architecture', 'Business logic implementation'],
        outcome: 'Efficient and reliable API solutions.'
      },
      {
        title: 'Third-Party Integrations',
        objective: 'Connect your system with external services for enhanced functionality.',
        features: ['Payment gateways', 'Social media APIs', 'Cloud services'],
        outcome: 'Expanded platform capabilities.'
      },
      {
        title: 'API Testing and Debugging',
        objective: 'Ensure APIs work efficiently and are error-free.',
        features: ['Functional testing', 'Load testing', 'Error resolution'],
        outcome: 'Reliable and high-performing APIs.'
      },
      {
        title: 'Performance Optimization',
        objective: 'Improve API efficiency and response times.',
        features: ['Code optimization', 'Caching techniques', 'Load balancing'],
        outcome: 'Faster and more scalable API performance.'
      },
      {
        title: 'Documentation and Support',
        objective: 'Provide clear and comprehensive API documentation and ongoing support.',
        features: ['Detailed API documentation', 'Developer guides', 'Continuous assistance'],
        outcome: 'Easier integration and maintenance for developers.'
      }
    ],
    faqs: [
      {
        question: 'What is API development?',
        answer: 'API development refers to the process of creating an application programming interface (API) that allows two or more software applications to communicate and share data with each other.',
      },
      {
        question: 'Why is API security important?',
        answer: 'API security is crucial because APIs often transmit sensitive data between systems. Strong security measures, such as encryption and authentication, help protect this data from unauthorized access and cyber threats.',
      },
      {
        question: 'How long does it take to develop an API?',
        answer: 'The timeline for API development depends on the complexity of the project. A basic API might take a few weeks, while more complex integrations could take a few months.',
      },
      {
        question: 'Can you integrate third-party APIs into our existing system?',
        answer: 'Yes, we specialize in integrating third-party APIs with your existing systems to enhance functionality, reduce development time, and improve overall performance.',
      },
    ]    
  },  
  {
    id: 'link-building-services',
    icon: Link2,
    title: 'Link Building Services',
    shortDescription: 'Strengthen your online presence',
    fullDescription: 'Our link-building strategies improve your website’s domain authority and search engine ranking.',
    features: [
      {
        title: 'Manual Outreach Link Building',
        objective: 'Secure high-quality backlinks through direct outreach.',
        features: ['Targeted outreach to authoritative sites', 'Relationship building with influencers', 'Relevance-driven link acquisition'],
        outcome: 'Improved domain authority and industry connections.'
      },
      {
        title: 'Guest Blogging and Content Marketing',
        objective: 'Leverage content to earn valuable backlinks.',
        features: ['High-quality content creation', 'Placement on authoritative blogs', 'SEO-driven content strategies'],
        outcome: 'Enhanced organic traffic and visibility.'
      },
      {
        title: 'Niche Edits',
        objective: 'Add your website’s link to existing authoritative content.',
        features: ['Strategic link placement', 'High-impact indexed pages', 'Faster ranking improvements'],
        outcome: 'Quicker SEO gains from established content.'
      },
      {
        title: 'Resource Link Building',
        objective: 'Gain backlinks from curated resource pages.',
        features: ['Identify relevant resource pages', 'Pitch for inclusion', 'Focus on trusted industry websites'],
        outcome: 'High-quality backlinks and targeted traffic.'
      },
      {
        title: 'Broken Link Building',
        objective: 'Replace broken links with your content on high-authority sites.',
        features: ['Find broken links', 'Create replacement content', 'Collaborate with webmasters'],
        outcome: 'Valuable backlinks and goodwill from site owners.'
      },
      {
        title: 'Local Citations and Listings',
        objective: 'Enhance local SEO with accurate business information.',
        features: ['Directory submissions', 'Google My Business optimization', 'NAP consistency'],
        outcome: 'Improved local search rankings and visibility.'
      }
    ],
    faqs: [
      {
        question: 'What is link building?',
        answer: 'Link building is the process of acquiring hyperlinks from other websites to your own.',
      },
      {
        question: 'Why is link building important?',
        answer: 'It helps improve search engine rankings and increases referral traffic.',
      },
      {
        question: 'How long does it take to see results?',
        answer: 'Typically, you can see results within 3-6 months depending on the strategy.',
      },
      {
        question: 'Are all backlinks valuable?',
        answer: 'No, quality matters more than quantity. Links from authoritative sites are more valuable.',
      },
    ]
    
  },
  {
    id: 'seo-audit',
    icon: BarChart,
    title: 'SEO Audit',
    shortDescription: 'Analyze and improve your website’s SEO health',
    fullDescription: 'We provide in-depth SEO audits that highlight the strengths and weaknesses of your website’s SEO performance.',
    features: [
      {
        title: 'Comprehensive Site Analysis',
        objective: 'Identify technical issues impacting SEO performance.',
        features: ['Crawl errors', 'Site speed analysis', 'Mobile usability'],
        outcome: 'Better site performance and search rankings.'
      },
      {
        title: 'Keyword and Backlink Analysis',
        objective: 'Evaluate the effectiveness of current keywords and backlinks.',
        features: ['Keyword optimization opportunities', 'Backlink quality assessment', 'Competitor analysis'],
        outcome: 'Higher keyword rankings and stronger backlink profile.'
      },
      {
        title: 'On-Page and Off-Page SEO Review',
        objective: 'Enhance your site’s relevancy and authority.',
        features: ['Meta tag optimization', 'Internal linking audit', 'External linking strategies'],
        outcome: 'Improved search engine visibility and relevance.'
      },
      {
        title: 'Competitor SEO Analysis',
        objective: 'Uncover opportunities by analyzing competitors.',
        features: ['Competitor keyword research', 'Backlink comparison', 'Content gap analysis'],
        outcome: 'Stronger SEO strategies to outperform competitors.'
      },
      {
        title: 'Actionable SEO Recommendations',
        objective: 'Provide clear next steps for SEO improvement.',
        features: ['Customized SEO roadmap', 'Implementation guidelines', 'Regular progress tracking'],
        outcome: 'Continuous growth in search engine rankings.'
      }
    ],
    faqs: [
      {
        question: 'What is an SEO audit?',
        answer: 'An SEO audit is a comprehensive analysis of your website\'s performance to identify areas for improvement in search engine optimization.',
      },
      {
        question: 'Why is an SEO audit important?',
        answer: 'It helps uncover issues that may be impacting your search rankings, provides actionable insights, and ensures your SEO strategy is aligned with current best practices.',
      },
      {
        question: 'How long does an SEO audit take?',
        answer: 'The duration depends on the size and complexity of your website. Typically, an audit takes 2-5 days to complete.',
      },
      {
        question: 'What is included in an SEO audit?',
        answer: 'Our SEO audit includes technical SEO analysis, on-page optimization review, backlink quality assessment, keyword performance evaluation, and competitor analysis.',
      },
      {
        question: 'Do you provide recommendations after the audit?',
        answer: 'Yes, we provide a detailed report with prioritized recommendations to address any issues and improve your website\'s SEO performance.',
      },
      {
        question: 'How often should I conduct an SEO audit?',
        answer: 'We recommend conducting an SEO audit every 6-12 months or after significant changes to your website or Google algorithm updates.',
      },
    ]    
  },
  {
    id: 'web-hosting',
    icon: Server,
    title: 'Web Hosting',
    shortDescription: 'Reliable hosting for your website',
    fullDescription: 'We offer secure and scalable web hosting solutions tailored to your needs.',
    features: [
      {
        title: '99.9% Uptime Guarantee',
        objective: 'Ensure your website is always accessible to visitors.',
        features: ['Reliable infrastructure', 'Minimal downtime', '24/7 monitoring'],
        outcome: 'Enhanced user trust and experience.'
      },
      {
        title: 'Scalable Hosting Plans',
        objective: 'Adapt your hosting solution to your growing needs.',
        features: ['Flexible bandwidth', 'Upgradable storage', 'Customizable features'],
        outcome: 'Hosting that grows with your business.'
      },
      {
        title: '24/7 Support',
        objective: 'Receive prompt assistance whenever needed.',
        features: ['Live chat', 'Email support', 'Expert technical assistance'],
        outcome: 'Peace of mind with round-the-clock help.'
      },
      {
        title: 'Daily Backups',
        objective: 'Keep your data safe with automated backups.',
        features: ['Regular backup schedules', 'Easy restoration', 'Secure data storage'],
        outcome: 'Reliable disaster recovery options.'
      },
      {
        title: 'SSL Certification',
        objective: 'Secure your site with HTTPS.',
        features: ['Encryption of sensitive data', 'Trust signals for users', 'Improved SEO rankings'],
        outcome: 'Safer browsing and better trust for your site.'
      }
    ],
    faqs: [
      {
        question: 'What types of web hosting do you offer?',
        answer: 'We offer shared, VPS, dedicated, and cloud hosting to meet various business needs.',
      },
      {
        question: 'Is your hosting service reliable?',
        answer: 'Yes, we ensure 99.9% uptime, fast loading speeds, and robust security to keep your website running smoothly.',
      },
      {
        question: 'Do you provide customer support for hosting issues?',
        answer: 'Absolutely! We provide 24/7 customer support to resolve any hosting-related issues quickly.',
      },
      {
        question: 'Can I upgrade my hosting plan later?',
        answer: 'Yes, our hosting plans are scalable, allowing you to upgrade as your website\'s traffic and requirements grow.',
      },
    ]    
  },
  {
    id: 'logo-branding',
    icon: Palette,
    title: 'Logo & Branding',
    shortDescription: 'Build a strong brand identity',
    fullDescription: 'We create logos and branding strategies that resonate with your audience and strengthen your business identity.',
    features: [
      {
        title: 'Establishes a Strong First Impression',
        objective: 'Capture attention with a professional and cohesive brand.',
        features: ['Eye-catching logo design', 'Consistent visual branding', 'Professional look and feel'],
        outcome: 'Improved credibility and trustworthiness.'
      },
      {
        title: 'Builds Brand Recognition',
        objective: 'Create a lasting impression on customers.',
        features: ['Memorable logo', 'Unified style guide', 'Consistent use across platforms'],
        outcome: 'Easier brand recall and customer loyalty.'
      },
      {
        title: 'Differentiates Your Business',
        objective: 'Stand out in a competitive market.',
        features: ['Unique logo design', 'Clear messaging', 'Distinctive color palette'],
        outcome: 'Stronger market positioning.'
      },
      {
        title: 'Creates Emotional Connection',
        objective: 'Engage your audience through effective branding.',
        features: ['Story-driven branding', 'Relatable design', 'Thoughtful narrative'],
        outcome: 'Deeper audience connection and loyalty.'
      },
      {
        title: 'Drives Business Growth',
        objective: 'Lay the foundation for a successful business.',
        features: ['Brand strategy development', 'Market-aligned branding', 'Customer-focused approach'],
        outcome: 'Sustainable growth and competitive advantage.'
      }
    ],
    faqs: [
      {
        question: 'Why is branding important?',
        answer: 'Branding helps differentiate your business from competitors, builds trust with your audience, and establishes a strong and memorable identity.',
      },
      {
        question: 'Do you offer custom logo designs?',
        answer: 'Yes, we create custom logo designs that reflect your brand\'s personality and values, ensuring a unique and professional look.',
      },
      {
        question: 'Can you help refresh my existing brand?',
        answer: 'Absolutely! We offer rebranding services to modernize your brand, align it with your goals, and enhance its impact on your audience.',
      },
      {
        question: 'What is included in your branding packages?',
        answer: 'Our branding packages include logo design, brand guidelines, color palettes, typography, and marketing materials tailored to your needs.',
      },
    ]    
  }  
];
