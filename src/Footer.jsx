import React from 'react'
import { ChevronRight } from "lucide-react";
import bgVideo from "./assets/backgroundvideo.mp4"

function Footer() {
  return (
    <div className="relative text-white py-24 px-6">

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src={bgVideo} 
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* All content stays same */}
      <div className="relative">

        {/* Header – Ready to Automate */}
        <div className="flex justify-center mb-10">
          <div className="bg-white/20 px-10 py-4 rounded-full">
            <h2 className="text-3xl md:text-4xl font-semibold text-center">
              Ready to Automate Your Restaurant?
            </h2>
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-center text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-16">
          Join the next generation of restaurants using<br />
          AI to serve smarter, faster, and better.
        </p>

        {/* Big CTA */}
        <div className="flex items-center justify-center gap-6 mb-20">
          <h1 className="text-[48px] md:text-[96px] font-light tracking-wide">
            LET’S TRY DEMO
          </h1>
          <button className="w-20 h-20 md:w-24 md:h-24 bg-[#fff] rounded-full flex items-center justify-center hover:opacity-90 transition">
            <ChevronRight className="text-black w-12 h-12" />
          </button>
        </div>

        {/* Footer Bar */}
        <div className="max-w-6xl mx-auto bg-white/20 px-10 py-8 rounded-full flex flex-col md:flex-row gap-10 items-center justify-between">

          {/* Left Logo + Description */}
          <div className="flex items-center gap-6">
            <div className="text-3xl font-extrabold tracking-widest">
              AICHEFARO
            </div>

            <p className="max-w-sm text-sm leading-relaxed">
              Let our intelligent system take your restaurant online — from smart
              recommendations to automated orders and real-time management.
            </p>
          </div>

          {/* Center Links */}
          <div className="flex items-center gap-10 text-sm tracking-wide">
            <button className="hover:text-gray-200 transition">FEATURES</button>
            <button className="hover:text-gray-200 transition">ABOUT</button>
            <button className="hover:text-gray-200 transition">CONTACT</button>
          </div>

          {/* Right Social Icons */}
          <div className="flex items-center gap-6 text-3xl">
            <i className="ri-whatsapp-line"></i>
            <i className="ri-instagram-line"></i>
            <i className="ri-facebook-fill"></i>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-center text-sm text-gray-200 mt-12">
          © 2025 AJXTECHNOLOGIES.COM
        </p>

      </div>
    </div>
  )
}

export default Footer
