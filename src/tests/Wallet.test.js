import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import Wallet from '../pages/Wallet';

describe('Testing Wallet page', () => {
    it("Should render all page's elements", async () => {
      //  const currencies = [
      //       'USD',
      //       'CAD',
      //       'GBP',
      //       'ARS',
      //       'BTC',
      //       'LTC',
      //       'EUR',
      //       'JPY',
      //       'CHF',
      //       'AUD',
      //       'CNY',
      //       'ILS',
      //       'ETH',
      //       'XRP',
      //       'DOGE'
      //   ];
      
      renderWithRouterAndRedux(<Wallet />, { initialState: { wallet: { currencies: [], expenses: [] } } });
  
      const value = screen.getByRole('spinbutton', { name: 'Valor'});
      const description = screen.getByRole('textbox', { name: 'Descrição' });
      const currency = screen.getByRole('combobox', { name: 'Moeda' });
      const method = screen.getByRole('combobox', { name: 'Método de pagamento' });
      const tag = screen.getByRole('combobox', { name: 'Categoria' });
      const button = screen.getByRole('button', { name: 'Adicionar despesa' });
  
      expect(value).toBeInTheDocument();
      expect(value.value).toBe('');
      expect(description).toBeInTheDocument();
      expect(description.value).toBe('');
      expect(currency).toBeInTheDocument();
      expect(method).toBeInTheDocument();
      expect(method.value).toBe('Dinheiro');
      expect(tag).toBeInTheDocument();
      expect(tag.value).toMatch('Alimentação');
      expect(button).toBeInTheDocument();
      expect(await screen.findByText('USD')).toBeInTheDocument();

      userEvent.type(value, '12');
      userEvent.type(description, 'Lanche');
      userEvent.click(currency, 'USD');
      userEvent.click(method, 'Dinheiro');
      userEvent.click(tag, 'Alimentação');
      userEvent.click(button);

      expect(await screen.findByText('Real')).toBeInTheDocument();
      expect(await screen.findByRole('button', {name: 'Excluir'})).toBeInTheDocument();
      expect(await screen.findByRole('button', {name: 'Editar despesa'})).toBeInTheDocument();
    });
  });