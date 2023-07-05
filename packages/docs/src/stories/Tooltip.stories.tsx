import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip, IToolTipProps, Box } from '@ihenrits-ui/react';

export default {
  title: 'Data display/Tooltip',
  component: Tooltip.Content,
  tags: ['autodocs'],
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{
            display: 'flex',
            flexDirection: 'column',
            gap: '$2',
            margin: 'auto',
            width: 'fit-content',
          }}
        >
          <Tooltip.Provider>
            <Tooltip.Root>
              <Tooltip.Trigger>
                <button>Pass Mouse Here</button>
              </Tooltip.Trigger>
              {Story()}
            </Tooltip.Root>
          </Tooltip.Provider>
        </Box>
      );
    },
  ],
} as Meta<IToolTipProps>;

export const Primary: StoryObj<IToolTipProps> = {
  args: {
    children: '26 de Outubro - Disponível',
  },
};
