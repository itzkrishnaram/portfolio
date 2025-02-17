import type React from "react"

const Header: React.FC = () => {
  return (
    <header className="text-center mb-12">
      <h1 className="text-4xl font-bold mb-2">Krishna Ram Saravanakumar</h1>
      <p className="text-xl text-gray-600">Chicago, IL | 312-757 0577 | itzkrishnaram@gmail.com</p>
      <a
        href="https://www.linkedin.com/in/krishnarams/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        LinkedIn Profile
      </a>
    </header>
  )
}

export default Header

