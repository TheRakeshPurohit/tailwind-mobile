const plugin = require('tailwindcss/plugin');

module.exports = () =>
  plugin(({ addBase }) => {
    addBase({
      ':root': {
        '--device-pixel-ratio': '1',
        '--hairline-color': 'rgba(0, 0, 0, 0.2)',
        '--touch-ripple-black': 'rgba(0, 0, 0, 0.1)',
        '--touch-ripple-white': 'rgba(255, 255, 255, 0.3)',
        '--touch-ripple-color': 'var(--touch-ripple-black)',
      },
      '@media (min-resolution: 2dppx)': {
        ':root': {
          '--device-pixel-ratio': '2',
        },
      },
      '@media (min-resolution: 3dppx)': {
        ':root': {
          '--device-pixel-ratio': '3',
        },
      },
      '*': {
        '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)',
        '-webkit-text-size-adjust': '100%',
      },
      '.ios': {
        'font-family':
          '-apple-system, SF Pro Text, SF UI Text, system-ui, Helvetica Neue, Helvetica, Arial, sans-serif',
      },
      '.material': {
        'font-family': 'Roboto, system-ui, Noto, Helvetica, Arial, sans-serif',
      },
      '.ios-preloader > span': {
        animation: 'ios-preloader-spin 1s steps(8, end) infinite',
      },

      '.material-preloader > span': {
        animation: 'material-preloader-rotate 1.4s linear infinite',
      },

      '.material-preloader circle': {
        'stroke-dasharray': '100px',
        'stroke-dashoffset': '80px',
        'stroke-width': '4',
        transform: 'rotate(-90deg)',
        'transform-origin': '18px 18px',
        animation: 'material-preloader-circle-rotate 5.6s ease-in-out infinite',
      },

      '@keyframes ios-preloader-spin': {
        '100%': {
          transform: 'rotate(360deg)',
        },
      },

      '@keyframes material-preloader-rotate': {
        '0%': {
          transform: 'rotate(0deg)',
        },
        '100%': {
          transform: 'rotate(360deg)',
        },
      },

      '@keyframes material-preloader-circle-rotate': {
        '0%': {
          transform: 'rotate(-90deg)',
          'stroke-dashoffset': '100px',
        },

        '12.5%': {
          transform: 'rotate(-90deg)',
          'stroke-dashoffset': '25px',
        },

        '25%': {
          'stroke-dashoffset': '100px',
          transform: 'rotate(180deg)',
        },

        '25.1%': {
          transform: 'rotate(-180deg)',
          'stroke-dashoffset': '100px',
        },

        '37.5%': {
          transform: 'rotate(-180deg)',
          'stroke-dashoffset': '25px',
        },

        '50%': {
          'stroke-dashoffset': '100px',
          transform: 'rotate(90deg)',
        },

        '50.1%': {
          transform: 'rotate(90deg)',
          'stroke-dashoffset': '100px',
        },

        '62.5%': {
          transform: 'rotate(90deg)',
          'stroke-dashoffset': '25px',
        },

        '75%': {
          'stroke-dashoffset': '100px',
          transform: 'rotate(360deg)',
        },

        '75.1%': {
          transform: 'rotate(0deg)',
          'stroke-dashoffset': '100px',
        },

        '87.5%': {
          transform: 'rotate(0deg)',
          'stroke-dashoffset': '25px',
        },

        '100%': {
          'stroke-dashoffset': '100px',
          transform: 'rotate(270deg)',
        },
      },
      '.ripple-wave': {
        left: '0',
        top: '0',
        position: 'absolute !important',
        'border-radius': '50%',
        'pointer-events': 'none',
        'z-index': '-1',
        padding: '0',
        margin: '0',
        'font-size': '0',
        transform: 'translate3d(0px, 0px, 0) scale(0)',
        'background-color': 'var(--touch-ripple-color)',
        animation: 'touch-ripple-in 200ms forwards',
        '&.ripple-wave-out': {
          transform: 'var(--ripple-transform)',
          animation: 'touch-ripple-out 300ms forwards',
        },
      },
      '@keyframes touch-ripple-in': {
        from: {
          transform: 'translate3d(0px, 0px, 0) scale(0)',
        },
        to: {
          transform: 'var(--ripple-transform)',
        },
      },
      '@keyframes touch-ripple-out': {
        from: {
          opacity: '1',
        },
        to: {
          opacity: '0',
        },
      },
    });
  });