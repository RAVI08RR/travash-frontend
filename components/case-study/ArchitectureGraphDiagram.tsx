'use client'

import React from 'react'
import {
  Building2,
  Shield,
  ShieldCheck,
  FileText,
  Database,
  Cog,
  CheckCircle2,
  AlertTriangle,
  Target,
  Cpu,
  Layers,
  Zap,
  Cloud,
  Lock,
  Smartphone,
  Laptop,
  Globe,
  RefreshCw,
  Search,
  Users,
  Check,
  Bot,
  Truck,
  Hotel,
  ShoppingCart,
  PhoneCall,
  Activity,
  Server,
  ArrowRight,
} from 'lucide-react'

export interface ArchNode {
  title: string
  subtitle: string
  icon: string
}

export interface ArchBranch {
  status: string
  statusColor: 'green' | 'red' | 'amber' | 'blue'
  action: string
  nextStep: string
  icon: string
}

export interface ArchPrincipleStep {
  title: string
  icon: string
}

export interface CaseStudyArchitectureData {
  flowTitle?: string
  nodes: ArchNode[]
  branches: ArchBranch[]
  corePrinciple: {
    label: string
    steps: ArchPrincipleStep[]
  }
}

// Icon mapper
function renderIcon(iconName: string, className = 'w-5 h-5 text-[#02487D]') {
  switch (iconName) {
    case 'building':
    case 'rpo':
      return <Building2 className={className} />
    case 'shield':
      return <Shield className={className} />
    case 'shield-check':
      return <ShieldCheck className={className} />
    case 'file':
    case 'document':
      return <FileText className={className} />
    case 'database':
      return <Database className={className} />
    case 'gear':
    case 'workflow':
      return <Cog className={className} />
    case 'bot':
    case 'ai':
      return <Bot className={className} />
    case 'phone':
      return <PhoneCall className={className} />
    case 'layers':
      return <Layers className={className} />
    case 'zap':
      return <Zap className={className} />
    case 'cloud':
      return <Cloud className={className} />
    case 'lock':
      return <Lock className={className} />
    case 'phone-app':
    case 'mobile':
      return <Smartphone className={className} />
    case 'laptop':
    case 'web':
      return <Laptop className={className} />
    case 'truck':
      return <Truck className={className} />
    case 'hotel':
      return <Hotel className={className} />
    case 'cart':
      return <ShoppingCart className={className} />
    case 'activity':
      return <Activity className={className} />
    case 'server':
      return <Server className={className} />
    case 'search':
      return <Search className={className} />
    case 'users':
      return <Users className={className} />
    case 'target':
      return <Target className={className} />
    case 'alert':
      return <AlertTriangle className={className} />
    case 'check':
      return <CheckCircle2 className={className} />
    default:
      return <Cpu className={className} />
  }
}

