import { legendIcons, legendLinks } from 'utils'

describe('legend', () => {
  describe('legendIcons', () => {
    it('should match snapshot', () => {
      expect(legendIcons).toMatchSnapshot()
    })

    it('should contain home, car, airplane and target icons', () => {
      expect(legendIcons).toContainEqual({
        name: 'home',
        title: 'Home',
        text: 'My place',
        label: 'Maps and location icons created by juicy_fish - Flaticon',
        href: 'https://www.flaticon.com/free-icons/maps-and-location'
      })

      expect(legendIcons).toContainEqual({
        name: 'car',
        title: 'Car',
        text: 'Visited by car',
        label: 'Maps and location icons created by juicy_fish - Flaticon',
        href: 'https://www.flaticon.com/free-icons/maps-and-location'
      })

      expect(legendIcons).toContainEqual({
        name: 'airplane',
        title: 'Airplane',
        text: 'Visited by airplane',
        label: 'Airplane icons created by juicy_fish - Flaticon',
        href: 'https://www.flaticon.com/free-icons/airplane'
      })

      expect(legendIcons).toContainEqual({
        name: 'target',
        title: 'Target',
        text: 'To be visited',
        label: 'Goal icons created by juicy_fish - Flaticon',
        href: 'https://www.flaticon.com/free-icons/goal'
      })
    })
  })

  describe('legendLinks', () => {
    it('should match snapshot', () => {
      expect(legendLinks).toMatchSnapshot()
    })

    it('should contain juicy_fish and flaticon links', () => {
      expect(legendLinks).toContainEqual({
        title: 'juicy_fish icons',
        text: 'juicy_fish',
        label: 'Go to juicy_fish icons',
        href: 'https://www.flaticon.com/authors/juicy-fish'
      })

      expect(legendLinks).toContainEqual({
        title: 'Flaticon',
        text: 'Flaticon',
        label: 'Go to Flaticon',
        href: 'https://www.flaticon.com'
      })
    })
  })
})
