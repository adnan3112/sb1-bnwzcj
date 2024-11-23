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
      'Custom website design',
      'Responsive development',
      'SEO-friendly architecture',
      'E-commerce integration',
      'Maintenance and support'
    ]
  },
  {
    id: 'seo-services',
    icon: Search,
    title: 'SEO Services',
    shortDescription: 'Improve your search engine visibility',
    fullDescription: 'Our SEO services help your website rank higher on search engines, attract organic traffic, and increase your online presence.',
    features: [
      'On-page SEO optimization',
      'Off-page SEO strategies',
      'Technical SEO audits',
      'Keyword research and strategy',
      'SEO reporting and analytics'
    ]
  },
  {
    id: 'custom-software',
    icon: Code,
    title: 'Custom Software Development',
    shortDescription: 'Tailored software solutions for your business needs',
    fullDescription: 'We create custom software solutions that perfectly align with your business processes and objectives. Our experienced developers use cutting-edge technologies to build scalable, secure, and efficient applications.',
    features: [
      'Requirement analysis and planning',
      'Custom application development',
      'Quality assurance and testing',
      'Deployment and maintenance',
      'Ongoing support and updates'
    ]
  },
  {
    id: 'erp-solutions',
    icon: Database,
    title: 'ERP Solutions',
    shortDescription: 'Streamline and integrate your business processes',
    fullDescription: 'Our ERP solutions help businesses automate and integrate key functions such as inventory, accounting, HR, and more, enabling efficient workflows and data-driven decisions.',
    features: [
      'Custom ERP development',
      'Inventory management',
      'Accounting and finance modules',
      'HR and payroll automation',
      'Real-time reporting and analytics',
      'CRM and sales integration',
      'Mobile access to ERP systems',
      'Ongoing support and updates'
    ]
  },
  {
    id: 'ecommerce-development',
    icon: Globe,
    title: 'Ecommerce Website Development',
    shortDescription: 'Scalable solutions for online businesses',
    fullDescription: 'We design and develop powerful e-commerce platforms that offer seamless shopping experiences and drive sales.',
    features: [
      'Custom e-commerce platforms',
      'Payment gateway integration',
      'Inventory management',
      'Mobile-friendly design',
      'SEO optimization'
    ]
  },
  {
    id: 'social-media-management',
    icon: Search,
    title: 'Social Media Management',
    shortDescription: 'Engage your audience effectively',
    fullDescription: 'We manage your social media profiles to ensure consistent, high-quality engagement with your audience.',
    features: [
      'Social media strategy',
      'Content scheduling',
      'Community engagement',
      'Ad campaign management',
      'Performance analytics'
    ]
  },
  {
    id: 'lead-generation',
    icon: Megaphone,
    title: 'Lead Generation',
    shortDescription: 'Capture and nurture potential customers',
    fullDescription: 'We implement proven strategies to attract and convert leads, ensuring a steady flow of potential customers for your business.',
    features: [
      'Targeted lead campaigns',
      'Email and social media strategies',
      'Lead scoring and nurturing',
      'Analytics and reporting',
      'CRM integration'
    ]
  },
  {
    id: 'content-marketing',
    icon: FileText,
    title: 'Content Marketing',
    shortDescription: 'Content that resonates with your audience',
    fullDescription: 'Our content marketing services focus on creating valuable content that attracts, engages, and converts customers.',
    features: [
      'Content strategy development',
      'Blog and article creation',
      'Video marketing',
      'Infographics and visuals',
      'Performance analysis'
    ]
  },
  {
    id: 'digital-pr-social-media',
    icon: Briefcase,
    title: 'Digital PR & Social Media',
    shortDescription: 'Boost your online reputation and engagement',
    fullDescription: 'We help businesses amplify their online presence through targeted digital PR campaigns and social media strategies.',
    features: [
      'Online reputation management',
      'Influencer outreach',
      'Social media strategy',
      'Content creation and curation',
      'Performance monitoring'
    ]
  },
  {
    id: 'mobile-app-development',
    icon: Smartphone,
    title: 'Mobile App Development',
    shortDescription: 'Apps that empower your business on-the-go',
    fullDescription: 'Our mobile app development services deliver high-performance, feature-rich applications for Android and iOS.',
    features: [
      'Custom app design',
      'Native and cross-platform apps',
      'API integrations',
      'Performance optimization',
      'App store deployment'
    ]
  },
  {
    id: 'api-development',
    icon: Code,
    title: 'API Development',
    shortDescription: 'Seamlessly connect systems and applications',
    fullDescription: 'Our API development services facilitate smooth communication between different software components.',
    features: [
      'Custom API creation',
      'Third-party integrations',
      'API testing and debugging',
      'Performance optimization',
      'Documentation and support'
    ]
  },
  {
    id: 'link-building-services',
    icon: Link2,
    title: 'Link Building Services',
    shortDescription: 'Strengthen your online presence',
    fullDescription: 'Our link-building strategies improve your website’s domain authority and search engine ranking.',
    features: [
      'High-quality backlinks',
      'Guest posting',
      'Competitor analysis',
      'Content promotion',
      'SEO performance tracking'
    ]
  },
  {
    id: 'seo-audit',
    icon: BarChart,
    title: 'SEO Audit',
    shortDescription: 'Analyze and improve your website’s SEO health',
    fullDescription: 'We provide in-depth SEO audits that highlight the strengths and weaknesses of your website’s SEO performance.',
    features: [
      'Comprehensive site analysis',
      'Keyword and backlink analysis',
      'On-page and off-page SEO review',
      'Competitor SEO analysis',
      'Actionable SEO recommendations'
    ]
  },
  {
    id: 'local-seo',
    icon: MapPin,
    title: 'Local SEO',
    shortDescription: 'Increase your visibility in local searches',
    fullDescription: 'We optimize your website and content to improve local search rankings and help you connect with nearby customers.',
    features: [
      'Google My Business optimization',
      'Local keyword targeting',
      'Local backlinks and citations',
      'NAP consistency',
      'Location-based content creation'
    ]
  },
  {
    id: 'web-hosting',
    icon: Server,
    title: 'Web Hosting',
    shortDescription: 'Reliable hosting for your website',
    fullDescription: 'We offer secure and scalable web hosting solutions tailored to your needs.',
    features: [
      '99.9% uptime guarantee',
      'Scalable hosting plans',
      '24/7 support',
      'Daily backups',
      'SSL certification'
    ]
  },
  {
    id: 'logo-branding',
    icon: Palette,
    title: 'Logo & Branding',
    shortDescription: 'Build a strong brand identity',
    fullDescription: 'We create logos and branding strategies that resonate with your audience and strengthen your business identity.',
    features: [
      'Logo design',
      'Brand style guides',
      'Marketing materials',
      'Color palette creation',
      'Brand messaging'
    ]
  }
];
