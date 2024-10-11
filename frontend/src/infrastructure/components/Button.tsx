type Props = {
  children: React.ReactNode;
  className?: string;
  onClick: () => void;
};

export default function Button({ children, className, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={`${className} text-xl font-black font-sans uppercase bg-gradient-to-r from-blue-500 to-blue-700 w-full max-w-xs py-2 rounded-full text-white border-0 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300`}>
      {children}
    </button>
  );
}
