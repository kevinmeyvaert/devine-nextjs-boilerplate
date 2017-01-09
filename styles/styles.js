import React from 'react'
import css from 'next/css'

export const somestyles = css({
  maxWidth: '500px',
  '@media (max-width: 600px)': {
    maxWidth: '100%'
  }
})

export const aboutContainer = css({
  backgroundColor: ‘red’
})
