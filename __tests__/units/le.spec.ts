import { describe, it, expect, beforeEach } from 'vitest'

import Query from '../../src'


describe("#le suite test case", () => {

  let query: Query


  beforeEach(() => {
    query = new Query()
  })


  it("Should generate le query", () => {

    const expected = "name le 'Test'"

    const result = query
      .le("name", "Test")
      .build()


    expect(result).toBe(expected)
  })

  it("Should generate valid query when value is number", () => {
    const expected = "age le 1"

    const result = query.le("age", 1).build()

    expect(result).toBe(expected)
  })

  it("Should not generate query when not value is empty", () => {

    const expected = ""

    const result = query
      .le("name", "")
      .build()


    expect(result).toBe(expected)
  })
})
