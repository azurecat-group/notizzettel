export function generatePastelGradient() {
  // 파스텔톤 색상 생성 함수
  const getPastelColor = () => {
    const hue = Math.floor(Math.random() * 360);
    return `hsl(${hue}, 70%, 80%)`;
  };

  const color1 = getPastelColor();
  const color2 = getPastelColor();

  return `linear-gradient(135deg, ${color1}, ${color2})`;
} 