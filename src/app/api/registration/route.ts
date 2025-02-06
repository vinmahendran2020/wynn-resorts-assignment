import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest): Promise<NextResponse<{status: number} | { error: string }>> {
  try {

    const formData = await request.formData()

    console.log('formData', formData)
    const employees = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      phoneNumber: formData.get('phoneNumber'),
    }    
    return NextResponse.json({ status: 200 })
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.toString() },
      { status: 500}
    )
  }
}
