import { mapMenu } from "./map-menu"

describe('map-menu', () => {
  it('should return a predefined object if no data', () => {
    const menu = mapMenu()
    expect(menu.newTab).toBe(false)
    expect(menu.text).toBe(false)
    expect(menu.srcImg).toBe(false)
    expect(menu.link).toBe(false)
    expect(menu.links).toBe(false)
  })
})
