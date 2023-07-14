import axios from 'axios'
import { useCallback, useState } from 'react'
import { useRouter } from 'next/navigation'
import { User } from '@prisma/client'

import Avatar from '@/components/Avatar'
// import LoadingModal from '@/app/components/modals/LoadingModal'

interface UserBoxProps {
  data: { name: string }
}

const UserBox: React.FC<UserBoxProps> = ({ data }) => {
  const router = useRouter()

  const handleClick = () => {
    router.push(`/conversations/${data.name}`)
  }
  return (
    <>
      {/* {isLoading && <LoadingModal />} */}
      <div
        onClick={handleClick}
        className="
          relative 
          flex 
          w-full 
          cursor-pointer 
          items-center 
          space-x-3 
          rounded-lg 
          bg-white
          p-3
          transition
          hover:bg-neutral-100
        "
      >
        <Avatar />
        <div className="min-w-0 flex-1">
          <div className="focus:outline-none">
            <span className="absolute inset-0" aria-hidden="true" />
            <div className="mb-1 flex items-center justify-between">
              <p className="text-sm font-medium text-gray-900">{data.name}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserBox
