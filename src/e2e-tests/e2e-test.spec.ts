import { describe, expect, it } from 'vitest'

describe('Contém um conjunto de testes, que será executado um a um', () => {
  it('Deve somar 20 + 50 e retornar 70', () => {
    expect(20 + 50).toBe(70)
  })
})
