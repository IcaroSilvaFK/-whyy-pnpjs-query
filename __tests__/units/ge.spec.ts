import { describe, it, expect, beforeEach, vi } from 'vitest'

import Query from '../../src'
import { Utils } from '../../src/utils/utils'


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

  it("Should have called toIsoString to convert date to string", () => {
    const mockValue = "2022-01-01T00:00:00.000Z"
    vi.spyOn(Utils, "toIsoString").mockReturnValue(mockValue)


    const expected = `createdAt ge '${mockValue}'`

    const result = query.ge("createdAt", new Date()).build()

    expect(result).toBe(expected)

  })

})