// Auto-generated features database for CLLERO FIT AI

export interface FeatureStat {
  label: string;
  value: string;
  icon: string;
}

export interface TechnicalSpec {
  label: string;
  value: string;
}

export interface ArchitectureStep {
  title: string;
  desc: string;
}

export interface FeatureDetail {
  id: string;
  title: string;
  description: string;
  details: string;
  icon: string;
  gradient: string;
  benefits: string[];
  stats: FeatureStat[];
  technicalSpecs: TechnicalSpec[];
  architecture: ArchitectureStep[];
}

export interface FeatureCategory {
  name: string;
  features: string[];
}

export const categories: FeatureCategory[] = [
  {
    "name": "Member Retention",
    "features": [
      "absentees",
      "silent-quit",
      "communication",
      "mobile-app"
    ]
  },
  {
    "name": "AI Vision & Safety",
    "features": [
      "cctv",
      "meal-scanner",
      "calorie-tracking",
      "bio-twin"
    ]
  },
  {
    "name": "Business Intelligence",
    "features": [
      "analytics",
      "profit-loss",
      "leakage-alerts",
      "multi-factor",
      "expense-management"
    ]
  },
  {
    "name": "Staff & Operations",
    "features": [
      "trainer",
      "trainer-scorecard",
      "exercise-programming",
      "diet-planning",
      "weight-velocity",
      "nutrient"
    ]
  },
  {
    "name": "Sales & Growth",
    "features": [
      "inquiry",
      "sales-nudge"
    ]
  }
];

