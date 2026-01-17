import { useState, useRef, useEffect } from 'react'
import { FaTerminal } from 'react-icons/fa'

interface Command {
  input: string
  output: string
}

const Terminal = () => {
  const [commands, setCommands] = useState<Command[]>([
    { input: '', output: 'Welcome! Type "help" to see available commands.' }
  ])
  const [currentInput, setCurrentInput] = useState('')
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)

  const helpText = `Available commands:

  about       Learn about me
  experience  View my work experience
  projects    See my projects
  skills      Check my technical skills
  contact     Get contact information
  clear       Clear the terminal
  help        Show this help message`

  const aboutText = `Hey, I'm Sudarshan, an aspiring software engineer.

I love building things that work and solve real problems.
I'm particularly interested in:
  → Backend development
  → Data engineering
  → Building reliable systems

When I'm not coding, you'll find me:
  ⚽ Playing soccer
  🎮 Gaming
  🍳 Cooking
  💪 At the gym
  📺 Watching anime`

  const experienceText = `Data Engineer Intern @ Southwest Business Corporation
Jun 2025 - Present
  → EDW-Infra team: ELT pipelines & anomaly detection

Software Engineer Intern @ Ephanti
Jun 2024 - Aug 2024
  → Backend service for chatbot agent: code generation, execution & RAG pipeline

Code Instructor @ Code Ninjas
Aug 2021 - Jan 2022
  → Tutored kids in Computer Science fundamentals

Software Engineer Intern @ Traform
Jul 2021 - Dec 2021
  → Mobile platform team`

  const projectsText = `FULL STACK
─────────────────────────────────────
  VINT
  Personal finance platform with budget tracking
  Tech: React, FastAPI, PostgreSQL, Plaid API, Docker

  EZSlides
  AI-powered Speech-to-Slides application
  Tech: Python, AWS, Google Slides API, OpenAI

FRONTEND
─────────────────────────────────────
  Personal Website
  This portfolio you're looking at right now
  Tech: React, TypeScript, Tailwind, Framer Motion

DATA SCIENCE
─────────────────────────────────────
  Crime Forecasting System
  ML-based crime hotspot analysis
  Tech: Python, Pandas, scikit-learn, SQLite`

  const skillsText = `LANGUAGES
  Java  Python  TypeScript  JavaScript  SQL  C++  C#

BACKEND
  FastAPI  Flask  Node.js  PostgreSQL  Redis

FRONTEND
  React  React Native  TailwindCSS  Framer Motion

DEVOPS & TOOLS
  Docker  Kubernetes  Git  Linux  Jenkins

DATA & ML
  Pandas  NumPy  scikit-learn  TensorFlow`

  const contactText = `Email:    sudarshan86.ramesh@gmail.com
GitHub:   github.com/sudarshanr10
LinkedIn: linkedin.com/in/sudarshan-ramesh-424386204`

  const executeCommand = (input: string): string => {
    const cmd = input.trim().toLowerCase()

    switch (cmd) {
      case 'help':
        return helpText
      case 'about':
        return aboutText
      case 'experience':
        return experienceText
      case 'projects':
        return projectsText
      case 'skills':
        return skillsText
      case 'contact':
        return contactText
      case 'clear':
        setCommands([])
        return ''
      case '':
        return ''
      default:
        return `Command not found: "${input}". Type "help" for available commands.`
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!currentInput.trim()) return

    const output = executeCommand(currentInput)

    if (currentInput.trim().toLowerCase() !== 'clear') {
      setCommands(prev => [...prev, { input: currentInput, output }])
      setCommandHistory(prev => [...prev, currentInput])
      setHistoryIndex(-1)
    } else {
      setCommands([])
    }

    setCurrentInput('')
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1)
        setHistoryIndex(newIndex)
        setCurrentInput(commandHistory[newIndex])
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIndex >= 0) {
        const newIndex = historyIndex + 1
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1)
          setCurrentInput('')
        } else {
          setHistoryIndex(newIndex)
          setCurrentInput(commandHistory[newIndex])
        }
      }
    }
  }

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [commands])

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  // Click anywhere to focus input
  const handleTerminalClick = () => {
    inputRef.current?.focus()
  }

  return (
    <div
      className="w-full max-w-4xl mx-auto rounded-2xl border border-gray-200 dark:border-gray-800 shadow-2xl overflow-hidden"
      onClick={handleTerminalClick}
    >
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-gray-100 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <FaTerminal className="text-gray-500 dark:text-gray-400" size={14} />
          <span className="text-gray-600 dark:text-gray-400 font-mono text-sm">terminal</span>
        </div>
        <div className="w-16"></div>
      </div>

      {/* Terminal Body */}
      <div
        ref={terminalRef}
        className="h-[350px] overflow-y-auto p-5 font-mono text-sm bg-white dark:bg-gray-950 terminal-scrollbar cursor-text"
      >
        {commands.map((cmd, index) => (
          <div key={index} className="mb-4">
            {cmd.input && (
              <div className="flex items-center text-gray-800 dark:text-gray-200">
                <span className="text-green-600 dark:text-green-400 mr-2">❯</span>
                <span>{cmd.input}</span>
              </div>
            )}
            {cmd.output && (
              <div className="mt-2 text-blue-500 dark:text-blue-400 whitespace-pre-wrap pl-4 leading-relaxed">
                {cmd.output}
              </div>
            )}
          </div>
        ))}

        {/* Input Line */}
        <form onSubmit={handleSubmit} className="flex items-center">
          <span className="text-green-600 dark:text-green-400 mr-2">❯</span>
          <input
            ref={inputRef}
            type="text"
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent text-gray-800 dark:text-gray-200 outline-none font-mono"
            placeholder="type 'help' for commands..."
            autoFocus
          />
        </form>
      </div>
    </div>
  )
}

export default Terminal
