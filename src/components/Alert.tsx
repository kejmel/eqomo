import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <div>
      {children}
      <button type="button" onClick={onClose}>x</button>
    </div>
  );
};

export default Alert;
