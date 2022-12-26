import resizeImage from '../../../routes/utilities/resize';

describe('Testing resize function', () => {
	it('Tests if the resize function works, by checking if it returns a truthy value', () => {
		expect(
			resizeImage(
				'../../../../../assets/images/fjord.jpg',
				'500',
				'500',
				'../../../../../assets/thumbs/fjord_500_500.jpg'
			)
		);
	});
});
