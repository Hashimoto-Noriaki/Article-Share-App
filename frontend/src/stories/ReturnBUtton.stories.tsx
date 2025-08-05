import { ReturnButton } from '../shared/components/atoms/ReturnButton/ReturnButton';

const meta: Meta<typeof AuthButton> = {
  title: 'Atoms/ReturnButton',
  component: ReturnButton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AuthButton>;

export const Return: Story = {
  args: {
    children: '戻る',
  },
};
