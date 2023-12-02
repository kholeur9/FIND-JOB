import bcrypt from 'bcrypt'

import prisma from "../../libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request : Request) {
  const body = await request.json()
  const { 
    email,
    firstName, 
    lastName,
    password,
  } = body;

  const hashedPassword = await bcrypt.hash(password, 10)
  const newUser = await prisma.user.create({
    data: {
      email,
      firstName,
      lastName,
      hashedPassword,
    },
  });
  return NextResponse.json(newUser)
}