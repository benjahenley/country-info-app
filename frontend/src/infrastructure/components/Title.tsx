type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Title({ children, className }: Props) {
  return (
    <h1 className={`${className} text-3xl font-bold font-sans uppercase`}>
      {children}
    </h1>
  );
}
