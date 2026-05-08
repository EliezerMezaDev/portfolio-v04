"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Button from "@components/ui/Button";

const NotFound = () => {
  return (
    <div>
      <div className="relative min-h-screen w-full  gap-4 p-10 flex justify-center items-center flex-col mb-10 ">
        <div className="min-h-screen flex justify-center items-center">
          <div className="mx-auto grid grid-cols-1   ">
            <div className="flex justify-center items-center flex-col mb-5 space-y-10">
              <div>
                <h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400 text-center">
                  Upps
                </h2>
                <h1 className="text-4xl font-medium text-neutral-900 text-center">
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
  );
};

export default NotFound;
