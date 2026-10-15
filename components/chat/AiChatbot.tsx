'use client'

import React, { useState, useEffect, useRef } from 'react'
import {
  Sparkles,
  Bot,
  X,
  Send,
  RotateCcw,
  User,
  ArrowRight,
  ExternalLink,
  ChevronDown,
  MessageCircle,
} from 'lucide-react'
import Link from 'next/link'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: string
}

const STARTER_QUESTIONS = [
  '🚀 What services does Travash provide?',
  '🤖 Tell me about your AI & GenAI solutions',
  '👥 How do I hire dedicated developers?',
  '⚡ What technology stack do you use?',
  '📍 Where are your offices located?',
]

function formatMarkdown(text: string) {
  // Convert basic markdown like **bold**, ### headers, • bullets, and [links](url) into clean HTML
  const lines = text.split('\n')

  return lines.map((line, idx) => {
    // Header 3
    if (line.startsWith('### ')) {
      return (
        <h4 key={idx} className="font-bold text-gray-900 text-sm mt-2 mb-1">
          {line.replace('### ', '')}
        </h4>
      )
    }

    // Bullet points
    if (line.trim().startsWith('•') || line.trim().startsWith('-') || /^\d+\./.test(line.trim())) {
      const formatted = renderInlineText(line)
      return (
        <div key={idx} className="flex items-start gap-1.5 my-1 text-xs sm:text-sm text-gray-700 leading-relaxed">
          <span className="text-[#14B8A6] font-bold shrink-0">•</span>
          <span className="flex-1">{formatted}</span>
        </div>
      )
    }

    // Empty line
    if (!line.trim()) {
      return <div key={idx} className="h-1.5" />
    }

    return (
      <p key={idx} className="my-1 text-xs sm:text-sm text-gray-700 leading-relaxed">
        {renderInlineText(line)}
      </p>
    )
  })
}

function renderInlineText(text: string): React.ReactNode[] {
  // Simple regex to match **bold** and [title](url)
  const parts: React.ReactNode[] = []
  let remainder = text
  let key = 0

  while (remainder.length > 0) {
    // Check for [label](url)
    const linkMatch = remainder.match(/\[([^\]]+)\]\(([^)]+)\)/)
    // Check for **bold**
    const boldMatch = remainder.match(/\*\*([^*]+)\*\*/)

    if (!linkMatch && !boldMatch) {
      parts.push(<span key={key++}>{remainder}</span>)
      break
    }

    const linkIndex = linkMatch ? linkMatch.index! : Infinity
    const boldIndex = boldMatch ? boldMatch.index! : Infinity

    if (linkIndex < boldIndex && linkMatch) {
      // Link comes first
      if (linkIndex > 0) {
        parts.push(<span key={key++}>{remainder.substring(0, linkIndex)}</span>)
      }
      const label = linkMatch[1]
      const href = linkMatch[2]
      parts.push(
        <Link
          key={key++}
          href={href}
          className="text-[#0B3B6D] underline font-semibold hover:text-[#14B8A6] inline-flex items-center gap-0.5 transition-colors"
        >
          {label}
        </Link>
      )
      remainder = remainder.substring(linkIndex + linkMatch[0].length)
    } else if (boldMatch) {
      // Bold comes first
      if (boldIndex > 0) {
        parts.push(<span key={key++}>{remainder.substring(0, boldIndex)}</span>)
      }
      parts.push(
        <strong key={key++} className="font-semibold text-gray-900">
          {boldMatch[1]}
        </strong>
      )
      remainder = remainder.substring(boldIndex + boldMatch[0].length)
    }
  }

  return parts
}

