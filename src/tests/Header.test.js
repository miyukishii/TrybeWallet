import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import Wallet from '../pages/Wallet';

describe('Testing Wallet page', () => {
    it("Should render all page's elements", () => {
      renderWithRouterAndRedux(<Wallet />, { initialState: {
        user: { email: 'alguem@gmail.com'}
      }});
  
      const title = screen.getByText(/trybe wallet/i);
      const image = screen.getByRole('img', { name: 'coin' });
      const email = screen.getByTestId('email-field');
      const total = screen.getByTestId('total-field');
      const currency = screen.getByTestId('header-currency-field');
  
      expect(title).toBeInTheDocument();
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute('src', 'coin.png');
      expect(email).toBeInTheDocument();
      expect(email).toHaveTextContent('alguem@gmail.com');
      expect(total).toBeInTheDocument();
      expect(currency).toBeInTheDocument();

    });
  });