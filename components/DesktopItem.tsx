'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { FC } from 'react'

interface DesktopItemProps {
  href: string
  label: string
  icon: any
  onClick?: () => void
  active?: boolean
}

const DesktopItem: FC<DesktopItemProps> = ({
  href,
  label,
  icon: Icon,
  onClick,
  active,
}) => {
  const handleOnClick = () => {
    if (onClick) {
      onClick()
    }
  }

  return (
    <li onClick={handleOnClick}>
      <Link
        href={href}
        className={clsx(
          `group flex gap-x-3 rounded-md p-3 text-sm font-semibold leading-6 text-gray-500 hover:bg-gray-100 hover:text-black`,
          active && 'bg-gray-100 text-black',
        )}
      >
        <Icon className="h-6 w-6 shrink-0" />
        <span className="sr-only">{label}</span>
      </Link>
    </li>
  )
}

export default DesktopItem
