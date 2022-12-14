import type { Meta, Story } from '@storybook/react';
import { DashboardIcon, PackageIcon, PeopleIcon } from '../icons';

import type { EmptyStateProps } from './EmptyState';
import { EmptyState } from './EmptyState';

export default {
  component: EmptyState,
  argTypes: {
    icon: {
      options: ['dashboard', 'people'],
      mapping: {
        dashboard: <DashboardIcon height="33" width="33" />,
        people: <PeopleIcon width="33" height="33" />,
      },
      control: { type: 'radio' },
    },
  },
} as Meta;

const Template: Story<EmptyStateProps> = args => <EmptyState {...args} />;

export const Default: Story<EmptyStateProps> = Template.bind({});
Default.args = {
  title: 'تیتر',
  message: 'توضیحات',
  icon: <PackageIcon width="33" height="33" />,
};