export default function AiChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [hasPrompted, setHasPrompted] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content:
        `Hello! 👋 I'm **Travash's AI Assistant**.\n\n` +
        `Ask me anything about our software engineering services, AI solutions, technologies, or hiring dedicated developers. How can I help you today?`,
      timestamp: 'Just now',
    },
  ])

  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Auto scroll to bottom of chat
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, isLoading, isOpen])

  // Show teaser tooltip after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setHasPrompted(true)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus()
      }, 150)
    }
  }, [isOpen])

  const handleSend = async (messageText?: string) => {
    const textToSend = messageText || input
    if (!textToSend.trim() || isLoading) return

    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    const userMsg: Message = {
      id: String(Date.now()),
      role: 'user',
      content: textToSend.trim(),
      timestamp: now,
    }

    const updatedMessages = [...messages, userMsg]
    setMessages(updatedMessages)
    setInput('')
    setIsLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: updatedMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      })

      if (!res.ok) {
        throw new Error('Failed to get response')
      }

      const data = await res.json()
      const assistantMsg: Message = {
        id: String(Date.now() + 1),
        role: 'assistant',
        content: data.reply || 'Thank you for your message. How else may I assist you?',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      }

      setMessages((prev) => [...prev, assistantMsg])
    } catch (err) {
      console.error('Chat error:', err)
      const errorMsg: Message = {
        id: String(Date.now() + 1),
        role: 'assistant',
        content:
          "I'm sorry, I couldn't reach the server right now. You can always email us directly at **contact@travash.com** or call **+91 7416743434**!",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      }
      setMessages((prev) => [...prev, errorMsg])
    } finally {
      setIsLoading(false)
    }
  }

  const handleReset = () => {
    setMessages([
      {
        id: 'welcome',
        role: 'assistant',
        content:
          `Hello! 👋 I'm **Travash's AI Assistant**.\n\n` +
          `Ask me anything about our software engineering services, AI solutions, technologies, or hiring dedicated developers. How can I help you today?`,
        timestamp: 'Just now',
      },
    ])
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-3 w-[360px] sm:w-[420px] h-[560px] max-h-[82vh] max-w-[calc(100vw-32px)] flex flex-col rounded-2xl bg-white shadow-2xl border border-gray-200 overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#0A1E3B] via-[#0B3B6D] to-[#0A1E3B] p-4 text-white flex items-center justify-between border-b border-white/10 shrink-0">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#14B8A6] to-cyan-300 p-0.5 shadow-md flex items-center justify-center">
                  <div className="w-full h-full bg-[#0A1E3B] rounded-full flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-[#14B8A6]" />
                  </div>
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 border-2 border-[#0A1E3B] rounded-full"></span>
              </div>
              <div>
                <h3 className="font-bold text-sm leading-tight flex items-center gap-1.5">
                  Travash AI Assistant
                  <span className="bg-[#14B8A6]/20 text-[#14B8A6] text-[10px] px-1.5 py-0.5 rounded-full font-medium border border-[#14B8A6]/30">
                    AI
                  </span>
                </h3>
                <p className="text-xs text-blue-200">Online • Instant Answers</p>
              </div>
            </div>

            <div className="flex items-center space-x-1">
              <button
                onClick={handleReset}
                title="Reset conversation"
                className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Reset conversation"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                title="Close chat"
                className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Chat Messages Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-slate-50/70">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex gap-2.5 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {m.role === 'assistant' && (
                  <div className="w-7 h-7 rounded-full bg-[#0B3B6D] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Bot className="w-4 h-4 text-[#14B8A6]" />
                  </div>
                )}

                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 shadow-sm text-sm ${
                    m.role === 'user'
                      ? 'bg-gradient-to-r from-[#0B3B6D] to-[#0A1E3B] text-white rounded-br-xs'
                      : 'bg-white border border-gray-100 text-gray-800 rounded-bl-xs'
                  }`}
                >
                  {m.role === 'assistant' ? (
                    <div>{formatMarkdown(m.content)}</div>
                  ) : (
                    <p className="leading-relaxed whitespace-pre-wrap">{m.content}</p>
                  )}
                  <div
                    className={`text-[10px] mt-1 text-right ${
                      m.role === 'user' ? 'text-white/60' : 'text-gray-400'
                    }`}
                  >
                    {m.timestamp}
                  </div>
                </div>

                {m.role === 'user' && (
                  <div className="w-7 h-7 rounded-full bg-[#14B8A6] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <User className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>
            ))}

            {/* Quick Starter Prompts if only 1 message */}
            {messages.length === 1 && (
              <div className="pt-2">
                <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  Frequently Asked Questions
                </p>
                <div className="flex flex-col gap-1.5">
                  {STARTER_QUESTIONS.map((question, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSend(question)}
                      className="text-left text-xs bg-white hover:bg-blue-50/80 hover:text-[#0B3B6D] hover:border-blue-200 text-gray-700 p-2.5 rounded-xl border border-gray-200 transition-all flex items-center justify-between group shadow-2xs"
                    >
                      <span>{question}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#0B3B6D] group-hover:translate-x-0.5 transition-all shrink-0 ml-1" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Typing Indicator */}
            {isLoading && (
              <div className="flex gap-2.5 items-center">
                <div className="w-7 h-7 rounded-full bg-[#0B3B6D] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Bot className="w-4 h-4 text-[#14B8A6]" />
                </div>
                <div className="bg-white border border-gray-100 rounded-2xl rounded-bl-xs px-4 py-3 shadow-sm flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#14B8A6] animate-bounce [animation-delay:-0.3s]"></span>
                  <span className="w-2 h-2 rounded-full bg-[#14B8A6] animate-bounce [animation-delay:-0.15s]"></span>
                  <span className="w-2 h-2 rounded-full bg-[#14B8A6] animate-bounce"></span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Box Footer */}
          <div className="p-3 bg-white border-t border-gray-100 shrink-0">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleSend()
              }}
              className="flex items-center gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                placeholder="Ask anything about Travash..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={isLoading}
                className="flex-1 text-xs sm:text-sm bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#0B3B6D] focus:bg-white text-gray-800 transition-all"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="bg-gradient-to-r from-[#0B3B6D] to-[#14B8A6] hover:opacity-90 disabled:opacity-40 text-white p-2.5 rounded-xl shadow-md transition-all shrink-0 cursor-pointer disabled:cursor-not-allowed"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
            <div className="flex items-center justify-between mt-2 px-1 text-[10px] text-gray-400">
              <span>Powered by Travash AI</span>
              <Link href="/contact-us" className="text-[#0B3B6D] hover:underline font-medium">
                Book a consultation →
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Floating Launcher Action Button */}
      <div className="relative group flex items-center">
        {/* Hover / Ambient Tooltip */}
        {!isOpen && hasPrompted && (
          <div
            onClick={() => setIsOpen(true)}
            className="mr-3 hidden sm:flex items-center gap-2 bg-white text-gray-800 text-xs font-semibold px-3.5 py-2 rounded-full shadow-lg border border-gray-100 cursor-pointer hover:bg-gray-50 transition-all whitespace-nowrap animate-in fade-in slide-in-from-right-2 duration-300"
          >
            <span className="w-2 h-2 rounded-full bg-[#14B8A6] animate-ping"></span>
            <span>✨ Need help? Ask AI</span>
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

        {/* Pulsing ring animation */}
        <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#0B3B6D] to-[#14B8A6] opacity-30 animate-pulse pointer-events-none" />

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-14 h-14 rounded-full bg-gradient-to-tr from-[#0A1E3B] via-[#0B3B6D] to-[#14B8A6] hover:from-[#0B4785] hover:to-[#0d9488] text-white flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none"
          aria-label="Toggle AI Chatbot"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <div className="relative flex items-center justify-center">
              <Bot className="w-7 h-7 text-white" />
              <Sparkles className="w-3.5 h-3.5 text-amber-300 absolute -top-1 -right-1 animate-spin [animation-duration:8s]" />
            </div>
          )}
        </button>
      </div>
    </div>
  )
}
