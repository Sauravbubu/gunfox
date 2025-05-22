import React, { useEffect, useRef, useState } from 'react';

interface AnimatedMulticolorTextProps {
  text: string;
  isDarkMode: boolean;
}

const AnimatedMulticolorText: React.FC<AnimatedMulticolorTextProps> = ({ text, isDarkMode }) => {
  const [gradient, setGradient] = useState(
    isDarkMode
      ? 'linear-gradient(90deg, #F87171, #4ADE80, #818CF8, #FBBF24, #C084FC, #60A5FA)'
      : 'linear-gradient(90deg, #F44336, #4CAF50, #3F51B5, #FF9800, #9C27B0, #2196F3)'
  );
  const [backgroundPosition, setBackgroundPosition] = useState('0% 50%');
  const containerRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBackgroundPosition((prev) => (prev === '0% 50%' ? '100% 50%' : '0% 50%'));
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    setGradient(
      isDarkMode
        ? 'linear-gradient(90deg, #F87171, #4ADE80, #818CF8, #FBBF24, #C084FC, #60A5FA)'
        : 'linear-gradient(90deg, #F44336, #4CAF50, #3F51B5, #FF9800, #9C27B0, #2196F3)'
    );
  }, [isDarkMode]);

  const textStyle: React.CSSProperties = {
    fontSize: '4rem',
    fontWeight: 'bold',
    color: 'transparent',
    backgroundImage: gradient,
    backgroundSize: '200%',
    backgroundPosition: backgroundPosition,
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    transition: 'background-position 2s linear',
  };

  return (
    <h2 ref={containerRef} style={textStyle} className="mb-2 flex justify-center">
      {text}
    </h2>
  );
};

export default AnimatedMulticolorText;
