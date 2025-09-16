import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Copy, Check, Download, X } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { Prompt } from "@/data/prompts"

interface ImageModalProps {
  prompt: Prompt | null
  isOpen: boolean
  onClose: () => void
}

export function ImageModal({ prompt, isOpen, onClose }: ImageModalProps) {
  const [copied, setCopied] = useState(false)
  const { toast } = useToast()

  if (!prompt) return null

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

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = prompt.imageUrl
    link.download = `${prompt.title.replace(/\s+/g, '-').toLowerCase()}.jpg`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden p-0">
        <div className="grid md:grid-cols-2 gap-0 h-full">
          {/* Image Section */}
          <div className="relative bg-muted">
            <img
              src={prompt.imageUrl}
              alt={prompt.title}
              className="w-full h-full object-contain"
            />
            <Button
              size="icon"
              variant="outline"
              onClick={onClose}
              className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Content Section */}
          <div className="p-6 flex flex-col justify-between">
            <div className="space-y-4">
              <DialogHeader>
                <DialogTitle className="text-xl font-bold">{prompt.title}</DialogTitle>
              </DialogHeader>

              <div className="flex items-center gap-2">
                <Badge className="bg-gradient-primary">{prompt.category}</Badge>
                <Badge variant="outline">{prompt.model}</Badge>
                <Badge variant="outline">{prompt.aspectRatio}</Badge>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
                  Prompt
                </h4>
                <p className="text-sm leading-relaxed text-foreground bg-muted/30 p-4 rounded-lg">
                  {prompt.prompt}
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
                  Tags
                </h4>
                <div className="flex flex-wrap gap-2">
                  {prompt.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-2 pt-4 border-t">
              <Button
                onClick={handleCopy}
                className="flex-1 bg-gradient-primary hover:shadow-glow transition-all"
              >
                {copied ? (
                  <Check className="h-4 w-4 mr-2" />
                ) : (
                  <Copy className="h-4 w-4 mr-2" />
                )}
                {copied ? "Copied!" : "Copy Prompt"}
              </Button>
              <Button variant="outline" size="icon" onClick={handleDownload}>
                <Download className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}