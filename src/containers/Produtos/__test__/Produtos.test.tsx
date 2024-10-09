import { rest } from 'msw'
import { setupServer } from 'msw/node'

import Produtos from '..'
import { renderizaComProvider } from '../../../utils/tests'
import { screen, waitFor } from '@testing-library/react'

const mocks = [
  {
    id: 1,
    categoria: 'RPG',
    imagem: '',
    plataformas: ['Windows', 'PlayStation', 'Xbox'],
    preco: 149.99,
    precoAntigo: 249.99,
    titulo: 'DarkSouls III'
  },
  {
    id: 2,
    categoria: 'FPS',
    imagem: '',
    plataformas: ['Windows', 'PlayStation', 'Xbox'],
    preco: 49.99,
    precoAntigo: 149.99,
    titulo: 'Rainbow Six'
  },
  {
    id: 3,
    categoria: 'Aberto',
    imagem: '',
    plataformas: ['Windows', 'PlayStation', 'Xbox'],
    preco: 79.99,
    precoAntigo: 159.99,
    titulo: 'GTA V'
  },
  {
    id: 4,
    categoria: '',
    imagem: '',
    plataformas: ['Windows'],
    preco: 39.99,
    precoAntigo: 99.99,
    titulo: 'First Class Trouble'
  }
]

const server = setupServer(
  rest.get(
    'http://localhost:4000/produtos',
    (requisicao, resposta, contexto) => {
      return resposta(contexto.json(mocks))
    }
  )
)

describe('Teste para o container produtos', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  test('Deve renderizar corretamente com o texto de carregamento', () => {
    renderizaComProvider(<Produtos />)
    expect(screen.getByText('Carregando...')).toBeInTheDocument()
  })

  test('Deve renderizar corretamente com a listagem de jogos', async () => {
    const { debug } = renderizaComProvider(<Produtos />)
    await waitFor(() => {
      debug()
      expect(screen.getByText('Rainbow Six')).toBeInTheDocument()
    })
  })
})
