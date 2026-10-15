'use client'

import React from 'react'
import WhatsAppButton from './WhatsAppButton'
import AiChatbot from './AiChatbot'

export default function FloatingWidgets() {
  return (
    <>
      {/* WhatsApp Fixed on Bottom Left */}
      <WhatsAppButton />

      {/* AI Chatbot Fixed on Bottom Right */}
      <AiChatbot />
    </>
  )
}
