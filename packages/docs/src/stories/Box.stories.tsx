import type { StoryObj, Meta } from '@storybook/react';

import { Box, IBoxProps, Text } from '@ihenrits-ui/react';

export default {
  title: 'Surfaces/Box',
  component: Box,
  tags: ['autodocs'],
  args: {
    children: (
      <>
        <Text>Box Element</Text>
      </>
    )
  },
  argTypes: {
    children: {
      control: { type: null }
    }
  }
} satisfies Meta<IBoxProps>;

export const Primary: StoryObj<IBoxProps> = {};

