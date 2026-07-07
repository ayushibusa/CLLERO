export interface DashboardModule {
  slug: string;
  tag: string;
  title: string;
  desc: string;
  duration: string; // Keep interface matching if needed, or rephrase to "impact"
  level: string;    // Keep interface matching, or rephrase to "complexity"
  overview: string;
  whoItIsFor: string;
  featuresList: string[];
  benefits: string;
}

export interface Integration {
  slug: string;
  name: string;
  category: "payments" | "access" | "marketing" | "accounting";
  desc: string;
  logoUrl: string;
}

export interface Testimonial {
  name: string;
  role: string;
  gymName: string;
  rating: number;
  text: string;
  date: string;
  metrics: string;
}

export interface FAQItem {
  category: "platform" | "websites" | "pricing" | "support";
  question: string;
  answer: string;
}

export interface CaseStudy {
  slug: string;
  gymName: string;
  type: "Strength Gym" | "Boutique Studio" | "CrossFit Box" | "Multi-Location Chain";
  location: string;
  headline: string;
  challenge: string;
  solution: string;
  metrics: {
    growth: string;
    growthLabel: string;
    retention: string;
    hoursSaved: string;
  };
  quote: {
    text: string;
    author: string;
    role: string;
  };
}

export interface BlogPost {
  slug: string;
  category: "Marketing" | "Operations" | "Retention" | "Finance";
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  img: string;
  content: string;
}

// 1. Dashboard Modules Data
export const programsData: DashboardModule[] = [
  {
    slug: "member-crm",
    tag: "Core CRM",
    title: "Member Management CRM",
    desc: "A centralized, intuitive CRM to track member profiles, check-ins, medical history, contract terms, and communication preferences automatically.",
    duration: "Instant Setup",
    level: "Fully Automated",
    overview: "Manage your entire member base without the friction of spreadsheets. Track member attendance trends, log performance checkpoints, monitor contract renewal states, and automate SMS/Email communication relative to check-in milestones.",
    whoItIsFor: "Gym managers and front desk staff looking to reduce administrative friction and improve daily check-in speed.",
    featuresList: [
      "Digital member registration and electronic liability waivers",
      "Automated attendance tracking and barcode/RFID check-in",
      "Frozen profile management and temporary suspension policies",
      "Communication logs showing email, SMS, and push notification history"
    ],
    benefits: "Reduces front desk check-in queue times by 70% and completely eliminates paper waivers."
  },
  {
    slug: "scheduling-booking",
    tag: "Operations",
    title: "Class & Session Scheduling",
    desc: "Dynamic calendar engine supporting recurring class slots, workshop bookings, private training appointments, and automated waitlist tracking.",
    duration: "Real-time sync",
    level: "Zero Conflicts",
    overview: "Coordinate your instructors, rooms, and equipment without conflicts. Allow members to self-book sessions through your CLLERO-built website or member app, with real-time slot limits and instant waitlist notification prompts when spots open.",
    whoItIsFor: "Boutique fitness studios, CrossFit boxes, and group training gyms coordinating multiple trainers and class rooms.",
    featuresList: [
      "Trainer availability calendars and payroll integration",
      "Waitlist automation with automatic push notification fills",
      "Late cancellation and no-show fee automation rule sets",
      "Calendar sync for Google Calendar, Apple iCal, and Outlook"
    ],
    benefits: "Reduces class no-shows by 45% using automated SMS booking confirmation and reminder notifications."
  },
  {
    slug: "automated-billing",
    tag: "Revenue",
    title: "Automated Billing & Invoicing",
    desc: "Robust recurring credit card processing, digital invoice generation, automated payment retries, and tax operations powered by Stripe.",
    duration: "PCI Compliant",
    level: "High Security",
    overview: "Collect payments seamlessly with automated recurring billing. Set up custom membership tiers, handle family add-on configurations, track card expiration dates, and let CLLERO automatically run smart payment retry sequences on failed cards.",
    whoItIsFor: "Gym operators aiming to eliminate unpaid membership dues and stabilize monthly recurring revenue (MRR).",
    featuresList: [
      "Recurring membership billing (Weekly, Monthly, Annual cycles)",
      "Smart dunning retry logic for failed credit card payments",
      "Point-of-Sale (POS) terminal billing for drinks, merchandise, and gear",
      "Detailed financial reporting, sales tax separation, and QuickBooks export"
    ],
    benefits: "Reduces unpaid membership dues to less than 1.5% using Stripe-integrated smart retry workflows."
  },
  {
    slug: "staff-payroll",
    tag: "Management",
    title: "Staff & Instructor Tools",
    desc: "Track staff hours, monitor class commission structures, manage shifts, and calculate payroll reports with zero admin oversight.",
    duration: "Configurable",
    level: "Easy to Use",
    overview: "Empower your coaching team with direct calendar controls. Staff can check in their own classes, log private training completions, adjust availability on the fly, and view expected monthly commission payouts based on class attendance caps.",
    whoItIsFor: "Multi-instructor gyms and large fitness facilities with complex coaching pay rates and commissions.",
    featuresList: [
      "Individual coach portals with restricted analytics views",
      "Shift check-ins, time clocks, and digital timesheets",
      "Commission calculators based on flat-rates or attendee volume",
      "Task assignment and staff notification dashboards"
    ],
    benefits: "Saves gym owners an average of 8 hours per month on manual payroll and timesheet calculations."
  },
  {
    slug: "business-analytics",
    tag: "Growth",
    title: "Performance Analytics & Reports",
    desc: "Track active member metrics, Churn Rates, Monthly Recurring Revenue (MRR), and class capacity stats in real-time.",
    duration: "Live Charts",
    level: "Deep Insights",
    overview: "Unlock data-driven decision making. CLLERO compiles check-ins, sales metrics, and retention stats into highly interactive charts. Identify underperforming class times, track trainer popularity, and forecast monthly revenue.",
    whoItIsFor: "Gym operators looking to scale their locations, optimize scheduling budgets, and identify member churn indicators early.",
    featuresList: [
      "MRR, ARR, and Average Revenue Per Member (ARPU) tracking",
      "Cohorted retention metrics and churn warning alerts",
      "Class capacity heatmaps to identify prime vs. dead time slots",
      "Exportable CSV reports for accountants and business advisors"
    ],
    benefits: "Helps gyms boost overall profit margins by up to 18% through data-backed class schedule optimizations."
  },
  {
    slug: "marketing-retention",
    tag: "Automation",
    title: "Marketing & Retention Engine",
    desc: "Automate trial follow-ups, trigger absent member alerts, and schedule custom promotion campaigns to keep retention sky-high.",
    duration: "Set-and-Forget",
    level: "Growth Focused",
    overview: "Fill your membership funnel automatically. Lead captures from your custom CLLERO website trigger onboarding sequences, booking reminders, and trial follow-up workflows. Keep members engaged with automated milestone celebrations (e.g. 50th class check-in).",
    whoItIsFor: "Gym owners wanting a systematic member pipeline without spending hours manually texting prospects.",
    featuresList: [
      "Automated lead follow-ups via integrated SMS and Email",
      "Absence warning triggers (e.g. member hasn't checked in for 10 days)",
      "Anniversary and birthday milestone messaging",
      "Promotional blast tools with built-in conversion tracking"
    ],
    benefits: "Boosts conversion from website trial sign-up to paying member by 34% through automated sequences."
  }
];

