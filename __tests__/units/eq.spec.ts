import { describe, it, expect, beforeEach, vi } from 'vitest'

import Query from '../../src'
import { Utils } from '../../src/utils/utils'


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

  it("Should have called toIsoString to convert date to string", () => {
    const mockValue = "2022-01-01T00:00:00.000Z"
    vi.spyOn(Utils, "toIsoString").mockReturnValue(mockValue)


    const expected = `createdAt eq '${mockValue}'`

    const result = query.eq("createdAt", new Date()).build()

    expect(result).toBe(expected)

  })
})