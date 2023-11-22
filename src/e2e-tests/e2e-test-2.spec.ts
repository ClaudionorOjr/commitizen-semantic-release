import { describe, expect, it } from 'vitest'

describe('Contém um conjunto de testes, que será executado um a um', () => {
  it('Deve retornar que o Palmeiras não tem mundial', () => {
    const temMundial = false
    expect(temMundial).toBeFalsy()
  })
})
