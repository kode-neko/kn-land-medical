import doctor from '@assets/pics/doctor-macizo.png';
import { CardDoctor } from '@components/index';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  argTypes: { },
  args: {
    name: 'Jude Law Law',
    pic: doctor,
    surname: 'Urólogo'
  },
  component: CardDoctor,
  parameters: { layout: 'fullscreen' },
  tags: [ 'autodocs' ],
  title: 'Card/CardDoctor'
} satisfies Meta<typeof CardDoctor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Def: Story = { };
