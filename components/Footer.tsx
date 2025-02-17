const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-6">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <p className="text-gray-600 dark:text-gray-400">© 2024 Krishna Ram Saravanakumar. All rights reserved.</p>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          <strong>Volunteer Experience:</strong> Operations Lead at ACM Illinois Tech (Dec 2024 – Present)
        </p>
        <div className="mt-4 flex justify-center space-x-4">
          <a
            href="https://www.linkedin.com/in/krishnarams/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
          >
            GitHub
          </a>
          <a
            href="mailto:itzkrishnaram@gmail.com"
            className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