export const features: Record<string, FeatureDetail> = {
  "absentees": {
    "id": "absentees",
    "title": "Absentees Management",
    "description": "Automated direct messaging alerts triggered after 3 consecutive days of absence. Bridge the gap between member drop-off and proactive retention.",
    "details": "Our behavioral AI monitors attendance patterns with surgical precision. When a member misses 3 consecutive sessions, the system automatically triggers a personalized 'Rescue Nudge' via direct messaging, reducing the likelihood of silent quitting by over 20%.",
    "icon": "Users",
    "gradient": "from-cyan-500/20 via-slate-900 to-slate-900",
    "benefits": [
      "20% Increase in Member Retention",
      "Automated Messaging Workflows",
      "Proactive Fatigue Detection",
      "Real-time Dashboard Alerts"
    ],
    "stats": [
      {
        "label": "Retention Boost",
        "value": "+22%",
        "icon": "UserPlus"
      },
      {
        "label": "Response Rate",
        "value": "88%",
        "icon": "MessageSquare"
      },
      {
        "label": "Automation",
        "value": "100%",
        "icon": "Zap"
      }
    ],
    "technicalSpecs": [
      {
        "label": "Latency",
        "value": "< 100ms"
      },
      {
        "label": "AI Model",
        "value": "CLLERO-Retention-V2"
      },
      {
        "label": "Integration",
        "value": "Omnichannel API"
      },
      {
        "label": "Platform",
        "value": "Event-Driven"
      }
    ],
    "architecture": [
      {
        "title": "Behavioral Pattern Engine",
        "desc": "Analyzes historical attendance data to identify deviation thresholds for individual members."
      },
      {
        "title": "Messaging API Gateway",
        "desc": "Secure integration with direct messaging platforms for automated, personalized message delivery."
      },
      {
        "title": "Retention Dashboard",
        "desc": "Real-time visualization of 'at-risk' members and automated rescue campaign performance."
      }
    ]
  },
  "inquiry": {
    "id": "inquiry",
    "title": "Inquiry Management",
    "description": "Kanban-style lead board with auto-escalation to 'Hot Leads' after 7 days. Never lose a potential member to a slow response again.",
    "details": "Transform your sales process with a visual pipeline. Leads are automatically categorized and escalated based on engagement levels. Our AI sales bot even sends personalized decision pitches to unconverted leads after 48 hours.",
    "icon": "FolderKanban",
    "gradient": "from-blue-500/20 via-slate-900 to-slate-900",
    "benefits": [
      "Centralized Lead Pipeline",
      "Auto-Escalation Logic",
      "Conversion Rate Analytics",
      "Team Response Tracking"
    ],
    "stats": [
      {
        "label": "Pipeline",
        "value": "Kanban",
        "icon": "FolderKanban"
      },
      {
        "label": "Scoring",
        "value": "Predictive",
        "icon": "Brain"
      },
      {
        "label": "Sync",
        "value": "Real-time",
        "icon": "Zap"
      }
    ],
    "technicalSpecs": [
      {
        "label": "Latency",
        "value": "< 50ms"
      },
      {
        "label": "AI Model",
        "value": "CLLERO-Sales-V1"
      },
      {
        "label": "Integration",
        "value": "CRM Sync Ready"
      },
      {
        "label": "Platform",
        "value": "Serverless Pipeline"
      }
    ],
    "architecture": [
      {
        "title": "Kanban Logic Engine",
        "desc": "Dynamic state management for leads with automated transition rules and escalation timers."
      },
      {
        "title": "Lead Scoring AI",
        "desc": "Predictive model that ranks leads based on interaction frequency and historical conversion data."
      },
      {
        "title": "Analytics Sync",
        "desc": "Real-time data streaming to the owner's terminal for conversion rate monitoring."
      }
    ]
  },
  "communication": {
    "id": "communication",
    "title": "Communication Hub",
    "description": "Centralized messaging for diet plans, injury check-ins, and gym management. One place for all member interactions.",
    "details": "Stop using fragmented apps. Our Communication Hub integrates directly with the member app, allowing trainers to send diet updates, exercise programs, and check-in messages in a single, secure environment.",
    "icon": "MessageSquare",
    "gradient": "from-cyan-500/20 via-slate-900 to-slate-900",
    "benefits": [
      "Unified Inbox",
      "Automated Diet Delivery",
      "Injury Alert Integration",
      "Member Feedback Loop"
    ],
    "stats": [
      {
        "label": "Uptime",
        "value": "99.99%",
        "icon": "Shield"
      },
      {
        "label": "Latency",
        "value": "< 30ms",
        "icon": "Zap"
      },
      {
        "label": "Security",
        "value": "E2EE",
        "icon": "Shield"
      }
    ],
    "technicalSpecs": [
      {
        "label": "Latency",
        "value": "< 30ms"
      },
      {
        "label": "AI Model",
        "value": "CLLERO-NLP-V1"
      },
      {
        "label": "Integration",
        "value": "WebSockets Enabled"
      },
      {
        "label": "Platform",
        "value": "Real-time Messaging"
      }
    ],
    "architecture": [
      {
        "title": "Unified Message Bus",
        "desc": "High-throughput messaging system ensuring instant delivery across all member and trainer devices."
      },
      {
        "title": "Contextual AI Nudges",
        "desc": "NLP engine that suggests relevant responses based on member queries and trainer history."
      },
      {
        "title": "End-to-End Encryption",
        "desc": "Military-grade encryption for all private health and nutrition data exchanged in the hub."
      }
    ]
  },
  "trainer": {
    "id": "trainer",
    "title": "Trainer Management",
    "description": "Digital scheduling with automated shift notifications and timing matrix. Optimize your staff's performance and accountability.",
    "details": "Monitor trainer performance with data-driven scorecards. Track response times to injury alerts, diet update frequency, and member satisfaction scores. Ensure your staff is as high-performance as your members.",
    "icon": "Clock",
    "gradient": "from-blue-500/20 via-slate-900 to-slate-900",
    "benefits": [
      "Digital Shift Scheduling",
      "Performance Scorecards",
      "Response Time Tracking",
      "Automated Notifications"
    ],
    "stats": [
      {
        "label": "Scheduling",
        "value": "Digital",
        "icon": "Clock"
      },
      {
        "label": "Performance",
        "value": "Tracked",
        "icon": "Activity"
      },
      {
        "label": "Alerts",
        "value": "Instant",
        "icon": "Zap"
      }
    ],
    "technicalSpecs": [
      {
        "label": "Latency",
        "value": "< 150ms"
      },
      {
        "label": "AI Model",
        "value": "CLLERO-Staff-V1"
      },
      {
        "label": "Integration",
        "value": "HRMS Compatible"
      },
      {
        "label": "Platform",
        "value": "Resource Optimization"
      }
    ],
    "architecture": [
      {
        "title": "Scheduling Matrix",
        "desc": "Algorithmic shift optimization based on member peak hours and trainer specialties."
      },
      {
        "title": "Performance Tracker",
        "desc": "Real-time monitoring of trainer-member interactions and task completion rates."
      },
      {
        "title": "Notification Engine",
        "desc": "Automated push and SMS alerts for shift changes and urgent member alerts."
      }
    ]
  },
  "meal-scanner": {
    "id": "meal-scanner",
    "title": "AI Meal Scanner",
    "description": "Photo-to-nutrition logging. Identifies food and macros instantly via the member app. Nutrition tracking simplified.",
    "details": "Members simply snap a photo of their meal. Our computer vision AI identifies the food items, estimates portions, and logs macros instantly. It's specifically optimized for Indian dietary patterns, identifying everything from Paneer to Poha.",
    "icon": "Camera",
    "gradient": "from-emerald-500/20 via-slate-900 to-slate-900",
    "benefits": [
      "Instant Macro Identification",
      "Photo-Based Logging",
      "Indian Food Database",
      "Calorie Velocity Tracking"
    ],
    "stats": [
      {
        "label": "Recognition",
        "value": "98.5%",
        "icon": "Target"
      },
      {
        "label": "Database",
        "value": "1M+ Items",
        "icon": "Database"
      },
      {
        "label": "Speed",
        "value": "< 800ms",
        "icon": "Zap"
      }
    ],
    "technicalSpecs": [
      {
        "label": "Latency",
        "value": "< 800ms"
      },
      {
        "label": "AI Model",
        "value": "CLLERO-Vision-V4"
      },
      {
        "label": "Integration",
        "value": "Mobile SDK Ready"
      },
      {
        "label": "Platform",
        "value": "Edge-AI Processing"
      }
    ],
    "architecture": [
      {
        "title": "Computer Vision Model",
        "desc": "Deep convolutional neural network trained on over 1 million Indian food images."
      },
      {
        "title": "Portion Estimation AI",
        "desc": "Geometric analysis of food volume relative to plate size for accurate calorie estimation."
      },
      {
        "title": "Macro Mapping Engine",
        "desc": "Instant lookup in our proprietary Indian nutritional database for precise macro splits."
      }
    ]
  },
  "nutrient": {
    "id": "nutrient",
    "title": "Nutrient Tracking",
    "description": "Weekly breakdown of calories, protein, and fiber visible on member's phone. Data-driven nutrition for real results.",
    "details": "Visualize nutrition progress with high-fidelity graphs. Members can see their weekly averages, macro splits, and calorie trends, allowing for surgical adjustments to their diet plans by their trainers.",
    "icon": "Activity",
    "gradient": "from-cyan-500/20 via-slate-900 to-slate-900",
    "benefits": [
      "Weekly Macro Summaries",
      "Protein Intake Velocity",
      "Fiber & Micronutrient Data",
      "Progressive Goal Setting"
    ],
    "stats": [
      {
        "label": "Aggregator",
        "value": "Weekly",
        "icon": "Database"
      },
      {
        "label": "Velocity",
        "value": "Calculated",
        "icon": "UserPlus"
      },
      {
        "label": "Visuals",
        "value": "High-Fi",
        "icon": "TrendingUp"
      }
    ],
    "technicalSpecs": [
      {
        "label": "Latency",
        "value": "< 50ms"
      },
      {
        "label": "AI Model",
        "value": "CLLERO-Nutri-V1"
      },
      {
        "label": "Integration",
        "value": "HealthKit/Google Fit"
      },
      {
        "label": "Platform",
        "value": "Data Visualization"
      }
    ],
    "architecture": [
      {
        "title": "Nutrient Aggregator",
        "desc": "Consolidates daily logs into comprehensive weekly and monthly trend reports."
      },
      {
        "title": "Velocity Calculator",
        "desc": "Analyzes the rate of change in nutrient intake relative to weight and performance goals."
      },
      {
        "title": "Graph Rendering Engine",
        "desc": "High-performance visualization layer for rendering complex nutritional data on mobile."
      }
    ]
  },
  "analytics": {
    "id": "analytics",
    "title": "Advanced Analytics",
    "description": "Monthly nutrient reports and professional data visualizations for owners. Turn your gym data into business intelligence.",
    "details": "As a gym owner, you get access to a high-level terminal dashboard. Monitor revenue, operational costs, and member progress in real-time. Our AI identifies financial leakage and suggests optimizations for maximum profitability.",
    "icon": "TrendingUp",
    "gradient": "from-indigo-500/20 via-slate-900 to-slate-900",
    "benefits": [
      "Revenue Growth Curves",
      "Member Progress Heatmaps",
      "Operational Expense Graphs",
      "Predictive Retention Data"
    ],
    "stats": [
      {
        "label": "Data Points",
        "value": "10M+",
        "icon": "Database"
      },
      {
        "label": "Insights",
        "value": "Daily",
        "icon": "Brain"
      },
      {
        "label": "Accuracy",
        "value": "99.9%",
        "icon": "Star"
      }
    ],
    "technicalSpecs": [
      {
        "label": "Latency",
        "value": "< 200ms"
      },
      {
        "label": "AI Model",
        "value": "CLLERO-BI-V2"
      },
      {
        "label": "Integration",
        "value": "Export to PDF/CSV"
      },
      {
        "label": "Platform",
        "value": "Big Data Analytics"
      }
    ],
    "architecture": [
      {
        "title": "Data Warehouse",
        "desc": "Centralized repository for all gym-side and member-side data points."
      },
      {
        "title": "BI Intelligence Layer",
        "desc": "Predictive modeling engine that identifies trends and anomalies across the ecosystem."
      },
      {
        "title": "Terminal UI Engine",
        "desc": "Custom-built dashboard framework optimized for high-density data visualization."
      }
    ]
  },
  "cctv": {
    "id": "cctv",
    "title": "AI CCTV Monitoring",
    "description": "33-point skeletal tracking for real-time form analysis and injury alerts. The ultimate safety net for your members.",
    "details": "Our AI integrates with your existing CCTV system to track 33 skeletal nodes on every member. If the system detects improper form or a potential injury risk, it instantly alerts the trainer on the floor via their mobile app.",
    "icon": "Eye",
    "gradient": "from-orange-500/20 via-slate-900 to-slate-900",
    "benefits": [
      "Real-time Form Analysis",
      "Instant Injury Alerts",
      "Skeletal Node Tracking",
      "Automated Safety Reports"
    ],
    "stats": [
      {
        "label": "Tracking Points",
        "value": "33",
        "icon": "Activity"
      },
      {
        "label": "Latency",
        "value": "< 40ms",
        "icon": "Zap"
      },
      {
        "label": "Accuracy",
        "value": "99.2%",
        "icon": "Star"
      }
    ],
    "technicalSpecs": [
      {
        "label": "Latency",
        "value": "< 40ms"
      },
      {
        "label": "AI Model",
        "value": "CLLERO-Skeletal-V3"
      },
      {
        "label": "Integration",
        "value": "ONVIF/RTSP Support"
      },
      {
        "label": "Platform",
        "value": "Real-time Vision"
      }
    ],
    "architecture": [
      {
        "title": "Skeletal Inference Engine",
        "desc": "High-speed pose estimation model that tracks 33 key joints at 30 frames per second."
      },
      {
        "title": "Form Violation Logic",
        "desc": "Geometric rule engine that compares real-time poses against 'Perfect Form' templates."
      },
      {
        "title": "Alert Dispatcher",
        "desc": "Low-latency notification system that routes injury alerts to the nearest trainer."
      }
    ]
  },
  "diet-planning": {
    "id": "diet-planning",
    "title": "AI Diet Planning",
    "description": "Hybridized logic combining AI with trainer expertise for Indian dietary patterns. Personalized nutrition at scale.",
    "details": "CLLERO FIT AI understands the nuances of Indian diets. It combines deep learning with your trainer's expertise to generate meal plans that are culturally relevant, nutritionally balanced, and highly effective.",
    "icon": "Brain",
    "gradient": "from-emerald-500/20 via-slate-900 to-slate-900",
    "benefits": [
      "Personalized Meal Plans",
      "Indian Food Optimization",
      "Trainer-AI Hybrid Logic",
      "Weekly Adjustments"
    ],
    "stats": [
      {
        "label": "Personalized",
        "value": "Yes",
        "icon": "UserCheck"
      },
      {
        "label": "Indian Food",
        "value": "Optimized",
        "icon": "Database"
      },
      {
        "label": "Hybrid",
        "value": "Logic",
        "icon": "Brain"
      }
    ],
    "technicalSpecs": [
      {
        "label": "Latency",
        "value": "< 500ms"
      },
      {
        "label": "AI Model",
        "value": "CLLERO-Diet-V2"
      },
      {
        "label": "Integration",
        "value": "Trainer Dashboard"
      },
      {
        "label": "Platform",
        "value": "Hybrid Intelligence"
      }
    ],
    "architecture": [
      {
        "title": "Dietary Logic Engine",
        "desc": "Core AI that calculates calorie and macro requirements based on member goals and profile."
      },
      {
        "title": "Cultural Food Mapper",
        "desc": "Database of Indian foods and recipes with precise nutritional breakdowns."
      },
      {
        "title": "Trainer Review Loop",
        "desc": "Interface for trainers to fine-tune AI-generated plans before delivery to members."
      }
    ]
  },
  "exercise-programming": {
    "id": "exercise-programming",
    "title": "AI Exercise Programming",
    "description": "Dynamic workout generation that adjusts based on member progress data. Real-time adaptation for maximum gains.",
    "details": "Our AI analyzes every set and rep. It automatically adjusts the next session's volume and intensity based on the member's velocity and fatigue levels, ensuring they stay on the optimal path to their goals.",
    "icon": "Dumbbell",
    "gradient": "from-indigo-500/20 via-slate-900 to-slate-900",
    "benefits": [
      "Dynamic Rep/Set Scaling",
      "Progressive Overload AI",
      "Injury-Aware Selection",
      "Volume Tracking"
    ],
    "stats": [
      {
        "label": "Progression",
        "value": "Dynamic",
        "icon": "UserPlus"
      },
      {
        "label": "Selection",
        "value": "Contextual",
        "icon": "Brain"
      },
      {
        "label": "Fatigue",
        "value": "Monitored",
        "icon": "Activity"
      }
    ],
    "technicalSpecs": [
      {
        "label": "Latency",
        "value": "< 300ms"
      },
      {
        "label": "AI Model",
        "value": "CLLERO-Workout-V2"
      },
      {
        "label": "Integration",
        "value": "App Sync Ready"
      },
      {
        "label": "Platform",
        "value": "Dynamic Programming"
      }
    ],
    "architecture": [
      {
        "title": "Progression Engine",
        "desc": "Algorithmic model that calculates optimal volume increases based on historical performance."
      },
      {
        "title": "Exercise Selection AI",
        "desc": "Context-aware model that chooses exercises based on equipment availability and member history."
      },
      {
        "title": "Fatigue Analysis",
        "desc": "Real-time monitoring of rep velocity to estimate RPE and adjust session intensity."
      }
    ]
  },
  "calorie-tracking": {
    "id": "calorie-tracking",
    "title": "Live Calorie Tracking",
    "description": "Exact calorie expenditure calculated via real-time movement analysis. Precision beyond wearable tech.",
    "details": "By analyzing skeletal movement via CCTV, we calculate the exact mechanical work performed. This provides a far more accurate calorie burn estimate than heart-rate based wearables, which often over-estimate by 20%.",
    "icon": "Flame",
    "gradient": "from-orange-500/20 via-slate-900 to-slate-900",
    "benefits": [
      "Real-time Burn Rate",
      "Movement Velocity Data",
      "No Wearable Required",
      "Skeletal Load Analysis"
    ],
    "stats": [
      {
        "label": "Precision",
        "value": "+18%",
        "icon": "Target"
      },
      {
        "label": "Tracking",
        "value": "Real-time",
        "icon": "Activity"
      },
      {
        "label": "Hardware",
        "value": "CCTV",
        "icon": "Camera"
      }
    ],
    "technicalSpecs": [
      {
        "label": "Latency",
        "value": "< 100ms"
      },
      {
        "label": "AI Model",
        "value": "CLLERO-Energy-V1"
      },
      {
        "label": "Integration",
        "value": "CCTV Stream"
      },
      {
        "label": "Platform",
        "value": "Mechanical Work AI"
      }
    ],
    "architecture": [
      {
        "title": "Kinetic Energy Engine",
        "desc": "Calculates mechanical work performed by analyzing the mass and velocity of skeletal segments."
      },
      {
        "title": "Metabolic Mapping",
        "desc": "Converts mechanical work into metabolic energy expenditure based on member biometrics."
      },
      {
        "title": "Live Stream Sync",
        "desc": "Real-time overlay of calorie burn data onto the gym's monitoring terminal."
      }
    ]
  },
  "bio-twin": {
    "id": "bio-twin",
    "title": "3D Bio-Digital Twin",
    "description": "Visual 3D avatar that updates as members gain muscle or lose fat. See your progress in high definition.",
    "details": "The Bio-Digital Twin is a high-fidelity 3D representation of the member. As they log weight and measurements, the twin updates, showing exactly where they are gaining muscle and losing fat in a visually stunning interface.",
    "icon": "UserCheck",
    "gradient": "from-blue-500/20 via-slate-900 to-slate-900",
    "benefits": [
      "Visual Body Mapping",
      "Muscle Mass Heatmaps",
      "Fat Distribution Tracking",
      "Motivational Progress"
    ],
    "stats": [
      {
        "label": "Rendering",
        "value": "WebGL",
        "icon": "User"
      },
      {
        "label": "Points",
        "value": "50k+",
        "icon": "Activity"
      },
      {
        "label": "Sync",
        "value": "Real-time",
        "icon": "Zap"
      }
    ],
    "technicalSpecs": [
      {
        "label": "Latency",
        "value": "< 2s"
      },
      {
        "label": "AI Model",
        "value": "CLLERO-Morph-V1"
      },
      {
        "label": "Integration",
        "value": "Unity/WebGL"
      },
      {
        "label": "Platform",
        "value": "3D Rendering"
      }
    ],
    "architecture": [
      {
        "title": "Morphological Engine",
        "desc": "Procedural 3D modeling system that adjusts avatar geometry based on body measurements."
      },
      {
        "title": "Composition Heatmaps",
        "desc": "Visual overlays that highlight muscle growth and fat loss areas on the 3D model."
      },
      {
        "title": "Progress Timeline",
        "desc": "Time-lapse visualization allowing members to see their physical evolution over months."
      }
    ]
  },
  "sales-nudge": {
    "id": "sales-nudge",
    "title": "Direct Sales Nudge",
    "description": "AI sales bot sends personalized 'Decision Pitches' to unconverted leads. Close more deals automatically.",
    "details": "Our AI analyzes why a lead hasn't converted and crafts a personalized direct message addressing their specific concerns\u2014whether it's pricing, timing, or goal-alignment\u2014increasing conversion rates by 15%.",
    "icon": "Zap",
    "gradient": "from-orange-500/20 via-slate-900 to-slate-900",
    "benefits": [
      "Automated Follow-ups",
      "Personalized Pitching",
      "Lead Re-engagement",
      "Conversion Optimization"
    ],
    "stats": [
      {
        "label": "Sentiment",
        "value": "Analyzed",
        "icon": "Brain"
      },
      {
        "label": "Pitch",
        "value": "Dynamic",
        "icon": "Zap"
      },
      {
        "label": "Conversion",
        "value": "Tracked",
        "icon": "UserPlus"
      }
    ],
    "technicalSpecs": [
      {
        "label": "Latency",
        "value": "< 1s"
      },
      {
        "label": "AI Model",
        "value": "CLLERO-SalesBot-V1"
      },
      {
        "label": "Integration",
        "value": "Direct Messaging API"
      },
      {
        "label": "Platform",
        "value": "Conversational AI"
      }
    ],
    "architecture": [
      {
        "title": "Lead Sentiment Analysis",
        "desc": "NLP engine that analyzes previous interactions to determine lead hesitation points."
      },
      {
        "title": "Dynamic Pitch Generator",
        "desc": "Generates personalized sales copy tailored to the individual lead's goals and objections."
      },
      {
        "title": "Conversion Tracker",
        "desc": "Monitors the effectiveness of different nudge strategies to optimize future pitches."
      }
    ]
  },
  "trainer-scorecard": {
    "id": "trainer-scorecard",
    "title": "Trainer Scorecard",
    "description": "Tracks response times to injury alerts and diet update frequency. Accountability for your staff.",
    "details": "The Trainer Scorecard provides a transparent view of staff performance. Owners can see who is responding fastest to AI-triggered injury alerts and who is most consistent with member diet updates.",
    "icon": "Star",
    "gradient": "from-emerald-500/20 via-slate-900 to-slate-900",
    "benefits": [
      "Staff Accountability",
      "Response Time Metrics",
      "Client Satisfaction Scores",
      "Performance Bonuses"
    ],
    "stats": [
      {
        "label": "KPIs",
        "value": "Aggregated",
        "icon": "Database"
      },
      {
        "label": "Scoring",
        "value": "Weighted",
        "icon": "Target"
      },
      {
        "label": "Ranking",
        "value": "Visual",
        "icon": "UserPlus"
      }
    ],
    "technicalSpecs": [
      {
        "label": "Latency",
        "value": "< 100ms"
      },
      {
        "label": "AI Model",
        "value": "CLLERO-KPI-V1"
      },
      {
        "label": "Integration",
        "value": "Owner Terminal"
      },
      {
        "label": "Platform",
        "value": "Performance Metrics"
      }
    ],
    "architecture": [
      {
        "title": "KPI Aggregator",
        "desc": "Collects data on response times, task completion, and member feedback for every trainer."
      },
      {
        "title": "Scoring Algorithm",
        "desc": "Weighted model that calculates an overall performance score based on multiple metrics."
      },
      {
        "title": "Leaderboard Engine",
        "desc": "Visual ranking system for owners to identify top-performing staff members."
      }
    ]
  },
  "silent-quit": {
    "id": "silent-quit",
    "title": "Silent-Quit Prediction",
    "description": "Behavioral AI flags 'at-risk' members before they even miss a session. Retention before the loss.",
    "details": "Our AI identifies subtle changes in gym behavior\u2014shorter sessions, less intensity, or changing visit times\u2014that correlate with churn. It flags these members to staff up to 14 days before they actually quit.",
    "icon": "AlertTriangle",
    "gradient": "from-purple-500/20 via-slate-900 to-slate-900",
    "benefits": [
      "Early Warning System",
      "Behavioral Pattern AI",
      "Churn Risk Scoring",
      "Automated Retention"
    ],
    "stats": [
      {
        "label": "Prediction Accuracy",
        "value": "94%",
        "icon": "Brain"
      },
      {
        "label": "Lead Time",
        "value": "14 Days",
        "icon": "Clock"
      },
      {
        "label": "Churn Reduction",
        "value": "18%",
        "icon": "UserPlus"
      }
    ],
    "technicalSpecs": [
      {
        "label": "Latency",
        "value": "< 500ms"
      },
      {
        "label": "AI Model",
        "value": "CLLERO-Churn-V2"
      },
      {
        "label": "Integration",
        "value": "Retention Dashboard"
      },
      {
        "label": "Platform",
        "value": "Predictive AI"
      }
    ],
    "architecture": [
      {
        "title": "Behavioral Anomaly Detector",
        "desc": "Identifies deviations from a member's established gym-going habits."
      },
      {
        "title": "Churn Risk Model",
        "desc": "Probabilistic model that calculates the likelihood of a member quitting based on behavior."
      },
      {
        "title": "Retention Workflow",
        "desc": "Automated triggers that alert staff to perform a 'Retention Check-in' with at-risk members."
      }
    ]
  },
  "weight-velocity": {
    "id": "weight-velocity",
    "title": "Weight Velocity Analytics",
    "description": "Gym-side integrity logging with monthly progress curves for owners. Verified results for every member.",
    "details": "We track the 'velocity' of weight change. By logging weights on the gym floor, we ensure data integrity and provide owners with a clear view of how many members are actually achieving their desired results.",
    "icon": "UserPlus",
    "gradient": "from-blue-500/20 via-slate-900 to-slate-900",
    "benefits": [
      "Verified Progress Data",
      "Velocity Curve Mapping",
      "Integrity Logging",
      "Result Verification"
    ],
    "stats": [
      {
        "label": "Integrity",
        "value": "High",
        "icon": "Shield"
      },
      {
        "label": "Velocity",
        "value": "Mapped",
        "icon": "UserPlus"
      },
      {
        "label": "Reporting",
        "value": "Hub",
        "icon": "FolderKanban"
      }
    ],
    "technicalSpecs": [
      {
        "label": "Latency",
        "value": "< 100ms"
      },
      {
        "label": "AI Model",
        "value": "CLLERO-Stats-V1"
      },
      {
        "label": "Integration",
        "value": "Gym-side App"
      },
      {
        "label": "Platform",
        "value": "Data Integrity"
      }
    ],
    "architecture": [
      {
        "title": "Integrity Logging System",
        "desc": "Secure interface for trainers to log member weights directly on the gym floor."
      },
      {
        "title": "Velocity Calculator",
        "desc": "Calculates the rate of weight change over time to identify progress plateaus."
      },
      {
        "title": "Owner Reporting Hub",
        "desc": "Aggregated view of member results to verify the gym's overall effectiveness."
      }
    ]
  },
  "expense-management": {
    "id": "expense-management",
    "title": "Expense Management",
    "description": "Digital tracking of rent, electricity, inventory, and maintenance costs. Total financial control.",
    "details": "Stop losing money to unmanaged expenses. Our digital ledger tracks every rupee spent on rent, electricity, and inventory, providing a clear picture of your gym's financial health at all times.",
    "icon": "DollarSign",
    "gradient": "from-slate-500/20 via-slate-900 to-slate-900",
    "benefits": [
      "Digital Receipt Hub",
      "Automated Bill Alerts",
      "Inventory Tracking",
      "Maintenance Logs"
    ],
    "stats": [
      {
        "label": "Ledger",
        "value": "Digital",
        "icon": "Database"
      },
      {
        "label": "Control",
        "value": "Total",
        "icon": "Shield"
      },
      {
        "label": "Tracking",
        "value": "Real-time",
        "icon": "Clock"
      }
    ],
    "technicalSpecs": [
      {
        "label": "Latency",
        "value": "< 50ms"
      },
      {
        "label": "AI Model",
        "value": "CLLERO-Finance-V1"
      },
      {
        "label": "Integration",
        "value": "Bank Sync Ready"
      },
      {
        "label": "Platform",
        "value": "Digital Ledger"
      }
    ],
    "architecture": [
      {
        "title": "Expense Categorizer",
        "desc": "Automatically sorts expenses into rent, utilities, staff, and inventory categories."
      },
      {
        "title": "Inventory Monitor",
        "desc": "Tracks stock levels of supplements and gym supplies with automated reorder alerts."
      },
      {
        "title": "Financial Health Engine",
        "desc": "Calculates burn rate and runway based on current expenses and revenue trends."
      }
    ]
  },
  "profit-loss": {
    "id": "profit-loss",
    "title": "Profit/Loss Intelligence",
    "description": "Real-time calculation of operational expenses vs. revenue via 3D graphs. Business clarity in 3D.",
    "details": "Visualize your gym's profitability like never before. Our 3D financial engine maps revenue against operational costs, showing you exactly where your margins are healthiest and where they are being squeezed.",
    "icon": "TrendingUp",
    "gradient": "from-emerald-500/20 via-slate-900 to-slate-900",
    "benefits": [
      "Real-time P&L",
      "3D Financial Graphs",
      "Margin Analysis",
      "Revenue Forecasting"
    ],
    "stats": [
      {
        "label": "Update",
        "value": "Real-time",
        "icon": "Clock"
      },
      {
        "label": "Visuals",
        "value": "3D Engine",
        "icon": "TrendingUp"
      },
      {
        "label": "Insights",
        "value": "Financial",
        "icon": "DollarSign"
      }
    ],
    "technicalSpecs": [
      {
        "label": "Latency",
        "value": "< 100ms"
      },
      {
        "label": "AI Model",
        "value": "CLLERO-Profit-V1"
      },
      {
        "label": "Integration",
        "value": "Terminal Sync"
      },
      {
        "label": "Platform",
        "value": "3D Financial Engine"
      }
    ],
    "architecture": [
      {
        "title": "Real-time P&L Engine",
        "desc": "Instantly calculates net profit by subtracting live expenses from revenue streams."
      },
      {
        "title": "3D Visualization Layer",
        "desc": "Renders financial data as interactive 3D graphs for intuitive margin analysis."
      },
      {
        "title": "Forecasting Model",
        "desc": "Predicts future profitability based on historical data and current growth trends."
      }
    ]
  },
  "leakage-alerts": {
    "id": "leakage-alerts",
    "title": "Financial Leakage Alerts",
    "description": "AI-driven detection of unusual spikes in expenses to protect margins. Automated fraud detection.",
    "details": "Our AI monitors your expense patterns. If it detects an unusual spike in electricity usage or a sudden increase in inventory costs, it alerts you immediately, preventing financial leakage before it impacts your bottom line.",
    "icon": "AlertOctagon",
    "gradient": "from-red-500/20 via-slate-900 to-slate-900",
    "benefits": [
      "Anomaly Detection",
      "Fraud Prevention",
      "Spike Notifications",
      "Margin Protection"
    ],
    "stats": [
      {
        "label": "Detection",
        "value": "AI-Driven",
        "icon": "Brain"
      },
      {
        "label": "Alerts",
        "value": "Instant",
        "icon": "Zap"
      },
      {
        "label": "Protection",
        "value": "Margins",
        "icon": "Shield"
      }
    ],
    "technicalSpecs": [
      {
        "label": "Latency",
        "value": "< 500ms"
      },
      {
        "label": "AI Model",
        "value": "CLLERO-Leak-V1"
      },
      {
        "label": "Integration",
        "value": "Push Notifications"
      },
      {
        "label": "Platform",
        "value": "Anomaly Detection"
      }
    ],
    "architecture": [
      {
        "title": "Anomaly Detection Engine",
        "desc": "Machine learning model that identifies statistical outliers in daily and monthly expenses."
      },
      {
        "title": "Pattern Recognition AI",
        "desc": "Identifies recurring expense spikes that may indicate operational inefficiencies or fraud."
      },
      {
        "title": "Alert Routing System",
        "desc": "Instantly notifies the owner via the terminal and mobile app when leakage is detected."
      }
    ]
  },
  "multi-factor": {
    "id": "multi-factor",
    "title": "Multi-Factor Analysis",
    "description": "Graph-based representation of attendance, nutrition, and revenue growth. Holistic business views.",
    "details": "See how attendance impacts revenue and how nutrition impacts retention. Our Multi-Factor Analysis tool correlates disparate data points to give you a holistic view of your gym's ecosystem.",
    "icon": "PieChart",
    "gradient": "from-blue-500/20 via-slate-900 to-slate-900",
    "benefits": [
      "Holistic Data View",
      "Cross-Factor Correlation",
      "Growth Strategy AI",
      "Custom Dashboards"
    ],
    "stats": [
      {
        "label": "Factors",
        "value": "Multiple",
        "icon": "Activity"
      },
      {
        "label": "Correlation",
        "value": "AI-Sync",
        "icon": "Zap"
      },
      {
        "label": "Views",
        "value": "Holistic",
        "icon": "FolderKanban"
      }
    ],
    "technicalSpecs": [
      {
        "label": "Latency",
        "value": "< 300ms"
      },
      {
        "label": "AI Model",
        "value": "CLLERO-Correlation-V1"
      },
      {
        "label": "Integration",
        "value": "Full Ecosystem Sync"
      },
      {
        "label": "Platform",
        "value": "Multi-Factor Analytics"
      }
    ],
    "architecture": [
      {
        "title": "Correlation Engine",
        "desc": "Analyzes relationships between different data factors like attendance, diet, and revenue."
      },
      {
        "title": "Holistic Dashboard",
        "desc": "Integrated view that displays multiple growth factors on a single, interactive graph."
      },
      {
        "title": "Strategy Suggestion AI",
        "desc": "Recommends business actions based on identified correlations between data points."
      }
    ]
  },
  "mobile-app": {
    "id": "mobile-app",
    "title": "Member Mobile App",
    "description": "Dedicated AI-tier app with diet inbox, workout viewer, and progress curves. The gym in their pocket.",
    "details": "The CLLERO FIT Member App is the portal to their fitness journey. It features a high-fidelity interface where members can view their AI-generated diets, track their workouts, and see their Bio-Digital Twin evolve.",
    "icon": "Smartphone",
    "gradient": "from-cyan-500/20 via-slate-900 to-slate-900",
    "benefits": [
      "Personalized Diet Inbox",
      "Interactive Workouts",
      "Progress Velocity Curves",
      "Direct Trainer Chat"
    ],
    "stats": [
      {
        "label": "Security",
        "value": "Enterprise",
        "icon": "Shield"
      },
      {
        "label": "Latency",
        "value": "< 30ms",
        "icon": "Zap"
      },
      {
        "label": "Impact",
        "value": "+25% Engagement",
        "icon": "UserPlus"
      }
    ],
    "technicalSpecs": [
      {
        "label": "Latency",
        "value": "< 30ms"
      },
      {
        "label": "AI Model",
        "value": "CLLERO-Mobile-V2"
      },
      {
        "label": "Integration",
        "value": "iOS/Android Native"
      },
      {
        "label": "Platform",
        "value": "Member Portal"
      }
    ],
    "architecture": [
      {
        "title": "Mobile Sync Engine",
        "desc": "Ensures real-time synchronization of diets, workouts, and progress data with the cloud."
      },
      {
        "title": "Interactive UI Framework",
        "desc": "Custom-built mobile UI components optimized for fitness tracking and data visualization."
      },
      {
        "title": "Secure Data Vault",
        "desc": "On-device storage for personal health data with biometric authentication support."
      }
    ]
  }
};
