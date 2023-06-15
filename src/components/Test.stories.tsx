import '../styles/main.scss';

import type { Meta, StoryObj } from '@storybook/vue3';
import Test from './Test';

const meta = {
  title: 'Test',
  component: Test,
  argTypes: {},
} satisfies Meta<typeof Test>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
