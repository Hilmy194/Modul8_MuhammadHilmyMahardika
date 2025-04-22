import React from "react";
import { Link } from "react-router-dom";
import dmjLogo from "../assets/DMJLogo.svg";
import osLogo from "../assets/OSLogo.svg";
import sbdLogo from "../assets/SBDLogo.svg";
import netlabLogo from "../assets/Logo.svg";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <header className="bg-gray-800 shadow p-4 flex justify-between items-center">
        <h1 className="text-2xl font-extrabold text-white tracking-wide">
          Network Laboratory
        </h1>
      </header>
      <section className="flex flex-col items-center text-center p-8">
       
        <img src={netlabLogo} alt="Netlab Logo" className="w-40 h-40 mb-6" />
        <h2 className="text-3xl font-bold text-white mb-6">Welcome to Network Laboratory</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link to="/dmj" className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <img src={dmjLogo} alt="DMJ Logo" className="w-32 h-32 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white">Dasar Manajemen Jaringan</h3>
          </Link>
          <Link to="/os" className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <img src={osLogo} alt="OS Logo" className="w-32 h-32 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white">Praktikum Sistem Operasi</h3>
          </Link>
          <Link to="/sbd" className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <img src={sbdLogo} alt="SBD Logo" className="w-32 h-32 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white">Sistem Basis Data</h3>
          </Link>
        </div>
      </section>
      <footer className="bg-gray-800 p-4 mt-8">
        <nav className="flex justify-center space-x-4 text-sm">
          <Link to="/" className="text-gray-300 hover:text-white">
            Home
          </Link>
          <Link to="/dmj" className="text-gray-300 hover:text-white">
            PrakDMJ
          </Link>
          <Link to="/os" className="text-gray-300 hover:text-white">
            PrakOS
          </Link>
          <Link to="/sbd" className="text-gray-300 hover:text-white">
            PrakSBD
          </Link>
        </nav>
      </footer>
    </div>
  );
}