import { Footer } from 'components/global/Footer'
import { Navbar } from 'components/global/Navbar'
import Example from 'components/global/navigation'
import { PreviewBanner } from 'components/preview/PreviewBanner'
import IntroTemplate from 'intro-template'
import { urlForImage } from 'lib/sanity.image'
import { SettingsPayload } from 'types'

const fallbackSettings: SettingsPayload = {
  menuItems: [],
  footer: [],
}

export interface LayoutProps {
  children: React.ReactNode
  settings: SettingsPayload | undefined
  preview?: boolean
}

export default function Layout({
  children,
  settings = fallbackSettings,
  preview,
}: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-white text-black">
      {preview && <PreviewBanner />}
      <Navbar menuItems={settings?.menuItems} logoImage={settings?.logoImage} />
      <Example />
      <div className="mt-20 flex-grow px-4 md:px-16 lg:px-32">{children}</div>
      <Footer footer={settings?.footer} />
      <IntroTemplate />
    </div>
  )
}
