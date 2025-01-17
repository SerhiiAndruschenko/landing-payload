'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const PageHeader = () => {
  const [scrolling, setScrolling] = useState(false)
  const [isSmallScreen, setIsSmallScreen] = useState(false)
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true)
    } else {
      setScrolling(false)
    }
  }

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 992)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <header className={scrolling ? 'active header' : 'header'}>
      <div className="_container">
        <div className="col">
          <Link href="/">
            <img src="/images/logo.svg" />
          </Link>
          <nav>
            <Link href="#services">Services</Link>
            <Link href="#why">Why Us</Link>
            <Link href="#contacts">Contacts</Link>
          </nav>
        </div>
        <Link href="#order" className="green-button">
          Order an audit
        </Link>
      </div>
    </header>
  )
}

export default PageHeader