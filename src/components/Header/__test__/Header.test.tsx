import { screen } from '@testing-library/react'
import Header from '..'

import { renderizaComProvider } from '../../../utils/tests'

describe('Testes para o componente Header', () => {
  test('Deve renderizar corretamente', () => {
    renderizaComProvider(<Header />)
    expect(screen.getByTestId('title').innerHTML).toContain('EBAC Games')
  })

  test('Deve renderizar com 2 itens no carrinho', () => {
    renderizaComProvider(<Header />, {
      preloadedState: {
        carrinho: {
          itens: [
            {
              id: 1,
              categoria: 'Souls Like',
              imagem: '',
              plataformas: ['PC', 'PlayStation', 'Xbox'],
              preco: 149.99,
              precoAntigo: 249.99,
              titulo: 'DarkSouls III'
            },
            {
              id: 2,
              categoria: 'FPS',
              imagem: '',
              plataformas: ['PC'],
              preco: 0,
              precoAntigo: 89.0,
              titulo: 'Counter-Strike 2'
            }
          ]
        }
      }
    })

    expect(screen.getByTestId('qtd-carrinho').innerHTML).toContain('2 itens')
  })
})
