import { useState } from "react";

interface Props {
  children: string;
  maxCharacters: number;
}

const ExpandableText = ({ children, maxCharacters }: Props) => {
  const [expend, setExpend] = useState(false);

  if(children.length < maxCharacters) return <p>{children}</p>

  const text = expend ? children : children.slice(0, maxCharacters);

  return (
    <div>
      {text}
      {!expend ? "..." : ""}
      {
        <button
          onClick={() => setExpend(!expend)}
          className="bg-green-600 pl-3 pr-3"
        >
          {!expend ? "Expand" : "Hide"}
        </button>
      }
    </div>
  );
};

export default ExpandableText;
