export const siteConfig = {
	name: 'Collin Soik',
	description:
		'Passionate engineer who loves to build things. From FPGA systems and embedded devices to full-stack applications and enterprise solutions.',
	mainNav: [
		{
			title: 'Home',
			href: '/',
		},
		{
			title: 'Projects',
			href: '/projects',
		},
		{
			title: 'Experience',
			href: '/experience',
		},
		{
			title: 'Skills',
			href: '/skills',
		},
		{
			title: 'Contact',
			href: '/contact',
		},
	],
	links: {
		github: 'https://github.com/collinsoik',
		linkedin: 'https://linkedin.com/in/collin-soik123',
		twitter: '',
		facebook: '',
		instagram: '',
		whatsapp: '',
		email: 'mailto:cmsoik@ncsu.edu',
		phone: 'tel:+17046415242',
	},
};

export type Experience = {
	title: string;
	company: string;
	location: string;
	startDate: string;
	endDate: string;
	description: string[];
	technologies: string[];
};

export const experiences: Experience[] = [
	{
		title: 'Customer Quality Engineer Intern',
		company: 'Lenovo',
		location: 'Mooresville, NC & Multi-Location',
		startDate: 'May 2024',
		endDate: 'Dec 2024',
		description: [
			'Led multi-location infrastructure rework project for Merck, managing 15+ contractors across facilities',
			'Served as primary liaison between Lenovo, Merck stakeholders, and external teams',
			'Orchestrated infrastructure changes affecting 5,000+ machines with zero critical failures',
			'Maintained multi-million dollar contract through successful project execution ahead of schedule',
			'Spearheaded development of internal flicker detection software suite deployed across 7 countries',
			'Managed Chromebook datalogger project deployed in 3 educational institutions',
		],
		technologies: ['Project Management', 'Stakeholder Management', 'Enterprise Solutions', 'Quality Engineering'],
	},
	{
		title: 'Product Lead & Technical Founder',
		company: 'Quierdo Dios',
		location: 'Remote',
		startDate: 'Nov 2024',
		endDate: 'Jan 2025',
		description: [
			'Defined product vision and strategic roadmap based on customer needs analysis',
			'Built consensus across cross-functional team of 22 engineers and designers',
			'Established KPIs and success metrics with 1,000+ pre-launch waitlist validation',
			'Delivered functional product at 50% of estimated timeline and cost',
			'Product acquired by competitor post-launch',
		],
		technologies: ['Product Strategy', 'Cross-functional Leadership', 'Data Privacy', 'User Research'],
	},
	{
		title: 'Product Manager - Digital Marketing',
		company: 'Carolina GG',
		location: 'Remote',
		startDate: 'Sept 2024',
		endDate: 'Dec 2024',
		description: [
			'Led comprehensive brand refresh and digital marketing campaign for esports agency',
			'Increased organic traffic by 300% through data-driven optimization',
			'Secured 4 major esports events and improved merchandise sales by 200%',
			'Reduced technical operating costs by 50% while improving performance',
		],
		technologies: ['Brand Strategy', 'Digital Marketing', 'Analytics', 'Web Development'],
	},
	{
		title: 'Process Engineering Intern',
		company: 'Kyma Technologies',
		location: 'Raleigh, NC',
		startDate: 'Jan 2024',
		endDate: 'May 2024',
		description: [
			'Led development of real-time monitoring systems for semiconductor chambers',
			'Achieved 30% reduction in maintenance time through predictive protocols',
			'Executed website modernization increasing traffic by 400%',
			'Improved site audit score by 30% and streamlined IT contracts',
		],
		technologies: ['Semiconductor Tech', 'Real-time Systems', 'SEO', 'Web Infrastructure'],
	},
	{
		title: 'Website Agency Project Manager/Founder',
		company: 'Syntex Studios',
		location: 'Remote',
		startDate: 'Jan 2024',
		endDate: 'Present',
		description: [
			'Founded and managed web development agency serving multiple clients',
			'Led project management for website development and digital marketing campaigns',
			'Coordinated cross-functional teams and client relationships',
		],
		technologies: ['Web Development', 'Project Management', 'Client Relations', 'Digital Marketing'],
	},
	{
		title: 'President',
		company: 'Digital Design Club - NC State',
		location: 'Raleigh, NC',
		startDate: 'Aug 2023',
		endDate: 'Present',
		description: [
			'Lead student organization focused on digital design and engineering projects',
			'Organize workshops and events for 50+ members',
			'Coordinate collaboration between students and industry professionals',
		],
		technologies: ['Leadership', 'Event Planning', 'Digital Design', 'Community Building'],
	},
	{
		title: 'Undergraduate Research Assistant',
		company: 'NC State University',
		location: 'Raleigh, NC',
		startDate: 'Jan 2024',
		endDate: 'Present',
		description: [
			'Conduct research in electrical and computer engineering projects',
			'Assist with data collection and analysis for ongoing research studies',
			'Collaborate with graduate students and faculty on research initiatives',
		],
		technologies: ['Research Methods', 'Data Analysis', 'Engineering Research', 'Academic Collaboration'],
	},
	{
		title: 'Founder & Operations Manager',
		company: 'Wolf Gobble Boxes',
		location: 'Raleigh, NC',
		startDate: 'Sept 2023',
		endDate: 'Present',
		description: [
			'Founded meal-prepping service company serving 30+ recurring customers weekly',
			'Manage operations, supply chain, and team of employees',
			'Developed customer acquisition and retention strategies',
		],
		technologies: ['Operations Management', 'Customer Service', 'Team Leadership', 'Business Strategy'],
	},
];

