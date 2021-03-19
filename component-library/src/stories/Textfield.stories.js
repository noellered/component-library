/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import Textfield from '../components/Textfield';

export default {
    title: 'Components/Forms/Input/Textfield',
    component: Textfield,
  };

const Template = (args) => 
<>
  <Textfield {...args}/>
</>;

export const Default = Template.bind({});
Default.args = {
  label: 'Email',
  placeholder: 'yourname@example.com',
  isRound: false,
  showLabel: true,
  disabled: false,
};

export const Error = Template.bind({});
Error.args = {
  label: 'Username',
  placeholder: 'taken_username',
  hasError: true,
  errorMessage: 'Sorry, that username is already in use.',
  isRound: false,
  showLabel: true,
  disabled: false,
};


export const Success = Template.bind({});
Success.args = {
  label: 'Username',
  placeholder: 'unique_username',
  hasSuccess: true,
  successMessage: 'That username is available!',
  isRound: false,
  showLabel: true,
  disabled: false,
};
