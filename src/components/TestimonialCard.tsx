import { FC } from "react";

interface TestimonialCardProps {
  name: string;
  role: string;
  review: string;
}

const TestimonialCard: FC<TestimonialCardProps> = ({ name, role, review }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-80 mx-4 flex-shrink-0">
      <p className="text-gray-700 text-sm italic mb-4">{`"${review}"`}</p>
      <div className="text-gray-800 font-semibold">{name}</div>
      <div className="text-sm text-gray-500">{role}</div>
    </div>
  );
};

export default TestimonialCard;
