import { render, screen } from '@testing-library/react';
import CardPoster from './card-poster';

describe('CardPoster', () => {
  const props = {
    posterImage: 'https://example.com/image.jpg',
    name: 'Test Film',
  };

  it('renders the poster image and title', () => {
    render(<CardPoster {...props} />);
    const image = screen.getByAltText(props.name);
    const title = screen.getByText(props.name);

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('width', '280');
    expect(image).toHaveAttribute('height', '175');
    expect(title).toBeInTheDocument();
  });

  it('sets the correct image source and dimensions', () => {
    render(<CardPoster {...props} />);
    const image = screen.getByAltText(props.name);

    expect(image).toHaveAttribute('src', props.posterImage);

  });
});
