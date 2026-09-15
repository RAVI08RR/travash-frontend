import React from 'react'
import { detectAssetFormat } from '../lib/formatDetector'

export function FormatDetectorCard(props: any) {
  // In Sanity custom inputs, props.parent has the sibling fields
  const parent = props.parent || {}
  const assetRef =
    parent.asset?._ref ||
    parent.image?.asset?._ref ||
    parent.file?.asset?._ref ||
    props.value

  const detected = detectAssetFormat(assetRef)

  return (
    <div style={{ margin: '8px 0', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {detected ? (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '10px 14px',
            borderRadius: '6px',
            backgroundColor: '#EBF3FB',
            border: '1px solid #B8D6F5',
          }}
        >
          <span
            style={{
              padding: '3px 8px',
              borderRadius: '4px',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.05em',
              backgroundColor: '#0B4785',
              color: '#FFFFFF',
              textTransform: 'uppercase',
            }}
          >
            {detected.extensionUpper}
          </span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            <span style={{ fontSize: '13px', fontWeight: 600, color: '#0B4785' }}>
              Auto-Detected: {detected.formatLabel}
            </span>
            <span style={{ fontSize: '11px', color: '#4B5563' }}>
              {detected.dimensionsText ? `Dimensions: ${detected.dimensionsText} px` : ''}
              {detected.orientation ? ` • Orientation: ${detected.orientation}` : ''}
              {detected.aspectRatio ? ` • Aspect Ratio: ${detected.aspectRatio}:1` : ''}
            </span>
          </div>
        </div>
      ) : (
        <div
          style={{
            padding: '8px 12px',
            borderRadius: '6px',
            backgroundColor: '#F8FAFC',
            border: '1px dashed #CBD5E1',
            color: '#64748B',
            fontSize: '12px',
          }}
        >
          Upload an image above to automatically detect format, dimensions, and orientation.
        </div>
      )}
    </div>
  )
}
