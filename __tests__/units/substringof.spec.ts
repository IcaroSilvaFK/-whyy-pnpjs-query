import { describe, it, expect, beforeEach } from 'vitest'

import Query from '../../src'


describe("#substringof test case suite", () => {
  let query: Query


  beforeEach(() => {
    query = new Query()
  })


  it("Should generate substringof query", () => {

    const expected = "substringof('Test', name)"

    const result = query
      .substringof("name", "Test")
      .build()


    expect(result).toBe(expected)
  })


  it("Should not generate query when value is empty", () => {
    const expected = ""

    const result = query
      .substringof("name", "")
      .build()

    expect(result).toBe(expected)
  })

})