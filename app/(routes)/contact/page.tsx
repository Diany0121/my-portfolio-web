"use client";
import ContainerPage from "@/app/components/container";
import CoverParticles from "@/app/components/cover-particles";

import React, { useState, ChangeEvent, FormEvent } from "react";
import emailjs from "emailjs-com";

interface FormData {
  nombre: string;
  email: string;
  asunto: string;
  mensaje: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  const [estado, setEstado] = useState<{
    enviado: boolean;
    error: boolean;
  }>({
    enviado: false,
    error: false,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData, // Corregido: reemplazamos el punto por una coma
      [e.target.name]: e.target.value,
    });
  };

  const enviarCorreo = (e: FormEvent) => {
    e.preventDefault();

    // Validar los campos del formulario
    if (
      !formData.nombre ||
      !formData.email ||
      !formData.asunto ||
      !formData.mensaje
    ) {
      setEstado({ enviado: false, error: true });
      return;
    }

    // Configura los parámetros de EmailJS
    const serviceID = "TU_SERVICE_ID";
    const templateID = "TU_TEMPLATE_ID";
    const userID = "TU_USER_ID";

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log("Correo enviado", response.status, response.text);
        setEstado({ enviado: true, error: false });
        setFormData({
          nombre: "",
          email: "",
          asunto: "",
          mensaje: "",
        });
      })
      .catch((err) => {
        console.error("Error al enviar el correo", err);
        setEstado({ enviado: false, error: true });
      });
  };

  return (
    <>
      <ContainerPage>
        <CoverParticles />

        <div className="flex flex-col justify-center h-full mb-28">
          <h1 className="text-2xl leading-tight text-center md:text-4xl mt-5 mb-5  text-gray-600">
            Contacta {""}
            <span className=" font-bold text-secondary">conmigo</span>
          </h1>

          <form onSubmit={enviarCorreo} className="flex flex-col gap-10">
            <div className="flex flex-row gap-2 items-center">
                <label htmlFor="nombre" className="font-bold text-gray-600">Nombre: </label>
                <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                className="border-secondary border rounded w-2/5  h-8"
              />
            </div>

            <div className="flex flex-row gap-2 items-center">
                <label htmlFor="email" className="font-bold text-gray-600">Email: </label>
                <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="border-secondary border rounded w-2/5 h-8"
              />
            </div>

            <div className="flex flex-row gap-2 items-center">
                <label htmlFor="mensaje" className="font-bold text-gray-600">Mensaje:</label>
                <textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                required
                className="border-secondary border rounded w-2/5 h-36"
              ></textarea>
            </div>
            <button type="submit">Enviar</button>
          </form>
        </div>

          {estado.enviado && <p>¡Mensaje enviado correctamente!</p>}
          {estado.error && (
            <p className="error">
              Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.
            </p>
          )}

      </ContainerPage>
    </>
  );
};

export default Contact;
