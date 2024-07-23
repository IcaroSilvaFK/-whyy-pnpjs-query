import { describe, it, expect, beforeEach } from 'vitest'

import Query from '../../src'


describe("#eq test case suite", () => {
  let query: Query

  beforeEach(() => {
    query = new Query()
  })


  it("Should generate eq query", () => {

    const expected = "name eq 'Test'"

    const result = query
      .eq("name", "Test")
      .build()


    expect(result).toBe(expected)

  })

  it("Should generate valid query when value is number", () => {
    const expected = "age eq 1"

    const result = query.eq("age", 1).build()

    expect(result).toBe(expected)
  })

  it("Should not generate query when pass invalid value", () => {
    const expected = ""

    const result = query.eq("name", "").build()


    expect(result).toBe(expected)
  })
})