export const getRandomGradient = () => {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A8', '#33FFF6', '#FFBD33'];
    const startColor = colors[Math.floor(Math.random() * colors.length)];
    const endColor = colors[Math.floor(Math.random() * colors.length)];
    return `linear-gradient(135deg, ${startColor}, ${endColor})`;
};