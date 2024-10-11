type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function SubTitle({ children, className }: Props) {
  return (
    <h1
      className={`${className} text-2xl font-bold font-sans uppercase text-gray-800 py-5 underline`}>
      {children}
    </h1>
  );
}
