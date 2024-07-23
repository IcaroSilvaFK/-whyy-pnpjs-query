import { describe, it, expect, beforeEach } from 'vitest'


import Query from '../../src'

describe("#and test case suite", () => {
  let query: Query

  beforeEach(() => {
    query = new Query()
  })


  it("Should generate and query", () => {

    const expected = "name eq 'Test' and age eq 1"

    const result = query
      .eq("name", "Test")
      .and()
      .eq("age", 1)
      .build()

    expect(result).toBe(expected)

  })

  it("Should not generate and operator when not have query", () => {

    const expected = ""

    const result = query.and().build()


    expect(result).toBe(expected)
  })

})  