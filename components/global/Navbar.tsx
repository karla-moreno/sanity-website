import { urlForImage } from 'lib/sanity.image'

import { resolveHref } from 'lib/sanity.links'
import Link from 'next/link'
import Image from 'next/image'
import { MenuItem } from 'types'
import { logoImage } from 'types'

interface NavbarProps {
  menuItems?: MenuItem[]
  logoImage?: logoImage
}

export function Navbar({ menuItems, logoImage }: NavbarProps) {
  let imageUrl = logoImage && urlForImage(logoImage)?.width(100).height(100).url()
  let imageAlt = logoImage && logoImage.alt;
  return (
    <div className="sticky top-0 z-10 flex flex-wrap items-center gap-x-5 bg-white/80 py-2 px-4 backdrop-blur md:py-4 md:px-16 lg:px-32">
      {imageUrl &&
        <div className="mr-auto">
          <Link
            href='/'
          >
            <Image src={imageUrl} alt={imageAlt} width={50} height={50} />
          </Link>
        </div>
      }
      {menuItems &&
        menuItems.map((menuItem, key) => {
          const href = resolveHref(menuItem?._type, menuItem?.slug)
          if (!href) {
            return null
          }
          return (
            <Link
              key={key}
              className={`text-base hover:text-black md:text-lg ${
                menuItem?._type === 'home'
                  ? 'font-extrabold text-black'
                  : 'text-gray-600'
              }`}
              href={href}
            >
              {menuItem.title}
            </Link>
          )
        })}
    </div>
  )
}
