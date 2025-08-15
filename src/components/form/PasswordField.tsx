import { useState } from "react";
import type { InputHTMLAttributes } from "react";
import { Eye, EyeOff } from "lucide-react";

type Props = {
  label?: string;
  error?: string;
  required?: boolean;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "type">;

export default function PasswordField({
  label = "Password",
  error,
  required,
  ...rest
}: Props) {
  const [show, setShow] = useState(false);

  const baseStyles =
    "w-full rounded-md border border-slate-300 bg-white px-3 py-2 pr-10 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent";

  return (
    <div className="w-full">
      <label className="mb-1 block text-sm font-medium text-slate-700">
        {label} {required && <span className="text-rose-600">*</span>}
      </label>
      <div className="relative">
        <input
          {...rest}
          type={show ? "text" : "password"}
          className={baseStyles}
        />
        <button
          type="button"
          aria-label={show ? "Hide password" : "Show password"}
          onClick={() => setShow((s) => !s)}
          className="absolute inset-y-0 right-2 flex items-center p-1 text-slate-500 hover:text-slate-700"
        >
          {show ? <Eye size={18} /> : <EyeOff size={18} />}
        </button>
      </div>
      {error && <p className="mt-1 text-sm text-rose-600">{error}</p>}
    </div>
  );
}
