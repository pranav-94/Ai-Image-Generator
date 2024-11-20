import React, { useState } from 'react'
import { AlignJustify, X, Wand2, Sparkles, Zap, Send } from 'lucide-react'
import { Button } from '@/Components/ui/button'
import { Input } from '@/Components/ui/input'

const Landing: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [prompt, setPrompt] = useState('')

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email submission logic here
    console.log('Email submitted:', email)
    setEmail('')
  }

  const handlePromptSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle prompt submission logic here
    console.log('Prompt submitted:', prompt)
    setPrompt('')
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <a className="flex items-center justify-center" href="#">
          <img
            src="/placeholder.svg"
            alt="AI Generator Logo"
            width={32}
            height={32}
            className="rounded-lg"
          />
          <span className="ml-2 text-xl font-bold">AI Generator</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:underline underline-offset-4 hidden sm:inline-block" href="#features">
            Features
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4 hidden sm:inline-block" href="#how-it-works">
            How It Works
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4 hidden sm:inline-block" href="#pricing">
            Pricing
          </a>
          <Button asChild>
            <a href="#try-now">Try Now</a>
          </Button>
        </nav>
        <Button
          variant="ghost"
          className="sm:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <AlignJustify className="h-6 w-6" />}
          <span className="sr-only">{mobileMenuOpen ? 'Close menu' : 'Open menu'}</span>
        </Button>
      </header>
      {mobileMenuOpen && (
        <nav className="sm:hidden flex flex-col items-center py-4 bg-background">
          <a className="text-sm font-medium hover:underline underline-offset-4 py-2" href="#features" onClick={() => setMobileMenuOpen(false)}>
            Features
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4 py-2" href="#how-it-works" onClick={() => setMobileMenuOpen(false)}>
            How It Works
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4 py-2" href="#pricing" onClick={() => setMobileMenuOpen(false)}>
            Pricing
          </a>
        </nav>
      )}
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  AI-Powered Image and Text Generation
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Create stunning visuals and compelling text with our cutting-edge AI technology. Bring your ideas to life in seconds.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form onSubmit={handleEmailSubmit} className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1"
                    placeholder="Enter your email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Button type="submit">Get Started</Button>
                </form>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Start your free trial. No credit card required.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <Wand2 className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">AI Image Generation</h3>
                <p className="text-gray-500 dark:text-gray-400">Create unique images from text descriptions in seconds.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Sparkles className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Text Enhancement</h3>
                <p className="text-gray-500 dark:text-gray-400">Improve your writing with AI-powered suggestions and edits.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Zap className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Fast Processing</h3>
                <p className="text-gray-500 dark:text-gray-400">Get results in real-time with our high-speed AI models.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="try-now" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Try It Now</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Experience the power of AI-generated content. Enter a prompt and see the magic happen.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form onSubmit={handlePromptSubmit} className="flex flex-col space-y-2">
                  <Input
                    className="max-w-lg flex-1"
                    placeholder="Enter your prompt"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    required
                  />
                  <Button type="submit">
                    <Send className="mr-2 h-4 w-4" /> Generate
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 AI Generator. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  )
}

export default Landing