import * as ReactTooltip from '@radix-ui/react-tooltip';

import { ContentTooltip } from './styles';

import { IToolTipProps } from './@interfaces';

const Trigger = ({ children }: IToolTipProps) => {
  return <ReactTooltip.Trigger asChild>{children}</ReactTooltip.Trigger>;
};

Trigger.displayName = 'TooltipTrigger';

const Provider = ({ children }: IToolTipProps) => {
  return <ReactTooltip.Provider>{children}</ReactTooltip.Provider>;
};

Provider.displayName = 'TooltipProvider';

const Root = ({ children }: IToolTipProps) => {
  return <ReactTooltip.Root>{children}</ReactTooltip.Root>;
};

Root.displayName = 'TooltipRoot';

const Content = ({ children }: IToolTipProps) => {
  return (
    <ReactTooltip.Portal>
      <ContentTooltip sideOffset={5}>
        <ReactTooltip.Arrow />
        {children}
      </ContentTooltip>
    </ReactTooltip.Portal>
  );
};

Content.displayName = 'TooltipContent';

export { Trigger, Content, Root, Provider };