// Tailored Architecture Catalog
export const ARCHITECTURE_CATALOG: Record<string, CaseStudyArchitectureData> = {
  // 1. SATYAPAAN
  satyapaan: {
    flowTitle: 'AI-Assisted Passport Verification Workflow',
    nodes: [
      { title: 'Regional Passport Office (RPO)', subtitle: 'Citizen Intake & Biometrics', icon: 'building' },
      { title: 'Satyaapan Verification Platform', subtitle: 'Automated Processing Engine', icon: 'shield' },
      { title: 'Data Extraction + Facial Recognition', subtitle: 'Biometric Vector Matching', icon: 'file' },
      { title: 'Real-Time Records Matching', subtitle: 'Criminal & Adverse Databases', icon: 'database' },
      { title: 'Automated Verification Workflow', subtitle: 'Deterministic Risk Scoring', icon: 'workflow' },
    ],
    branches: [
      {
        status: 'CLEAR',
        statusColor: 'green',
        action: 'Clearance Generated',
        nextStep: 'Application Proceeds',
        icon: 'check',
      },
      {
        status: 'FLAGGED',
        statusColor: 'red',
        action: 'Application Placed on Hold',
        nextStep: 'Officer / Manager Investigation',
        icon: 'alert',
      },
    ],
    corePrinciple: {
      label: 'Core Principle',
      steps: [
        { title: 'Automate Routine Screening', icon: 'bot' },
        { title: 'Identify Exceptions', icon: 'search' },
        { title: 'Escalate', icon: 'zap' },
        { title: 'Human Investigation', icon: 'users' },
      ],
    },
  },

  // 2. PIXL (AI Voice Calling Agent)
  pixl: {
    flowTitle: 'Real-Time Conversational AI Voice Architecture',
    nodes: [
      { title: 'Inbound Campaign Leads', subtitle: 'Meta / Google / Portal Webhooks', icon: 'users' },
      { title: 'Pixl Conversational Voice Engine', subtitle: 'Twilio SIP & Low-Latency Audio', icon: 'phone' },
      { title: 'Deepgram STT + GPT-4o Reasoning', subtitle: 'Sub-3s Real-Time Inference', icon: 'bot' },
      { title: 'Bi-Directional CRM Synchronization', subtitle: 'Real-Time HubSpot API Pipeline', icon: 'database' },
      { title: 'Qualification & Dispatch Engine', subtitle: 'Dynamic Calendar Booking Logic', icon: 'workflow' },
    ],
    branches: [
      {
        status: 'QUALIFIED',
        statusColor: 'green',
        action: 'Live Site Visit Booked',
        nextStep: 'WhatsApp Confirmation & Calendar Invite Sent',
        icon: 'check',
      },
      {
        status: 'NURTURE',
        statusColor: 'blue',
        action: 'Unreachable / Call Back Later',
        nextStep: 'Automated WhatsApp Drip & Task Scheduled',
        icon: 'workflow',
      },
    ],
    corePrinciple: {
      label: 'Core Principle',
      steps: [
        { title: 'Sub-3s Speed to Lead', icon: 'zap' },
        { title: 'Conversational Voice AI', icon: 'phone' },
        { title: 'Instant Site Visit Booking', icon: 'check' },
        { title: '100% CRM Automation', icon: 'database' },
      ],
    },
  },

  // 3. I4C BANK PORTAL
  'i4c-bank-portal': {
    flowTitle: 'National Cybercrime Coordination & Bank API Infrastructure',
    nodes: [
      { title: 'Pan-India Citizen Complaints', subtitle: 'National Cybercrime Portal (NCRP)', icon: 'building' },
      { title: 'I4C API Hub & Status Engine', subtitle: 'Ministry of Home Affairs Gateway', icon: 'shield-check' },
      { title: 'Mutual TLS & Auth Gateway', subtitle: 'Zero-Trust Bank Interconnect', icon: 'lock' },
      { title: 'Real-Time Multi-Bank APIs', subtitle: 'Live Health & Uptime Monitoring', icon: 'database' },
      { title: 'Automated Freezing Workflow', subtitle: 'Instant Fraud Account Quarantine', icon: 'workflow' },
    ],
    branches: [
      {
        status: 'ONLINE / ACTIVE',
        statusColor: 'green',
        action: 'Immediate Lien / Freeze Dispatched',
        nextStep: 'Bank Executes Automated Account Quarantine',
        icon: 'check',
      },
      {
        status: 'LATENCY SPIKE',
        statusColor: 'amber',
        action: 'Fallback Routing Activated',
        nextStep: 'Bank Nodal Officer Escalated via Priority SMS',
        icon: 'alert',
      },
    ],
    corePrinciple: {
      label: 'Core Principle',
      steps: [
        { title: 'Sub-Second Health Pings', icon: 'zap' },
        { title: 'Fault-Tolerant Routing', icon: 'server' },
        { title: 'Automated Account Freeze', icon: 'lock' },
        { title: 'National Crime Telemetry', icon: 'shield-check' },
      ],
    },
  },

  // 4. UGO (Supply Chain Engine for EGO UK)
  ugo: {
    flowTitle: 'Multi-Portal Supply Chain & Real-Time Inventory Orchestration',
    nodes: [
      { title: 'Omnichannel Inbound Orders', subtitle: 'B2B Trade, Webstore & Mobile App', icon: 'cart' },
      { title: 'UGO Cloud Commerce Platform', subtitle: 'High-Throughput Order Ingestion', icon: 'cloud' },
      { title: 'Real-Time Stock Allocator', subtitle: 'Automated Multi-Depot WMS Routing', icon: 'database' },
      { title: 'Carrier Routing Optimizer', subtitle: 'Dynamic 3PL SLA & Rate Card Engine', icon: 'truck' },
      { title: 'Fulfillment & Dispatch Pipeline', subtitle: 'Automated Pick-Pack-Ship Workflow', icon: 'workflow' },
    ],
    branches: [
      {
        status: 'IN STOCK',
        statusColor: 'green',
        action: 'Same-Day Pick List & Label Issued',
        nextStep: 'Carrier Pickup & Customer Tracking Live',
        icon: 'check',
      },
      {
        status: 'SPLIT / BACKORDER',
        statusColor: 'blue',
        action: 'Multi-Warehouse Allocation',
        nextStep: 'Auto-PO to Factory & Real-Time ETA Updated',
        icon: 'workflow',
      },
    ],
    corePrinciple: {
      label: 'Core Principle',
      steps: [
        { title: 'Omnichannel Ingestion', icon: 'cart' },
        { title: 'Real-Time WMS Allocation', icon: 'database' },
        { title: 'Dynamic Carrier Selection', icon: 'truck' },
        { title: 'Automated SLA Observability', icon: 'activity' },
      ],
    },
  },

  // 5. DIRECT OWNERS (Vacation Rentals Platform)
  'direct-owners': {
    flowTitle: 'Direct Vacation Rental Booking & Channel Manager Architecture',
    nodes: [
      { title: 'Guest Discovery & Search', subtitle: 'High-Performance Web Portal', icon: 'hotel' },
      { title: 'Direct Owners Booking Engine', subtitle: 'Commission-Free Reservation Core', icon: 'shield' },
      { title: 'Bi-Directional iCal Channel Sync', subtitle: 'Airbnb / VRBO Real-Time Calendar Lock', icon: 'refresh' },
      { title: 'Stripe Secure Split-Escrow', subtitle: 'Damage Deposit & Automated Host Payout', icon: 'lock' },
      { title: 'Automated Guest Messaging Hub', subtitle: 'Digital Smart Lock Code Delivery', icon: 'workflow' },
    ],
    branches: [
      {
        status: 'INSTANT BOOKING',
        statusColor: 'green',
        action: 'Payment Confirmed & Calendar Locked',
        nextStep: 'Digital Door Pin & Check-In Guide Dispatched',
        icon: 'check',
      },
      {
        status: 'INQUIRY REVIEW',
        statusColor: 'blue',
        action: 'Host Instant Notification',
        nextStep: '24-Hour Hold Timer & Automated Reminders',
        icon: 'workflow',
      },
    ],
    corePrinciple: {
      label: 'Core Principle',
      steps: [
        { title: 'Zero Middleman Commissions', icon: 'zap' },
        { title: 'Two-Way Channel Sync', icon: 'refresh' },
        { title: 'Escrow Payment Security', icon: 'lock' },
        { title: 'Automated Guest Concierge', icon: 'mobile' },
      ],
    },
  },

  // 6. INDISPARE (B2B Industrial Spare Parts Marketplace)
  indispare: {
    flowTitle: 'Pan-India Industrial Spare Parts Supply Chain Marketplace',
    nodes: [
      { title: 'Plant Engineers & Buyers', subtitle: 'Industrial RFQ & Catalog Search', icon: 'building' },
      { title: 'Indispare Multi-Vendor Platform', subtitle: 'B2B Catalog & Transaction Core', icon: 'cart' },
      { title: 'OEM Part Number Matching Algorithm', subtitle: 'Interchangeable Spec Cross-Referencing', icon: 'cog' },
      { title: 'Dynamic Tiered B2B Pricing', subtitle: 'Automated GST Tax Invoicing & Freight', icon: 'database' },
      { title: 'Verified Supplier Routing', subtitle: 'Mil-Spec Packing & Dispatch Pipeline', icon: 'truck' },
    ],
    branches: [
      {
        status: 'VERIFIED STOCK',
        statusColor: 'green',
        action: 'Supplier PO Generated Instantly',
        nextStep: 'Industrial Freight Booking & Live Consignment GPS',
        icon: 'check',
      },
      {
        status: 'CUSTOM RFQ',
        statusColor: 'blue',
        action: 'Multi-Supplier Bidding Matrix',
        nextStep: 'Lowest Landed Cost Routed for Plant Approval',
        icon: 'workflow',
      },
    ],
    corePrinciple: {
      label: 'Core Principle',
      steps: [
        { title: 'Accurate OEM Cross-Matching', icon: 'cog' },
        { title: 'Transparent B2B Pricing', icon: 'database' },
        { title: 'Verified Supplier Network', icon: 'shield-check' },
        { title: 'Mil-Spec Industrial Logistics', icon: 'truck' },
      ],
    },
  },

  // 7. DOVEHOUSE (High-Speed Capital & Wealth Management SPA)
  dovehouse: {
    flowTitle: 'Sub-Second Headless Investment Platform Architecture',
    nodes: [
      { title: 'Global Institutional Investors', subtitle: 'Wealth Advisors & Family Offices', icon: 'users' },
      { title: 'Next.js Edge Rendering Layer', subtitle: 'Zero-Layout-Shift Static Site Generation', icon: 'laptop' },
      { title: 'Headless Sanity CMS Engine', subtitle: 'Real-Time Fund Metrics & Factsheets', icon: 'cloud' },
      { title: 'Accredited Investor Auth Vault', subtitle: 'Encrypted Confidential Deal Access', icon: 'lock' },
      { title: 'Secure Advisory Dispatch', subtitle: 'Real-Time Partner Notification & CRM', icon: 'workflow' },
    ],
    branches: [
      {
        status: 'ACCREDITED',
        statusColor: 'green',
        action: 'Institutional Pitchbook Unlocked',
        nextStep: 'Direct Senior Partner Calendar Meeting Scheduled',
        icon: 'check',
      },
      {
        status: 'GENERAL INQUIRY',
        statusColor: 'blue',
        action: 'Public Factsheet Delivered',
        nextStep: 'Investor Relations Follow-Up Cadence Initiated',
        icon: 'file',
      },
    ],
    corePrinciple: {
      label: 'Core Principle',
      steps: [
        { title: '100/100 Lighthouse Performance', icon: 'zap' },
        { title: 'Zero-Trust Document Security', icon: 'lock' },
        { title: 'Sub-Second Page Transitions', icon: 'laptop' },
        { title: 'Institutional Market Authority', icon: 'shield-check' },
      ],
    },
  },

  // 8. PEKT (Construction Engineering Platform)
  pekt: {
    flowTitle: 'Construction Management & Site Engineering Workflow',
    nodes: [
      { title: 'Onsite Site Engineers', subtitle: 'Field Tablet Logs, Photos, Snags', icon: 'building' },
      { title: 'PEKT Project Engineering Engine', subtitle: 'Central Cloud Document & BIM Hub', icon: 'layers' },
      { title: 'Offline-First SQLite Sync', subtitle: 'Zero-Coverage Field Synchronization', icon: 'mobile' },
      { title: 'Automated BOQ Requisition Logic', subtitle: 'Budget Variance & Material Auditing', icon: 'database' },
      { title: 'Quality Gate & Sign-Off Engine', subtitle: 'Milestone Completion Verification', icon: 'workflow' },
    ],
    branches: [
      {
        status: 'STAGE APPROVED',
        statusColor: 'green',
        action: 'Milestone Sign-Off Endorsed',
        nextStep: 'Contractor Payment Released & Progress Updated',
        icon: 'check',
      },
      {
        status: 'SNAG FLAGGED',
        statusColor: 'red',
        action: 'Defect Geo-Tagged to Blueprint',
        nextStep: 'Subcontractor Corrective Action SLA Assigned',
        icon: 'alert',
      },
    ],
    corePrinciple: {
      label: 'Core Principle',
      steps: [
        { title: 'Offline Field Ingestion', icon: 'mobile' },
        { title: 'Automated BOQ Auditing', icon: 'database' },
        { title: 'Snag Remediation Gates', icon: 'shield' },
        { title: 'Zero Construction Delays', icon: 'check' },
      ],
    },
  },

  // 9. SKIPR (Autonomous Agentic VPN)
  skipr: {
    flowTitle: 'Autonomous Mesh Routing & Privacy Infrastructure',
    nodes: [
      { title: 'Cross-Platform Client Devices', subtitle: 'macOS, Windows, iOS, Android', icon: 'laptop' },
      { title: 'Skipr AI Network Traffic Analyzer', subtitle: 'Real-Time Threat & Latency Detection', icon: 'bot' },
      { title: 'Kernel-Level WireGuard Tunnel', subtitle: 'Post-Quantum Encryption Protocol', icon: 'lock' },
      { title: 'Zero-Log RAM-Only Mesh Nodes', subtitle: 'Distributed Global Edge Fleet', icon: 'server' },
      { title: 'Autonomous Routing & Kill-Switch', subtitle: 'Sub-50ms Seamless Server Hopping', icon: 'workflow' },
    ],
    branches: [
      {
        status: 'SECURE TUNNEL',
        statusColor: 'green',
        action: 'Zero-Knowledge Tunnel Active',
        nextStep: 'Sub-15ms Latency & Maximum 10Gbps Throughput',
        icon: 'check',
      },
      {
        status: 'THREAT / THROTTLE',
        statusColor: 'blue',
        action: 'Autonomous Node Hop Executed',
        nextStep: 'Zero Packet Drop & Continuous Kill-Switch Guard',
        icon: 'workflow',
      },
    ],
    corePrinciple: {
      label: 'Core Principle',
      steps: [
        { title: 'Zero-Log RAM-Only Fleet', icon: 'server' },
        { title: 'Autonomous Route Optimization', icon: 'bot' },
        { title: 'Kernel-Level WireGuard Speed', icon: 'zap' },
        { title: 'True Digital Sovereignty', icon: 'lock' },
      ],
    },
  },

  // 10. DINE-DESK (Restaurant Management & POS System)
  'dine-desk': {
    flowTitle: 'Real-Time Table Management & Kitchen Synchronization Architecture',
    nodes: [
      { title: 'Guest Booking Channels', subtitle: 'Web, Google Reserve, Mobile App', icon: 'mobile' },
      { title: 'DineDesk Floor Management Hub', subtitle: 'Dynamic Interactive Seating Matrix', icon: 'hotel' },
      { title: 'Kitchen Display System (KDS)', subtitle: 'Course-Fired Real-Time Cook Times', icon: 'cog' },
      { title: 'Contactless Pay-at-Table POS', subtitle: 'Split Bills, Apple Pay, Loyalty Accrual', icon: 'lock' },
      { title: 'Diner Intelligence & CRM', subtitle: 'Preference History & Automated Reviews', icon: 'workflow' },
    ],
    branches: [
      {
        status: 'TABLE SEATED',
        statusColor: 'green',
        action: 'Server Station Notified Instantly',
        nextStep: 'Kitchen Station Order Fired in Priority Sequence',
        icon: 'check',
      },
      {
        status: 'WAITLISTED',
        statusColor: 'blue',
        action: 'Live Dynamic Wait Time Estimated',
        nextStep: 'Two-Way SMS Ready Alert Dispatched to Guest',
        icon: 'workflow',
      },
    ],
    corePrinciple: {
      label: 'Core Principle',
      steps: [
        { title: 'Faster Table Turns', icon: 'zap' },
        { title: 'Zero Reservation Gaps', icon: 'check' },
        { title: 'Real-Time KDS Synchronization', icon: 'cog' },
        { title: 'Frictionless Table Checkout', icon: 'lock' },
      ],
    },
  },

  // 11. DARPAN (Missing Child Face Recognition for Police)
  darpan: {
    flowTitle: 'AI-Powered Biometric Vector Matching & Retrieval Architecture',
    nodes: [
      { title: 'Public Feeds & Officer Cameras', subtitle: 'Transit Hubs, Railway Terminals, CCTV', icon: 'building' },
      { title: 'Darpan Face Recognition Core', subtitle: '128-D Biometric Facial Vectorizer', icon: 'bot' },
      { title: 'AI Age-Progression Simulation', subtitle: 'Morphing Long-Term Missing Profiles', icon: 'file' },
      { title: 'Distributed Vector Database', subtitle: 'Sub-Second Similarity Search', icon: 'database' },
      { title: 'State Police Command Center', subtitle: 'Geolocated Match Verification', icon: 'workflow' },
    ],
    branches: [
      {
        status: 'HIGH CONFIDENCE (>90%)',
        statusColor: 'green',
        action: 'Immediate Priority Alert Issued',
        nextStep: 'Ground Patrol & Child Protection Unit Dispatched',
        icon: 'check',
      },
      {
        status: 'REVIEW QUEUE',
        statusColor: 'amber',
        action: 'Secondary Biometric Review',
        nextStep: 'Forensic Video Analyst Secondary Confirmation',
        icon: 'alert',
      },
    ],
    corePrinciple: {
      label: 'Core Principle',
      steps: [
        { title: 'Sub-Second Biometric Ingestion', icon: 'zap' },
        { title: 'Age-Progression Modeling', icon: 'bot' },
        { title: 'Ground Officer Push Alert', icon: 'mobile' },
        { title: 'Rapid Child Retrieval SLA', icon: 'shield-check' },
      ],
    },
  },

  // 12. I-VERIFY (Police Verification App)
  'i-verify': {
    flowTitle: 'End-to-End Digital Citizen Police Clearance Workflow',
    nodes: [
      { title: 'Passport & Employment Request', subtitle: 'Government Passport & Citizen Portal', icon: 'building' },
      { title: 'i-Verify Allocation Platform', subtitle: 'Automated Beat & Station Assignment', icon: 'shield' },
      { title: 'Geo-Fenced Field Officer App', subtitle: 'Onsite Digital Biometric Verification', icon: 'mobile' },
      { title: 'State Criminal Records Lookup', subtitle: 'Inter-Departmental Database Search', icon: 'database' },
      { title: 'Superintendent Digital Endorsement', subtitle: 'Cryptographic Signature & Clearance', icon: 'workflow' },
    ],
    branches: [
      {
        status: 'VERIFIED',
        statusColor: 'green',
        action: 'Digital Clearance Issued',
        nextStep: 'Automated API Push to Regional Passport Office',
        icon: 'check',
      },
      {
        status: 'ADVERSE FINDING',
        statusColor: 'red',
        action: 'Case Placed on Inquiry Hold',
        nextStep: 'Senior Investigation Officer Dossier Review',
        icon: 'alert',
      },
    ],
    corePrinciple: {
      label: 'Core Principle',
      steps: [
        { title: 'Geo-Fenced Field Verification', icon: 'mobile' },
        { title: 'Automated Crime Records Query', icon: 'database' },
        { title: 'Cryptographic Sign-Off', icon: 'lock' },
        { title: '72-Hour Citizen SLA Delivery', icon: 'check' },
      ],
    },
  },

  // 13. NIGAAH / CROWDCOUNTING
  'nigaah-videosurvelience': {
    flowTitle: 'Real-Time Edge AI Crowd Safety & Computer Vision Pipeline',
    nodes: [
      { title: 'Public CCTV Stream Feeds', subtitle: 'High-Density Pilgrimage & Event Video', icon: 'building' },
      { title: 'Nigaah Computer Vision Engine', subtitle: 'Edge AI Object Detection & Density Model', icon: 'bot' },
      { title: 'Spatial Flow & Velocity Tracking', subtitle: 'Real-Time Ingress/Egress Vectorization', icon: 'activity' },
      { title: 'Predictive Bottleneck AI Engine', subtitle: 'Stampede Probability & Surge Detection', icon: 'database' },
      { title: 'Integrated Command Center (ICCC)', subtitle: 'Automated Sector Control & Alerts', icon: 'workflow' },
    ],
    branches: [
      {
        status: 'NORMAL DENSITY',
        statusColor: 'green',
        action: 'Telemetry Logged to Dashboard',
        nextStep: 'Continuous Safety Rating Broadcast to Police',
        icon: 'check',
      },
      {
        status: 'SURGE BREACH (>85%)',
        statusColor: 'red',
        action: 'Automated Sector Siren & Alert',
        nextStep: 'Immediate Crowd Diversion Protocol Activated',
        icon: 'alert',
      },
    ],
    corePrinciple: {
      label: 'Core Principle',
      steps: [
        { title: 'Edge AI Video Ingestion', icon: 'bot' },
        { title: 'Predictive Surge Modeling', icon: 'activity' },
        { title: 'Automated Hazard Alerting', icon: 'zap' },
        { title: 'Public Safety Zero-Incident SLA', icon: 'shield-check' },
      ],
    },
  },
  crowdcounting: {
    flowTitle: 'Real-Time Edge AI Crowd Safety & Computer Vision Pipeline',
    nodes: [
      { title: 'High-Definition CCTV Streams', subtitle: 'Public Arenas, Terminals & Stadiums', icon: 'building' },
      { title: 'CrowdCounting Neural Inference', subtitle: 'Sub-Second Headcount & Density Model', icon: 'bot' },
      { title: 'Spatial Heatmap Analysis', subtitle: 'Dynamic Choke-Point Identification', icon: 'activity' },
      { title: 'Risk Threshold Classifier', subtitle: 'Continuous Anomaly & Stoppage Detection', icon: 'database' },
      { title: 'Security Command Dispatch', subtitle: 'Automated Zone Routing Instructions', icon: 'workflow' },
    ],
    branches: [
      {
        status: 'OPTIMAL FLOW',
        statusColor: 'green',
        action: 'Normal Zone Rating Maintained',
        nextStep: 'Live Density Dashboard Broadcast to Operations',
        icon: 'check',
      },
      {
        status: 'DENSITY EXCEEDED',
        statusColor: 'red',
        action: 'Automated Gate Diversion Triggered',
        nextStep: 'Field Security Marshals Dispatched to Choke Point',
        icon: 'alert',
      },
    ],
    corePrinciple: {
      label: 'Core Principle',
      steps: [
        { title: 'Real-Time Density Extraction', icon: 'bot' },
        { title: 'Heatmap Risk Vectoring', icon: 'activity' },
        { title: 'Autonomous Gate Diversion', icon: 'zap' },
        { title: 'Crowd Incident Prevention', icon: 'shield-check' },
      ],
    },
  },

  // 14. GEMBA CONNECT (Industrial Maintenance & Telemetry)
  gemba: {
    flowTitle: 'Industrial IoT Telemetry & Lean Predictive Maintenance Pipeline',
    nodes: [
      { title: 'Shopfloor Machinery Sensors', subtitle: 'Vibration, Thermal, RPM & Current IoT', icon: 'cog' },
      { title: 'Gemba Edge Gateway Platform', subtitle: 'Modbus & OPC-UA Real-Time Telemetry', icon: 'server' },
      { title: 'Time-Series Predictive ML Model', subtitle: 'Failure Probability & OEE Classifier', icon: 'bot' },
      { title: 'Automated CMMS Work Order Engine', subtitle: 'Spare Parts Inventory Auto-Check', icon: 'database' },
      { title: 'Operator Tablet Maintenance View', subtitle: 'Interactive Digital SOPs & Checklists', icon: 'workflow' },
    ],
    branches: [
      {
        status: 'OEE OPTIMAL',
        statusColor: 'green',
        action: 'Shift Yield Metrics Broadcast',
        nextStep: 'Continuous Plant Performance Telemetry Logged',
        icon: 'check',
      },
      {
        status: 'ANOMALY DETECTED',
        statusColor: 'amber',
        action: 'Predictive Ticket Auto-Issued',
        nextStep: 'Technician Assigned with Required Parts Before Breakdown',
        icon: 'alert',
      },
    ],
    corePrinciple: {
      label: 'Core Principle',
      steps: [
        { title: 'Continuous Machine IoT Telemetry', icon: 'activity' },
        { title: 'Predictive Failure ML Scoring', icon: 'bot' },
        { title: 'Automated Part Reservation', icon: 'database' },
        { title: 'Zero Unplanned Downtime', icon: 'shield-check' },
      ],
    },
  },
}

