import { describe, it, expect } from 'vitest'

import Query from '../../src'
import { beforeEach } from 'vitest'


describe("#contains test case suite", () => {
  let queryBuilder: Query

  beforeEach(() => {
    queryBuilder = new Query()
  })

  it("Should generate contains query", () => {
    const expected = "contains(name, 'Test')"

    const query = queryBuilder
      .contains("name", "Test")
      .build()

    expect(query).toBe(expected)
  })

  it("Should not generate query when not value is empty", () => {
    const expected = ""

    const query = queryBuilder.contains("name", "").build()

    expect(query).toBe(expected)
  })


})