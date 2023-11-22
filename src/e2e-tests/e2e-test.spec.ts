import { describe, expect, it } from 'vitest'

describe('Contém um conjunto de testes, que será executado um a um', () => {
  it('Deve somar 20 + 50 e retornar 70', () => {
    expect(20 + 50).toBe(70)
  })

  it("Deve concatenar a palavra 'Olá' com a palavra 'Mundo' e retornar 'Olá Mundo'", () => {
    expect('Olá ' + 'Mundo').toBe('Olá Mundo')
  })

  it('O valor deve ser um número', () => {
    expect(20).toEqual(expect.any(Number))
  })

  it('Deve retornar que o Palmeiras não tem mundial', () => {
    const temMundial = false
    expect(temMundial).toBeFalsy()
  })

  it('Deve conter todos os valores do objeto fornecido', () => {
    const meuObjeto = {
      nome: 'Palmeiras',
      temMundial: false,
      cor: 'Verde',
    }
    expect(meuObjeto).toEqual({
      nome: 'Palmeiras',
      temMundial: false,
      cor: 'Verde',
    })
  })
})
