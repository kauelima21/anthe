import { Meta, StoryObj } from '@storybook/angular/types-6-0';
import { AntheButtonComponent } from '@kauelima21/anthe-ui';
import { ButtonVariants } from './types/button-variant.enum';

export default {
  title: 'Form/Button',
  component: AntheButtonComponent,
  argTypes: {
    variant: {
      control: {
        type: 'inline-radio',
      },
    },
    type: {
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta;

export const Primary: StoryObj<AntheButtonComponent> = {
  args: {
    variant: ButtonVariants.primary,
    label: 'Label',
  },
};

export const Secondary: StoryObj<AntheButtonComponent> = {
  args: {
    variant: ButtonVariants.secondary,
    label: 'Label',
  },
};

export const Success: StoryObj<AntheButtonComponent> = {
  args: {
    variant: ButtonVariants.success,
    label: 'Label',
  },
};

export const Danger: StoryObj<AntheButtonComponent> = {
  args: {
    variant: ButtonVariants.danger,
    label: 'Label',
  },
};

export const Warning: StoryObj<AntheButtonComponent> = {
  args: {
    variant: ButtonVariants.warning,
    label: 'Label',
  },
};

export const Full: StoryObj<AntheButtonComponent> = {
  args: {
    variant: ButtonVariants.primary,
    label: 'Label',
    full: true,
  },
};
