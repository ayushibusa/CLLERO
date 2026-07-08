export interface PanelModule {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  icon: string; // lucide icon name
}

export interface Panel {
  id: string;
  label: string;
  tagline: string;
  color: string;
  accentColor: string;
  bgGradient: string;
  modules: PanelModule[];
}

export const panels: Panel[] = [
  {
    id: "gym-admin",
    label: "Gym Admin",
    tagline: "Complete business command centre for gym owners",
    color: "cyan",
    accentColor: "#06b6d4",
    bgGradient: "from-cyan-50 to-sky-50",
    modules: [
      {
        id: "admin-dashboard",
        name: "Admin Dashboard",
        shortDesc: "Live revenue, attendance & real-time alerts at a glance.",
        fullDesc: "Total members, active/expired count, today's attendance, monthly revenue. Bar & pie charts. Quick action buttons. Real-time alerts for dues, renewals, and new enquiries.",
        icon: "BarChart3",
      },
      {
        id: "member-management",
        name: "Member Management",
        shortDesc: "Add, edit, and manage all gym members from one place.",
        fullDesc: "Add/edit/delete members. Assign membership plan, upload photo & documents (Aadhaar). Full member profile. Search, filter, export to Excel. Bulk SMS/WhatsApp messaging to all or filtered members.",
        icon: "Users",
      },
      {
        id: "attendance-management",
        name: "Attendance Management",
        shortDesc: "QR check-in with manual override and monthly export.",
        fullDesc: "QR code check-in + manual attendance marking. View attendance by date, member, or class. Monthly attendance sheet export. Late-comer & absent automatic alerts sent to members.",
        icon: "ScanLine",
      },
      {
        id: "fee-payment",
        name: "Fee & Payment Management",
        shortDesc: "Record payments, generate receipts & track dues automatically.",
        fullDesc: "Record payments, generate & print receipts. Pending dues list with overdue auto-reminders via WhatsApp. WhatsApp invoice sharing. Daily and monthly revenue reports with graphical breakdown.",
        icon: "CreditCard",
      },
      {
        id: "membership-plans",
        name: "Membership Plan Management",
        shortDesc: "Create, edit and track all membership plans.",
        fullDesc: "Add/edit/delete membership plans (name, duration, price, features). Plan-wise member count view. Seasonal offer & discount setup. Auto-expiry tracking with renewal alerts.",
        icon: "Layers",
      },
      {
        id: "trainer-staff",
        name: "Trainer & Staff Management",
        shortDesc: "Manage all trainers and staff with salary & attendance.",
        fullDesc: "Add/edit trainers & staff with photo, specialization, and salary setup. Assign classes to trainers. Staff attendance tracking. Salary slip generation and payment history log.",
        icon: "Dumbbell",
      },
      {
        id: "class-schedule",
        name: "Class Schedule Management",
        shortDesc: "Build and publish class timetables for all members.",
        fullDesc: "Create and manage class timetables (Yoga, Zumba, CrossFit, etc.). Assign trainers to each class slot. Set capacity limits and timing. Members can view and book from their app.",
        icon: "Calendar",
      },
      {
        id: "diet-assignment-admin",
        name: "Diet Assignment (Admin)",
        shortDesc: "Assign diet plans to members directly from the admin panel.",
        fullDesc: "Admin can create and assign diet plans to members when no dietitian is assigned. Supports day-wise meal plan builder. View all assigned plans across all members in one dashboard.",
        icon: "UtensilsCrossed",
      },
      {
        id: "reports",
        name: "Reports & Analytics",
        shortDesc: "Comprehensive reports with charts and PDF/Excel export.",
        fullDesc: "Generate membership reports, revenue reports, attendance reports, and trainer performance reports. Visual charts (bar, pie, line). Export as PDF or Excel. Schedule automated monthly reports.",
        icon: "TrendingUp",
      },
      {
        id: "notifications-admin",
        name: "Notifications & Broadcasts",
        shortDesc: "Send bulk messages and push alerts to all members.",
        fullDesc: "Send gym-wide announcements, renewal reminders, motivational messages, and class change alerts. Supports Push Notification + WhatsApp bulk messaging. Target by membership plan or status.",
        icon: "Bell",
      },
      {
        id: "expense-management",
        name: "Expense Management",
        shortDesc: "Track all gym operational expenses and profit/loss.",
        fullDesc: "Log daily/monthly gym expenses (electricity, rent, equipment, salaries). Auto-calculate profit/loss. Graphical expense vs revenue chart. Export monthly expense report as PDF.",
        icon: "Receipt",
      },
      {
        id: "enquiry-management",
        name: "Enquiry Management",
        shortDesc: "Capture and convert walk-in and digital leads.",
        fullDesc: "All enquiry form submissions from the member app appear here. View lead details, follow-up status, and conversion history. Send WhatsApp reply directly from the panel. Track lead-to-member conversion rate.",
        icon: "MessageSquare",
      },
    ],
  },
  {
    id: "trainer",
    label: "Trainer",
    tagline: "Everything a trainer needs to manage clients and classes",
    color: "violet",
    accentColor: "#7c3aed",
    bgGradient: "from-violet-50 to-purple-50",
    modules: [
      {
        id: "trainer-login",
        name: "Trainer Login & Profile",
        shortDesc: "Secure login with a full editable trainer profile.",
        fullDesc: "Secure trainer login with OTP or email/password. Edit own profile including photo, bio, specialization, and certifications. View own class schedule and list of assigned members at a glance.",
        icon: "UserCheck",
      },
      {
        id: "assigned-classes",
        name: "My Assigned Classes",
        shortDesc: "Day-wise and weekly class schedule with full details.",
        fullDesc: "View day-wise and weekly class schedule. See class details including time, room, and capacity. Submit cancel/reschedule requests to admin. View full class history and attendance records per class.",
        icon: "Calendar",
      },
      {
        id: "member-list-trainer",
        name: "Member List",
        shortDesc: "View and contact all members assigned to you.",
        fullDesc: "View all members assigned to the trainer. See member profile, membership status, and contact details. Search and filter by name or membership type. Quick WhatsApp link for direct contact.",
        icon: "Users",
      },
      {
        id: "attendance-marking",
        name: "Attendance Marking",
        shortDesc: "Mark class attendance: present, absent, or late.",
        fullDesc: "Mark attendance for each class session with Present / Absent / Late options. View attendance history per class and per member. Export class-wise attendance sheet. Automatic alert to admin for consistent absences.",
        icon: "ScanLine",
      },
      {
        id: "diet-workout-assignment",
        name: "Diet & Workout Assignment",
        shortDesc: "Create and assign personalised plans to members.",
        fullDesc: "Create and assign custom diet plans and workout routines to specific members. Access a template library for quick assignment. Day-wise plan builder with sets, reps, and meal-time slots. Track plan updates over time.",
        icon: "Dumbbell",
      },
      {
        id: "member-progress",
        name: "Member Progress Tracking",
        shortDesc: "Log and visualise each member's fitness progress.",
        fullDesc: "Log member progress including weight, body measurements, reps, and sets over time. View progress charts visually. Share progress report directly with the member via in-app or WhatsApp.",
        icon: "TrendingUp",
      },
      {
        id: "chat-members-trainer",
        name: "Chat with Members",
        shortDesc: "1-on-1 in-app chat with assigned members.",
        fullDesc: "In-app 1-on-1 chat with assigned members. Send text, images, and PDF files (workout plans, diet charts). View full message history. Unread badge notification. No WhatsApp dependency.",
        icon: "MessageSquare",
      },
      {
        id: "fee-collection-trainer",
        name: "Fee Collection",
        shortDesc: "Record cash fee collections on behalf of the gym.",
        fullDesc: "Trainer can record cash fee collections from members on behalf of the gym. Generate receipt on the spot. Submitted collections are forwarded to admin for daily reconciliation. Full collection history log.",
        icon: "CreditCard",
      },
      {
        id: "salary-view",
        name: "Salary View",
        shortDesc: "View salary, incentives, and monthly salary slips.",
        fullDesc: "View own salary details including base pay, incentives, and any deductions. Download monthly salary slip as PDF. Full payment history log. Raise salary queries directly to admin from this screen.",
        icon: "Receipt",
      },
      {
        id: "notification-members",
        name: "Notification to Members",
        shortDesc: "Send reminders and motivational messages to members.",
        fullDesc: "Send class updates, session reminders, and motivational messages to assigned members. Supports Push Notification + WhatsApp option. Schedule notifications in advance for upcoming sessions.",
        icon: "Bell",
      },
    ],
  },
  {
    id: "dietitian",
    label: "Dietitian",
    tagline: "Full nutrition management suite for dietitians",
    color: "emerald",
    accentColor: "#059669",
    bgGradient: "from-emerald-50 to-green-50",
    modules: [
      {
        id: "dietitian-login",
        name: "Dietitian Login & Profile",
        shortDesc: "Secure login with an editable professional profile.",
        fullDesc: "Secure dietitian login with OTP or email/password. Edit own profile including photo, bio, area of specialization, and certifications. View all currently assigned members in one overview screen.",
        icon: "UserCheck",
      },
      {
        id: "assigned-member-list",
        name: "Assigned Member List",
        shortDesc: "View all your members with health profiles and dietary needs.",
        fullDesc: "View all members assigned to the dietitian. See each member's full health profile, dietary preferences, allergies, and medical notes. Search and filter by name, goal, or diet type. Quick contact options.",
        icon: "Users",
      },
      {
        id: "diet-plan-builder",
        name: "Diet Plan Builder",
        shortDesc: "Create custom day-wise and week-wise meal plans.",
        fullDesc: "Create custom diet plans with meal-wise slots (breakfast, lunch, dinner, snacks). Built-in calorie and macro calculator. Build day-wise and week-wise plans. Assign directly to a member or save as a reusable template.",
        icon: "UtensilsCrossed",
      },
      {
        id: "diet-plan-template",
        name: "Diet Plan Template Library",
        shortDesc: "Pre-built templates for common fitness goals.",
        fullDesc: "Access a library of pre-built diet templates for weight loss, muscle gain, diabetic management, keto, and more. Save your own custom templates for reuse. Quick-assign any template to a member with one tap.",
        icon: "Layers",
      },
      {
        id: "member-progress-diet",
        name: "Member Progress & Chart Tracking",
        shortDesc: "Log weight, BMI, and body measurements with visual charts.",
        fullDesc: "Log weight, BMI, and body measurements over time for each member. View visual progress charts. Compare current stats against diet plan goals. Identify members who are off-track for timely intervention.",
        icon: "TrendingUp",
      },
      {
        id: "chat-members-dietitian",
        name: "In-App Chat with Members",
        shortDesc: "1-on-1 consultation chat with your members.",
        fullDesc: "1-on-1 chat between dietitian and assigned members. Share text, images, and PDF diet charts. Full message history with unread badge notifications. No external messaging apps needed.",
        icon: "MessageSquare",
      },
      {
        id: "notifications-reminders",
        name: "Notifications & Reminders",
        shortDesc: "Send meal reminders and motivational messages to members.",
        fullDesc: "Send meal reminders, follow-up notifications, and motivational messages to members. Supports Push Notification + WhatsApp option. Schedule recurring reminders for specific meal times or weigh-in days.",
        icon: "Bell",
      },
      {
        id: "dietitian-reports",
        name: "Reports & Analytics",
        shortDesc: "Member adherence and plan effectiveness reports.",
        fullDesc: "Generate member adherence reports, plan effectiveness summaries, and monthly client progress reports. Visual charts to track progress trends. Export full reports as PDF for sharing with members or gym admin.",
        icon: "BarChart3",
      },
    ],
  },
  {
    id: "member",
    label: "Member",
    tagline: "Everything a gym member needs in their pocket",
    color: "amber",
    accentColor: "#d97706",
    bgGradient: "from-amber-50 to-orange-50",
    modules: [
      {
        id: "home-gym-info",
        name: "Home & Gym Info",
        shortDesc: "Gym details, timings, announcements, and facilities.",
        fullDesc: "View gym name, address, timings, and contact details. Hero banner with image/video slider. Gym announcements and news feed. About gym section with facilities showcase and photo gallery.",
        icon: "Building2",
      },
      {
        id: "membership-plans-display",
        name: "Membership Plans Display",
        shortDesc: "Browse all plans with pricing and features comparison.",
        fullDesc: "View all available membership plans (monthly, quarterly, yearly). Plan comparison table with pricing and features list. WhatsApp / Call CTA for direct enquiry. Seasonal offer badges highlighted.",
        icon: "Layers",
      },
      {
        id: "class-schedule-viewer",
        name: "Class & Schedule Viewer",
        shortDesc: "Browse weekly class timetable and book your slot.",
        fullDesc: "View the weekly class timetable for Yoga, Zumba, CrossFit, and other classes. See trainer name, timing, and available capacity. Filter by day or class type. Calendar view for the full week.",
        icon: "Calendar",
      },
      {
        id: "gallery-testimonials",
        name: "Gallery & Testimonials",
        shortDesc: "Gym photos, before/after results, and member reviews.",
        fullDesc: "View gym photo and video gallery. Before and after transformation photos. YouTube embed for promotional videos. Member star ratings and written reviews section.",
        icon: "Star",
      },
      {
        id: "enquiry-contact",
        name: "Enquiry / Contact Form",
        shortDesc: "Send enquiries directly to the gym admin.",
        fullDesc: "Submit enquiry form with name, phone, and message. Quick WhatsApp and call link buttons. Google Maps embed for gym location. Form data is saved directly in the Admin panel for follow-up.",
        icon: "MessageSquare",
      },
      {
        id: "member-login-profile",
        name: "Member Login & Profile",
        shortDesc: "Secure login with QR code, profile, and membership details.",
        fullDesc: "Phone OTP or email-password login. View own membership details and expiry date. Edit personal info and upload profile photo. Personal QR code for gym check-in at the front desk.",
        icon: "UserCheck",
      },
      {
        id: "attendance-payment-history",
        name: "Attendance & Payment History",
        shortDesc: "View your attendance log and payment receipts.",
        fullDesc: "View own attendance log in calendar view. Access payment receipts and due date alerts. Download or share receipt as PDF. Automatic renewal reminder notifications before membership expiry.",
        icon: "Receipt",
      },
      {
        id: "diet-workout-viewer",
        name: "Diet & Workout Plan Viewer",
        shortDesc: "View your assigned workout and diet plans day by day.",
        fullDesc: "View trainer-assigned diet and workout plans. Day-wise plan view for easy daily reference. Download plan as PDF. Log personal progress (weight, reps) directly from this screen.",
        icon: "Dumbbell",
      },
      {
        id: "online-booking",
        name: "Online Membership Booking",
        shortDesc: "Book a trial class or new membership online.",
        fullDesc: "Submit an online membership enquiry or trial class booking form. Admin receives instant notification on new booking request. Confirmation sent to member via WhatsApp. No in-person visit needed to start.",
        icon: "CalendarCheck",
      },
    ],
  },
];

export const getPanelById = (id: string): Panel | undefined =>
  panels.find((p) => p.id === id);
