import React, { useState } from 'react'
import { Search, Menu, X } from 'lucide-react'
import Pagination from '../components/Pagination'
import Footer from '../components/Footer'

const BlogHomepage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const topics = [
    { icon: '💻', label: 'Technology' },
    { icon: '✈️', label: 'Travel' },
    { icon: '⚽', label: 'Sport' },
    { icon: '💼', label: 'Business' },
    { icon: '📊', label: 'Management' },
    { icon: '📈', label: 'Trends' },
    { icon: '🚀', label: 'Startups' },
    { icon: '📰', label: 'News' },
  ]

  const blogPosts = [
    {
      category: 'SPORT',
      title: 'Key Sports Trends for 2024: From AI to Virtual Reality',
      description:
        'Dive into the key sports trends like AI and virtual reality set to redefine the sports industry in 2024.',
      author: 'Ethan Caldwell',
      date: 'September 24, 2024',
      readTime: '8 Min Read',
    },
    {
      category: 'TECHNOLOGY',
      title: 'The Impact of Automation on Business Management Efficiency',
      description:
        'Learn how automation is boosting business management efficiency and driving growth in various sectors.',
      author: 'Ethan Caldwell',
      date: 'September 20, 2024',
      readTime: '6 Min Read',
    },
  ]

  return (
    <div className="min-h-screen bg-purple-951">
      <div className="sm:mx-14 sm:px-6">
        {/* Navigation */}
        <nav className="bg-white relative z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <span className="text-xl font-bold">REVISION</span>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                {/* Desktop Navigation */}
                <div className="hidden lg:flex space-x-4">
                  <a
                    href="#"
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900"
                  >
                    Homepages
                  </a>
                  <a
                    href="#"
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900"
                  >
                    Features
                  </a>
                  <a
                    href="#"
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900"
                  >
                    About
                  </a>
                  <a
                    href="#"
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900"
                  >
                    Contacts
                  </a>
                </div>

                <button className="p-2 rounded-lg hover:bg-gray-100">
                  <Search className="h-5 w-5" />
                </button>

                {/* Mobile Menu Button */}
                <button
                  className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
                  onClick={toggleSidebar}
                >
                  <Menu className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Sidebar */}
          <div
            className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity lg:hidden ${
              isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            onClick={toggleSidebar}
          />

          <div
            className={`fixed top-0 right-0 h-full w-64 bg-white transform transition-transform duration-300 ease-in-out lg:hidden ${
              isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className="p-4">
              <div className="flex justify-between items-center mb-8">
                <span className="text-xl font-bold">Menu</span>
                <button
                  className="p-2 rounded-lg hover:bg-gray-100"
                  onClick={toggleSidebar}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="flex flex-col space-y-4">
                <a
                  href="#"
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  Homepages
                </a>
                <a
                  href="#"
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  About
                </a>
                <a
                  href="#"
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  Contacts
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Heartfelt <span className="text-indigo-600">Reflections</span>:
            Stories of Love, Loss, and Growth
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Revision Welcomes to ultimate source for fresh perspectives! Explore
            curated content to enlighten, entertain and engage global readers.
          </p>
        </div>

        <div className="max-w-7xl h-px bg-gray-200 mx-auto mt-8"></div>

        {/* Topics Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h2 className="text-center text-gray-600 mb-6">
            EXPLORE TRENDING TOPICS
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {topics.map((topic, index) => (
              <button
                key={index}
                className="flex items-center space-x-2 px-4 py-2 bg-white rounded-full hover:bg-gray-50 transition-colors"
              >
                <span>{topic.icon}</span>
                <span>{topic.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-4xl mx-auto flex flex-col divide-y divide-gray-200">
            {blogPosts.map((post, index) => (
              <div key={index} className="py-8 first:pt-0 last:pb-0">
                <div className="rounded-lg overflow-hidden flex flex-col md:flex-row">
                  {/* Blog Posts: Image */}
                  <div className="w-full md:w-1/2 sm:mb-4">
                    <div className="relative">
                      <div className="absolute z-10 left-4 top-4">
                        <span className="bg-white px-3 py-1 text-sm font-semibold rounded text-gray-900">
                          {post.category}
                        </span>
                      </div>
                      <img
                        src={`https://picsum.photos/400/225?random=${index}`}
                        alt={post.title}
                        className="w-full md:h-[225px] sm:h-72 object-cover rounded-lg md:rounded-lg"
                      />
                    </div>
                  </div>

                  {/* Blog Posts: Details */}
                  <div className="w-full md:w-1/2 md:mx-6 md:h-[225px]">
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="text-sm text-gray-600">
                        {post.author}
                      </span>
                      <span className="text-gray-400">•</span>
                      <span className="text-sm text-gray-600">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-6 line-clamp-2">
                      {post.description}
                    </p>
                    <button
                      style={{ background: 'red' }}
                      className="text-indigo-600 hover:text-indigo-700 text-white px-4 py-2 rounded-lg font-medium"
                    >
                      Discover More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Pagination />
        <Footer />
      </div>
    </div>
  )
}

export default BlogHomepage
