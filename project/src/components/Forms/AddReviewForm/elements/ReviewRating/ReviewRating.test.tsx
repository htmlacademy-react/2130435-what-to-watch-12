import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import ReviewRating from './ReviewRating';

describe('ReviewRating', () => {
  it('renders 10 ReviewRatingItem components', () => {
    render(<ReviewRating onChange={() => {}} />);
    const ratingItems = screen.getAllByTestId('rating-item');
    expect(ratingItems).toHaveLength(10);
  });

});
