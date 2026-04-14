import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { detectText, detectFile, extractText } from '../api/detector'

export default function Home() {
  const [mode, setMode] = useState('text') // 'text' or 'file'
  const [text, setText] = useState('')
  const [result, setResult] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleDetect = async () => {
    if (!text.trim()) {
      toast.error('Please enter some text')
      return
    }

    const words = text.trim().split(/\s+/).length
    if (words < 20) {
      toast.error('Minimum 20 words required')
      return
    }

    setIsLoading(true)
    try {
      const detectionResult = await detectText(text)
      setResult(detectionResult)
      toast.success('Detection complete')
    } catch (error) {
      toast.error('Backend not running at http://localhost:8000')
    } finally {
      setIsLoading(false)
    }
  }

  const handleFileUpload = async (e) => {
    const file = e.target.files?.[0]
    if (!file) return

    setIsLoading(true)
    try {
      // First extract text
      const extracted = await extractText(file)
      const fileText = extracted.text || ''

      // Then detect
      const detectionResult = await detectFile(file)
      setResult(detectionResult)
      setText(fileText)
      toast.success('File analysis complete')
    } catch (error) {
      toast.error('File processing failed')
    } finally {
      setIsLoading(false)
    }
  }

  if (result) {
    const isAI = result.verdict === 'AI Generated'
    const color = isAI ? '#ef4444' : '#10b981'
    
    return (
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)',
        padding: '4rem 2rem',
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          {/* Result Card */}
          <div style={{
            background: '#ffffff',
            borderRadius: '16px',
            padding: '3rem 2rem',
            textAlign: 'center',
            border: `2px solid ${color}`,
            marginBottom: '2rem'
          }}>
            <div style={{
              fontSize: '4rem',
              marginBottom: '1rem'
            }}>
              {isAI ? '🤖' : '✅'}
            </div>
            
            <h2 style={{
              fontSize: '1.875rem',
              fontWeight: 700,
              color: '#1f2937',
              margin: '0 0 0.5rem 0'
            }}>
              {isAI ? 'AI Generated' : 'Human Written'}
            </h2>
            
            <p style={{
              fontSize: '3rem',
              fontWeight: 800,
              color: color,
              margin: '1.5rem 0'
            }}>
              {result.confidence.toFixed(1)}%
            </p>
            
            <p style={{
              color: '#6b7280',
              fontSize: '0.95rem',
              margin: 0
            }}>
              Confidence Score
            </p>
          </div>

          {/* Model Scores */}
          <div style={{
            background: '#ffffff',
            borderRadius: '16px',
            padding: '2rem',
            marginBottom: '2rem'
          }}>
            <h3 style={{
              fontSize: '1rem',
              fontWeight: 600,
              color: '#1f2937',
              marginTop: 0,
              marginBottom: '1.5rem'
            }}>
              Model Analysis
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {Object.entries(result.breakdown).map(([model, score]) => (
                <div key={model}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '0.5rem'
                  }}>
                    <span style={{
                      fontSize: '0.9rem',
                      fontWeight: 500,
                      color: '#374151',
                      textTransform: 'capitalize'
                    }}>
                      {model.replace(/_/g, ' ')}
                    </span>
                    <span style={{
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      color: score >= 70 ? '#ef4444' : score >= 40 ? '#f59e0b' : '#10b981'
                    }}>
                      {score.toFixed(1)}%
                    </span>
                  </div>
                  <div style={{
                    height: '6px',
                    backgroundColor: '#e5e7eb',
                    borderRadius: '3px',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      height: '100%',
                      width: `${Math.min(score, 100)}%`,
                      backgroundColor: score >= 70 ? '#ef4444' : score >= 40 ? '#f59e0b' : '#10b981',
                      transition: 'width 0.6s ease-out'
                    }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <button
            onClick={() => {
              setResult(null)
              setText('')
            }}
            style={{
              width: '100%',
              padding: '1rem',
              backgroundColor: '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'background-color 0.2s'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#2563eb'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#3b82f6'}
          >
            Analyze Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)',
      padding: '4rem 2rem',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: 800,
            color: '#1f2937',
            margin: '0 0 0.75rem 0'
          }}>
            Detect AI Text
          </h1>
          <p style={{
            fontSize: '1.05rem',
            color: '#6b7280',
            margin: 0
          }}>
            Identify AI-generated content with precision
          </p>
        </div>

        {/* Mode Selector */}
        <div style={{
          display: 'flex',
          gap: '1rem',
          marginBottom: '2rem',
          justifyContent: 'center'
        }}>
          <button
            onClick={() => {
              setMode('text')
              setText('')
            }}
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: mode === 'text' ? '#3b82f6' : '#f0f0f0',
              color: mode === 'text' ? 'white' : '#6b7280',
              border: 'none',
              borderRadius: '8px',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            📝 Text Mode
          </button>
          <button
            onClick={() => {
              setMode('file')
              setText('')
            }}
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: mode === 'file' ? '#3b82f6' : '#f0f0f0',
              color: mode === 'file' ? 'white' : '#6b7280',
              border: 'none',
              borderRadius: '8px',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            📄 File Mode
          </button>
        </div>

        {/* Input Box */}
        <div style={{
          background: '#ffffff',
          borderRadius: '16px',
          padding: '2.5rem',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)',
          border: '1px solid #f0f0f0'
        }}>
          {mode === 'text' ? (
            <>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Paste your text here... (minimum 20 words)"
                style={{
                  width: '100%',
                  minHeight: '240px',
                  padding: '1rem',
                  backgroundColor: '#f9fafb',
                  color: '#1f2937',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  fontSize: '0.95rem',
                  fontFamily: 'inherit',
                  outline: 'none',
                  boxSizing: 'border-box',
                  resize: 'vertical',
                  transition: 'all 0.2s'
                }}
                onFocus={(e) => {
                  e.target.style.backgroundColor = '#ffffff'
                  e.target.style.borderColor = '#3b82f6'
                  e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)'
                }}
                onBlur={(e) => {
                  e.target.style.backgroundColor = '#f9fafb'
                  e.target.style.borderColor = '#e5e7eb'
                  e.target.style.boxShadow = 'none'
                }}
              />

              {/* Word Count */}
              <div style={{
                marginTop: '1rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <span style={{
                  fontSize: '0.875rem',
                  color: '#6b7280'
                }}>
                  {text.trim().split(/\s+/).filter(w => w.length > 0).length} words
                </span>
                {text.trim().split(/\s+/).filter(w => w.length > 0).length < 20 && text.trim() && (
                  <span style={{
                    fontSize: '0.875rem',
                    color: '#f59e0b'
                  }}>
                    Need {20 - text.trim().split(/\s+/).filter(w => w.length > 0).length} more
                  </span>
                )}
              </div>

              {/* Analyze Button */}
              <button
                onClick={handleDetect}
                disabled={isLoading || !text.trim()}
                style={{
                  width: '100%',
                  marginTop: '1.5rem',
                  padding: '1rem',
                  backgroundColor: isLoading || !text.trim() ? '#d1d5db' : '#3b82f6',
                  color: isLoading || !text.trim() ? '#9ca3af' : 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: 600,
                  cursor: isLoading || !text.trim() ? 'not-allowed' : 'pointer',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  if (!isLoading && text.trim()) {
                    e.target.style.backgroundColor = '#2563eb'
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isLoading && text.trim()) {
                    e.target.style.backgroundColor = '#3b82f6'
                  }
                }}
              >
                {isLoading ? 'Analyzing...' : 'Analyze'}
              </button>
            </>
          ) : (
            <>
              <div
                style={{
                  border: '2px dashed #e5e7eb',
                  borderRadius: '12px',
                  padding: '3rem',
                  textAlign: 'center',
                  minHeight: '240px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#3b82f6'
                  e.currentTarget.style.backgroundColor = '#eff6ff'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e5e7eb'
                  e.currentTarget.style.backgroundColor = 'transparent'
                }}
              >
                <input
                  type="file"
                  accept=".txt,.pdf,.docx"
                  onChange={handleFileUpload}
                  disabled={isLoading}
                  style={{ display: 'none' }}
                  id="file-upload"
                />
                <label htmlFor="file-upload" style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  cursor: 'pointer',
                  width: '100%'
                }}>
                  <p style={{ fontSize: '3rem', margin: 0 }}>📁</p>
                  <p style={{
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: '#1f2937',
                    margin: '1rem 0 0.5rem 0'
                  }}>
                    Upload Document
                  </p>
                  <p style={{
                    fontSize: '0.9rem',
                    color: '#6b7280',
                    margin: 0
                  }}>
                    TXT, PDF, or DOCX
                  </p>
                </label>
              </div>

              <button
                style={{
                  width: '100%',
                  marginTop: '1.5rem',
                  padding: '1rem',
                  backgroundColor: isLoading ? '#d1d5db' : '#3b82f6',
                  color: isLoading ? '#9ca3af' : 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: 600,
                  cursor: isLoading ? 'not-allowed' : 'pointer',
                  transition: 'all 0.2s'
                }}
                disabled={isLoading || !text.trim()}
                onMouseEnter={(e) => {
                  if (!isLoading && text.trim()) {
                    e.target.style.backgroundColor = '#2563eb'
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isLoading && text.trim()) {
                    e.target.style.backgroundColor = '#3b82f6'
                  }
                }}
              >
                {isLoading ? 'Processing...' : 'Analyze File'}
              </button>
            </>
          )}
        </div>

        {/* Info */}
        <div style={{
          marginTop: '2rem',
          padding: '1.25rem',
          backgroundColor: '#eff6ff',
          borderRadius: '8px',
          border: '1px solid #bfdbfe'
        }}>
          <p style={{
            fontSize: '0.875rem',
            color: '#1e40af',
            margin: 0
          }}>
            💡 Uses multiple AI detection models for high accuracy
          </p>
        </div>
      </div>
    </div>
  )
}

