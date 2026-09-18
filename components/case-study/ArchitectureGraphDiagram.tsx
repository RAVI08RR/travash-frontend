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
  AlertCircle,
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
  ArrowDown,
  Filter,
  TrendingUp,
  User,
  PauseCircle,
  ScanFace,
} from 'lucide-react'

export interface ArchNode {
  title: string
  subtitle?: string
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

// Bespoke SVG Icons matching Screenshot 2 exactly
function CourtBuildingIcon({ className = 'w-7 h-7 text-[#02487D]' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 2.5V1M16 1L19 2.5L16 3.8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3.5 11L16 3L28.5 11H3.5Z" fill="#F1F5F9" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <rect x="4.5" y="11" width="23" height="2" fill="currentColor" />
      <rect x="6.5" y="13" width="2.5" height="11" fill="currentColor" rx="0.5" />
      <rect x="12" y="13" width="2.5" height="11" fill="currentColor" rx="0.5" />
      <rect x="17.5" y="13" width="2.5" height="11" fill="currentColor" rx="0.5" />
      <rect x="23" y="13" width="2.5" height="11" fill="currentColor" rx="0.5" />
      <rect x="3.5" y="24" width="25" height="2" fill="currentColor" rx="0.5" />
      <rect x="2" y="26" width="28" height="2.5" fill="currentColor" rx="0.5" />
    </svg>
  )
}

function ShieldCheckPlatformIcon({ className = 'w-7 h-7 text-[#02487D]' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16 3L5 7.5V14.5C5 21.5 9.8 27.8 16 29.5C22.2 27.8 27 21.5 27 14.5V7.5L16 3Z"
        fill="#02487D"
      />
      <path
        d="M11 15.5L14.5 19L21 12.5"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function DataExtractionFacialIcon({ className = 'w-7 h-7 text-[#02487D]' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="4" width="13" height="22" rx="2" fill="#F1F5F9" stroke="currentColor" strokeWidth="1.6" />
      <line x1="6" y1="9" x2="13" y2="9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="6" y1="13" x2="13" y2="13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="6" y1="17" x2="11" y2="17" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <g transform="translate(14, 8)">
        <path d="M3 0H0V3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M12 0H15V3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M0 13V16H3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M15 13V16H12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="7.5" cy="6" r="3" fill="currentColor" />
        <path d="M3 14C3 11.2 5 9.5 7.5 9.5C10 9.5 12 11.2 12 14" fill="currentColor" />
      </g>
    </svg>
  )
}

function DatabaseSearchIcon({ className = 'w-7 h-7 text-[#02487D]' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="12" cy="7" rx="7.5" ry="3.2" fill="#02487D" />
      <path d="M4.5 7V13C4.5 14.8 7.8 16.2 12 16.2C13 16.2 14 16.1 14.8 15.9" stroke="#02487D" strokeWidth="1.8" />
      <path d="M4.5 13V19C4.5 20.8 7.8 22.2 12 22.2C13.2 22.2 14.4 22.1 15.4 21.8" stroke="#02487D" strokeWidth="1.8" />
      <path d="M4.5 19V25C4.5 26.8 7.8 28.2 12 28.2C13.5 28.2 14.8 28 16 27.6" stroke="#02487D" strokeWidth="1.8" />
      <circle cx="21" cy="20" r="5" fill="white" stroke="#02487D" strokeWidth="2" />
      <line x1="25" y1="24" x2="29" y2="28" stroke="#02487D" strokeWidth="2.4" strokeLinecap="round" />
      <line x1="19" y1="20" x2="23" y2="20" stroke="#02487D" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function WorkflowAutomationIcon({ className = 'w-7 h-7 text-[#02487D]' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="3.2" fill="#02487D" />
      <path d="M16 8.5V10.5M16 21.5V23.5M8.5 16H10.5M21.5 16H23.5M10.8 10.8L12.2 12.2M19.8 19.8L21.2 21.2M10.8 21.2L12.2 19.8M19.8 12.2L21.2 10.8" stroke="#02487D" strokeWidth="2" strokeLinecap="round" />
      <path d="M16 4.5C22.3 4.5 27.5 9.7 27.5 16C27.5 18.5 26.7 20.8 25.2 22.7" stroke="#02487D" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M16 27.5C9.7 27.5 4.5 22.3 4.5 16C4.5 13.5 5.3 11.2 6.8 9.3" stroke="#02487D" strokeWidth="1.8" strokeLinecap="round" />
      <polygon points="27,6 27.5,11 23,9.5" fill="#02487D" />
      <polygon points="5,26 4.5,21 9,22.5" fill="#02487D" />
    </svg>
  )
}

// Icon mapper
function renderIcon(iconName: string, className = 'w-7 h-7 text-[#02487D]') {
  switch (iconName) {
    case 'building':
    case 'rpo':
      return <CourtBuildingIcon className={className} />
    case 'shield':
    case 'shield-check':
      return <ShieldCheckPlatformIcon className={className} />
    case 'file':
    case 'document':
      return <FileText className={className} />
    case 'scan-face':
    case 'face':
    case 'biometric':
      return <DataExtractionFacialIcon className={className} />
    case 'database':
      return <DatabaseSearchIcon className={className} />
    case 'gear':
    case 'workflow':
      return <WorkflowAutomationIcon className={className} />
    case 'bot':
    case 'ai':
      return <Bot className={className} />
    case 'filter':
      return <Filter className={className} />
    case 'trending-up':
      return <TrendingUp className={className} />
    case 'user':
      return <User className={className} />
    case 'pause':
      return <PauseCircle className={className} />
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
      return <AlertCircle className={className} />
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
      { title: 'Regional Passport Office (RPO)', icon: 'building' },
      { title: 'Satyaapan Verification Platform', icon: 'shield-check' },
      { title: 'Automated Data Extraction + Facial Recognition', icon: 'scan-face' },
      { title: 'Real-Time Matching Against Relevant Records', icon: 'database' },
      { title: 'Automated Verification Workflow', icon: 'workflow' },
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
        { title: 'Identify Exceptions', icon: 'filter' },
        { title: 'Escalate', icon: 'trending-up' },
        { title: 'Human Investigation', icon: 'user' },
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

  // 5. DIRECT OWNERS: AI Voice Agent (Pixl)
  'direct-owners': {
    flowTitle: 'AI Voice Agent Telephony & Conversational RAG Architecture',
    nodes: [
      { title: 'Multichannel Lead Ingestion', subtitle: 'Facebook, Google & Property Portals', icon: 'mobile' },
      { title: 'Sub-3s Outbound Telephony', subtitle: 'Twilio SIP Trunking Engine', icon: 'zap' },
      { title: 'Conversational Intelligence', subtitle: 'Deepgram STT/TTS + GPT-4 RAG', icon: 'workflow' },
      { title: 'Automated Lead Qualification', subtitle: 'Dynamic Scoring (Hot/Warm/Cold)', icon: 'shield' },
      { title: 'Live CRM Sync & SIP Handover', subtitle: 'HubSpot Sync & Rep Transfer', icon: 'refresh' },
    ],
    branches: [
      {
        status: 'HOT PROSPECT DETECTED',
        statusColor: 'green',
        action: 'High Intent Budget & Timeline Qualified',
        nextStep: 'Sub-Second SIP Transfer to Sales Rep or Calendar Booking',
        icon: 'check',
      },
      {
        status: 'NURTURE / COLD LEAD',
        statusColor: 'blue',
        action: 'Standard Property Inquiries Answered',
        nextStep: 'Full Transcript Logged to HubSpot & Auto-Nurture Sequence',
        icon: 'workflow',
      },
    ],
    corePrinciple: {
      label: 'Core Principle',
      steps: [
        { title: 'Sub-3s Speed-to-Lead', icon: 'zap' },
        { title: 'Natural Human Dialogue', icon: 'mobile' },
        { title: '100% Automated CRM Sync', icon: 'refresh' },
        { title: 'Sub-Second Live Escalation', icon: 'lock' },
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
  const normalized = (slug || '').toLowerCase().trim()

  const ALIAS_MAP: Record<string, string> = {
    satyapaan: 'satyapaan',
    satyaapan: 'satyapaan',
    satyapan: 'satyapaan',
    i4c: 'i4c-bank-portal',
    'i4c-bank-portal': 'i4c-bank-portal',
    '14c': 'i4c-bank-portal',
    pixl: 'pixl',
    'pixl-crm': 'pixl',
    'ai-voice-agent': 'pixl',
    ugo: 'ugo',
    uog: 'ugo',
    'direct-owners': 'direct-owners',
    directowner: 'direct-owners',
    dreamnest: 'direct-owners',
    indispare: 'indispare',
    dovehouse: 'dovehouse',
    'dovehouse-capital': 'dovehouse',
    pekt: 'pekt',
    skipr: 'skipr',
    darpan: 'darpan',
    'i-verify': 'i-verify',
    iverify: 'i-verify',
    'dine-desk': 'dine-desk',
    dinedesk: 'dine-desk',
    gemba: 'gemba',
    'nigaah-videosurvelience': 'nigaah-videosurvelience',
    nigaah: 'nigaah-videosurvelience',
    crowdcounting: 'crowdcounting',
    'crowd-counting': 'crowdcounting',
  }

  const targetKey = ALIAS_MAP[normalized] || normalized

  if (ARCHITECTURE_CATALOG[targetKey]) {
    return ARCHITECTURE_CATALOG[targetKey]
  }

  const client = clientName || 'Enterprise System'
  const title = caseStudyTitle || 'Digital Platform'
  const lower = (slug + ' ' + title).toLowerCase()

  // Domain-specific dynamic generator
  if (lower.includes('health') || lower.includes('medical') || lower.includes('radiant') || lower.includes('medimee')) {
    return {
      flowTitle: `${title} Healthcare Data & Compliance Pipeline`,
      nodes: [
        { title: 'Clinical & Patient Ingestion', icon: 'building' },
        { title: `${client} Security Platform`, icon: 'shield-check' },
        { title: 'Data Anonymization & Extraction', icon: 'scan-face' },
        { title: 'EHR Registry Synchronization', icon: 'database' },
        { title: 'Automated Diagnostic Workflow', icon: 'workflow' },
      ],
      branches: [
        {
          status: 'VERIFIED',
          statusColor: 'green',
          action: 'Record Validated & Synced',
          nextStep: 'Secure Clinical Telemetry Broadcast',
          icon: 'check',
        },
        {
          status: 'ANOMALY',
          statusColor: 'red',
          action: 'Compliance Review Triggered',
          nextStep: 'Medical Officer Manual Audit',
          icon: 'alert',
        },
      ],
      corePrinciple: {
        label: 'Core Principle',
        steps: [
          { title: 'Automate Routine Ingestion', icon: 'bot' },
          { title: 'Identify Exceptions', icon: 'filter' },
          { title: 'Escalate Anomaly', icon: 'trending-up' },
          { title: 'Clinical Investigation', icon: 'user' },
        ],
      },
    }
  }

  if (lower.includes('estate') || lower.includes('property') || lower.includes('real') || lower.includes('kalsi') || lower.includes('grid')) {
    return {
      flowTitle: `${title} Real Estate & Property Pipeline`,
      nodes: [
        { title: 'Property Portals & Lead Ingestion', icon: 'building' },
        { title: `${client} Platform Engine`, icon: 'shield-check' },
        { title: 'Automated Buyer Intent Scoring', icon: 'scan-face' },
        { title: 'Real-Time Inventory Matching', icon: 'database' },
        { title: 'Automated Dispatch & Booking', icon: 'workflow' },
      ],
      branches: [
        {
          status: 'CONFIRMED',
          statusColor: 'green',
          action: 'Site Visit Confirmed',
          nextStep: 'Calendar Booking & WhatsApp Invite Sent',
          icon: 'check',
        },
        {
          status: 'NURTURE',
          statusColor: 'red',
          action: 'Inquiry Placed on Follow-up',
          nextStep: 'Consultant Automated Lead Outreach',
          icon: 'alert',
        },
      ],
      corePrinciple: {
        label: 'Core Principle',
        steps: [
          { title: 'Instant Lead Capture', icon: 'bot' },
          { title: 'Intent Classification', icon: 'filter' },
          { title: 'Escalate Hot Leads', icon: 'trending-up' },
          { title: 'Consultant Closing', icon: 'user' },
        ],
      },
    }
  }

  if (lower.includes('commerce') || lower.includes('retail') || lower.includes('store') || lower.includes('shop')) {
    return {
      flowTitle: `${title} E-Commerce & Retail Supply Pipeline`,
      nodes: [
        { title: 'Customer Storefront & App', icon: 'building' },
        { title: `${client} Catalog Engine`, icon: 'shield-check' },
        { title: 'Cart & Inventory Orchestrator', icon: 'scan-face' },
        { title: 'Payment Gateway & Risk Filter', icon: 'database' },
        { title: 'Automated Fulfillment Workflow', icon: 'workflow' },
      ],
      branches: [
        {
          status: 'APPROVED',
          statusColor: 'green',
          action: 'Order Placed & Dispatched',
          nextStep: 'Real-Time Tracking Code Issued',
          icon: 'check',
        },
        {
          status: 'FLAGGED',
          statusColor: 'red',
          action: 'Payment Placed on Hold',
          nextStep: 'Fraud Screening & Verification Review',
          icon: 'alert',
        },
      ],
      corePrinciple: {
        label: 'Core Principle',
        steps: [
          { title: 'High-Concurrency Ingestion', icon: 'bot' },
          { title: 'Real-Time Inventory Check', icon: 'filter' },
          { title: 'Sub-Second Checkout', icon: 'trending-up' },
          { title: 'Automated Dispatch SLA', icon: 'user' },
        ],
      },
    }
  }

  // Universal Dynamic Fallback
  return {
    flowTitle: `${title} End-to-End System Architecture`,
    nodes: [
      { title: 'Client & User Touchpoints', icon: 'building' },
      { title: `${client} Platform Engine`, icon: 'shield-check' },
      { title: 'Automated Processing Engine', icon: 'scan-face' },
      { title: 'Real-Time Enterprise Records Matching', icon: 'database' },
      { title: 'Automated Verification Workflow', icon: 'workflow' },
    ],
    branches: [
      {
        status: 'CLEAR',
        statusColor: 'green',
        action: 'Automated Processing Approved',
        nextStep: 'Direct System Execution Completed',
        icon: 'check',
      },
      {
        status: 'FLAGGED',
        statusColor: 'red',
        action: 'Application Placed on Hold',
        nextStep: 'Specialist Investigation Assigned',
        icon: 'alert',
      },
    ],
    corePrinciple: {
      label: 'Core Principle',
      steps: [
        { title: 'Automate Routine Screening', icon: 'bot' },
        { title: 'Identify Exceptions', icon: 'filter' },
        { title: 'Escalate Anomaly', icon: 'trending-up' },
        { title: 'Expert Investigation', icon: 'user' },
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
    <div className="w-full bg-white rounded-2xl border border-gray-200/80 shadow-xs p-4 sm:p-6 font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Top Architecture Flow: Flexes cleanly inside lg:col-span-8 */}
      <div className="w-full overflow-x-auto scrollbar-none pb-1">
        <div className="min-w-[680px] w-full flex items-center justify-between gap-1 sm:gap-1.5 xl:gap-2">
        {/* Sequential Process Nodes */}
        {data.nodes.map((node, idx) => (
          <React.Fragment key={idx}>
            <div className="flex-1 min-w-0 max-w-[135px] bg-white border border-gray-200/90 rounded-2xl p-2.5 sm:p-3 xl:p-4 text-center shadow-2xs hover:border-[#02487D]/40 transition-all flex flex-col items-center justify-center min-h-[125px] sm:min-h-[135px] xl:min-h-[145px] shrink-0">
              <div className="flex items-center justify-center mb-2.5 text-[#02487D]">
                {renderIcon(node.icon, 'w-7 h-7 sm:w-8 sm:h-8 text-[#02487D]')}
              </div>
              <h4 className="text-[10px] sm:text-[11px] xl:text-[12px] font-bold text-[#0F172A] leading-tight text-center break-words">
                {node.title}
              </h4>
              {node.subtitle && (
                <p className="text-[9.5px] text-[#64748B] mt-1 leading-tight line-clamp-1">
                  {node.subtitle}
                </p>
              )}
            </div>

            {/* Connecting Arrow */}
            <div className="shrink-0 text-gray-400 px-0.5 sm:px-1">
              <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gray-400" />
            </div>
          </React.Fragment>
        ))}

        {/* Branch Fork Connector matching Screenshot */}
        <div className="flex items-center justify-center shrink-0 w-6 sm:w-8 h-[110px] sm:h-[125px] relative">
          <svg className="w-full h-full" viewBox="0 0 32 120" fill="none">
            {/* Origin line from Node 5 */}
            <line x1="2" y1="60" x2="14" y2="60" stroke="#94A3B8" strokeWidth="1.5" />
            <circle cx="14" cy="60" r="2.5" fill="#02487D" />
            {/* Vertical spine */}
            <line x1="14" y1="28" x2="14" y2="92" stroke="#94A3B8" strokeWidth="1.5" />
            {/* Top branch to CLEAR card */}
            <path d="M14 28H28" stroke="#16A34A" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="28" cy="28" r="2.5" fill="#16A34A" />
            {/* Bottom branch to FLAGGED card */}
            <path d="M14 92H28" stroke="#DC2626" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="28" cy="92" r="2.5" fill="#DC2626" />
          </svg>
        </div>

        {/* Branching Outcomes Cards matching Screenshot */}
        <div className="flex flex-col gap-2.5 sm:gap-3 shrink-0 w-[260px] sm:w-[285px] xl:w-[310px]">
          {data.branches.map((b, idx) => {
            const isGreen = b.statusColor === 'green'
            const isRed = b.statusColor === 'red'

            return (
              <div
                key={idx}
                className={`flex items-center gap-2 sm:gap-2.5 xl:gap-3 px-2.5 sm:px-3.5 py-2 sm:py-2.5 xl:py-3 rounded-xl sm:rounded-2xl border bg-white shadow-2xs transition-all ${
                  isGreen
                    ? 'border-[#86EFAC] hover:border-emerald-400'
                    : isRed
                    ? 'border-[#FCA5A5] hover:border-rose-400'
                    : 'border-gray-200 hover:border-blue-300'
                }`}
              >
                {/* Left Status Badge with Circle Icon */}
                <div className="flex flex-col items-center justify-center shrink-0 min-w-[42px] sm:min-w-[46px]">
                  <div
                    className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center mb-0.5 text-white shadow-2xs ${
                      isGreen
                        ? 'bg-[#16A34A]'
                        : isRed
                        ? 'bg-[#DC2626]'
                        : 'bg-[#02487D]'
                    }`}
                  >
                    {isGreen ? (
                      <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[3]" />
                    ) : isRed ? (
                      <span className="text-xs sm:text-sm font-black leading-none">!</span>
                    ) : (
                      renderIcon(b.icon, 'w-3 h-3 text-white')
                    )}
                  </div>
                  <span
                    className={`text-[9px] sm:text-[10px] font-black tracking-wider ${
                      isGreen
                        ? 'text-[#16A34A]'
                        : isRed
                        ? 'text-[#DC2626]'
                        : 'text-[#02487D]'
                    }`}
                  >
                    {b.status}
                  </span>
                </div>

                {/* Vertical line divider */}
                <div className="w-px h-7 sm:h-8 bg-gray-200 shrink-0" />

                {/* Step 1 Action */}
                <div className="flex items-center gap-1.5 shrink-0">
                  {isGreen ? (
                    <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#16A34A] shrink-0" />
                  ) : (
                    <PauseCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#DC2626] shrink-0" />
                  )}
                  <span className="text-[10px] sm:text-[11px] xl:text-[12px] font-semibold text-[#0F172A] whitespace-nowrap">
                    {b.action}
                  </span>
                </div>

                {/* Directional Circle with Arrow */}
                <div
                  className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center text-white shrink-0 ${
                    isGreen ? 'bg-[#16A34A]' : 'bg-[#DC2626]'
                  }`}
                >
                  <ArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 stroke-[2.5]" />
                </div>

                {/* Step 2 Next Step */}
                <div className="flex items-center gap-1.5 shrink-0">
                  {isGreen ? (
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#16A34A] shrink-0" />
                  ) : (
                    <User className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#DC2626] shrink-0" />
                  )}
                  <span className="text-[10px] sm:text-[11px] xl:text-[12px] font-semibold text-[#0F172A] whitespace-nowrap">
                    {b.nextStep}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>

      {/* Bottom Core Principle Banner matching Screenshot */}
      <div className="mt-6 sm:mt-8">
        <div className="bg-[#F0F7FF] border border-[#D6E6F7] rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-2 sm:gap-3">
          {/* Target Icon & Core Principle Label */}
          <div className="flex items-center gap-2.5 shrink-0 pr-3 sm:pr-4 border-r border-[#CBD5E1]">
            <Target className="w-4 h-4 sm:w-5 sm:h-5 text-[#02487D]" />
            <span className="text-xs sm:text-[13px] font-bold text-[#0F172A] whitespace-nowrap">
              {data.corePrinciple.label}
            </span>
          </div>

          {/* Seamless Pipeline Steps without outer white boxes */}
          <div className="flex items-center justify-between flex-1 gap-2 sm:gap-3 pl-2 sm:pl-3">
            {data.corePrinciple.steps.map((step, idx) => (
              <React.Fragment key={idx}>
                <div className="flex items-center gap-1.5 shrink-0">
                  {renderIcon(step.icon, 'w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#02487D] shrink-0')}
                  <span className="text-[11px] sm:text-xs xl:text-[13px] font-medium text-[#1E293B] whitespace-nowrap">
                    {step.title}
                  </span>
                </div>
                {idx < data.corePrinciple.steps.length - 1 && (
                  <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gray-400 shrink-0" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
