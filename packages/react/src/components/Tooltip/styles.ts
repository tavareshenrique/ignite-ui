import { styled } from '../../styles';

import * as ReactTooltip from '@radix-ui/react-tooltip';

export const ContentTooltip = styled(ReactTooltip.Content, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  minWidth: '208px',
  width: 'auto',
  height: '24px',

  padding: '12px 16px',

  backgroundColor: '$gray900',
  color: '$gray100',

  textAlign: 'center',
  fontSize: '$sm',
  fontFamily: '$default',
  fontWeight: '$medium',
  lineHeight: '$short',
});
