import { describe, it, expect, beforeEach } from 'vitest'

import Query from '../../src'


describe("#ge suite test case", () => {
  let query: Query

  beforeEach(() => {
    query = new Query()
  })


  it("Should generate ge query", () => {
    const expected = "name ge 'Test'"

    const result = query
      .ge("name", "Test")
      .build()

    expect(result).toBe(expected)
  })


  it("Should generate valid query when value is number", () => {
    const expected = "age ge 1"

    const result = query.ge("age", 1).build()


    expect(result).toBe(expected)
  })


  it("Should not generate query when pass invalid value", () => {

    const expected = ""

    const result = query
      .ge("age", "")
      .build()


    expect(result).toBe(expected)
  })

})