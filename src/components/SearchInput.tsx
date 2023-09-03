export interface SearchInputProps {
  label: string
  value: string
  onChange: (value: string) => void
}

export function SearchInput({
  label,
  value,
  onChange,
}: SearchInputProps) {
  return (
    <input
      className=
      "flex h-10 w-80 border border-slate-500 bg-white px-3 py-2 text-sm ring-offset-white  placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2"
      type='text' aria-label={label}
      placeholder={label}
      title={label}
      value={value}
      onChange={(event) => onChange(event.target.value)} />
  )
}
