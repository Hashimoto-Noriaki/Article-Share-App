import type { Meta, StoryObj } from '@storybook/react-vite';
import { AuthButton } from '../shared/components/atoms/auth/AuthButton';

const meta: Meta<typeof AuthButton> = {
  title: 'Atoms/AuthButton',
  component: AuthButton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AuthButton>;

export const Login: Story = {
  args: {
    children: 'ログイン',
  },
};

export const Register: Story = {
  args: {
    children: '新規登録',
  },
};
