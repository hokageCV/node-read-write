import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../hooks/useAuthStore";

export default function Navbar() {
  const navigate = useNavigate();
  const userData = useAuthStore((state) => state.userData);

  const handleWrite = () => navigate("/write", { replace: true });
  const handleRead = () => navigate("/read", { replace: true });

  return (
    <div className="navbar bg-navBG sticky top-0 z-50  flex flex-col md:flex-row">
      <div className="logoHeading md:flex-1">
        <p className="btn btn-ghost mx-0.5 px-0.5 normal-case text-3xl text-slate-900">Slate</p>
      </div>
      <div className="md:flex-none flex flex-row">
        <p className="mr-6 text-slate-800">{userData.name}</p>
        {userData.email && (
          <div className="btn-group ">
            <button
              className="btn bg-navBG hover:bg-[#b14852] btn-sm text-slate-800"
              onClick={handleWrite}
            >
              Write
            </button>
            <button
              className="btn bg-navBG hover:bg-[#b14852] btn-sm text-slate-800"
              onClick={handleRead}
            >
              Read
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
