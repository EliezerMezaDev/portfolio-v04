"use client"
import React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import Button from "@components/ui/Button"

const NotFound = () => {
  return (
    <div>
      <div className="relative mb-10 flex min-h-screen w-full flex-col items-center justify-center gap-4 p-10">
        <div className="flex min-h-screen items-center justify-center">
          <div className="mx-auto grid grid-cols-1">
            <div className="mb-5 flex flex-col items-center justify-center space-y-10">
              <div>
                <h2 className="text-center text-lg font-normal tracking-[8px] text-neutral-400 uppercase">
                  Upps
                </h2>
                <h1 className="text-center text-4xl font-medium text-neutral-900">
                  Pagina no encontrada
                </h1>
              </div>
              <div>
                <Button variation="primary">
                  <Link href={"/"}>Ir al inicio</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound
