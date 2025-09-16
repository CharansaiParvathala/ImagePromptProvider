import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface CategoryFilterProps {
  categories: string[]
  selectedCategory: string
  onCategoryChange: (category: string) => void
}

export function CategoryFilter({ categories, selectedCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? "default" : "outline"}
          size="sm"
          onClick={() => onCategoryChange(category)}
          className={
            selectedCategory === category
              ? "bg-gradient-primary text-primary-foreground shadow-glow"
              : "hover:bg-muted transition-colors"
          }
        >
          {category}
          {selectedCategory === category && (
            <Badge variant="secondary" className="ml-2 text-xs">
              ✓
            </Badge>
          )}
        </Button>
      ))}
    </div>
  )
}