import { FormEvent, useState } from "react";
import Input from "../components/form/Input";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { API_STATUS } from "../constants/apiStatus";
import { login } from "../features/auth/authSlice";
import PasswordField from "../components/form/PasswordField";

export default function Login() {
  const dispatch = useAppDispatch();
  const { loginApiStatus, error } = useAppSelector((s) => s.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  return (
    <main className="bg-[#F4F8FB] min-h-screen">
      <div className="max-w-md mx-auto px-4 pt-10 pb-20">
        <div className="w-40 h-40 mx-auto mb-6">
          <img
            src="/images/login.png"
            alt="Login"
            className="w-full h-full object-cover rounded-full shadow"
          />
        </div>

        <h1 className="text-3xl font-bold text-slate-900 text-center mb-6">
          Login
        </h1>

        <form onSubmit={onSubmit} className="space-y-4">
          <Input
            label="Email"
            type="email"
            required
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />


          <PasswordField
            required
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && (
            <div className="text-sm text-rose-600 bg-rose-50 border border-rose-200 rounded p-2">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-slate-900 text-white py-2 rounded hover:bg-slate-800 transition-colors disabled:opacity-60"
            disabled={loginApiStatus === API_STATUS.LOADING}
          >
            {loginApiStatus === API_STATUS.LOADING ? "Signing in…" : "Sign in"}
          </button>
        </form>
      </div>
    </main>
  );
}