export type Project = {
	title: string;
	description: string;
	image: string;
	tags: string[];
	link?: string;
	repo?: string;
};

export const projects: Project[] = [
	{
		title: 'Merck Multi-Location Infrastructure Rework',
		description:
			'Led complex infrastructure rework across multiple Merck facilities. Managed 15+ contractors, orchestrated changes affecting 5,000+ machines, and maintained multi-million dollar contract. Completed ahead of schedule with zero critical failures.',
		image: '/merck.jpeg',
		tags: ['Enterprise', 'Project Management', 'Stakeholder Management', 'Infrastructure'],
		link: '#',
		repo: '#',
	},
	{
		title: 'Internal Flicker Detection Software Suite',
		description:
			'Spearheaded development of specialized desktop application for advanced flicker detection in Lenovo\'s L3 support lab. Achieved sub-hundredth second detection rates, deployed across 7 countries, and secured Version 2.0 approval.',
		image: '/lenovo.jpeg',
		tags: ['Software Development', 'Quality Engineering', 'Hardware Integration', 'Testing'],
		link: '#',
		repo: '#',
	},
	{
		title: 'Chromebook Datalogger',
		description:
			'Managed development of innovative data logging system using gyroscope technology. Deployed in 3 educational institutions, monitored 30 laptops over 2-month period. Met all technical constraints while delivering on deadline.',
		image: '/chromebook.jpeg',
		tags: ['Hardware Development', 'Data Analytics', 'Education Technology', 'IoT'],
		link: '#',
		repo: '#',
	},
	{
		title: 'Quierdo Dios - Religious Technology Platform',
		description:
			'Defined product vision for innovative religious platform. Built consensus across 22-person team, secured 1,000+ pre-launch waitlist, delivered at 50% estimated timeline/cost. Product acquired by competitor post-launch.',
		image: '/queirdo.png',
		tags: ['Product Strategy', 'Cross-functional Leadership', 'Privacy-focused', 'Social Platform'],
		link: '#',
		repo: '#',
	},
	{
		title: 'Carolina GG Brand Rework',
		description:
			'Led comprehensive brand refresh for esports agency. Increased organic traffic by 300%, secured 4 major events, improved merchandise sales by 200%, and reduced operating costs by 50%.',
		image: '/carolina_gg.png',
		tags: ['Esports', 'Digital Marketing', 'Brand Strategy', 'Web Development'],
		link: '#',
		repo: '#',
	},
	{
		title: 'Kyma Technologies Chamber Monitoring',
		description:
			'Led development of real-time monitoring systems for semiconductor chambers. Achieved 30% reduction in maintenance time, deployed on 7/8 chambers, implemented predictive maintenance protocols.',
		image: '/kyma.png',
		tags: ['Semiconductor', 'Real-time Systems', 'Predictive Maintenance', 'UI/UX'],
		link: '#',
		repo: '#',
	},
	{
		title: 'Kyma Technologies Website & SEO',
		description:
			'Executed comprehensive website modernization and SEO campaign. Increased traffic by 400%, improved site audit score by 30%, streamlined IT contracts, and modernized web infrastructure.',
		image: '/kyma.png',
		tags: ['Web Development', 'SEO', 'Digital Marketing', 'Analytics'],
		link: '#',
		repo: '#',
	},
];

