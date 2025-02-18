"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface RegistrationDialogProps {
  children: React.ReactNode
}

export function RegistrationDialog({ children }: RegistrationDialogProps) {
  const [open, setOpen] = useState(false)
  const [step, setStep] = useState(1)
  const [isMinor, setIsMinor] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step === 1) {
      setStep(2)
    } else {
      setShowSuccess(true)
    }
  }

  const handleClose = () => {
    setOpen(false)
    setStep(1)
    setShowSuccess(false)
  }

  return (
    <>
      <div onClick={() => setOpen(true)} >{children}</div>
      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-md">
          {showSuccess ? (
            <div className="text-center py-6">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CU3%20-%20Participaci%C3%B3n%20Inscripta-8bLBhU9rUMS323xcLyvtD3tyxKU1Co.png"
                alt="Success"
                className="w-32 h-32 mx-auto mb-4"
              />
              <h2 className="text-2xl font-semibold text-[#FF6B6B] mb-4">Se registró tu participación con éxito</h2>
              <Button onClick={handleClose} className="bg-[#FF6B6B] hover:bg-[#FF5252]">
                Cerrar
              </Button>
            </div>
          ) : (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl text-center text-[#FF6B6B]">Formulario de Inscripción</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#FF6B6B] text-white flex items-center justify-center flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Acepta el uso de todos tus datos.</h3>
                      <p className="text-sm text-gray-600">
                        Usaremos los datos de tu cuenta para poder obtener toda la información necesaria.
                      </p>
                    </div>
                  </div>

                  {step === 2 && (
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-[#FF6B6B] text-white flex items-center justify-center flex-shrink-0">
                        2
                      </div>
                      <div className="flex-1">
                        {isMinor ? (
                          <>
                            <h3 className="font-semibold mb-1">Sube la autorización</h3>
                            <p className="text-sm text-gray-600 mb-4">
                              Necesitaremos la autorización de tus tutores para continuar. Puedes descargar la plantilla
                              a continuación
                            </p>
                            <Button variant="outline" className="mb-4">
                              Descargar
                            </Button>
                            <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center">
                              <p className="text-sm text-gray-500">Sube tu autorización haciendo click aquí</p>
                            </div>
                          </>
                        ) : (
                          <h3 className="font-semibold">Confirma la participación</h3>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                <Button type="submit" className="w-full bg-[#FF6B6B] hover:bg-[#FF5252]">
                  {step === 1 ? "Continuar" : "Inscribirte"}
                </Button>
              </form>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}

