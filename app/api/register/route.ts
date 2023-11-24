import bcrypt from 'bcrypt'

import prisma from "@/app/libs/prismadb"
import { NextResponse } from "next/server"

export async function POST(request : request) {
  const body = await request.json()
  const { 
    firstName, 
    lastName,
    password,
  } = body;
  
  const hashedPassword = await bcrypt.hash(password, 12)
  const user = await prisma.user.create({
    data: {
      firstName,
      lastName,
      password: hashedPassword,
    },
  });
  return NextResponse.json(user)
}

