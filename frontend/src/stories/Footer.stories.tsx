import { Footer } from '../shared/components/atoms/Footer/Footer';

const meta: Meta<typeof Footer> = {
  title: 'Atoms/Footer',
  component: Footer,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Footer>;

// 👇 Storyの名前を別名にした
export const Default: Story = {
  args: {
    children: 'フッタ-',
  },
};
