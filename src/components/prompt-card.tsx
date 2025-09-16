import { useState } from "react"
import { Copy, Eye, Check } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"
import { Prompt } from "@/data/prompts"

interface PromptCardProps {
  prompt: Prompt
  onImageClick: (prompt: Prompt) => void
}

export function PromptCard({ prompt, onImageClick }: PromptCardProps) {
  const [copied, setCopied] = useState(false)
  const { toast } = useToast()

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt.prompt)
      setCopied(true)
      toast({
        title: "Copied!",
        description: "Prompt copied to clipboard",
      })
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to copy prompt",
        variant: "destructive",
      })
    }
  }

  return (
    <Card className="group overflow-hidden bg-card hover:shadow-card transition-all duration-300 animate-fade-in">
      {/* Changed aspect ratio to 4/5 for an even shorter card */}
      <div className="relative overflow-hidden w-full aspect-[4/5]">
        <img
          src={prompt.imageUrl}
          alt={prompt.title}
          className="w-full h-full object-cover object-center cursor-pointer transition-transform duration-300 group-hover:scale-105"
          onClick={() => onImageClick(prompt)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <Button
          size="icon"
          variant="secondary"
          className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/80 backdrop-blur-sm"
          onClick={() => onImageClick(prompt)}
        >
          <Eye className="h-4 w-4" />
        </Button>
      </div>

      <CardContent className="p-4 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-foreground truncate">{prompt.title}</h3>
          <Badge variant="secondary" className="text-xs">
            {prompt.category}
          </Badge>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
          {prompt.prompt}
        </p>

        <div className="flex items-center justify-between pt-2">
          <div className="flex flex-wrap gap-1">
            {prompt.tags.slice(0, 2).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          <Button
            size="sm"
            variant="outline"
            onClick={handleCopy}
            className="hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            {copied ? (
              <Check className="h-3 w-3 mr-1" />
            ) : (
              <Copy className="h-3 w-3 mr-1" />
            )}
            {copied ? "Copied" : "Copy"}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}