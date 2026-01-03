import { useEffect, useState } from 'react';

function AnimatedBackground() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % bgImages.length);
    }, 7000); // slow change

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {bgImages.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[2000ms] ease-in-out ${
            i === index ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
          }`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}
    </div>
  );
}
