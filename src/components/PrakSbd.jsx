import React from "react";
import logo from "../assets/SBDLogo.svg";

export default function PrakSBD() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <header className="bg-gray-800 shadow p-4 flex justify-between items-center">
        <h1 className="text-2xl font-extrabold text-white tracking-wide">
          Network Laboratory
        </h1>
        <nav className="space-x-4">
          <a href="/" className="text-gray-300 hover:text-white">
            Home
          </a>
          <a href="/dmj" className="text-gray-300 hover:text-white">
            PrakDMJ
          </a>
          <a href="/os" className="text-gray-300 hover:text-white">
            PrakOS
          </a>
          <a href="/sbd" className="text-gray-300 hover:text-white">
            PrakSBD
          </a>
        </nav>
      </header>
      <section className="flex flex-col items-center text-center p-8">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
          <img src={logo} alt="SBD Logo" className="w-32 h-32 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-2">Sistem Basis Data</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Praktikum ini mempelajari konsep dasar basis data, SQL, desain ERD,
            dan implementasi menggunakan sistem manajemen basis data.
          </p>
        </div>
      </section>
    </div>
  );
}
