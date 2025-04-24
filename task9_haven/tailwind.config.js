export const theme = {
    extend: {
        keyframes: {
            slideFadeIn: {
                '0%': { opacity: '0', transform: 'translateY(-20px)' },
                '100%': { opacity: '1', transform: 'translateY(0)' }
            }
        },
        animation: {
            'slide-fade-in': 'slideFadeIn 1s ease-out forwards'
        }
    }
};
  