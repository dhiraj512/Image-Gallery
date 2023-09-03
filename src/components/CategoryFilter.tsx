import { cn } from '@/lib/utils'

export interface ICategoryFilter {
  categories: ImageCategory[]
  value: ImageCategory | undefined
  onChange: (value: ImageCategory | undefined) => void
}

export function CategoryFilter({ categories, value, onChange }: ICategoryFilter) {

  const handleChange = (category: ImageCategory | undefined, checked: boolean) => {
    if (checked) onChange(category)
  }

  return (
    <div className="flex gap-2 items-center justify-start flex-wrap"
      aria-label="Filter snippets by category"
      role="radiogroup">
      <CategoryFilterOption
        label="All"
        value={undefined}
        checked={value === undefined}
        onChange={handleChange}
      />

      {categories.map((category) => (
        <CategoryFilterOption
          key={category}
          label={category}
          value={category}
          checked={value === category}
          onChange={handleChange}
        />
      ))}
    </div>
  )
}

interface ICategoryFilterOption {
  label: string
  value: ImageCategory | undefined
  checked: boolean
  onChange: (value: ImageCategory | undefined, checked: boolean) => void
}

function CategoryFilterOption({ label, value, checked, onChange }: ICategoryFilterOption) {
  return (
    <label className={cn('cursor-pointer inline-flex items-center justify-center w-fit',
      'border border-slate-600 bg-white px-2 py-1 text-sm ',
      checked && 'ring-2 ring-slate-900 ring-offset-[1px]')}>
      <input
        className='sr-only'
        aria-label={label}
        tabIndex={0}
        type="radio"
        checked={checked}
        value={value}
        onChange={(event) => onChange(value, event.target.checked)}
      />
      {checked ? (<div className='flex items-center gap-2'><span>{label}</span></div>) : <span>{label}</span>}
    </label>
  )
}
