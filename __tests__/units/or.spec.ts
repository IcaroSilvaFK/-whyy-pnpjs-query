import { describe, it, expect, beforeEach } from 'vitest'
import Query from '../../src'


describe("#or test case suite", () => {
  let query: Query

  beforeEach(() => {
    query = new Query()
  })


  it("Should generate or query", () => {

    const expected = "name eq 'Test' or age eq 1"

    const result = query
      .eq("name", "Test")
      .or()
      .eq("age", 1)
      .build()


    expect(result).toBe(expected)
  })

  it("Should not generate or operator when not have query", () => {
    const expected = ""


    const result = query.or().build()

    expect(result).toBe(expected)

  })
})