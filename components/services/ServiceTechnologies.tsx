'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import type { ServiceTechnologyGroup } from '@/lib/service-data'

interface ServiceTechnologiesProps {
  technologyStack: ServiceTechnologyGroup[]
}

const DEFAULT_TECH_GROUPS: ServiceTechnologyGroup[] = [
  {
    category: 'Cloud Platforms',
    technologies: ['AWS', 'Microsoft Azure', 'Google Cloud'],
    items: [
      { name: 'AWS', icon: '/images/services/aws.svg' },
      { name: 'Azure', icon: '/images/services/azure.svg' },
      { name: 'Google Cloud', icon: '/images/services/google-cloud.svg' },
    ],
    description: 'Enterprise multi-cloud ecosystems with auto-scaling compute and high-availability architecture.',
  },
  {
    category: 'Containerization & Orchestration',
    technologies: ['Docker', 'Kubernetes'],
    items: [
      { name: 'Docker', icon: '/images/services/docker.svg' },
      { name: 'Kubernetes', icon: '/images/services/kubernetes.svg' },
    ],
    description: 'Microservices containerization with zero-downtime rolling deployments and automated cluster healing.',
  },
  {
    category: 'CI/CD & Automation',
    technologies: ['Jenkins', 'GitLab', 'Ansible', 'HashiCorp Terraform'],
    items: [
      { name: 'Jenkins', icon: '/images/services/jenkins.svg' },
      { name: 'GitLab', icon: '/images/services/gitlab.svg' },
      { name: 'Ansible', icon: '/images/services/ansible.svg' },
      { name: 'Terraform', icon: '/images/services/terraform.svg' },
    ],
    description: 'Version-controlled infrastructure as code and automated deployment pipelines with zero human error.',
  },
  {
    category: 'Monitoring & Security',
    technologies: ['DataGrip', 'Prometheus', 'Grafana', 'Cloudflare'],
    items: [
      { name: 'DataGrip', icon: '/images/services/datagrip.svg' },
      { name: 'Prometheus', icon: '/images/services/prometheus.svg' },
      { name: 'Grafana', icon: '/images/services/grafana.svg' },
      { name: 'Cloudflare', icon: '/images/services/cloudflare.svg' },
    ],
    description: 'Real-time infrastructure observability, log aggregation, automated alerts, and edge DDoS protection.',
  },
]

export default function ServiceTechnologies({ technologyStack }: ServiceTechnologiesProps) {
  const groups = technologyStack && technologyStack.length > 0 ? technologyStack : DEFAULT_TECH_GROUPS

  return (
    <section
      id="technologies"
      className="py-14 sm:py-18 lg:py-24 bg-white font-['Plus_Jakarta_Sans',sans-serif] border-b border-gray-100 overflow-hidden"
    >
      <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#066095] block mb-2">
            Technology Ecosystem
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-semibold text-[#3D3C3C] tracking-tight leading-tight mb-3">
            The Technologies We Command
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
            We leverage the industry’s most powerful infrastructure and automation tools:
          </p>
        </motion.div>

        {/* Categorized Tech Cards Grid with Real SVGs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {groups.map((group, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#F8FAFC] border border-gray-200/90 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#02487D]/40 hover:shadow-md transition-all duration-300 group"
            >
              <div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#02487D] transition-colors mb-4 pb-3 border-b border-gray-200/80">
                  {group.category}
                </h3>

                {/* Tech Icons Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-5">
                  {(group.items || group.technologies.map(t => ({ name: t }))).map((tech, tIdx) => {
                    const iconMap: Record<string, string> = {
                      AWS: '/images/services/aws.svg',
                      Azure: '/images/services/azure.svg',
                      'Microsoft Azure': '/images/services/azure.svg',
                      'Google Cloud': '/images/services/google-cloud.svg',
                      Docker: '/images/services/docker.svg',
                      Kubernetes: '/images/services/kubernetes.svg',
                      Jenkins: '/images/services/jenkins.svg',
                      GitLab: '/images/services/gitlab.svg',
                      Ansible: '/images/services/ansible.svg',
                      'HashiCorp Terraform': '/images/services/terraform.svg',
                      Terraform: '/images/services/terraform.svg',
                      DataGrip: '/images/services/datagrip.svg',
                      Prometheus: '/images/services/prometheus.svg',
                      Grafana: '/images/services/grafana.svg',
                      Cloudflare: '/images/services/cloudflare.svg',
                    }
                    const rawIcon = (tech as any).icon
                    const isIconValid =
                      typeof rawIcon === 'string' &&
                      (rawIcon.startsWith('/') ||
                        rawIcon.startsWith('http://') ||
                        rawIcon.startsWith('https://'))
                    const iconSrc = isIconValid ? rawIcon : (iconMap[tech.name] || null)

                    return (
                      <div
                        key={tIdx}
                        className="bg-white border border-gray-200/80 rounded-xl p-3 flex flex-col items-center justify-center text-center shadow-2xs hover:border-[#02487D]/50 transition-colors"
                      >
                        {iconSrc && (
                          <div className="w-8 h-8 relative mb-1.5 flex items-center justify-center">
                            <Image
                              src={iconSrc}
                              alt={tech.name}
                              width={32}
                              height={32}
                              className="object-contain max-h-7"
                              unoptimized
                            />
                          </div>
                        )}
                        <span className="text-[11px] font-semibold text-gray-700 leading-tight">
                          {tech.name}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>

              {group.description && (
                <p className="text-xs text-gray-500 leading-relaxed font-normal pt-3 border-t border-gray-200/60">
                  {group.description}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
