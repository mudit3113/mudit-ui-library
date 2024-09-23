module.exports = function ({ addUtilities }) {
    const utilities = {
      '.text-h1': {
        '@apply text-1.5rem leading-1.95rem': {}
      },
      '@screen tablet': {
        '.text-h1': {
          '@apply text-1.75rem leading-2.275rem': {}
        }
      },
      '@media laptop': {
        '.text-h1': {
          '@apply text-2rem leading-2.6rem': {}
        }
      },
      '.text-h2': {
        '@apply text-1.375rem leading-1.78rem': {}
      },
      '@screen tablet': {
        '.text-h2': {
          '@apply text-1.5rem leading-1.95rem': {}
        }
      },
      '@screen desktop': {
        '.text-h2': {
          '@apply text-1.75rem leading-2.275rem': {}
        }
      },
      '.text-h3': {
        '@apply text-1.25rem leading-1.625rem': {}
      },
      '@screen tablet': {
        '.text-h3': {
          '@apply text-1.375rem leading-1.78rem': {}
        }
      },
      '@screen desktop': {
        '.text-h3': {
          '@apply text-1.5rem leading-1.95rem': {}
        }
      },
      '.text-h4': {
        '@apply text-1.125rem leading-1.462rem': {}
      },
      '@screen tablet': {
        '.text-h4': {
          '@apply text-1.25rem leading-1.625rem': {}
        }
      },
      '.text-h5': {
        '@apply text-1rem leading-1.3rem': {}
      },
      '@screen tablet': {
        '.text-h5': {
          '@apply text-1.125rem leading-1.462rem': {}
        }
      },
      '@screen desktop': {
        '.text-h5': {
          '@apply text-2rem leading-2.6rem': {}
        }
      },
      '.text-h6': {
        '@apply text-0.875rem leading-1.13rem': {}
      },
      '@screen tablet': {
        '.text-h6': {
          '@apply text-1rem leading-1.3rem': {}
        }
      },
      '.text-body1': {
        '@apply text-1rem leading-1.5rem': {}
      },
      '@screen mobile': {
        '.text-body1': {
          '@apply text-1rem leading-1.5rem': {}
        }
      },
      '.text-button': {
        '@apply text-0.875rem leading-1.225rem': {}
      },
      '@screen mobile': {
        '.text-button': {
          '@apply text-1rem leading-1.4rem': {}
        }
      }
    }
    addUtilities(utilities)
  }