// Fallback generic generator based on case study fields
export function getArchitectureDataForSlug(
  slug: string,
  caseStudyTitle?: string,
  clientName?: string
): CaseStudyArchitectureData {
  if (ARCHITECTURE_CATALOG[slug]) {
    return ARCHITECTURE_CATALOG[slug]
  }

  const client = clientName || 'Enterprise Client'
  const title = caseStudyTitle || 'Digital Platform'

  return {
    flowTitle: `${title} End-to-End System Architecture`,
    nodes: [
      { title: 'Client & User Touchpoints', subtitle: 'Responsive Web, Mobile & Portals', icon: 'laptop' },
      { title: `${client} Platform Engine`, subtitle: 'High-Concurrency Cloud Microservices', icon: 'cloud' },
      { title: 'Automated Business Logic Core', subtitle: 'Scalable Workflow & Validation Rules', icon: 'bot' },
      { title: 'Secure Enterprise Data Layer', subtitle: 'High-Throughput Database & Cache Sync', icon: 'database' },
      { title: 'Execution & Integration Engine', subtitle: 'Real-Time API & Webhook Pipelines', icon: 'workflow' },
    ],
    branches: [
      {
        status: 'SUCCESS',
        statusColor: 'green',
        action: 'Validated Request Executed',
        nextStep: 'Live Telemetry & Transaction Completed',
        icon: 'check',
      },
      {
        status: 'EXCEPTION',
        statusColor: 'blue',
        action: 'Automated Recovery Triggered',
        nextStep: 'Intelligent Error Handling & Audit Log Recorded',
        icon: 'workflow',
      },
    ],
    corePrinciple: {
      label: 'Core Principle',
      steps: [
        { title: 'Automated Intake', icon: 'zap' },
        { title: 'Intelligent Processing', icon: 'bot' },
        { title: 'Sub-Second Execution', icon: 'activity' },
        { title: 'Measurable Outcomes', icon: 'shield-check' },
      ],
    },
  }
}

