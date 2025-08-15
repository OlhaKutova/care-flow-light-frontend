import React, {
  forwardRef,
  TextareaHTMLAttributes,
  InputHTMLAttributes,
} from "react";

type BaseProps = {
  label?: string;
  error?: string;
  required?: boolean;
};

type TextInputProps = BaseProps &
  Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & {
  as?: "input";
  type?: "text" | "email" | "password";
};

type TextAreaProps = BaseProps &
  TextareaHTMLAttributes<HTMLTextAreaElement> & {
  as: "textarea";
};

type Props = TextInputProps | TextAreaProps;

const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement, Props>(
  ({ label, error, required, as = "input", ...rest }, ref) => {
    const baseStyles =
      "w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent";

    return (
      <div className="w-full">
        {label && (
          <label className="mb-1 block text-sm font-medium text-slate-700">
            {label} {required && <span className="text-rose-600">*</span>}
          </label>
        )}
        {as === "textarea" ? (
          <textarea
            ref={ref as React.Ref<HTMLTextAreaElement>}
            className={baseStyles}
            {...(rest as TextAreaProps)}
          />
        ) : (
          <input
            ref={ref as React.Ref<HTMLInputElement>}
            className={baseStyles}
            {...(rest as TextInputProps)}
          />
        )}
        {error && <p className="mt-1 text-sm text-rose-600">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;
