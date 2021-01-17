import {render} from '@testing-library/react';

import MemoryList from '../MemoryList';

describe('<MemoryList />', () => {
	describe('snapshots', () => {
		it('should render correctly an empty list of cards', () => {
			const {container} = render(<MemoryList />);

			expect(container.firstChild).toBeNull();
		});

		it('should render correctly a list of cards', () => {
			const {container, getAllByRole} = render(
				<MemoryList figures={[1, 1, 2, 2]} />
			);

			const buttons = getAllByRole('button');

			expect(buttons).toHaveLength(4);
			expect(container.firstChild).toMatchSnapshot();
		});
	});
});
