import { ReactNode } from 'react'
import { DesktopSideBar, MobileFooter } from '@/components'

async function SideBar({ children }: { children: ReactNode }) {
  return (
    <div className="h-full">
      <DesktopSideBar />
      <MobileFooter />
      <main className="h-full lg:pl-20">{children}</main>
    </div>
  )
}

export default SideBar
