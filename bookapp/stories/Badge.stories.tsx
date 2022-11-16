import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import  Badge  from './Badge';

export default {
  title: 'Badge',
  component: Badge,
 
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args:any) => <Badge {...args} />;

export const title = Template.bind({});
title.args = {
  title: 'Badge',
};



