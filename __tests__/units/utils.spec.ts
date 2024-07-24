import { describe, it, expect, vi } from 'vitest'
import { Utils } from '../../src/utils/utils'

describe("#Utils suite test case", () => {

  it("Should trim spaces", () => {
    const str = "   Test   "

    const expected = "Test"

    const result = Utils.trimSpaces(str)


    expect(result).toBe(expected)
  })

  it("Should convert date to iso string", () => {
    vi.spyOn(Date.prototype, 'toISOString').mockReturnValue("2022-01-01T00:00:00.000Z")


    const date = new Date(2022, 0, 1)
    const expected = "2022-01-01T00:00:00.000Z"

    const result = Utils.toIsoString(date)

    expect(result).toBe(expected)
  })

})