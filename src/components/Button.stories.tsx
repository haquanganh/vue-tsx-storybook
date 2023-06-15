import '../styles/main.scss';

import type { Meta, StoryObj } from '@storybook/vue3';
import { linkTo } from '@storybook/addon-links';

import Button from './Button';

const meta = {
  tags: ['autodocs'],
  title: 'Button',
  component: Button,

  // render: (args) => ({
  //   components: { Button },
  //   setup() {
  //     return { args };
  //   },
  //   template: '<Button v-bind="args" />',
  // }),
  argTypes: {
    // variant: { control: 'select', options: ['primary', 'secondary'] },
    // variant: { control: 'radio', options: ['primary', 'secondary'] },
    // variant: { control: 'date' },
    // variant: { control: 'color' },
    // variant: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    label: 'Primary button',
  },
  // render: () => <Button variant="primary" label="Button" />,
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    label: 'Secondary button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Small size button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Large size button',
  },
};

export const GotoLink: Story = {
  args: {},
  render: () => <Button onClick={linkTo('Test', 'default')} label="Test" />,
};

export const GotoLink1 = () => <Button label="Test" />;
