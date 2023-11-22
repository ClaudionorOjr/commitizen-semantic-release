import { describe, expect, it } from 'vitest'

describe('Contém um conjunto de testes, que será executado um a um', () => {
  it("Deve concatenar a palavra 'Olá' com a palavra 'Mundo' e retornar 'Olá Mundo'", () => {
    expect('Olá ' + 'Mundo').toBe('Olá Mundo')
  })
})
