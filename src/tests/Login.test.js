import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import App from '../App';


describe('Testing Login page', () => {
    it("Should render all page's elements", () => {
      renderWithRouterAndRedux(<App />, { initialState: { user: { user: '' } } });
  
      const email = screen.getByRole('textbox', { name: 'E-mail' });
      const password = screen.getByTestId('password-input');
      const title = screen.getByText(/trybe wallet/i);
      const image = screen.getByRole('img', { name: 'coin' });
      const button = screen.getByRole('button', { name: 'Entrar' });
  
      expect(email).toBeInTheDocument();
      expect(password).toBeInTheDocument();
      expect(title).toBeInTheDocument();
      expect(image).toBeInTheDocument();
      expect(button).toBeInTheDocument();
      expect(button).toBeDisabled();
      expect(image).toHaveAttribute('src', 'coin.png');
    });

    it("Should test the inputs and button", () => {
       const { history } = renderWithRouterAndRedux(<App />);
    
        const email = screen.getByRole('textbox', { name: 'E-mail' });
        const password = screen.getByTestId('password-input');
        const button = screen.getByRole('button', { name: 'Entrar' });

        expect(button).toBeDisabled();

        userEvent.type(email, 'emailErrado');
        userEvent.type(password, '1');

        expect(button).toBeDisabled();

        userEvent.type(email, 'alguem@gmail.com');
        userEvent.type(password, '123456');

        expect(button).not.toBeDisabled();

        userEvent.click(button);

        const { pathname } = history.location;
        expect(pathname).toBe('/carteira');

      });
  });