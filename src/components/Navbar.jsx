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
      backgroundColor: '#ffffff',
      borderBottom: '1px solid #e5e7eb',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{ maxWidth: '100%', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '3.5rem'
        }}>
          {/* Logo/Brand */}
          <Link to="/" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: '#1f2937',
            fontWeight: 700,
            fontSize: '1.2rem',
            textDecoration: 'none',
            opacity: 1,
            transition: 'opacity 0.2s'
          }} 
            onMouseEnter={(e) => e.target.style.opacity = '0.7'}
            onMouseLeave={(e) => e.target.style.opacity = '1'}
          >
            🔍 AIDetect
          </Link>

          {/* Navigation Links */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2.5rem'
          }}>
            <Link to="/" style={{
              color: '#6b7280',
              textDecoration: 'none',
              fontSize: '0.95rem',
              fontWeight: 500,
              transition: 'color 0.2s'
            }} 
              onMouseEnter={(e) => e.target.style.color = '#1f2937'}
              onMouseLeave={(e) => e.target.style.color = '#6b7280'}
            >
              Detect
            </Link>
            <Link to="/compare" style={{
              color: '#6b7280',
              textDecoration: 'none',
              fontSize: '0.95rem',
              fontWeight: 500,
              transition: 'color 0.2s'
            }}
              onMouseEnter={(e) => e.target.style.color = '#1f2937'}
              onMouseLeave={(e) => e.target.style.color = '#6b7280'}
            >
              Compare
            </Link>
            <Link to="/batch" style={{
              color: '#6b7280',
              textDecoration: 'none',
              fontSize: '0.95rem',
              fontWeight: 500,
              transition: 'color 0.2s'
            }}
              onMouseEnter={(e) => e.target.style.color = '#1f2937'}
              onMouseLeave={(e) => e.target.style.color = '#6b7280'}
            >
              Batch
            </Link>
            <Link to="/dashboard" style={{
              color: '#6b7280',
              textDecoration: 'none',
              fontSize: '0.95rem',
              fontWeight: 500,
              transition: 'color 0.2s'
            }}
              onMouseEnter={(e) => e.target.style.color = '#1f2937'}
              onMouseLeave={(e) => e.target.style.color = '#6b7280'}
            >
              Analytics
            </Link>
            <Link to="/history" style={{
              color: '#6b7280',
              textDecoration: 'none',
              fontSize: '0.95rem',
              fontWeight: 500,
              transition: 'color 0.2s'
            }}
              onMouseEnter={(e) => e.target.style.color = '#1f2937'}
              onMouseLeave={(e) => e.target.style.color = '#6b7280'}
            >
              History
            </Link>
          </div>

          {/* Status Indicator */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.5rem 0.875rem',
            backgroundColor: isOnline ? '#dcfce7' : '#fee2e2',
            borderRadius: '6px'
          }}>
            <div style={{
              width: '0.625rem',
              height: '0.625rem',
              borderRadius: '50%',
              backgroundColor: isOnline ? '#10b981' : '#ef4444',
              animation: !loading && isOnline ? 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' : 'none'
            }}></div>
            <span style={{
              fontSize: '0.85rem',
              fontWeight: 500,
              color: isOnline ? '#166534' : '#991b1b'
            }}>
              {loading ? 'Checking' : isOnline ? 'Backend Online' : 'Backend Offline'}
            </span>
          </div>
        </div>
      </div>
    </nav>
  )
}
