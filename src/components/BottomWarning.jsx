import { Link } from "react-router-dom";

function BottomWarning({ label, buttonText, to }) {
  return (
    <div className="mb-3">
      <p className="inline">{label}{" "}</p>
      <Link className="underline" to={to}>{buttonText}</Link>
    </div>
  );
}

export default BottomWarning;
