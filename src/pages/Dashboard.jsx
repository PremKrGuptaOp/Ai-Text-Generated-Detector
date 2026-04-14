import React, { useState, useEffect } from 'react'
import { getStats } from '../api/detector'
import toast from 'react-hot-toast'

export default function Dashboard() {
  const [stats, setStats] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchStats()
  }, [])

  const fetchStats = async () => {
    try {
      const data = await getStats()
      setStats(data)
    } catch (error) {
      toast.error('Failed to load statistics')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}>
        <p style={{ color: '#6b7280' }}>Loading...</p>
      </div>
    )
  }

  if (!stats) {
    return (
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)',
        padding: '4rem 2rem',
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: '#6b7280', fontSize: '1.1rem' }}>No data available</p>
        </div>
      </div>
    )
  }

  const StatCard = ({ title, value, subtitle, color = '#3b82f6', icon }) => (
    <div style={{
      background: '#ffffff',
      borderRadius: '12px',
      padding: '2rem',
      border: '1px solid #e5e7eb',
      textAlign: 'center',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)',
      transition: 'all 0.3s'
    }}>
      <div style={{
        fontSize: '2.5rem',
        marginBottom: '1rem'
      }}>
        {icon}
      </div>
      <h3 style={{
        color: '#6b7280',
        fontSize: '0.875rem',
        fontWeight: 600,
        textTransform: 'uppercase',
        margin: '0 0 0.5rem 0',
        letterSpacing: '0.05em'
      }}>
        {title}
      </h3>
      <p style={{
        color: color,
        fontSize: '2.5rem',
        fontWeight: 800,
        margin: '1rem 0'
      }}>
        {value}
      </p>
      {subtitle && (
        <p style={{
          color: '#9ca3af',
          fontSize: '0.875rem',
          margin: 0
        }}>
          {subtitle}
        </p>
      )}
    </div>
  )

  // Calculate totals - handle different response formats
  const total = stats.total || stats.total_scans || 0
  const aiPercent = stats.ai_percent || (stats.total_scans && stats.ai_detected ? ((stats.ai_detected / stats.total_scans) * 100).toFixed(1) : 0)
  const aiCount = Math.round((total * aiPercent) / 100)
  const humanCount = total - aiCount

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)',
      padding: '4rem 2rem',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '3rem' }}>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: 800,
            color: '#1f2937',
            margin: '0 0 0.5rem 0'
          }}>
            Analytics
          </h1>
          <p style={{
            fontSize: '1.05rem',
            color: '#6b7280',
            margin: 0
          }}>
            Your detection statistics at a glance
          </p>
        </div>

        {/* Stats Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
          marginBottom: '3rem'
        }}>
          <StatCard
            icon="📊"
            title="Total Scans"
            value={total}
            subtitle="All time detections"
            color="#3b82f6"
          />
          <StatCard
            icon="🤖"
            title="AI Generated"
            value={`${aiPercent.toFixed(1)}%`}
            subtitle={`${aiCount} out of ${total}`}
            color="#ef4444"
          />
          <StatCard
            icon="✅"
            title="Human Written"
            value={`${(100 - aiPercent).toFixed(1)}%`}
            subtitle={`${humanCount} out of ${total}`}
            color="#10b981"
          />
          <StatCard
            icon="🎯"
            title="Avg Confidence"
            value={`${(stats.avg_confidence || 0).toFixed(1)}%`}
            subtitle="Detection accuracy"
            color="#f59e0b"
          />
        </div>

        {/* Info Boxes */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem'
        }}>
          <div style={{
            background: '#eff6ff',
            borderRadius: '12px',
            padding: '1.5rem',
            border: '1px solid #bfdbfe'
          }}>
            <h3 style={{
              color: '#1e40af',
              fontSize: '1rem',
              fontWeight: 600,
              margin: '0 0 0.5rem 0'
            }}>
              💡 Pro Tip
            </h3>
            <p style={{
              color: '#1e40af',
              fontSize: '0.9rem',
              margin: 0
            }}>
              Analyze at least 20 words for the most accurate results
            </p>
          </div>

          <div style={{
            background: '#f0fdf4',
            borderRadius: '12px',
            padding: '1.5rem',
            border: '1px solid #bbf7d0'
          }}>
            <h3 style={{
              color: '#15803d',
              fontSize: '1rem',
              fontWeight: 600,
              margin: '0 0 0.5rem 0'
            }}>
              ✨ Features
            </h3>
            <p style={{
              color: '#15803d',
              fontSize: '0.9rem',
              margin: 0
            }}>
              Uses advanced ML models for high-accuracy detection
            </p>
          </div>

          <div style={{
            background: '#fef3c7',
            borderRadius: '12px',
            padding: '1.5rem',
            border: '1px solid #fde68a'
          }}>
            <h3 style={{
              color: '#92400e',
              fontSize: '1rem',
              fontWeight: 600,
              margin: '0 0 0.5rem 0'
            }}>
              🔒 Privacy
            </h3>
            <p style={{
              color: '#92400e',
              fontSize: '0.9rem',
              margin: 0
            }}>
              Your text is processed securely and never stored
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
