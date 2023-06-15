import type { Preview } from '@storybook/vue3';
import { themes, ensure } from '@storybook/theming';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    theme: ensure(themes.light), // The replacement theme to use
  },
};

export default preview;
