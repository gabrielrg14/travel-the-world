import { render, screen } from '@testing-library/react'
import { IPlaceMock, placesMock } from 'test/mocks'

import { ImageGallery } from '.'

describe('<ImageGallery />', () => {
  it('should render the image caption', () => {
    render(
      <ImageGallery
        name={placesMock.cairo.name}
        gallery={placesMock.cairo.gallery}
      />
    )

    const imageCaption = screen.getByText(
      `${placesMock.cairo.gallery[0].caption}`
    )

    expect(imageCaption).toBeInTheDocument()
  })

  it.each(placesMock.arrayList)(
    'should render the image gallery for %s with correct attributes',
    (name, place) => {
      const placeName = name as string
      const placeMock = place as IPlaceMock
      const galleryImage = placeMock.gallery[0]

      render(<ImageGallery name={placeName} gallery={placeMock.gallery} />)

      const placeImage = screen.getByTestId(placeName)

      expect(placeImage).toBeInTheDocument()
      expect(placeImage).toHaveAttribute(
        'title',
        galleryImage.caption || placeName
      )
      expect(placeImage).toHaveAccessibleName(galleryImage.caption || placeName)
      expect(placeImage).toHaveAttribute('width', galleryImage.width.toString())
      expect(placeImage).toHaveAttribute(
        'height',
        galleryImage.height.toString()
      )
    }
  )
})
