import React from "react";
import { MessageSquare, ChevronLeft, ChevronRight } from "lucide-react";


import bgimg from "./assets/bgimg.png";
import one from "./assets/onee.png";
import two from "./assets/two.png";
import three from "./assets/three.png";
import four from "./assets/four.png";
import five from "./assets/five.png";
import six from "./assets/six.png";
import manphoto from "./assets/manphoto.jpg";
import bgVideo from "./assets/backgroundvideo.mp4"

export default function AIRestaurantLanding() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative min-h-screen text-white">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src={bgVideo}
        />

        {/* Light Dark Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        
        <div className="relative">
          {/* Navigation */}
          <nav className="container mx-auto px-8 py-6">
            <div className="flex items-center justify-between">
              {/* Left side */}
              <div className="flex items-center bg-white/20 rounded-full px-8 py-4">
                <div className="text-2xl font-bold tracking-tight mr-12">
                  AI•CHEFARO
                </div>
                <div className="hidden md:flex items-center space-x-8">
                  <a
                    href="#features"
                    className="text-white text-sm font-light hover:text-purple-200 transition-colors uppercase tracking-wide"
                  >
                    Features
                  </a>
                  <a
                    href="#about"
                    className="text-white text-sm font-light hover:text-purple-200 transition-colors uppercase tracking-wide"
                  >
                    About
                  </a>
                  <a
                    href="#pricing"
                    className="text-white text-sm font-light hover:text-purple-200 transition-colors uppercase tracking-wide"
                  >
                    Pricing
                  </a>
                  <a
                    href="#contact"
                    className="text-white text-sm font-light hover:text-purple-200 transition-colors uppercase tracking-wide"
                  >
                    Contact
                  </a>
                </div>
              </div>

              {/* Right side */}
              <button className="bg-white/20 hover:bg-opacity-80 px-8 py-4 rounded-full text-base font-medium transition-all">
                Try Now
              </button>
            </div>
          </nav>

          {/* Hero Content */}
          <div className="container mx-auto px-6 py-20 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Experience the Future
              <br />
              of Dining with AI
              <br />
              Automation
            </h1>

            <p className="text-lg md:text-xl mb-8 text-purple-100 max-w-2xl mx-auto">
              Let our intelligent system take your restaurant online
              <br />
              — from smart recommendations to automated orders
              <br />
              and real-time management.
            </p>

            <button className="bg-gradient-to-br from-[#1a1054] via-[#255ff1] to-[#255ff1] px-8 py-3 rounded-full text-lg font-medium">
              Try Live Demo
            </button>
          </div>
        </div>
      </div>

      {/* AI POS Section*/}
      <div className="bg-black text-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            AI POS SYSTEM FOR MODERN
            <br />
            RESTAURANTS
          </h2>

          {/* Illustration Placeholder */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="bg-gradient-to-br from-purple-900 to-indigo-900 rounded-3xl p-12 aspect-video flex items-center justify-center border-4 border-white">
              <div className="text-center">
                <div className="text-6xl mb-4">📊</div>
                <p className="text-xl text-purple-200">
                  [Dashboard Illustration Placeholder]
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between max-w-4xl mx-auto">
            <p className="text-lg">Your all-in-one, AI-powered platform</p>
            <button className="bg-[#5865f2] px-6 py-2 rounded-full font-medium">
              Sign me up
            </button>
          </div>
        </div>
      </div>

      {/* Key Features Section */}
      <div
        className="relative py-20 bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${bgimg})`,
        }}
      >
        <div className="container mx-auto px-6 relative z-10">
          {/* Heading with white transparent background */}
          <div className="inline-block mx-auto mb-16 bg-white/30 backdrop-blur-md rounded-full px-12 py-4 left-1/2 relative -translate-x-1/2">
            <h2 className="text-4xl font-normal text-black whitespace-nowrap">
              Key Features Section
            </h2>
          </div>

          {/* First Row - 4 Cards */}
          <div className="flex flex-wrap justify-center gap-6 mb-6 max-w-7xl mx-auto">
            {/* Feature 1 - AI Chatbot */}
            <div className="bg-[rgba(255,255,255,0.6)] rounded-3xl p-8 text-center shadow-lg w-64">
              <div className="mb-6">
                <img
                  src={one}
                  alt="AI Chatbot"
                  className="w-32 h-32 mx-auto object-cover rounded-2xl"
                />
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900">
                AI Chatbot
              </h3>
              <p className="text-sm text-gray-800 leading-relaxed">
                Smart food suggestions + instant FAQ replies.
              </p>
            </div>

            {/* Feature 2 - Smart Ordering */}
            <div className="bg-[rgba(255,255,255,0.6)] rounded-3xl p-8 text-center shadow-lg w-64">
              <div className="mb-6">
                <img
                  src={two}
                  alt="Smart Ordering"
                  className="w-32 h-32 mx-auto object-cover rounded-2xl"
                />
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900">
                Smart Ordering
              </h3>
              <p className="text-sm text-gray-800 leading-relaxed">
                Customers can order directly through chat or menu
              </p>
            </div>

            {/* Feature 3 - Dashboard */}
            <div className="bg-[rgba(255,255,255,0.6)] rounded-3xl p-8 text-center shadow-lg w-64">
              <div className="mb-6">
                <img
                  src={three}
                  alt="Dashboard"
                  className="w-32 h-32 mx-auto object-cover rounded-2xl"
                />
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900">
                Dashboard
              </h3>
              <p className="text-sm text-gray-800 leading-relaxed">
                Track orders, edit menu, view insights
              </p>
            </div>

            {/* Feature 4 - Online Payments */}
            <div className="bg-[rgba(255,255,255,0.6)] rounded-3xl p-8 text-center shadow-lg w-64">
              <div className="mb-6">
                <img
                  src={four}
                  alt="Online Payments"
                  className="w-32 h-32 mx-auto object-cover rounded-2xl"
                />
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900">
                Online Payments
              </h3>
              <p className="text-sm text-gray-800 leading-relaxed">
                Integrated with Stripe for secure transactions
              </p>
            </div>
          </div>

          {/* Second Row - 2 Wide Cards */}
          <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
            {/* Feature 5 - AI Recommendations */}
            <div className="bg-[rgba(255,255,255,0.6)] rounded-3xl p-8 shadow-lg flex items-center flex-1 min-w-[400px] max-w-[550px]">
              <div className="mr-6 flex-shrink-0">
                <img
                  src={five}
                  alt="AI Recommendations"
                  className="w-24 h-24 object-cover rounded-2xl"
                />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-xl mb-2 text-gray-900">
                  AI Recommendations
                </h3>
                <p className="text-sm text-gray-800 leading-relaxed">
                  Learns user behavior to suggest popular combos
                </p>
              </div>
            </div>

            {/* Feature 6 - Customer Feedback */}
            <div className="bg-[rgba(255,255,255,0.6)] rounded-3xl p-8 shadow-lg flex items-center flex-1 min-w-[400px] max-w-[550px]">
              <div className="mr-6 flex-shrink-0">
                <img
                  src={six}
                  alt="Customer Feedback"
                  className="w-24 h-24 object-cover rounded-2xl"
                />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-xl mb-2 text-gray-900">
                  Customer Feedback
                </h3>
                <p className="text-sm text-gray-800 leading-relaxed">
                  AI summarizes customer reviews for insights
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Manage Everything Section */}
      <div className="bg-black text-white py-20 min-h-screen flex items-center">
        <div className="container mx-auto px-6">
          {/* Top Three Labels */}
          <div className="flex justify-between text-xs text-[#f6f8ef] mb-6 w-4/5 mx-auto">
            <span>UPDATE MENU ITEMS</span>
            <span className="text-center">MONITOR LIVE ORDERS</span>
            <span className="text-right">VIEW DAILY INSIGHTS</span>
          </div>

          {/* Main Text (80% width) */}
          <div className="text-center w-4/5 mx-auto mb-10">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Manage Everything in One Place
            </h2>
            <p className="text-[#f6f8ef] text-sm md:text-base leading-relaxed">
              FROM ORDERS TO ANALYTICS — CONTROL YOUR RESTAURANT'S PERFORMANCE
              THROUGH AN EASY-TO-USE ADMIN
              <br />
              DASHBOARD.
            </p>
          </div>

          {/* Dashboard Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto mt-12">
            <div className="rounded-3xl overflow-hidden bg-white p-3">
              <img
                src="https://tse2.mm.bing.net/th/id/OIP.IsSf-7lCi17YHebC9Srr4QHaEr?pid=Api&P=0&h=220"
                className="w-full h-full object-cover rounded-2xl"
                alt="Dashboard illustration 2"
              />
            </div>
            <div className="rounded-3xl overflow-hidden bg-white p-3">
              <img
                src="https://tse2.mm.bing.net/th/id/OIP.IsSf-7lCi17YHebC9Srr4QHaEr?pid=Api&P=0&h=220"
                className="w-full h-full object-cover rounded-2xl"
                alt="Dashboard illustration 3"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Section - FIXED FULL SCREEN */}
      <section className="bg-black text-white h-screen w-screen flex items-center justify-center">
        <div className="w-full h-full flex flex-col justify-center px-6 md:px-12 lg:px-20 py-12">
          {/* Header Row: Icon + Title */}
          <div className="flex items-center justify-center mb-12 lg:mb-16 space-x-4 lg:space-x-8">
            {/* Icon */}
            <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gray-600/50 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0">
              <MessageSquare className="w-8 h-8 lg:w-10 lg:h-10 text-gray-300" />
            </div>

            {/* Title Box */}
            <div className="bg-gray-600/40 backdrop-blur-sm px-8 lg:px-16 py-4 lg:py-5 rounded-full">
              <h2 className="text-2xl lg:text-4xl xl:text-5xl font-semibold text-white whitespace-nowrap">
                Ready to Automate Your Restaurant?
              </h2>
            </div>
          </div>

          {/* Main Content */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
            {/* Left — Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <img
                src={manphoto}
                alt="Profile"
                className="w-[280px] h-[280px] lg:w-[380px] lg:h-[380px] xl:w-[420px] xl:h-[420px] object-cover rounded-3xl shadow-2xl"
              />
            </div>

            {/* Right — Name + Arrows + Testimonial */}
            <div className="flex flex-col space-y-6 lg:space-y-8">
              {/* Name Input + Arrows */}
              <div className="flex items-center space-x-3 lg:space-x-4 bg-gray-600/40 backdrop-blur-sm rounded-full px-6 lg:px-8 py-3 lg:py-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="flex-1 bg-transparent text-white placeholder-gray-300 text-lg lg:text-xl outline-none"
                />

                {/* Left Arrow */}
                <button className="w-12 h-12 lg:w-14 lg:h-14 bg-white rounded-full flex items-center justify-center hover:opacity-90 transition flex-shrink-0">
                  <ChevronLeft className="w-6 h-6 lg:w-8 lg:h-8 text-black" />
                </button>

                {/* Right Arrow */}
                <button className="w-12 h-12 lg:w-14 lg:h-14 bg-white rounded-full flex items-center justify-center hover:opacity-90 transition flex-shrink-0">
                  <ChevronRight className="w-6 h-6 lg:w-8 lg:h-8 text-black" />
                </button>
              </div>

              {/* Testimonial Card */}
              <div className="bg-white text-black rounded-3xl p-8 lg:p-12 shadow-2xl">
                <p className="text-lg lg:text-xl leading-relaxed text-center mb-4 lg:mb-6">
                  "Our order time reduced by 50% since using the AI automation
                  system."
                </p>
                <p className="text-sm lg:text-base text-gray-600 text-center font-medium">
                  — Urban Bites Café
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}