import { configure, addDecorator } from '@storybook/react';
import '@storybook/addon-actions/register';

// automatically import all files ending in *.stories.tsx
const req = require.context('../stories', true, /.stories.tsx$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
