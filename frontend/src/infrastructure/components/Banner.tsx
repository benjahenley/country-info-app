import Title from "./Title";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Banner({ children, className }: Props) {
  return (
    <div
      className={`${className} bg-gradient-to-tr from-orange-600 to-orange-300`}>
      <Title className="text-center py-6 text-white">{children}</Title>
    </div>
  );
}
