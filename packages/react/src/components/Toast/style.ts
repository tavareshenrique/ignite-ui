import * as ReactToast from '@radix-ui/react-toast';

import { keyframes, styled } from '../../styles';

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
});

const fadeInLeft = keyframes({
  '0%': { opacity: 0, transform: 'translateX(20px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

export const ToastRoot = styled(ReactToast.Root, {
  backgroundColor: '$gray800',
  borderRadius: '6px',
  padding: '12px 20px',

  width: '360px',

  position: 'absolute',
  bottom: '20px',
  right: '20px',

  display: 'grid',
  columnGap: '15px',

  div: {
    margin: '6px 0',
  },

  '.toast__title': {
    fontSize: '$xl',
    fontFamily: '$default',
    fontWeight: '$regular',
    lineHeight: '$base',
    color: '$white',
  },

  '.toast__description': {
    fontSize: '$sm',
    fontFamily: '$default',
    fontWeight: '$regular',
    lineHeight: '$base',
    color: '$gray200',
  },

  '.toast__close': {
    position: 'absolute',
    top: '12px',
    right: '12px',
    color: '$gray200',

    backgroundColor: 'transparent',
    border: 'none',
    padding: '0',
    cursor: 'pointer',

    '&:hover': {
      color: '$gray100',
    },
  },

  '&[data-state="open"]': {
    animation: `${fadeInLeft} 1s ease-in-out`,
  },

  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`,
  },
});
