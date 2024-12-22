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
    icon: '/assets/icons/Bilboard.png',
    title: 'Website Development',
    image: `url('/assets/images/hosting_provider.png')`,
    shortDescription: 'Groww Digitally: Your Partner in Professional Website Development',
    fullDescription: 'In today’s fast-paced digital world, a well-designed website is more than just an online presence—it’s the face of your business. At Groww Digitally, we specialize in providing cutting-edge Website Development services that help businesses create a powerful and lasting impact online. From startups to large enterprises, we deliver customized web solutions that drive results.',
    features: [
      {
        title: 'Custom website design',
        objective: 'Build unique, tailor-made websites from scratch.',
        image: '/assets/images/website_related.png',
        features: ['Fully customized design', 'Intuitive navigation', 'Dynamic functionality'],
        outcome: 'A website that stands out and perfectly matches your brand’s goals.'
      },
      {
        title: 'E-Commerce Development',
        objective: 'Create robust online stores that convert visitors into buyers.',
        image: '/assets/images/ecommerce_web_design.jpg',
        features: ['Secure payment gateways', 'Product catalogs', 'Customer management tools'],
        outcome: 'Higher sales and a seamless shopping experience for your customers.'
      },
      {
        title: 'CMS-Based Development',
        objective: 'Provide websites powered by content management systems like WordPress, Joomla, or Drupal.',
        image: '/assets/images/crm.png',
        features: ['Easy-to-use interfaces', 'Flexible content updates', 'Scalable design'],
        outcome: 'A website you can easily manage, update, and grow.'
      },
      {
        title: 'Responsive Design & Development',
        objective: 'Ensure your website looks perfect on all devices.',
        image: '/assets/images/different_platform.png',
        features: ['Mobile-friendly designs', 'Cross-browser compatibility', 'Dynamic layouts'],
        outcome: 'Increased engagement across desktops, tablets, and smartphones.'
      },
      {
        title: 'Website Redesign Services',
        objective: 'Revamp outdated websites to meet modern standards.',
        image: '/assets/images/web_developmevt.png',
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
    icon: '/assets/icons/Eye.png',
    title: 'SEO Services',
    image: `url('/assets/images/seo_illustrator.png')`,
    shortDescription: 'Groww Digitally: Expert SEO Services to Dominate Search Rankings',
    fullDescription: `In the competitive digital landscape, being found online is critical for success. At Groww Digitally, our professional SEO Services are designed to boost your online visibility, drive qualified traffic, and maximize your ROI. Whether you're a small business or a large enterprise, we create tailored strategies to help you rank higher and grow faster.`,
    features: [
      {
        title: 'On-Page SEO',
        objective: 'Optimize individual pages to improve search engine rankings.',
        image: '/assets/images/seo_illustrator.png',
        features: ['Keyword research', 'Meta tag optimization', 'Internal linking', 'Content structuring'],
        outcome: 'Enhanced visibility and better user engagement.'
      },
      {
        title: 'Off-Page SEO',
        objective: 'Build authority and trust through high-quality backlinks.',
        image: '/assets/images/modern__seo_illustration.png',
        features: ['Link building', 'Social signals', 'Outreach campaigns'],
        outcome: 'Improved domain authority and stronger search engine presence.'
      },
      {
        title: 'Technical SEO',
        objective: 'Ensure your website meets technical requirements for search engines.',
        image: '/assets/images/seo_analysis.png',
        features: ['Site speed optimization', 'Mobile-friendliness', 'Schema markup', 'Crawlability enhancements'],
        outcome: 'Faster load times, higher mobile rankings, and improved user experience.'
      },
      {
        title: 'Local SEO',
        objective: 'Boost visibility in local search results for businesses targeting a geographic audience.',
        image: '/assets/images/human_resource.jpg',
        features: ['Google Business Profile optimization', 'Local citations', 'Geo-targeted content'],
        outcome: 'Increased foot traffic and local lead generation.'
      },
      {
        title: 'E-Commerce SEO',
        objective: 'Drive sales through better search visibility for product pages.',
        image: '/assets/images/ecommerce_website.png',
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
    icon: '/assets/icons/Growth.png',
    title: 'Custom Software Development',
    image: `url('/assets/images/coding_activity_illustration.png')`,
    shortDescription: 'Tailored software solutions for your business needs',
    fullDescription: `In today's competitive world, one-size-fits-all software often falls short of meeting unique business needs. At Groww Digitally, we specialize in Custom Software Development, creating solutions tailored to your specific requirements. Our custom software empowers businesses to enhance efficiency, streamline operations, and achieve long-term growth.`,
    features: [
      {
        title: 'Business Software Development',
        objective: 'Optimize day-to-day operations with software tailored to your organization.',
        image: '/assets/images/software_development.png',
        features: ['Inventory management', 'ERP systems', 'CRM tools'],
        outcome: 'Streamlined workflows and increased operational efficiency.'
      },
      {
        title: 'Mobile App Development',
        objective: 'Create powerful mobile applications for Android, iOS, or cross-platform solutions.',
        image: '/assets/images/app_development_vector.png',
        features: ['E-commerce apps', 'On-demand services', 'Customer engagement platforms'],
        outcome: 'Enhanced user experience and wider audience reach.'
      },
      {
        title: 'Enterprise Software Solutions',
        objective: 'Solve complex enterprise challenges with robust, secure, and scalable solutions.',
        image: '/assets/images/web_dev_work_with_coding.jpg',
        features: ['Automation tools', 'Data analytics platforms', 'Custom reporting systems'],
        outcome: 'Improved productivity and better business decisions.'
      },
      {
        title: 'SaaS Development',
        objective: 'Build scalable cloud-based solutions accessible from anywhere.',
        image: '/assets/images/business_illustration.png',
        features: ['Subscription-based platforms', 'Project management tools', 'Collaborative software'],
        outcome: 'Flexible and cost-effective business solutions.'
      },
      {
        title: 'API Integration and Development',
        objective: 'Seamlessly connect software systems for improved functionality.',
        image: '/assets/images/coding_activity_illustration.png',
        features: ['Payment gateways', 'Third-party integrations', 'Social media platforms'],
        outcome: 'Enhanced system capabilities and data flow.'
      },
      {
        title: 'Legacy Software Modernization',
        objective: 'Upgrade outdated software to improve performance, security, and usability.',
        image: '/assets/images/editing_code_behind_social_media.png',
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
    icon: '/assets/icons/Bill.png',
    title: 'ERP Solutions',
    image: `url('/assets/images/crm.png')`,
    shortDescription: 'Groww Digitally: Advanced ERP Solutions for Seamless Business Management',
    fullDescription: 'Managing complex business operations can be challenging without the right tools. At Groww Digitally, we empower organizations with tailored ERP Solutions designed to streamline workflows, enhance collaboration, and optimize decision-making. Whether you’re a small business or a large enterprise, our ERP solutions help align your processes for peak efficiency.',
    features: [
      {
        title: 'Financial Management',
        objective: 'Centralized accounting and financial planning.',
        image: '/assets/images/business_illustration.png',
        features: ['Real-time insights', 'Expense tracking', 'Budgeting tools'],
        outcome: 'Improved financial control and strategic planning.'
      },
      {
        title: 'Supply Chain Management',
        objective: 'Optimize inventory control and logistics.',
        image: '/assets/images/supply_chain_management_and_distribution.png',
        features: ['Inventory tracking', 'Order management', 'Cost efficiency tools'],
        outcome: 'Faster delivery and reduced operational costs.'
      },
      {
        title: 'Customer Relationship Management (CRM)',
        objective: 'Manage customer data and interactions seamlessly.',
        image: '/assets/images/crm.png',
        features: ['Customer data tracking', 'Sales automation', 'Personalized solutions'],
        outcome: 'Enhanced customer satisfaction and loyalty.'
      },
      {
        title: 'Human Resource Management (HRM)',
        objective: 'Streamline payroll, recruitment, and employee performance tracking.',
        image: '/assets/images/human_resource.jpg',
        features: ['Workforce planning', 'Compliance management', 'Employee self-service portals'],
        outcome: 'Efficient HR processes and employee satisfaction.'
      },
      {
        title: 'Manufacturing and Production Planning',
        objective: 'Automate production schedules and monitor efficiency.',
        image: '/assets/images/web_developmevt.png',
        features: ['Resource allocation', 'Waste reduction tools', 'Efficiency tracking'],
        outcome: 'Reduced waste and maximized production output.'
      },
      {
        title: 'Data Analytics and Reporting',
        objective: 'Comprehensive dashboards and customizable reports.',
        image: '/assets/images/analytics_report.png',
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
    icon: '/assets/icons/Ecommerce.png',
    title: 'Ecommerce Website Development',
    image: `url('/assets/images/ecommerce_website.png')`,
    shortDescription: 'Groww Digitally: Transform Your Business with Ecommerce Website Development',
    fullDescription: 'In the fast-evolving digital landscape, having a robust and user-friendly ecommerce platform is essential for businesses of all sizes. At Groww Digitally, we specialize in Ecommerce Website Development, offering tailored solutions to help you sell smarter, faster, and globally.',
    features: [
      {
        title: 'Custom Ecommerce Website Design',
        objective: 'Unique, mobile-responsive designs that align with your brand identity.',
        image: '/assets/images/ecommerce_website.png',
        features: ['Engaging UI/UX', 'Brand-focused design', 'Mobile-first approach'],
        outcome: 'Optimized user engagement and conversions.'
      },
      {
        title: 'Platform Integration',
        objective: 'Expertise in platforms like Shopify, WooCommerce, Magento, and BigCommerce.',
        image: '/assets/images/ecommerce_web_design.jpg',
        features: ['CRM integration', 'ERP systems', 'Inventory management'],
        outcome: 'Seamless workflows and increased productivity.'
      },
      {
        title: 'Payment Gateway Solutions',
        objective: 'Support for multiple payment gateways like PayPal, Stripe, and more.',
        image: '/assets/images/cyber_security_development.png',
        features: ['Secure transactions', 'PCI compliance', 'Multiple currency support'],
        outcome: 'Improved user trust and global reach.'
      },
      {
        title: 'Product Management Systems',
        objective: 'Easy-to-use dashboards for managing product catalogs.',
        image: '/assets/images/management_evaluation.png',
        features: ['Bulk uploads', 'Inventory tracking', 'Dynamic pricing'],
        outcome: 'Efficient catalog management and operational ease.'
      },
      {
        title: 'SEO and Marketing Integration',
        objective: 'Boost online visibility and customer engagement.',
        image: '/assets/images/modern__seo_illustration.png',
        features: ['SEO tools', 'Abandoned cart recovery', 'Email marketing integration'],
        outcome: 'Increased traffic and higher conversions.'
      },
      {
        title: 'Advanced Features',
        objective: 'Incorporate features that enhance customer experience.',
        image: '/assets/images/marketing_optimizing.png',
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
    icon: '/assets/icons/Schedule.png',
    title: 'Social Media Management',
    image: `url('/assets/images/social_media.png')`,
    shortDescription: 'Groww Digitally: Transforming Brands Through Strategic Social Media Management',
    fullDescription: 'In today’s competitive digital space, effective Social Media Management is more than just posting updates; it’s about building a brand that resonates with your audience. At Groww Digitally, we provide comprehensive, result-driven social media solutions tailored to amplify your brand’s reach, engagement, and growth.',
    features: [
      {
        title: 'Social Media Strategy Development',
        objective: 'In-depth analysis of your audience and competitors to create tailored strategies aligned with your business goals.',
        image: '/assets/images/social_media_market.png',
        features: ['Audience analysis', 'Competitor research', 'Goal-driven strategy'],
        outcome: 'Enhanced engagement and brand presence.'
      },
      {
        title: 'Content Creation and Curation',
        objective: 'Crafting high-quality posts including text, images, videos, and infographics.',
        image: '/assets/images/social_media.jpg',
        features: ['Consistent storytelling', 'Platform-specific formats', 'Creative visuals'],
        outcome: 'Increased follower engagement and retention.'
      },
      {
        title: 'Community Management',
        objective: 'Active engagement with your audience through comments, messages, and reviews.',
        image: '/assets/images/social_media_marketing.png',
        features: ['Timely responses', 'Building community trust', 'User interaction'],
        outcome: 'A loyal and engaged follower base.'
      },
      {
        title: 'Paid Social Media Advertising',
        objective: 'Data-driven ad campaigns on platforms like Facebook, Instagram, and LinkedIn.',
        image: '/assets/images/social_media_influners.png',
        features: ['Targeted campaigns', 'A/B testing', 'Retargeting strategies'],
        outcome: 'Maximized ROI from advertising efforts.'
      },
      {
        title: 'Analytics and Reporting',
        objective: 'Regular performance insights to track growth and refine strategies.',
        image: '/assets/images/social_media_funnel.png',
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
    icon: '/assets/icons/marketingNetwork.png',
    title: 'Lead Generation',
    image: `url('/assets/images/marketing_optimizing.png')`,
    shortDescription: 'Groww Digitally: Empowering Businesses with Effective Lead Generation Strategies',
    fullDescription: 'In the digital age, Lead Generation is the cornerstone of business growth. At Groww Digitally, we specialize in creating tailored lead generation strategies that help businesses attract, engage, and convert their ideal customers. Our data-driven approach ensures consistent and high-quality leads that drive revenue and growth.',
    features: [
      {
        title: 'Inbound Lead Generation',
        objective: 'Engage audiences with blogs, videos, and SEO-optimized content.',
        image: '/assets/images/modern__social_media_illustration.png',
        features: ['Content marketing', 'Social media campaigns', 'SEO optimization'],
        outcome: 'Increased organic leads and engagement.'
      },
      {
        title: 'Outbound Lead Generation',
        objective: 'Strategic communication to capture and nurture leads.',
        image: '/assets/images/customer_sales_funnel.png',
        features: ['Email marketing', 'Cold outreach', 'Telemarketing'],
        outcome: 'Expanded reach and higher lead conversion.'
      },
      {
        title: 'Paid Advertising for Lead Generation',
        objective: 'Drive targeted traffic through Google Ads and Social Media Ads.',
        image: '/assets/images/social_media_strategy.png',
        features: ['Campaign planning', 'Real-time targeting', 'Budget optimization'],
        outcome: 'Efficient lead acquisition with measurable results.'
      },
      {
        title: 'CRM and Lead Management',
        objective: 'Streamline lead management with CRM integration and nurturing strategies.',
        image: '/assets/images/link_building.png',
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
    icon: '/assets/icons/Marketing.png',
    title: 'Content Marketing',
    image: `url('/assets/images/content_manager.png')`,
    shortDescription: 'Content Marketing Services | Groww Digitally',
    fullDescription: 'In today’s digital-first world, Content Marketing is the cornerstone of any successful online presence. It’s not just about creating content but crafting strategies that engage, inform, and convert. At Groww Digitally, we specialize in delivering impactful content marketing solutions that help businesses drive traffic, build authority, and achieve measurable growth.',
    features: [
      {
        title: 'Content Strategy Development',
        objective: 'Analyze audience, competitors, and goals to create a roadmap.',
        image: '/assets/images/content_marketing.png',
        features: ['Comprehensive research', 'Distribution strategy', 'Promotional tactics'],
        outcome: 'Effective content plans aligned with business goals.'
      },
      {
        title: 'SEO Content Creation',
        objective: 'Develop blog posts, articles, and website copy optimized for search engines.',
        image: '/assets/images/modern__seo_illustration.png',
        features: ['Keyword research', 'Search-friendly writing', 'Engaging formats'],
        outcome: 'Improved search rankings and visibility.'
      },
      {
        title: 'Social Media Content',
        objective: 'Engaging posts optimized for each platform to grow your audience.',
        image: '/assets/images/social_media.jpg',
        features: ['Reels and videos', 'Carousel posts', 'Platform-specific designs'],
        outcome: 'Higher audience engagement and growth.'
      },
      {
        title: 'Video Marketing',
        objective: 'Craft compelling videos for enhanced brand storytelling.',
        image: '/assets/images/video_marketing.png',
        features: ['Script writing', 'Editing and production', 'Multi-platform distribution'],
        outcome: 'Increased engagement and brand awareness.'
      },
      {
        title: 'Analytics and Reporting',
        objective: 'Measure content performance and adjust strategies for continuous improvement.',
        image: '/assets/images/content_marketing_devops.png',
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
    icon: '/assets/icons/Like.png',
    title: 'Digital PR & Social Media',
    image: `url('/assets/images/social_media_strategy.png')`,
    shortDescription: 'Digital PR and Social Media: Elevate Your Brand with Groww Digitally',
    fullDescription: 'In today’s interconnected world, a strong digital presence is essential for business success. At Groww Digitally, we offer comprehensive Digital PR and Social Media services that help brands build credibility, engage audiences, and achieve measurable results.',
    features: [
      {
        title: 'Online Reputation Management',
        objective: 'Monitor and manage your online image to maintain credibility.',
        image: '/assets/images/multitasking.svg',
        features: ['Reputation monitoring', 'Crisis management', 'Proactive strategies'],
        outcome: 'Improved trust and credibility for your brand.'
      },
      {
        title: 'Influencer Outreach',
        objective: 'Collaborate with industry influencers to expand your brand’s reach.',
        image: '/assets/images/brand_management.png',
        features: ['Influencer identification', 'Partnership strategies', 'Campaign execution'],
        outcome: 'Greater visibility and audience engagement.'
      },
      {
        title: 'Social Media Strategy',
        objective: 'Tailor campaigns for each platform to maximize engagement.',
        image: '/assets/images/branding.png',
        features: ['Platform-specific planning', 'Trend analysis', 'Content alignment'],
        outcome: 'Higher engagement and brand consistency.'
      },
      {
        title: 'Content Creation and Curation',
        objective: 'Develop engaging posts, stories, videos, and graphics.',
        image: '/assets/images/social_media_influners.png',
        features: ['Creative visuals', 'Story-driven content', 'Consistent posting'],
        outcome: 'Stronger audience connection and engagement.'
      },
      {
        title: 'Performance Monitoring',
        objective: 'Track campaign performance and refine strategies.',
        image: '/assets/images/marketing_optimizing.png',
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
    icon: '/assets/icons/SmartponeDiscount.png',
    title: 'Mobile App Development',
    image: `url('/assets/images/app_development_vector.png')`,
    shortDescription: 'Mobile App Development Services | Groww Digitally',
    fullDescription: 'In the digital age, mobile applications have become an essential tool for businesses to connect with customers, streamline operations, and enhance user experiences. At Groww Digitally, we specialize in creating tailored Mobile App Development solutions that bring your vision to life while ensuring functionality, scalability, and innovation.',
    features: [
      {
        title: 'Custom App Design',
        objective: 'Create visually appealing and functional designs tailored to your business.',
        image: '/assets/images/app_development_with_ux_slash_ui_design.png',
        features: ['User-centric design', 'Brand-aligned aesthetics', 'Intuitive interfaces'],
        outcome: 'Enhanced user satisfaction and engagement.'
      },
      {
        title: 'Native and Cross-Platform Apps',
        objective: 'Develop robust apps for specific platforms or cross-platform compatibility.',
        image: '/assets/images/mobile_payment.png',
        features: ['Platform-specific optimization', 'Scalability', 'Efficient development'],
        outcome: 'Seamless user experience across devices.'
      },
      {
        title: 'API Integrations',
        objective: 'Integrate APIs to enhance functionality and connectivity.',
        image: '/assets/images/app_development_vector.png',
        features: ['Third-party integrations', 'Backend connectivity', 'Custom API solutions'],
        outcome: 'Improved app functionality and user experience.'
      },
      {
        title: 'Performance Optimization',
        objective: 'Ensure the app runs smoothly and efficiently.',
        image: '/assets/images/coding_activity_illustration.png',
        features: ['Bug fixing', 'Speed enhancement', 'Resource management'],
        outcome: 'Faster and more reliable apps.'
      },
      {
        title: 'App Store Deployment',
        objective: 'Ensure seamless app publishing on Google Play and Apple App Store.',
        image: '/assets/images/mobile_app.png',
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
    icon: '/assets/icons/CopyWriting.png',
    title: 'API Development',
    image: `url('/assets/images/software_development.png')`,
    shortDescription: 'API Development Services | Groww Digitally',
    fullDescription: `At Groww Digitally, we understand that in today’s technology-driven world, seamless communication between applications is essential for business success. Our API Development services empower businesses to enhance their digital infrastructure, integrate systems, and create more efficient and scalable platforms. Whether you're looking to connect your software to third-party applications or develop custom APIs for your internal systems, we have the expertise to deliver robust, secure, and high-performance solutions.`,
    features: [
      {
        title: 'Custom API Creation',
        objective: 'Build APIs tailored to your business requirements.',
        image: '/assets/images/editing_code_behind_social_media.png',
        features: ['Custom endpoints', 'Scalable architecture', 'Business logic implementation'],
        outcome: 'Efficient and reliable API solutions.'
      },
      {
        title: 'Third-Party Integrations',
        objective: 'Connect your system with external services for enhanced functionality.',
        image: '/assets/images/app_development_vector.png',
        features: ['Payment gateways', 'Social media APIs', 'Cloud services'],
        outcome: 'Expanded platform capabilities.'
      },
      {
        title: 'API Testing and Debugging',
        objective: 'Ensure APIs work efficiently and are error-free.',
        image: '/assets/images/web_dev_work_with_coding.jpg',
        features: ['Functional testing', 'Load testing', 'Error resolution'],
        outcome: 'Reliable and high-performing APIs.'
      },
      {
        title: 'Performance Optimization',
        objective: 'Improve API efficiency and response times.',
        image: '/assets/images/web_performance.png',
        features: ['Code optimization', 'Caching techniques', 'Load balancing'],
        outcome: 'Faster and more scalable API performance.'
      },
      {
        title: 'Documentation and Support',
        objective: 'Provide clear and comprehensive API documentation and ongoing support.',
        image: '/assets/images/hosting_provider.png',
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
    icon: '/assets/icons/marketingNetwork.png',
    title: 'Link Building Services',
    image: `url('/assets/images/link_building.png')`,
    shortDescription: 'Link Building Services | Groww Digitally',
    fullDescription: 'In the competitive world of digital marketing, Link Building remains one of the most effective strategies to enhance your website’s visibility, authority, and search engine rankings. At Groww Digitally, we provide Link Building Services designed to help businesses gain high-quality backlinks from authoritative websites, boosting their SEO performance and driving more organic traffic.',
    features: [
      {
        title: 'Manual Outreach Link Building',
        objective: 'Secure high-quality backlinks through direct outreach.',
        image: '/assets/images/link_building.png',
        features: ['Targeted outreach to authoritative sites', 'Relationship building with influencers', 'Relevance-driven link acquisition'],
        outcome: 'Improved domain authority and industry connections.'
      },
      {
        title: 'Guest Blogging and Content Marketing',
        objective: 'Leverage content to earn valuable backlinks.',
        image: '/assets/images/social_media_influners.png',
        features: ['High-quality content creation', 'Placement on authoritative blogs', 'SEO-driven content strategies'],
        outcome: 'Enhanced organic traffic and visibility.'
      },
      {
        title: 'Niche Edits',
        objective: 'Add your website’s link to existing authoritative content.',
        image: '/assets/images/content_marketing_concept.svg',
        features: ['Strategic link placement', 'High-impact indexed pages', 'Faster ranking improvements'],
        outcome: 'Quicker SEO gains from established content.'
      },
      {
        title: 'Resource Link Building',
        objective: 'Gain backlinks from curated resource pages.',
        image: '/assets/images/content_marketing_png.jpg',
        features: ['Identify relevant resource pages', 'Pitch for inclusion', 'Focus on trusted industry websites'],
        outcome: 'High-quality backlinks and targeted traffic.'
      },
      {
        title: 'Broken Link Building',
        objective: 'Replace broken links with your content on high-authority sites.',
        image: '/assets/images/link_building.svg',
        features: ['Find broken links', 'Create replacement content', 'Collaborate with webmasters'],
        outcome: 'Valuable backlinks and goodwill from site owners.'
      },
      {
        title: 'Local Citations and Listings',
        objective: 'Enhance local SEO with accurate business information.',
        image: '/assets/images/social_media_funnel_red.png',
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
    icon: '/assets/icons/Diagram.png',
    title: 'SEO Audit',
    image: `url('/assets/images/seo_website_optimization.png')`,
    shortDescription: 'Website SEO Audit Services | Groww Digitally',
    fullDescription: 'In today’s digital landscape, having a website that performs well in search engines is essential for success. A Website SEO Audit is the first step towards improving your website’s search engine visibility, enhancing its performance, and ensuring it is optimized for maximum results. At Groww Digitally, we provide comprehensive Website SEO Audit services that identify key areas for improvement and set the foundation for a data-driven, long-term SEO strategy.',
    features: [
      {
        title: 'Comprehensive Site Analysis',
        objective: 'Identify technical issues impacting SEO performance.',
        image: '/assets/images/website_related.png',
        features: ['Crawl errors', 'Site speed analysis', 'Mobile usability'],
        outcome: 'Better site performance and search rankings.'
      },
      {
        title: 'Keyword and Backlink Analysis',
        objective: 'Evaluate the effectiveness of current keywords and backlinks.',
        image: '/assets/images/content_marketing.png',
        features: ['Keyword optimization opportunities', 'Backlink quality assessment', 'Competitor analysis'],
        outcome: 'Higher keyword rankings and stronger backlink profile.'
      },
      {
        title: 'On-Page and Off-Page SEO Review',
        objective: 'Enhance your site’s relevancy and authority.',
        image: '/assets/images/seo_analysis.png',
        features: ['Meta tag optimization', 'Internal linking audit', 'External linking strategies'],
        outcome: 'Improved search engine visibility and relevance.'
      },
      {
        title: 'Competitor SEO Analysis',
        objective: 'Uncover opportunities by analyzing competitors.',
        image: '/assets/images/sales_performance.png',
        features: ['Competitor keyword research', 'Backlink comparison', 'Content gap analysis'],
        outcome: 'Stronger SEO strategies to outperform competitors.'
      },
      {
        title: 'Actionable SEO Recommendations',
        objective: 'Provide clear next steps for SEO improvement.',
        image: '/assets/images/modern__seo_illustration.png',
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
    icon: '/assets/icons/Globe.png',
    title: 'Web Hosting',
    image: `url('/assets/images/cloud_server_web_hosting.png')`,
    shortDescription: 'Reliable hosting for your website | Groww Digitally',
    fullDescription: 'In the digital age, mobile applications have become an essential tool for businesses to connect with customers, streamline operations, and enhance user experiences. At Groww Digitally, we specialize in creating tailored Mobile App Development solutions that bring your vision to life while ensuring functionality, scalability, and innovation.',
    features: [
      {
        title: '99.9% Uptime Guarantee',
        objective: 'Ensure your website is always accessible to visitors.',
        image: '/assets/images/server_monitoring.png',
        features: ['Reliable infrastructure', 'Minimal downtime', '24/7 monitoring'],
        outcome: 'Enhanced user trust and experience.'
      },
      {
        title: 'Scalable Hosting Plans',
        objective: 'Adapt your hosting solution to your growing needs.',
        image: '/assets/images/server_management.png',
        features: ['Flexible bandwidth', 'Upgradable storage', 'Customizable features'],
        outcome: 'Hosting that grows with your business.'
      },
      {
        title: '24/7 Support',
        objective: 'Receive prompt assistance whenever needed.',
        image: '/assets/images/call_center_online.png',
        features: ['Live chat', 'Email support', 'Expert technical assistance'],
        outcome: 'Peace of mind with round-the-clock help.'
      },
      {
        title: 'Daily Backups',
        objective: 'Keep your data safe with automated backups.',
        image: '/assets/images/plan_your_startup.png',
        features: ['Regular backup schedules', 'Easy restoration', 'Secure data storage'],
        outcome: 'Reliable disaster recovery options.'
      },
      {
        title: 'SSL Certification',
        objective: 'Secure your site with HTTPS.',
        image: '/assets/images/cloud_security.png',
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
    icon: '/assets/icons/World.png',
    title: 'Logo & Branding',
    image: `url('/assets/images/branding.png')`,
    shortDescription: 'Logo and Branding Services | Groww Digitally',
    fullDescription: 'In today’s competitive digital world, a well-crafted logo and strong brand identity are crucial for standing out and making a lasting impression. Logo and branding are more than just visual elements; they represent your company’s values, mission, and promise to your audience. At Groww Digitally, we specialize in creating memorable logos and cohesive branding strategies that resonate with your target audience and help your business grow.',
    features: [
      {
        title: 'Establishes a Strong First Impression',
        objective: 'Capture attention with a professional and cohesive brand.',
        image: '/assets/images/business_development.png',
        features: ['Eye-catching logo design', 'Consistent visual branding', 'Professional look and feel'],
        outcome: 'Improved credibility and trustworthiness.'
      },
      {
        title: 'Builds Brand Recognition',
        objective: 'Create a lasting impression on customers.',
        image: '/assets/images/building_brand.png',
        features: ['Memorable logo', 'Unified style guide', 'Consistent use across platforms'],
        outcome: 'Easier brand recall and customer loyalty.'
      },
      {
        title: 'Differentiates Your Business',
        objective: 'Stand out in a competitive market.',
        image: '/assets/images/brand_management.png',
        features: ['Unique logo design', 'Clear messaging', 'Distinctive color palette'],
        outcome: 'Stronger market positioning.'
      },
      {
        title: 'Creates Emotional Connection',
        objective: 'Engage your audience through effective branding.',
        image: '/assets/images/logo_creation.png',
        features: ['Story-driven branding', 'Relatable design', 'Thoughtful narrative'],
        outcome: 'Deeper audience connection and loyalty.'
      },
      {
        title: 'Drives Business Growth',
        objective: 'Lay the foundation for a successful business.',
        image: '/assets/images/business_growth.svg',
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