// 2. Integrations Data
export const integrationsData: Integration[] = [
  { slug: "stripe", name: "Stripe", category: "payments", desc: "Process credit cards, recurring payments, and POS transactions securely.", logoUrl: "https://images.unsplash.com/photo-1614680376593-902f74fa0d41?q=80&w=100&auto=format&fit=crop" },
  { slug: "quickbooks", name: "QuickBooks", category: "accounting", desc: "Automatically sync invoices, tax receipts, and payment transactions.", logoUrl: "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?q=80&w=100&auto=format&fit=crop" },
  { slug: "mailchimp", name: "Mailchimp", category: "marketing", desc: "Sync contact lists for regular marketing newsletters and promotions.", logoUrl: "https://images.unsplash.com/photo-1614680376739-414d95ff43df?q=80&w=100&auto=format&fit=crop" },
  { slug: "brivo", name: "Brivo Access", category: "access", desc: "Grant members keyless gym access automatically based on membership status.", logoUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=100&auto=format&fit=crop" },
  { slug: "kisi", name: "Kisi Access", category: "access", desc: "Cloud door access systems that unlock using the CLLERO member app.", logoUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=100&auto=format&fit=crop" },
  { slug: "xero", name: "Xero", category: "accounting", desc: "Sync membership payouts and bank reconciliations directly.", logoUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=100&auto=format&fit=crop" },
  { slug: "hubspot", name: "HubSpot", category: "marketing", desc: "Advanced marketing attribution, client pipeline CRM, and ads tracking.", logoUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=100&auto=format&fit=crop" }
];

// Compatibility support for old coaches imports
export const coachesData = integrationsData;

// 3. Testimonials Data
export const testimonialsData: Testimonial[] = [
  {
    name: "Marcus Sterling",
    role: "Founder & Head Coach",
    gymName: "Iron Peak Strength",
    rating: 5,
    text: "CLLERO changed everything for our business. The custom website they built is beautiful and brings in trial requests daily, which flow directly into our member CRM. We save at least 15 hours of manual admin every week, and our class attendance is at an all-time high.",
    date: "Client since 2024",
    metrics: "+34% Trials in 90 Days"
  },
  {
    name: "Sophia Martinez",
    role: "Owner & Director",
    gymName: "Apex Pilates Studio",
    rating: 5,
    text: "We migrated all our member billing and scheduling from Mindbody to CLLERO. The onboarding support team handled the entire migration for us without any downtime. Our members love the clean website booking experience, and failed payments have decreased to almost zero.",
    date: "Client since 2023",
    metrics: "Failed Card Payments Reduced by 85%"
  },
  {
    name: "John Davis",
    role: "Co-Founder",
    gymName: "Vanguard CrossFit",
    rating: 5,
    text: "Before CLLERO, we were duct-taping a slow WordPress site, a separate scheduling tool, and Stripe invoices together. CLLERO unified everything. Having a custom-branded website connected to our member CRM with one login is a game changer.",
    date: "Client since 2025",
    metrics: "2.4x Member Growth in 1 Year"
  },
  {
    name: "Elena Rostova",
    role: "General Manager",
    gymName: "Titan Performance Labs",
    rating: 5,
    text: "Having a premium done-for-you website backed by automated SMS follow-ups has transformed our member acquisition. Prospects register for a trial, get scheduled automatically, receive reminders, and buy memberships with zero manual work on our end.",
    date: "Client since 2024",
    metrics: "Saved 12 hrs/week on Admin"
  }
];

// 4. Operator-focused FAQ
export const faqData: FAQItem[] = [
  {
    category: "platform",
    question: "Can I migrate my existing member data to CLLERO?",
    answer: "Absolutely. Our onboarding team handles the migration of active member profiles, contract terms, billing tokens, and history from platforms like Mindbody, Zen Planner, Wodify, or Excel. We ensure zero billing downtime or member disruption."
  },
  {
    category: "websites",
    question: "Do you build the gym website, or do I use a template editor?",
    answer: "We build it for you. We design, host, and maintain a custom, fully branded gym website featuring high-end animations, program pages, booking integrations, and SEO optimization. You simply send us your photos and logo, and we handle the rest."
  },
  {
    category: "pricing",
    question: "Are there any hidden transaction fees or contract locks?",
    answer: "No. CLLERO operates on transparent flat-rate monthly subscriptions with no lock-in contracts. Payment processing is run securely via Stripe at standard processing rates, with no additional CLLERO transaction surcharges."
  },
  {
    category: "support",
    question: "What support do we receive during onboarding and launch?",
    answer: "Every CLLERO client is assigned a dedicated launch specialist. We guide you through your dashboard setup, help configure your memberships, build your custom website, migrate your member data, and train your staff on check-in procedures."
  },
  {
    category: "platform",
    question: "What physical access control systems do you support?",
    answer: "We support direct API integrations with leading smart lock and gate access control systems like Kisi, Brivo, and Salto. This allows member keycards or mobile App entry buttons to function only when membership billing is active."
  },
  {
    category: "websites",
    question: "Can I use my own custom domain for the website?",
    answer: "Yes. We configure and point your custom domain (e.g. www.yourgym.com) to our fast cloud hosting infrastructure, secure it with free SSL certificates, and handle ongoing technical maintenance."
  }
];

// 5. Case Studies Data
export const caseStudiesData: CaseStudy[] = [
  {
    slug: "iron-peak-strength",
    gymName: "Iron Peak Strength",
    type: "Strength Gym",
    location: "Oakland, CA",
    headline: "How Iron Peak Strength Boosted Trial Sign-Ups by 34% and Saved 15 Hours of Admin Weekly",
    challenge: "Iron Peak had a outdated website that did not capture leads, forcing the owner to manually follow up with email inquiries while managing billing across two disconnected software packages.",
    solution: "CLLERO built a premium, booking-integrated website and migrated their entire billing, member list, and trainer calendars to the CLLERO Unified Dashboard, introducing automated SMS trial follow-up campaigns.",
    metrics: {
      growth: "+34%",
      growthLabel: "Trial Sign-Ups",
      retention: "98.2%",
      hoursSaved: "15 hrs"
    },
    quote: {
      text: "CLLERO removed all the admin roadblocks. Leads register for trials, receive automatic check-in guidelines via text, and our staff processes check-ins with one click. It transformed our daily operations.",
      author: "Marcus Sterling",
      role: "Owner & Head Coach"
    }
  },
  {
    slug: "vanguard-crossfit",
    gymName: "Vanguard CrossFit",
    type: "CrossFit Box",
    location: "Denver, CO",
    headline: "Vanguard CrossFit Multiplied Membership by 2.4x Within 12 Months of Unifying Dashboard & Web Services",
    challenge: "Managing schedules, drop-ins, and recurring payments on separate platforms led to missed dues, calendar friction, and a poor booking experience that turned off high-end clients.",
    solution: "Consolidated all programs and class scheduling under the CLLERO Booking Engine, displaying live schedules directly on their custom CLLERO website and member app.",
    metrics: {
      growth: "2.4x",
      growthLabel: "Active Members",
      retention: "96.4%",
      hoursSaved: "18 hrs"
    },
    quote: {
      text: "The member app and website scheduling are flawless. Our coaches love tracking attendance, and our members appreciate the easy booking. We grew our base without adding administrative staff.",
      author: "John Davis",
      role: "Co-Founder"
    }
  },
  {
    slug: "apex-pilates",
    gymName: "Apex Pilates Studio",
    type: "Boutique Studio",
    location: "Austin, TX",
    headline: "How Apex Pilates Reduced Payment Failures by 85% and Restructured Staff Compensation",
    challenge: "Failed credit cards, class size limits, and calculating teacher payroll splits manually consumed hours of overhead, resulting in lost revenue and coach dissatisfaction.",
    solution: "CLLERO Automated Billing and Dunning logic handled card retries, and the Staff Dashboard calculated performance-based commissions based on live attendance records.",
    metrics: {
      growth: "-85%",
      growthLabel: "Failed Payments",
      retention: "97.8%",
      hoursSaved: "12 hrs"
    },
    quote: {
      text: "Our failed payments dropped instantly. The commission billing feature takes away the math headache of payroll. Our instructors log in, see what they earned, and focus on teaching.",
      author: "Sophia Martinez",
      role: "Studio Director"
    }
  }
];

// 6. Blog Posts (Operator targeted)
export const blogData: BlogPost[] = [
  {
    slug: "5-ways-automation-reduces-no-shows",
    category: "Retention",
    title: "5 Ways Automated Reminders and Waitlists Reduce Class No-Shows",
    excerpt: "No-shows and late cancellations drain gym revenue and annoy instructors. Learn how dynamic automated SMS sequences solve class booking friction.",
    author: "CLLERO Growth Team",
    date: "July 2, 2026",
    readTime: "5 min read",
    img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600&auto=format&fit=crop",
    content: "When members register for a high-demand slot and fail to attend, it leaves empty spots, frustrates coaches, and blocks waiting members. Traditional email alerts are often missed. By configuring automated SMS notification reminders, imposing reasonable cancellation thresholds, and leveraging an automated waitlist that automatically triggers text prompts to waiting list members, gyms can reduce no-shows by up to 45%. We detail the exact text template configurations and timing sequences that drive compliance without causing member friction."
  },
  {
    slug: "what-your-gym-website-is-missing",
    category: "Marketing",
    title: "What Your Gym Website Is Missing: The 3 Critical Conversion Blocks",
    excerpt: "Having a pretty website is not enough. To convert modern prospects, your gym site needs to load fast, integrate schedules, and offer frictionless trials.",
    author: "CLLERO Design Lead",
    date: "June 24, 2026",
    readTime: "6 min read",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
    content: "Too many gym owners view their website as a digital brochure. In reality, your site should function as your most active salesperson. To convert visitors into paying members, a website needs three crucial elements: 1) A clear, one-sentence value proposition visible in the hero fold without scrolling, 2) A direct, single-field trial registration block, and 3) An integrated schedule showing class capacity in real time. We audit common mistakes and show how CLLERO-built sites solve these hurdles to boost conversions by over 30%."
  },
  {
    slug: "member-retention-tactics-that-work",
    category: "Operations",
    title: "Member Retention Tactics: Preventing Gym Member Churn Before It Happens",
    excerpt: "Acquiring a new member costs 5x more than retaining an existing one. Learn how automated absence warnings protect your monthly recurring revenue.",
    author: "CLLERO Operations Lead",
    date: "June 15, 2026",
    readTime: "7 min read",
    img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=600&auto=format&fit=crop",
    content: "Member churn is the silent killer of gym profitability. Most operators only address cancellation requests when it is too late. The key is tracking behavior. If a regular member who check in 3 times a week suddenly doesn't show up for 10 days, they are at risk. With CLLERO's marketing and retention engine, you can trigger automatic warning alerts and set up automated personal check-in messages (e.g. 'Hey, we missed you this week, everything alright?'). This simple touch keeps members accountable, resolves issues, and protects your MRR."
  }
];
