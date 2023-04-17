import React from "react";

interface FormFieldProps {
  label: string;
  placeholder: string;
  type: string;
  name: string;
  value: string;
  onChange: (event: any) => void;
}

export default function FormField({
  label,
  placeholder,
  type,
  name,
  value,
  onChange,
}: FormFieldProps) {
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label pb-0">
        <span className="label-text text-slate-800 text-lg">{label}</span>
      </label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        className="input input-bordered w-full max-w-xs bg-[#99b77f] text-slate-800 mt-0"
      />
    </div>
  );
}
