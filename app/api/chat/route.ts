import { NextResponse } from 'next/server'

interface Message {
  role: 'user' | 'assistant' | 'system'
  content: string
}

const TRAVASH_KNOWLEDGE = `
You are the official Travash AI Assistant for "Travash Software Solutions" (https://travash.com).
Company Overview:
Travash is an AI-assisted software and product development company. We partner with startups, scale-ups, and global enterprises to engineer high-impact digital products, modern cloud solutions, and generative AI systems.

Core Offerings & Services:
1. AI & Data Engineering:
   - Generative AI solutions, custom LLM fine-tuning, RAG pipelines, autonomous AI agents.
   - Predictive analytics, computer vision, natural language processing (NLP).
   - Enterprise data lakes, real-time data streaming, ETL pipelines.
   - Page: /services/ai-data

2. Software Engineering:
   - Full-stack web application development (Next.js, React, Node.js, Python, Go).
   - Native and cross-platform mobile apps (React Native, Flutter, iOS, Android).
   - Microservices architecture, high-throughput APIs, GraphQL, scalable backend systems.
   - Page: /services/software

3. Digital Experiences & UI/UX:
   - User research, wireframing, high-fidelity interactive prototypes (Figma).
   - Design systems, conversion rate optimization (CRO), brand identity.
   - Modern, responsive, accessible front-end development.
   - Page: /services/digital

4. Data & Analytics Solutions:
   - Business Intelligence (BI) dashboards (PowerBI, Tableau, Looker).
   - Data warehouse design (Snowflake, BigQuery, Redshift).
   - Actionable insights, metrics tracking, automated reporting.
   - Page: /services/analytics

5. Enterprise Applications & Modernization:
   - ERP/CRM customization and integrations (Salesforce, SAP, custom ERP).
   - Legacy modernization, database refactoring, monolith to microservices migration.
   - Enterprise security and compliance.
   - Page: /services/enterprise

6. Cloud & DevOps:
   - Cloud migration and infrastructure (AWS, Microsoft Azure, Google Cloud Platform).
   - CI/CD automation pipelines (GitHub Actions, GitLab CI, Docker, Kubernetes).
   - Cloud cost optimization, 24/7 monitoring, security & disaster recovery.
   - Page: /services/cloud

7. Dedicated Talent & Teams / Staff Augmentation:
   - Pre-vetted senior software engineers, AI researchers, UI/UX designers, and QA engineers.
   - Flexible engagement models: Dedicated Engineering Pods, Time & Material, Fixed-Price Projects.
   - Rapid onboarding within 48 to 72 hours, time-zone aligned.
   - Page: /services/dedicated-teams

8. Quality Assurance & Automated Testing:
   - End-to-end automated testing (Playwright, Cypress, Selenium).
   - Manual functional testing, performance load testing, API test automation, security audits.
   - Page: /services/qa

Contact Information & Locations:
- Email: contact@travash.com
- Phone / WhatsApp: +91 7416743434
- India Office: Sanali Spazio building, Inorbit Mall Road, Madhapur Plot No 19, Software Units Layout, Sy.No.64, Madhapur, Hyderabad, Telangana 500081, India
- Dubai Office: SAIF ZONE ADDRESS : Saif Office Q1 05 103/A Sharjah, U.A.E
- Website: https://travash.com
- Contact Form: /contact-us
- Careers: /career

Key Value Propositions:
- ⚡ 2x Faster Delivery with AI-Augmented Workflows
- 🔒 Enterprise-Grade Security & IP Protection
- 🌐 Global Delivery Model (Onshore / Nearshore / Offshore)
- 🤝 Transparent Agile Communication with daily standups & dedicated sprint demos
`

