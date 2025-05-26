import React from 'react'
import NavBar from '../Components/navbar'

function AboutPage() {
  return (
    <div>
      <NavBar />
      <h1>Tentang</h1>
      <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by Muhammad Jehan 2025
          </p>
        </aside>
      </footer>
    </div>
  );
}

export default AboutPage