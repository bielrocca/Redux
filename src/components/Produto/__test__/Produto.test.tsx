import { fireEvent, screen } from '@testing-library/react'
import Produto from '..'
import { renderizaComProvider } from '../../../utils/tests'

const jogo = {
  id: 1,
  categoria: 'RPG',
  imagem: '',
  plataformas: ['PC', 'PlayStation', 'Xbox'],
  preco: 149.99,
  precoAntigo: 249.99,
  titulo: 'DarkSouls III'
}

describe('Testes para o componente Produto', () => {
  test('Deve renderizar corretamente', () => {
    renderizaComProvider(<Produto game={jogo} />)
    expect(screen.getByText('DarkSouls III')).toBeInTheDocument()
  })

  test('Deve adicionar um item ao carrinho', () => {
    const { store } = renderizaComProvider(<Produto game={jogo} />)
    const botao = screen.getByTestId('btn-adicionar')
    fireEvent.click(botao)

    expect(store.getState().carrinho.itens).toHaveLength(1)
  })
})
