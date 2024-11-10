import type { APIRoute } from "astro";

// LEER
export const GET: APIRoute = async () => {
  const response = await fetch("http://localhost:5071/api/PasswordEntries");
  const data = await response.json();
  //   console.log(data);
  return new Response(
    JSON.stringify({
      externalData: data,
    }),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

// LEER POR ID
export const GETID: APIRoute = async ({ params }) => {
  const { id } = params; // Obtenemos el `id` desde los parámetros de la URL

  const response = await fetch(`http://localhost:5071/api/PasswordEntries/${id}`); // Añadimos el `id` a la URL
  const data = await response.json();

  return new Response(
    JSON.stringify({
      externalData: data,  // El ítem con el `id` especificado
    }),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};


// BORRAR
export const DELETE: APIRoute = async ({ request, params }) => {
  const { id } = params;

  // Aquí puedes realizar la lógica para eliminar el recurso
  // Por ejemplo, podrías eliminarlo de una base de datos.

  // Simulamos la eliminación
  console.log(`Eliminando item con ID: ${id}`);

  // Respuesta de éxito
  return new Response(JSON.stringify({ message: `Item ${id} eliminado` }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

// CREAR
export const POST: APIRoute = async ({ request, params }) => {
  const data = await request.json();

  console.log(data);

  return new Response(
    JSON.stringify({
      message: "sucess",
    }),
    { status: 200 }
  );
};

// Actualizar
export const PUT: APIRoute = async ({ request, params }) => {
  const data = await request.json();

  return new Response(
    JSON.stringify({
      message: "Recurso actualizado",
    }),
    { status: 200 }
  );
};
