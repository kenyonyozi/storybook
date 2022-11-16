import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Badge from './Badge';

export default {
  title: 'Badge/Badge',
  component: Badge,
  argTypes: {
    
   
  }
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => (
  <Badge {...args}/>
);

export const BadgeDefault = Template.bind({});
BadgeDefault.args = {
    title: 'Badge',
   
};