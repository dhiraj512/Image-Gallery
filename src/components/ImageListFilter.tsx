import { CategoryFilter } from './CategoryFilter'
import { SearchInput } from './SearchInput'

export interface IImageListFilter {
  categories: ImageCategory[]
  value: ImageFilterValue
  onChange: (search: ImageFilterValue) => void
}

export function ImageListFilter({
  categories,
  value,
  onChange,
}: IImageListFilter) {
  const updateFilter = (newValue: Partial<ImageFilterValue>) => {
    onChange({ ...value, ...newValue })
  }

  return (
    <div className='space-y-2'>
      <SearchInput
        label="Search ..."
        value={value.searchQuery}
        onChange={(searchQuery) => updateFilter({ searchQuery })}
      />

      <CategoryFilter
        categories={categories}
        value={value.category}
        onChange={(category) => updateFilter({ category })}
      />
    </div>
  )
}
