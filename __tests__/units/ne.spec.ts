import { it, expect, beforeEach, describe, vi, expectTypeOf } from "vitest"


import Query from '../../src'

describe("#ne test case suite", () => {
  let query: Query


  beforeEach(() => {
    query = new Query()
  })

  it("Should not generate query when pass invalid params", () => {

    const expected = ""


    const result = query.ne("", "").build()



    expect(result).toBe(expected)
  })


  it("Should generate valid query when pass number type value", () => {

    const expected = "id ne 1"

    const result = query.ne("id", 1).build()


    expect(result).toBe(expected)
  })

  it("Should generate valid query when pass date type value", () => {

    const expected = "id ne '2022-01-01T00:00:00.000Z'"


    vi.spyOn(Date.prototype, 'toISOString').mockReturnValue("2022-01-01T00:00:00.000Z")


    const date = new Date(2022, 0, 1)


    const result = query.ne("id", date).build()


    expect(result).toBe(expected)
  })


  it("Should generate valid query when pass string type value", () => {

    const expected = "name ne 'Test'"

    const result = query.ne("name", "Test").build()


    expect(result).toBe(expected)
  })

})

