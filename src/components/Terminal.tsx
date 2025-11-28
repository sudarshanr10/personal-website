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
  about       - Learn about me
  experience  - View my work experience
  projects    - See my projects
  skills      - Check my technical skills
  contact     - Get contact information
  clear       - Clear the terminal
  help        - Show this help message`

  const executeCommand = (input: string): string => {
    const cmd = input.trim().toLowerCase()

    switch (cmd) {
      case 'help':
        return helpText
      
      case 'about':
        return `I'm a full stack developer who enjoys creating useful and reliable applications. 
I like working on both the frontend and backend and I'm always looking for ways to 
improve the way things are built.

Outside of coding, I enjoy:
  • Watching and playing soccer ⚽
  • Gaming 🎮
  • Cooking 🍳
  • Working out 💪
  • Watching anime 🎌`
      
      case 'experience':
        return `Software Engineering Intern @ Ephanti (Jun 2024 - Aug 2024)
- Developed a coding agent for an omnichannel chatbot

Code Instructor @ Code Ninjas (Aug 2021 - Jan 2022)
- Guided 100+ kids ages 7-14 to learn to code

Software Engineering Intern @ Traform (Jul 2021 - Dec 2021)
- Optimized mobile UIs for a corporate travel platform`
      
      case 'projects':
        return `FULL STACK PROJECTS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  VINT
    Full-stack personal finance platform for budget tracking
    Tech: React, TailwindCSS, FastAPI, PostgreSQL
    Features: Plaid API, OAuth, JWT, Twilio alerts, Docker

  ezslides
    AI-powered Speech-to-Slides Presentation application
    Tech: HTML, CSS, JavaScript, Python, AWS, Google Slides API, OpenAI

FRONTEND PROJECTS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Personal Website
    Responsive portfolio built with React & TailwindCSS
    Tech: React, TypeScript, Tailwind CSS, Vite

DATA SCIENCE PROJECTS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Crime Forecasting System
    Data-driven crime forecaster using Denver Open Data API
    Tech: Python, NumPy, Pandas, scikit-learn, folium, statsmodels, SQLite`
      
      case 'education':
        return `Bachelor of Science in Computer Science
Rutgers, The State University of New Jersey - New Brunswick
2022 - Present

High School Diploma
South Brunswick High School
2018 - 2022`
      
      case 'skills':
        return `LANGUAGES:
  Java, Python, C#, C++, JavaScript, TypeScript, HTML, CSS, SQL, R

FRONTEND:
  React, React Native, TailwindCSS, D3.js

BACKEND:
  FastAPI, Flask, Node.js, PostgreSQL, Redis

DEVOPS & TOOLS:
  Git, Docker, Kubernetes, Linux, Postman, Jenkins

LIBRARIES & FRAMEWORKS:
  NumPy, Pandas, TensorFlow, Keras, scikit-learn`
      
      case 'contact':
        return `📧 Email:    sudarshan86.ramesh@gmail.com
🐙 GitHub:   github.com/sudarshanr10
💼 LinkedIn: linkedin.com/in/sudarshan-ramesh-424386204
📸 Instagram: instagram.com/sudarshanr10`
      
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

  return (
    <div className="w-full max-w-5xl mx-auto bg-gray-900 dark:bg-gray-950 rounded-2xl border border-gray-800 dark:border-gray-700 shadow-2xl overflow-hidden backdrop-blur-xl">
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-6 py-4 bg-gray-800/50 dark:bg-gray-900/50 border-b border-gray-700/50 dark:border-gray-800/50 backdrop-blur-sm">
        <div className="flex items-center space-x-3">
          <FaTerminal className="text-green-400" size={18} />
          <span className="text-gray-300 dark:text-gray-400 font-mono text-sm font-medium">terminal</span>
          <span className="text-gray-500 dark:text-gray-600 text-xs font-mono">v1.0.0</span>
        </div>
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors cursor-pointer"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors cursor-pointer"></div>
          <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors cursor-pointer"></div>
        </div>
      </div>

      {/* Terminal Body */}
      <div 
        ref={terminalRef}
        className="h-[380px] overflow-y-auto p-6 font-mono text-sm bg-gray-900 dark:bg-gray-950 terminal-scrollbar"
        style={{ 
          scrollbarWidth: 'thin',
          scrollbarColor: '#4B5563 transparent'
        }}
      >
        {commands.map((cmd, index) => (
          <div key={index} className="mb-5">
            {cmd.input && (
              <div className="mb-2 flex items-center">
                <span className="text-green-400 font-bold">$</span>
                <span className="text-gray-200 dark:text-gray-300 ml-2 font-medium">{cmd.input}</span>
              </div>
            )}
            {cmd.output && (
              <div className="text-gray-300 dark:text-gray-400 whitespace-pre-line ml-4 leading-relaxed">
                {cmd.output}
              </div>
            )}
          </div>
        ))}
        
        <form onSubmit={handleSubmit} className="flex items-center mt-4">
          <span className="text-green-400 font-bold">$</span>
          <input
            ref={inputRef}
            type="text"
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 ml-3 bg-transparent text-gray-200 dark:text-gray-300 outline-none focus:outline-none font-mono placeholder-gray-500 dark:placeholder-gray-600"
            placeholder="Type a command (try 'help')..."
            autoFocus
          />
          <span className="text-gray-600 dark:text-gray-700 text-xs ml-2">Press Enter</span>
        </form>
      </div>
    </div>
  )
}

export default Terminal