function generateFallbackResponse(userPrompt: string): string {
  const query = userPrompt.toLowerCase()

  // 1. Greetings
  if (/^(hi|hello|hey|greetings|good\s*(morning|afternoon|evening)|hola|namaste)/.test(query.trim())) {
    return (
      `Hello! 👋 Welcome to **Travash Software Solutions**.\n\n` +
      `I'm your AI Assistant. We help startups and enterprises build world-class digital products with **AI-Assisted Software Engineering**.\n\n` +
      `How can I assist you today? You can ask about:\n` +
      `• 🤖 **AI & Generative AI Solutions**\n` +
      `• 💻 **Custom Web & Mobile Development**\n` +
      `• 👥 **Hiring Dedicated Developers / Teams**\n` +
      `• ☁️ **Cloud & DevOps Architecture**\n` +
      `• 📍 **Contact Details & Free Consultation**`
    )
  }

  // 2. Services / What do you do
  if (query.includes('service') || query.includes('offer') || query.includes('what do you do') || query.includes('capability') || query.includes('capabilities')) {
    return (
      `### 🚀 Our Core Services at Travash\n\n` +
      `We provide end-to-end technology solutions tailored to scale your business:\n\n` +
      `1. **AI & Data Engineering** — GenAI, custom LLM integration, RAG systems, and predictive models.\n` +
      `2. **Custom Software Engineering** — High-performance web apps, SaaS platforms, and mobile apps.\n` +
      `3. **Digital Experiences & UI/UX** — Modern user-centric design systems and interactive interfaces.\n` +
      `4. **Cloud & DevOps** — AWS, Azure, GCP infrastructure, Kubernetes, and CI/CD automation.\n` +
      `5. **Dedicated Engineering Teams** — Senior pre-vetted developers onboarded in 48-72 hours.\n` +
      `6. **Data Analytics & BI** — Interactive dashboards, real-time data pipelines, and analytics.\n` +
      `7. **Enterprise Applications** — CRM/ERP integrations and legacy system modernization.\n` +
      `8. **QA & Automation** — Robust end-to-end automated and manual testing.\n\n` +
      `💡 *Would you like details on a specific service or want to explore our [Services page](/services)?*`
    )
  }

  // 3. AI / Generative AI / LLM / Machine Learning
  if (query.includes('ai') || query.includes('artificial intelligence') || query.includes('genai') || query.includes('llm') || query.includes('machine learning') || query.includes('chatgpt') || query.includes('rag')) {
    return (
      `### 🤖 AI & Data Engineering at Travash\n\n` +
      `We leverage cutting-edge AI technologies to transform how modern software is built and operated:\n\n` +
      `• **Custom Generative AI & Agents:** Build domain-specific autonomous AI agents and workflows.\n` +
      `• **RAG (Retrieval-Augmented Generation):** Enterprise chatbots connected to your private knowledge base.\n` +
      `• **Fine-Tuning & Model Deployment:** Custom fine-tuning of open-source and proprietary models (Llama, Gemini, OpenAI).\n` +
      `• **Computer Vision & NLP:** Automated document extraction, sentiment analysis, and image classification.\n` +
      `• **Data Pipelines:** High-throughput streaming and ETL architectures for real-time AI ingestion.\n\n` +
      `Ready to build an AI-powered product? You can [schedule a consultation](/contact-us) or reach out via WhatsApp on the bottom-left!`
    )
  }

  // 4. Hiring / Dedicated Developers / Team / Staff Augmentation / Cost / Pricing
  if (query.includes('hire') || query.includes('team') || query.includes('staff') || query.includes('developer') || query.includes('dedicated') || query.includes('cost') || query.includes('price') || query.includes('pricing') || query.includes('quote') || query.includes('rate')) {
    return (
      `### 👥 Hire Dedicated Engineering Teams\n\n` +
      `Travash provides pre-vetted, elite engineering talent ready to integrate into your workflow:\n\n` +
      `• **Fast Onboarding:** Developers ready to deploy within **48–72 hours**.\n` +
      `• **Flexible Models:** Dedicated Engineering Pods, Time & Materials, or Fixed-Scope milestone delivery.\n` +
      `• **Skill Coverage:** Full-Stack (React, Next.js, Node.js), Python & AI/ML, Mobile (Flutter/React Native), DevOps (AWS/Azure/GCP), and QA.\n` +
      `• **Time-Zone Aligned:** We adapt seamlessly to US, UK, European, and Gulf time zones.\n\n` +
      `📊 **Get a Custom Quote:**\n` +
      `Contact our solutions team at **contact@travash.com** or call **+91 7416743434** to discuss your project scope and get an instant estimate!`
    )
  }

  // 5. Contact / Office / Address / Phone / WhatsApp / Location
  if (query.includes('contact') || query.includes('email') || query.includes('phone') || query.includes('address') || query.includes('office') || query.includes('location') || query.includes('where are you') || query.includes('whatsapp') || query.includes('call')) {
    return (
      `### 📍 Contact Travash Software Solutions\n\n` +
      `We would love to hear about your project!\n\n` +
      `• 📧 **Email:** [contact@travash.com](mailto:contact@travash.com)\n` +
      `• 📞 **Phone / WhatsApp:** [+91 7416743434](tel:+917416743434)\n` +
      `• 🇮🇳 **India Office:** Sanali Spazio building, Inorbit Mall Road, Madhapur, Hyderabad, Telangana 500081\n` +
      `• 🇦🇪 **Dubai Office:** SAIF ZONE ADDRESS : Saif Office Q1 05 103/A Sharjah, U.A.E\n\n` +
      `💬 *You can also click the **WhatsApp button on the bottom left** to start an immediate live chat with our team!*`
    )
  }

  // 6. Portfolio / Case studies / Projects / Work
  if (query.includes('portfolio') || query.includes('case stud') || query.includes('work') || query.includes('project') || query.includes('client') || query.includes('experience')) {
    return (
      `### 💼 Our Work & Case Studies\n\n` +
      `Travash has built scalable solutions across FinTech, Healthcare, Logistics, E-Commerce, and SaaS:\n\n` +
      `• **Enterprise FinTech Platform:** Cloud-native transaction monitoring processing millions of events daily.\n` +
      `• **Healthcare AI Assistant:** HIPAA-compliant patient triage and record analysis.\n` +
      `• **Supply Chain IoT Tracking:** Real-time analytics engine and mobile dashboard.\n` +
      `• **High-Traffic SaaS Platform:** Scalable microservices handling 50k+ active concurrent users.\n\n` +
      `Explore our full client portfolio on our [Works page](/portfolio) or [Case Studies](/case-studies)!`
    )
  }

  // 7. Tech Stack / Technologies
  if (query.includes('tech') || query.includes('stack') || query.includes('framework') || query.includes('react') || query.includes('python') || query.includes('next') || query.includes('node') || query.includes('cloud')) {
    return (
      `### ⚡ Our Technology Stack\n\n` +
      `We build with modern, enterprise-ready technologies:\n\n` +
      `• **Frontend:** Next.js, React, TypeScript, Tailwind CSS, Vue.js\n` +
      `• **Backend:** Node.js, Python (FastAPI/Django), Go, Java, .NET\n` +
      `• **AI & ML:** PyTorch, TensorFlow, LangChain, LlamaIndex, OpenAI, Anthropic, Gemini\n` +
      `• **Mobile:** React Native, Flutter, Swift, Kotlin\n` +
      `• **Cloud & DevOps:** AWS, Azure, Google Cloud, Docker, Kubernetes, Terraform\n` +
      `• **Databases:** PostgreSQL, MongoDB, Redis, Snowflake, Pinecone, Milvus\n\n` +
      `Check out our full technology ecosystem on our [Technologies page](/technologies)!`
    )
  }

  // 8. Careers / Jobs / Hiring
  if (query.includes('career') || query.includes('job') || query.includes('internship') || query.includes('apply') || query.includes('work with us') || query.includes('vacancy')) {
    return (
      `### 🚀 Careers at Travash\n\n` +
      `We are always looking for passionate engineers, AI innovators, and product designers!\n\n` +
      `• Dynamic, high-growth environment with cutting-edge tech\n` +
      `• Opportunities to work on global AI and software products\n` +
      `• Continuous learning, mentorship, and competitive perks\n\n` +
      `Visit our [Careers page](/career) to view current openings and submit your application!`
    )
  }

  // 9. About company
  if (query.includes('about') || query.includes('company') || query.includes('who are you') || query.includes('travash')) {
    return (
      `### 🏢 About Travash Software Solutions\n\n` +
      `**Travash** is an AI-assisted software and product development company with global delivery hubs in **India (Hyderabad)** and **Dubai (UAE)**.\n\n` +
      `We combine deep software engineering craft with the speed and intelligence of artificial intelligence to deliver digital solutions that drive measurable business outcomes.\n\n` +
      `Whether you need to build a new SaaS product from scratch, modernize legacy systems, or hire an agile team of top developers, Travash is your trusted technology partner.\n\n` +
      `Want to discuss a project? Let's talk! [Contact Us](/contact-us) or reach us on WhatsApp!`
    )
  }

  // Default intelligent assistant response
  return (
    `Thank you for asking! Travash Software Solutions specializes in **AI-Assisted Software Engineering**, custom cloud applications, and dedicated developer teams.\n\n` +
    `Here is how we can help you:\n` +
    `• Build or modernize your web and mobile applications\n` +
    `• Implement Generative AI and automated data workflows\n` +
    `• Scale your engineering capacity with dedicated developers\n` +
    `• Design cloud infrastructure with enterprise-grade security\n\n` +
    `Could you share a bit more detail about your project or business needs? You can also connect directly with our engineering team at **contact@travash.com** or call **+91 7416743434**.`
  )
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const messages: Message[] = body.messages || []

    if (!messages.length) {
      return NextResponse.json({ error: 'No messages provided' }, { status: 400 })
    }

    const lastMessage = messages[messages.length - 1]
    const userPrompt = lastMessage.content || ''

    // 1. Check for Gemini API Key
    const geminiApiKey = process.env.GEMINI_API_KEY
    if (geminiApiKey) {
      try {
        const conversationHistory = messages.map(m => ({
          role: m.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: m.content }]
        }))

        const systemInstruction = {
          parts: [{ text: TRAVASH_KNOWLEDGE }]
        }

        const res = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiApiKey}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: conversationHistory,
              systemInstruction: systemInstruction,
              generationConfig: {
                temperature: 0.7,
                maxOutputTokens: 800,
              }
            })
          }
        )

        if (res.ok) {
          const data = await res.json()
          const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text
          if (reply) {
            return NextResponse.json({ reply })
          }
        }
      } catch (err) {
        console.warn('Gemini API call failed, falling back to built-in Travash engine', err)
      }
    }

    // 2. Check for OpenAI API Key
    const openAiApiKey = process.env.OPENAI_API_KEY
    if (openAiApiKey) {
      try {
        const openAiMessages = [
          { role: 'system', content: TRAVASH_KNOWLEDGE },
          ...messages.map(m => ({ role: m.role, content: m.content }))
        ]

        const res = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${openAiApiKey}`,
          },
          body: JSON.stringify({
            model: 'gpt-4o-mini',
            messages: openAiMessages,
            temperature: 0.7,
            max_tokens: 800,
          })
        })

        if (res.ok) {
          const data = await res.json()
          const reply = data?.choices?.[0]?.message?.content
          if (reply) {
            return NextResponse.json({ reply })
          }
        }
      } catch (err) {
        console.warn('OpenAI API call failed, falling back to built-in Travash engine', err)
      }
    }

    // 3. Built-in instant high-fidelity Travash engine
    const reply = generateFallbackResponse(userPrompt)
    return NextResponse.json({ reply })
  } catch (error) {
    console.error('Chat API Error:', error)
    return NextResponse.json(
      {
        reply:
          "I'm here to help! Please ask about Travash's AI and software engineering services, or feel free to reach out directly at contact@travash.com or +91 7416743434."
      },
      { status: 200 }
    )
  }
}
