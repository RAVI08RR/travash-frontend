'use client'

import React, { useState, useEffect, useRef } from 'react'
import { MessageSquare, X, Send, Sparkles } from 'lucide-react'

const WHATSAPP_NUMBER = '917416743434'

const QUICK_PROMPTS = [
  'Hi! I would like to inquire about software development.',
  'Hello! We need AI & GenAI solutions for our business.',
  'Hi Travash, I want to hire dedicated developers.',
  'Hello! Can we schedule a quick discovery call?',
]

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [customMessage, setCustomMessage] = useState('')
  const [hasPrompted, setHasPrompted] = useState(false)
  const popupRef = useRef<HTMLDivElement>(null)

  // Show a gentle greeting tooltip after 4 seconds if not opened
  useEffect(() => {
    const timer = setTimeout(() => {
      setHasPrompted(true)
    }, 4000)
    return () => clearTimeout(timer)
  }, [])

  // Close popup if clicked outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const sendWhatsApp = (text?: string) => {
    const msg = text || customMessage || 'Hello Travash Team, I would like to know more about your services.'
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`
    window.open(url, '_blank', 'noopener,noreferrer')
    setIsOpen(false)
  }

  return (
    <div ref={popupRef} className="fixed bottom-6 left-6 z-50 flex flex-col items-start font-sans">
      {/* Quick Greeting Popup */}
      {isOpen && (
        <div className="mb-3 w-[320px] sm:w-[350px] overflow-hidden rounded-2xl bg-white shadow-2xl border border-gray-100 animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-[#0B3B6D] p-4 text-white relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close WhatsApp chat"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center p-1.5 shadow-inner">
                  {/* WhatsApp Logo */}
                  <svg viewBox="0 0 24 24" className="w-full h-full fill-[#25D366]">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c4.56 0 8.25 3.69 8.25 8.24 0 2.2-.86 4.28-2.42 5.84-1.56 1.56-3.64 2.41-5.84 2.41-1.46 0-2.88-.38-4.14-1.11l-.3-.17-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.44c0-4.55 3.7-8.24 8.25-8.24m4.53 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.01-1.24-.74-.66-1.24-1.48-1.39-1.73-.14-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.12-.14.17-.25.25-.41.08-.17.04-.32-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.49-.4-.42-.56-.43h-.48c-.16 0-.44.06-.67.32-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.72 4.31 3.81.6.26 1.07.41 1.44.53.6.19 1.15.16 1.59.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.23-.18-.48-.3" />
                  </svg>
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-white rounded-full"></span>
              </div>
              <div>
                <h4 className="font-semibold text-sm leading-tight">Travash Solutions</h4>
                <p className="text-xs text-blue-200">Online | WhatsApp Support</p>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="p-4 bg-gray-50/70">
            <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm text-sm text-gray-700 mb-3">
              <p className="text-xs text-gray-400 mb-1 font-medium">Travash Software Solutions</p>
              <p>Hi there! 👋 Welcome to Travash. How can our engineering and consulting team help you today?</p>
            </div>

            {/* Quick Prompts */}
            <p className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider">Quick Inquiries</p>
            <div className="flex flex-col gap-1.5 mb-3">
              {QUICK_PROMPTS.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => sendWhatsApp(prompt)}
                  className="text-left text-xs bg-white hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-200 text-gray-700 p-2.5 rounded-lg border border-gray-200 transition-all duration-150 flex items-center justify-between group"
                >
                  <span className="line-clamp-1">{prompt}</span>
                  <Send className="w-3.5 h-3.5 text-gray-400 group-hover:text-emerald-600 transition-colors ml-1 shrink-0" />
                </button>
              ))}
            </div>

            {/* Custom Message Input */}
            <div className="flex items-center gap-1.5 mt-2">
              <input
                type="text"
                placeholder="Type your message..."
                value={customMessage}
                onChange={(e) => setCustomMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault()
                    sendWhatsApp()
                  }
                }}
                className="flex-1 text-xs bg-white border border-gray-200 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#25D366] text-gray-800"
              />
              <button
                onClick={() => sendWhatsApp()}
                className="bg-[#25D366] hover:bg-[#20ba59] text-white p-2.5 rounded-lg shadow-sm transition-all shrink-0"
                title="Send via WhatsApp"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating WhatsApp Action Button */}
      <div className="relative group flex items-center">
        {/* Pulsing ring animation */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-35 animate-ping pointer-events-none" />

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none"
          aria-label="Open WhatsApp chat"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c4.56 0 8.25 3.69 8.25 8.24 0 2.2-.86 4.28-2.42 5.84-1.56 1.56-3.64 2.41-5.84 2.41-1.46 0-2.88-.38-4.14-1.11l-.3-.17-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.44c0-4.55 3.7-8.24 8.25-8.24m4.53 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.01-1.24-.74-.66-1.24-1.48-1.39-1.73-.14-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.12-.14.17-.25.25-.41.08-.17.04-.32-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.49-.4-.42-.56-.43h-.48c-.16 0-.44.06-.67.32-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.72 4.31 3.81.6.26 1.07.41 1.44.53.6.19 1.15.16 1.59.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.23-.18-.48-.3" />
            </svg>
          )}
        </button>

        {/* Hover / Ambient Tooltip */}
        {!isOpen && hasPrompted && (
          <div
            onClick={() => setIsOpen(true)}
            className="ml-3 hidden sm:flex items-center gap-2 bg-white text-gray-800 text-xs font-medium px-3 py-2 rounded-full shadow-md border border-gray-100 cursor-pointer hover:bg-gray-50 transition-all whitespace-nowrap animate-in fade-in slide-in-from-left-2 duration-300"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Chat on WhatsApp</span>
            <button
              onClick={(e) => {
                e.stopPropagation()
                setHasPrompted(false)
              }}
              className="text-gray-400 hover:text-gray-600 ml-1"
              aria-label="Dismiss tooltip"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
