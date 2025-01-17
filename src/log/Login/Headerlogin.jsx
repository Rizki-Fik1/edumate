import { useContext, useState } from "react";
import '../../AddItem.css';
import { AuthContext } from "../../context/AuthContext";
import Google from '../../assets/google.png';
import { Link, useNavigate } from "react-router-dom";
import { loginWithEmail, signInWithGoogle } from '../../admin/auth/firebaseService';
import { toast } from "react-hot-toast";

export default function Headerlogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    if (!email || !password) {
      setError("Email dan password harus diisi");
      setIsLoading(false);
      return;
    }

    try {
      const user = await loginWithEmail(email, password);
      dispatch({ type: "LOGIN", payload: user });

      toast.success("Login berhasil!", {
        position: "top-center",
      });
      const timeoutId = setTimeout(() => {
        navigate("/home");
      }, 100);

      return () => clearTimeout(timeoutId);
    } catch (error) {
      console.error("Login error:", error);
      switch (error.code) {
        case "auth/user-not-found":
          setError("User tidak ditemukan");
          break;
        case "auth/wrong-password":
          setError("Password salah");
          break;
        case "auth/invalid-email":
          setError("Format email tidak valid");
          break;
        default:
          setError("Terjadi kesalahan saat login");
          break;
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    setError("");

    try {
      const user = await signInWithGoogle();
      if (user) {
        dispatch({ type: "LOGIN", payload: user });
        const timeoutId = setTimeout(() => {
          navigate("/home");
        }, 100);

        return () => clearTimeout(timeoutId);
      }
    } catch (error) {
      console.error("Google sign in error:", error);
      if (error.code === 'auth/popup-closed-by-user' || error.code === 'auth/cancelled-popup-request') {
        console.log("User cancelled the login");
      } else {
        setError("Gagal login dengan Google");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="px-4 py-5 sm:px-8 md:px-[480px]">
      <div className="w-full h-auto bg-gradient-to-b from-[#FF635A] to-[#952A25] rounded-xl shadow-lg p-5 md:h-[530px]">
        <p className="montserrat text-white text-3xl sm:text-4xl md:text-5xl font-semibold text-center pt-4">Hi Mate!</p>
        <p className="montserrat text-white text-lg sm:text-xl font-light text-center">U're Comeback Again.</p>
        {error && (
          <div className="mt-4 mx-auto p-3 bg-red-500 text-white rounded-lg text-center">
            {error}
          </div>
        )}

        <form className="flex flex-col px-2 sm:px-8 md:px-24 pt-8 gap-y-5" onSubmit={handleLogin}>
          <div className="w-full bg-[#952A25] flex items-center px-5 py-3 rounded-lg shadow-lg">
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent outline-none text-base sm:text-lg md:text-xl text-white placeholder:text-white placeholder:opacity-70"
              placeholder="Email"
              required
              disabled={isLoading}
            />
          </div>

          <div className="w-full bg-[#952A25] flex items-center px-5 py-3 rounded-lg shadow-lg">
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-transparent outline-none text-base sm:text-lg md:text-xl text-white placeholder:text-white placeholder:opacity-70"
              placeholder="Password"
              required
              disabled={isLoading}
            />
          </div>

          <button 
            type="submit" 
            className={`w-full py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 transition-all duration-200 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? "Logging In..." : "Log In"}
          </button>

          <button 
            type="button"
            onClick={handleGoogleSignIn}
            className={`w-full py-3 mt-3 flex justify-center items-center gap-2 rounded-lg text-white font-semibold bg-gradient-to-r from-zinc-700 to-zinc-900 hover:from-zinc-600 hover:to-zinc-800 transition-all duration-200 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
            disabled={isLoading}
          >
            <img src={Google} alt="Google" className="h-6 sm:h-8"/>
            {isLoading ? "Logging In..." : "Log In with Google"}
          </button>

          <p className="text-center text-white font-light mt-5">
            Don't Have an Account? 
            <Link to='/regist' className="text-white font-normal hover:underline"> Register Here.</Link>
          </p>
        </form>
      </div>
    </div>
  );
}