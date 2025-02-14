import React from 'react';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import Header from '@/components/header';
import Footer from '@/components/footer';


export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-8"> {/* Added padding-top and padding-bottom */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Touch</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 p-2 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-purple-500 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 p-2 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-purple-500 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 p-2 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-purple-500 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-md hover:from-purple-700 hover:to-pink-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-purple-50 dark:bg-gray-800 rounded-xl p-6">
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-purple-600" />
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Email</h3>
                  <p className="text-gray-600 dark:text-gray-300">support@QuizEZ.com</p>
                </div>
              </div>
            </div>

            <div className="bg-pink-50 dark:bg-gray-800 rounded-xl p-6">
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-pink-600" />
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Phone</h3>
                  <p className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 dark:bg-gray-800 rounded-xl p-6">
              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-orange-600" />
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Location</h3>
                  <p className="text-gray-600 dark:text-gray-300">123 Quiz Street, Learning City</p>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 dark:bg-gray-800 rounded-xl p-6">
              <div className="flex items-center space-x-4">
                <MessageSquare className="h-6 w-6 text-purple-600" />
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Live Chat</h3>
                  <p className="text-gray-600 dark:text-gray-300">Available 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
