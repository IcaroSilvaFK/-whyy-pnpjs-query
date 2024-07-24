import { describe, it, expect, beforeEach, vi } from 'vitest'

import Query from '../../src'
import { Utils } from '../../src/utils/utils'


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


  it("Should have called toIsoString to convert date to string", () => {
    const mockValue = "2022-01-01T00:00:00.000Z"
    vi.spyOn(Utils, "toIsoString").mockReturnValue(mockValue)


    const expected = `createdAt le '${mockValue}'`

    const result = query.le("createdAt", new Date()).build()

    expect(result).toBe(expected)

  })

})
