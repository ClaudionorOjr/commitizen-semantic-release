import { describe, expect, it } from 'vitest'

describe('Contém um conjunto de testes, que será executado um a um', () => {
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
