import type { Meta, StoryObj } from '@storybook/react';
import { SelectItem } from './index';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof SelectItem> = {
	component: SelectItem,
	title: 'SelectItem',
};
export default meta;
type Story = StoryObj<typeof SelectItem>;

export const Primary = {
	args: {},
};

export const Heading: Story = {
	args: {},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		expect(canvas.getByText(/Welcome to SelectItem!/gi)).toBeTruthy();
	},
};
