import { NextResponse } from 'next/server'

export async function POST(): Promise<NextResponse<{status: number} | { error: string }>> {
  try {
    return NextResponse.json({ status: 200 })
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.toString() },
      { status: 500}
    )
  }
}
