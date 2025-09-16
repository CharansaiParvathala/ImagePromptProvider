import { useState, useMemo } from "react"
import { Sparkles } from "lucide-react"
import { PromptCard } from "@/components/prompt-card"
import { SearchBar } from "@/components/search-bar"
import { CategoryFilter } from "@/components/category-filter"
import { ImageModal } from "@/components/image-modal"
import { ThemeToggle } from "@/components/theme-toggle"
import { ImageUpload } from "@/components/image-upload"
import { samplePrompts, promptCategories, Prompt } from "@/data/prompts"

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedPrompt, setSelectedPrompt] = useState<Prompt | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const filteredPrompts = useMemo(() => {
    return samplePrompts.filter((prompt) => {
      const matchesSearch = prompt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           prompt.prompt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           prompt.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      
      const matchesCategory = selectedCategory === "All" || prompt.category === selectedCategory
      
      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory])

  const handleImageClick = (prompt: Prompt) => {
    setSelectedPrompt(prompt)
    setIsModalOpen(true)
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
    setSelectedPrompt(null)
  }

  return (
    <div className="min-h-screen bg-gradient-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-gradient-primary rounded-lg shadow-glow overflow-hidden">
                  <img
                    src="/logo.png"
                    alt="Logo"
                    className="h-full w-full object-cover"
                  />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Prompts
              </h1>
            </div>
            
            <div className="flex items-center gap-4">
              <SearchBar
                value={searchQuery}
                onChange={setSearchQuery}
                placeholder="Search prompts..."
              />
              <ImageUpload />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Filter Section */}
        <div className="mb-8 space-y-6">
          <div className="flex flex-col lg:flex-row items-center gap-4 justify-between">
            <CategoryFilter
              categories={promptCategories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
            
            <div className="text-sm text-muted-foreground">
              {filteredPrompts.length} prompt{filteredPrompts.length !== 1 ? 's' : ''} found
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        {filteredPrompts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPrompts.map((prompt) => (
              <PromptCard
                key={prompt.id}
                prompt={prompt}
                onImageClick={handleImageClick}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">No prompts found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filter to find what you're looking for.
            </p>
          </div>
        )}
      </main>

      {/* Image Modal */}
      <ImageModal
        prompt={selectedPrompt}
        isOpen={isModalOpen}
        onClose={handleModalClose}
      />

      {/* Footer */}
      <footer className="border-t border-border/50 bg-card/50 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              <span className="font-semibold">Gemini Prompts Gallery</span>
            </div>
            <div className="text-sm text-muted-foreground space-y-2">
              <p>Contact: <a href="mailto:charansaiparvathala@gmail.com" className="hover:text-primary transition-colors underline">charansaiparvathala@gmail.com</a></p>
              <div className="flex justify-center gap-4">
                <a href="https://www.linkedin.com/in/charansai-parvathala" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  LinkedIn
                </a>
                <a href="https://www.instagram.com/charansaiii?igsh=MXF0anByZ2lpeGY2aA==" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index