interface ArchitectureGraphDiagramProps {
  slug: string
  title?: string
  client?: string
}

export default function ArchitectureGraphDiagram({
  slug,
  title,
  client,
}: ArchitectureGraphDiagramProps) {
  const data = getArchitectureDataForSlug(slug, title, client)

  return (
    <div className="w-full bg-white rounded-2xl border border-gray-200/90 shadow-[0_8px_30px_rgba(15,23,42,0.06)] p-4 sm:p-7 font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Top Architecture Flow */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-3 sm:gap-4 mb-6 sm:mb-8 overflow-x-auto py-2">
        {/* Sequential Process Nodes */}
        {data.nodes.map((node, idx) => (
          <React.Fragment key={idx}>
            <div className="flex-1 min-w-[140px] sm:min-w-[160px] bg-white border border-gray-200/90 rounded-xl p-3.5 sm:p-4 text-center shadow-xs hover:border-[#02487D]/40 transition-colors flex flex-col items-center justify-center min-h-[140px]">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-blue-50/80 border border-blue-100 flex items-center justify-center mb-2.5 shadow-2xs">
                {renderIcon(node.icon, 'w-5 h-5 text-[#02487D]')}
              </div>
              <h4 className="text-xs sm:text-[13px] font-bold text-[#0F172A] leading-tight line-clamp-2">
                {node.title}
              </h4>
              <p className="text-[11px] text-[#64748B] mt-1 line-clamp-2 leading-tight">
                {node.subtitle}
              </p>
            </div>

            {/* Connecting Arrow */}
            <div className="flex-shrink-0 text-gray-400 rotate-90 lg:rotate-0 my-1 lg:my-0">
              <ArrowRight className="w-4 h-4 text-gray-400" />
            </div>
          </React.Fragment>
        ))}

        {/* Branching Outcomes on the Right */}
        <div className="flex flex-col gap-2.5 min-w-[210px] sm:min-w-[230px] w-full lg:w-auto">
          {data.branches.map((b, idx) => {
            const isGreen = b.statusColor === 'green'
            const isRed = b.statusColor === 'red'
            const isAmber = b.statusColor === 'amber'

            const badgeBg = isGreen
              ? 'bg-emerald-50 border-emerald-200 text-emerald-700'
              : isRed
              ? 'bg-rose-50 border-rose-200 text-rose-700'
              : isAmber
              ? 'bg-amber-50 border-amber-200 text-amber-700'
              : 'bg-blue-50 border-blue-200 text-blue-700'

            const circleBg = isGreen
              ? 'bg-emerald-600 text-white'
              : isRed
              ? 'bg-rose-600 text-white'
              : isAmber
              ? 'bg-amber-500 text-white'
              : 'bg-[#02487D] text-white'

            return (
              <div
                key={idx}
                className={`flex items-center gap-3 p-3 sm:p-3.5 rounded-xl border transition-all ${
                  isGreen
                    ? 'border-emerald-200/90 bg-emerald-50/20'
                    : isRed
                    ? 'border-rose-200/90 bg-rose-50/20'
                    : isAmber
                    ? 'border-amber-200/90 bg-amber-50/20'
                    : 'border-blue-200/90 bg-blue-50/20'
                }`}
              >
                <div className="flex flex-col items-center justify-center flex-shrink-0 pr-3 border-r border-gray-200/80 min-w-[68px]">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center mb-1 ${circleBg}`}>
                    {renderIcon(b.icon, 'w-3.5 h-3.5 text-white')}
                  </div>
                  <span className={`text-[10px] font-extrabold tracking-wider ${badgeBg.split(' ').pop()}`}>
                    {b.status}
                  </span>
                </div>

                <div className="text-left leading-tight">
                  <span className="text-xs font-bold text-[#0F172A] block">
                    {b.action}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] text-[#64748B] mt-0.5">
                    <ArrowRight className="w-3 h-3 flex-shrink-0 text-gray-400" />
                    <span className="line-clamp-1">{b.nextStep}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Bottom Core Principle Pipeline Bar */}
      <div className="pt-4 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-3 bg-slate-50/80 rounded-xl p-3.5 sm:p-4">
        {/* Left Target Badge */}
        <div className="flex items-center gap-2.5 flex-shrink-0">
          <div className="w-8 h-8 rounded-lg bg-blue-100/80 text-[#02487D] flex items-center justify-center">
            <Target className="w-4 h-4" />
          </div>
          <span className="text-xs sm:text-sm font-bold text-[#0F172A] pr-3 md:border-r border-gray-300">
            {data.corePrinciple.label}
          </span>
        </div>

        {/* 4-Step Pipeline Flow */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 flex-wrap flex-1">
          {data.corePrinciple.steps.map((step, idx) => (
            <React.Fragment key={idx}>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white border border-gray-200 text-xs font-medium text-[#1E293B] shadow-2xs">
                {renderIcon(step.icon, 'w-3.5 h-3.5 text-[#02487D]')}
                <span className="text-[11px] sm:text-xs">{step.title}</span>
              </div>
              {idx < data.corePrinciple.steps.length - 1 && (
                <ArrowRight className="w-3 h-3 text-gray-400 flex-shrink-0" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}