export type Education = {
	degree: string;
	field: string;
	institution: string;
	location: string;
	startDate: string;
	endDate: string;
	gpa?: string;
	achievements: string[];
};

export const education: Education[] = [
	{
		degree: 'Bachelor of Science',
		field: 'Electrical and Computer Engineering',
		institution: 'NC State University',
		location: 'Raleigh, NC',
		startDate: '2023',
		endDate: '2027',
		gpa: '3.94/4.0',
		achievements: [
			'Strong Technical Foundation in ECE',
			'Hands-on Project Development',
			'Research & Development Experience',
		],
	},
	{
		degree: 'Exchange Student',
		field: 'Computer Engineering Program',
		institution: 'ZHAW University',
		location: 'Winterthur, Switzerland',
		startDate: 'Feb 2024',
		endDate: 'July 2024',
		achievements: [
			'International Engineering Exposure',
			'Advanced Computer Engineering Coursework',
		],
	},
];

export type Certificate = {
	title: string;
	issuer: string;
	date: string;
	id?: string;
	url?: string;
	pdf?: string;
};

export const certificates: Certificate[] = [
	{
		title: 'Engineering Professional Certification',
		issuer: 'Professional Engineering Association',
		date: 'Nov 2023',
		id: 'CERT-12345',
		url: '#',
		pdf: '/certificates/sample.pdf',
	},
	{
		title: 'CAD Design Specialist',
		issuer: 'Autodesk',
		date: 'Jun 2023',
		id: 'CERT-67890',
		url: '#',
		pdf: '/certificates/sample.pdf',
	},
	{
		title: 'Project Management Fundamentals',
		issuer: 'Project Management Institute',
		date: 'Mar 2023',
		id: 'CERT-24680',
		url: '#',
		pdf: '/certificates/sample.pdf',
	},
];

export type Skill = {
	name: string;
	level: number; // 1-10
	category: 'technical' | 'software' | 'soft' | 'language';
};

export const skills: Skill[] = [
	// Product Management Skills
	{ name: 'Product Strategy & Vision', level: 10, category: 'technical' },
	{ name: 'Customer Needs Analysis', level: 9, category: 'technical' },
	{ name: 'Product Roadmap Development', level: 9, category: 'technical' },
	{ name: 'Market Opportunity Analysis', level: 8, category: 'technical' },
	{ name: 'Competitive Landscape Assessment', level: 8, category: 'technical' },
	{ name: 'KPI Definition & Tracking', level: 9, category: 'technical' },
	{ name: 'Data-Driven Decision Making', level: 10, category: 'technical' },
	{ name: 'User Research', level: 9, category: 'technical' },

	// Leadership & Collaboration
	{ name: 'Cross-Functional Leadership', level: 10, category: 'soft' },
	{ name: 'Stakeholder Management', level: 10, category: 'soft' },
	{ name: 'Engineering Collaboration', level: 9, category: 'soft' },
	{ name: 'Design Partnership', level: 8, category: 'soft' },
	{ name: 'Consensus Building', level: 9, category: 'soft' },
	{ name: 'Team Management (20+ members)', level: 9, category: 'soft' },
	{ name: 'Client Relations', level: 10, category: 'soft' },
	{ name: 'Vendor Management', level: 8, category: 'soft' },

	// Technical & Tools
	{ name: 'Agile/Scrum', level: 9, category: 'software' },
	{ name: 'JIRA/Confluence', level: 8, category: 'software' },
	{ name: 'Analytics Tools', level: 9, category: 'software' },
	{ name: 'A/B Testing', level: 8, category: 'software' },
	{ name: 'SQL/Data Analysis', level: 8, category: 'software' },
	{ name: 'Figma/Design Tools', level: 7, category: 'software' },
	{ name: 'API Development', level: 8, category: 'software' },
	{ name: 'Cloud Platforms', level: 8, category: 'software' },

	// Domain Expertise
	{ name: 'Enterprise Solutions', level: 9, category: 'technical' },
	{ name: 'EdTech', level: 8, category: 'technical' },
	{ name: 'Digital Marketing', level: 9, category: 'technical' },
	{ name: 'Infrastructure Management', level: 8, category: 'technical' },
	{ name: 'Quality Engineering', level: 8, category: 'technical' },
	{ name: 'Privacy & Security', level: 8, category: 'technical' },
];

export type BlogPost = {
	title: string;
	excerpt: string;
	date: string;
	author: string;
	image: string;
	slug: string;
};

export const blogPosts: BlogPost[] = [];