import { describe, expect, it } from 'vitest'

describe('Contém um conjunto de testes, que será executado um a um', () => {
  it('O valor deve ser um número', () => {
    expect(20).toEqual(expect.any(Number))
  })
})
