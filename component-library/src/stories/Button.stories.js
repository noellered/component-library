/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../components/Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => 
<>
  <Button {...args} onClick={action('clicked')}/>
</>;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  label: 'Button',
  isFlat: false,
  isOutline: false,
  isRound: false,
  disabled: false
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  label: 'Button',
  isFlat: false,
  isOutline: false,
  isRound: false,
  disabled: false
};

export const Danger = Template.bind({});
Danger.args = {
  variant: 'danger',
  label: 'Button',
  isFlat: false,
  isOutline: false,
  isRound: false,
  disabled: false
};

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
  label: 'Button',
  isFlat: false,
  isOutline: false,
  isRound: false,
  disabled: false
};

export const Info = Template.bind({});
Info.args = {
  variant: 'info',
  label: 'Button',
  isFlat: false,
  isOutline: false,
  isRound: false,
  disabled: false
};

export const Light = Template.bind({});
Light.args = {
  variant: 'light',
  label: 'Button',
  isFlat: false,
  isOutline: false,
  isRound: false,
  disabled: false
};

export const Dark = Template.bind({});
Dark.args = {
  variant: 'dark',
  label: 'Button',
  isFlat: false,
  isOutline: false,
  isRound: false,
  disabled: false
};

export const Flat = Template.bind({});
Flat.args = {
  variant: 'primary',
  label: 'Button',
  isFlat: true,
  isOutline: false,
  isRound: false
};

export const Outline = Template.bind({});
Outline.args = {
  variant: 'info',
  label: 'Button',
  isFlat: false,
  isOutline: true,
  disabled: false
};

export const Round = Template.bind({});
Round.args = {
  variant: 'info',
  label: 'Button',
  isFlat: false,
  isOutline: true,
  isRound: true,
  disabled: false
};