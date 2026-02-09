"use client";

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 z-0 w-full h-full bg-base-darken overflow-hidden pointer-events-none">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* --- PATRÓN DESKTOP (Scale 8) --- */}
          <pattern
            id="desktop-pattern"
            patternUnits="userSpaceOnUse"
            width="65"
            height="65"
            patternTransform="scale(8) rotate(45)"
          >
            <PatternPaths />
          </pattern>

          {/* --- PATRÓN MOBILE (Scale 5 - max-width: 400px aprox) --- */}
          <pattern
            id="mobile-pattern"
            patternUnits="userSpaceOnUse"
            width="65"
            height="65"
            patternTransform="scale(5) rotate(45)"
          >
            <PatternPaths />
          </pattern>
        </defs>

        {/* 
            Aquí aplicamos la lógica responsive. 
            El navegador renderizará el rectángulo con el patrón adecuado según el CSS.
        */}

        {/* Rectángulo visible solo en pantallas pequeñas (< 640px) */}
        <rect
          width="100%"
          height="100%"
          fill="url(#mobile-pattern)"
          className="block sm:hidden"
        />

        {/* Rectángulo visible en pantallas medianas y grandes (>= 640px) */}
        <rect
          width="100%"
          height="100%"
          fill="url(#desktop-pattern)"
          className="hidden sm:block"
        />
      </svg>
    </div>
  );
}

// Extraemos los paths para no repetir código en las dos definiciones de patrón
const PatternPaths = () => (
  <>
    {/* Fondo del tile */}
    <rect x="0" y="0" width="100%" height="100%" fill="#011d2f" />

    {/* Elemento 1: Azul Muy Oscuro */}
    <path
      d="M.5.5v12h12V.5H.5zm13 13v12h12v-12h-12zm-13 13v12h12v-12H.5zm26 13v12h12v-12h-12zm13 13v12h12v-12h-12z"
      strokeWidth="1"
      stroke="none"
      fill="#042a42" // base-dark
      className="animate-hex-cycle-base-dark-light"
    />

    {/* Elemento 2: Azul Medio (Con animación de pulso) */}
    <path
      d="M26.5.5v12h12V.5h-12zm0 13v12h12v-12h-12zm13 13v12h12v-12h-12zm-39 13v12h12v-12H.5zm0 13v12h12v-12H.5z"
      strokeWidth="1"
      stroke="none"
      fill="#022841" // base
    />

    {/* Elemento 3: Azul Claro */}
    <path
      d="M13.5.5v12h12V.5h-12zm39 13v12h12v-12h-12zm-39 13v12h12v-12h-12zm39 0v12h12v-12h-12zm-26 26v12h12v-12h-12z"
      strokeWidth="1"
      stroke="none"
      fill="#034e7e" // base-light
      className="animate-hex-cycle-base-light-dark"
    />

    {/* Elemento 4: EL NARANJA (Con animación de color) */}
    <path
      d="M52.5.5v12h12V.5h-12zm-13 13v12h12v-12h-12zm0 26v12h12v-12h-12zm13 0v12h12v-12h-12zm-39 13v12h12v-12h-12z"
      strokeWidth="1"
      stroke="none"
      fill="#ffa630" // accent
      className="animate-hex-cycle-accent" // Aplicamos la animación
    />
  </>
);
