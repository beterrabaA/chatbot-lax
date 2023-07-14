import bcrypt from 'bcrypt'

import prisma from '@/lib/prismadb'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { username, password } = body

    const hashedPwd = await bcrypt.hash(password, 10)

    const user = await prisma.user.create({
      data: {
        username,
        hashedPwd,
      },
    })

    return NextResponse.json(user)
  } catch (err) {
    console.error(err, 'REGISTRATION ERROR')
    return new NextResponse('Internal Error', { status: 500 })
  }
}
