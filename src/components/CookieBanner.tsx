'use client'

import { useState, useEffect } from 'react'
import CookieConsent from 'react-cookie-consent'

export default function CookieBanner() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <CookieConsent
      location="bottom"
      buttonText="Akzeptieren"
      declineButtonText="Ablehnen"
      cookieName="cookieConsent"
      style={{
        background: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",
        color: "white",
        fontSize: "14px",
        padding: "20px",
        boxShadow: "0 -4px 20px rgba(0, 0, 0, 0.1)"
      }}
      buttonStyle={{
        background: "white",
        color: "#1e3a8a",
        fontSize: "14px",
        fontWeight: "600",
        padding: "12px 24px",
        borderRadius: "8px",
        border: "none",
        cursor: "pointer",
        marginLeft: "10px"
      }}
      declineButtonStyle={{
        background: "transparent",
        color: "white",
        fontSize: "14px",
        fontWeight: "600",
        padding: "12px 24px",
        borderRadius: "8px",
        border: "2px solid white",
        cursor: "pointer",
        marginLeft: "10px"
      }}
      expires={365}
      enableDeclineButton
      onAccept={() => {
        console.log("Cookies akzeptiert")
      }}
      onDecline={() => {
        console.log("Cookies abgelehnt")
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <strong>🍪 Cookie-Hinweis</strong><br />
        Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern. 
        Durch die Nutzung unserer Website stimmen Sie der Verwendung von Cookies zu. 
        <a 
          href="/cookies" 
          style={{ color: "white", textDecoration: "underline", marginLeft: "5px" }}
        >
          Mehr erfahren
        </a>
      </div>
    </CookieConsent>
  )
}
