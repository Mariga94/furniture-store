import "./Counter.css";

interface CountProps {
  count: number;
}
const Counter: React.FC<CountProps> = ({ count }) => {
  return (
    <div className="counter flex-row justify-center align-center">
      <button>-</button>
      <span>{count}</span>
      <button>+</button>
    </div>
  );
};

export default Counter;
