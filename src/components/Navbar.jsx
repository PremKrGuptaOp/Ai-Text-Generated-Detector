import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { checkHealth } from '../api/detector'

export default function Navbar() {
  const [isOnline, setIsOnline] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkBackendHealth = async () => {
      try {
        await checkHealth()
        setIsOnline(true)
      } catch (error) {
        setIsOnline(false)
      } finally {
        setLoading(false)
      }
    }

    checkBackendHealth()
    const interval = setInterval(checkBackendHealth, 10000)
    return () => clearInterval(interval)
  }, [])

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
      borderBottom: '1px solid #e2e8f0',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '4rem'
        }}>
          {/* Logo/Brand */}
          <Link to="/" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontWeight: 800,
            fontSize: '1.3rem',
            textDecoration: 'none',
            opacity: 1,
            transition: 'opacity 0.3s'
          }} 
            onMouseEnter={(e) => e.target.style.opacity = '0.8'}
            onMouseLeave={(e) => e.target.style.opacity = '1'}
          >
            ✨ AIDetect
          </Link>

          {/* Navigation Links */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '3rem'
          }}>
            <Link to="/" style={{
              color: '#4b5563',
              textDecoration: 'none',
              fontSize: '0.95rem',
              fontWeight: 500,
              transition: 'all 0.3s',
              paddingBottom: '0.5rem',
              borderBottom: '2px solid transparent'
            }} 
              onMouseEnter={(e) => {
                e.target.style.color = '#3b82f6'
                e.target.style.borderBottomColor = '#3b82f6'
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#4b5563'
                e.target.style.borderBottomColor = 'transparent'
              }}
            >
              🔍 Detect
            </Link>
            <Link to="/compare" style={{
              color: '#4b5563',
              textDecoration: 'none',
              fontSize: '0.95rem',
              fontWeight: 500,
              transition: 'all 0.3s',
              paddingBottom: '0.5rem',
              borderBottom: '2px solid transparent'
            }}
              onMouseEnter={(e) => {
                e.target.style.color = '#3b82f6'
                e.target.style.borderBottomColor = '#3b82f6'
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#4b5563'
                e.target.style.borderBottomColor = 'transparent'
              }}
            >
              ⚖️ Compare
            </Link>
            <Link to="/batch" style={{
              color: '#4b5563',
              textDecoration: 'none',
              fontSize: '0.95rem',
              fontWeight: 500,
              transition: 'all 0.3s',
              paddingBottom: '0.5rem',
              borderBottom: '2px solid transparent'
            }}
              onMouseEnter={(e) => {
                e.target.style.color = '#3b82f6'
                e.target.style.borderBottomColor = '#3b82f6'
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#4b5563'
                e.target.style.borderBottomColor = 'transparent'
              }}
            >
              📦 Batch
            </Link>
            <Link to="/dashboard" style={{
              color: '#4b5563',
              textDecoration: 'none',
              fontSize: '0.95rem',
              fontWeight: 500,
              transition: 'all 0.3s',
              paddingBottom: '0.5rem',
              borderBottom: '2px solid transparent'
            }}
              onMouseEnter={(e) => {
                e.target.style.color = '#3b82f6'
                e.target.style.borderBottomColor = '#3b82f6'
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#4b5563'
                e.target.style.borderBottomColor = 'transparent'
              }}
            >
              📊 Analytics
            </Link>
            <Link to="/history" style={{
              color: '#4b5563',
              textDecoration: 'none',
              fontSize: '0.95rem',
              fontWeight: 500,
              transition: 'all 0.3s',
              paddingBottom: '0.5rem',
              borderBottom: '2px solid transparent'
            }}
              onMouseEnter={(e) => {
                e.target.style.color = '#3b82f6'
                e.target.style.borderBottomColor = '#3b82f6'
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#4b5563'
                e.target.style.borderBottomColor = 'transparent'
              }}
            >
              📋 History
            </Link>
          </div>

          {/* Status Indicator */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            padding: '0.5rem 1.25rem',
            backgroundColor: isOnline ? '#ecfdf5' : '#fef2f2',
            borderRadius: '12px',
            border: `1px solid ${isOnline ? '#d1fae5' : '#fee2e2'}`,
            cursor: 'pointer',
            transition: 'all 0.3s',
            boxShadow: isOnline ? '0 2px 8px rgba(16, 185, 129, 0.1)' : '0 2px 8px rgba(239, 68, 68, 0.1)'
          }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = isOnline 
                ? '0 4px 12px rgba(16, 185, 129, 0.2)' 
                : '0 4px 12px rgba(239, 68, 68, 0.2)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = isOnline 
                ? '0 2px 8px rgba(16, 185, 129, 0.1)' 
                : '0 2px 8px rgba(239, 68, 68, 0.1)'
            }}
          >
            <div style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: isOnline ? '#10b981' : '#ef4444',
              animation: !loading && isOnline ? 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' : 'none',
              boxShadow: isOnline ? '0 0 6px rgba(16, 185, 129, 0.6)' : '0 0 6px rgba(239, 68, 68, 0.6)'
            }}></div>
            <span style={{
              fontSize: '0.85rem',
              fontWeight: 600,
              color: isOnline ? '#059669' : '#dc2626',
              letterSpacing: '0.3px'
            }}>
              {loading ? 'Checking' : isOnline ? 'Backend Online' : 'Backend Offline'}
            </span>
          </div>
        </div>
      </div>
    </nav>
  )
}
