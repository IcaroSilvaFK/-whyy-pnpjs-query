import { describe, it, expect, beforeEach } from 'vitest'

import Query from '../../src'


describe("#startsWith test case suite", () => {
  let query: Query


  beforeEach(() => {
    query = new Query()
  })

  it("Should generate startsWith query", () => {

    const expected = "startsWith(name, 'Test')"

    const result = query
      .startsWith("name", "Test")
      .build()


    expect(result).toBe(expected)
  })


  it("Should not generate query when not value is empty", () => {

    const expected = ""

    const result = query.startsWith("name", "").build()


    expect(result).toBe(expected)
  })


})