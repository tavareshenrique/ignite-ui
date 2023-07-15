import type { Meta, StoryObj } from '@storybook/react';
import { Toast, IToastProps } from '@ihenrits-ui/react';

export default {
  title: 'Data display/Toast',
  component: Toast.Trigger,
  tags: ['autodocs'],
  args: {},
  decorators: [
    (Story) => {
      return (
        <Toast.Provider>
          {Story({
            args: {
              children: <button type="button">Click Here</button>,
              title: 'Agendamento realizado',
              description: 'Quarta-feira, 23 de Outubro às 16h',
              timeoutInSeconds: 20,
            },
          })}
        </Toast.Provider>
      );
    },
  ],
} as Meta<IToastProps>;

export const Primary: StoryObj<IToastProps> = {};
