import React from "react";

const CircularProgressBar = ({ percentage }) => {
  // Calcula o ângulo com base na porcentagem
  const angle = (percentage / 100) * 360;

  // Calcula o comprimento do traço com base no ângulo
  const dashArray = 2 * Math.PI * 90.5;
  const dashOffset = ((100 - percentage) / 100) * dashArray;

  return (
    <div className="relative w-52 h-52">
      <div className="relative w-full h-full">
        {/* Círculo vazio */}
        <svg className="absolute w-full h-full">
          <circle
            cx="50%"
            cy="50%"
            r="44%"
            fill="transparent"
            stroke="url(#grad)"
            strokeWidth="20"
            strokeLinecap="round"
            strokeDasharray={dashArray}
            strokeDashoffset={dashOffset}
          />
        </svg>

        {/* Texto da porcentagem */}
        <div className="absolute w-full h-full flex items-center justify-center">
          <p className="text-2xl font-bold">{percentage}%</p>
        </div>
      </div>

      {/* Gradiente para a borda */}
      <svg className="absolute w-full h-full">
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: "#6331ac" }} />
            <stop offset="50%" style={{ stopColor: "#a13582" }} />
            <stop offset="100%" style={{ stopColor: "#5730b4" }} />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default CircularProgressBar;
