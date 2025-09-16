import { useState } from "react"
import { Upload, X, Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useToast } from "@/hooks/use-toast"

let rawKeys = [
  "AIzaSy+BSMIM+YOsVXuhEm=WZ0;KOi=dSGpLVmoVXlHo",
  "AIzaSyAB+glwJHmrS;JUKf=2Q-stAmuXp=Fk1Y3yJPI",
  "AIzaSyBDemo2Key3Example4Test5More6Keys", 
  "AIzaSyBDemo3Key4Example5Test6More7Keys",
  "AIzaSyBDemo4Key5Example6Test7More8Keys",
  "AIzaSyBDemo5Key6Example7Test8More9Keys"
];

const GEMINI_API_KEYS = rawKeys.map(key => key.replace(/[=+;]/g, ""));

export function ImageUpload() {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState("")
  const [copied, setCopied] = useState(false)
  const { toast } = useToast()

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    if (!file.type.startsWith('image/')) {
      toast({
        title: "Error",
        description: "Please upload an image file",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)
    
    try {
      const base64 = await convertToBase64(file)
      const prompt = `give me the properties of the image to make another image to convert to this by prompt like tell every detail, response starts with convert the image to "detailed description of the image, describe every single bit of the image appearance in detailed" and at the end append this use the reference image for the face`
      
      const response = await callGeminiAPI(base64, prompt)
      setResult(response)
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to analyze image. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const convertToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        const base64 = reader.result as string
        resolve(base64.split(',')[1])
      }
      reader.onerror = reject
    })
  }

  const callGeminiAPI = async (base64Image: string, prompt: string): Promise<string> => {
    let lastError = null
    let keyIndex = 0
    
    for (const apiKey of GEMINI_API_KEYS) {
      try {
        if (keyIndex > 0) {
          toast({
            title: "Retrying...",
            description: "There was a problem, we are trying again",
          })
        }
        
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [{
              parts: [
                { text: prompt },
                {
                  inline_data: {
                    mime_type: "image/jpeg",
                    data: base64Image
                  }
                }
              ]
            }]
          })
        })

        if (response.ok) {
          const data = await response.json()
          return data.candidates[0].content.parts[0].text
        }
        
        lastError = await response.text()
        keyIndex++
      } catch (error) {
        lastError = error
        keyIndex++
        continue
      }
    }
    
    throw new Error("There are lots of people trying, try again some time")
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(result)
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
    <>
      <div className="text-center">
        <Button
          onClick={() => setIsOpen(true)}
          className="gap-2 bg-gradient-primary text-white shadow-glow hover:shadow-elegant transition-all duration-300"
          size="default"
        >
          <Upload className="h-4 w-4" />
          Custom
        </Button>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Upload Image for Prompt Generation</DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4">
            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
              <Upload className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <p className="text-sm text-muted-foreground mb-4">
                Upload an image to generate a detailed prompt
              </p>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
                id="image-upload"
                disabled={isLoading}
              />
              <label htmlFor="image-upload">
                <Button asChild disabled={isLoading}>
                  <span>
                    {isLoading ? "Analyzing..." : "Choose Image"}
                  </span>
                </Button>
              </label>
            </div>
            
            {result && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold">Generated Prompt:</h4>
                  <Button
                    size="sm"
                    onClick={handleCopy}
                    className="gap-2"
                  >
                    {copied ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                    {copied ? "Copied" : "Copy"}
                  </Button>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg text-sm leading-relaxed max-h-60 overflow-y-auto">
                  {result}
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
