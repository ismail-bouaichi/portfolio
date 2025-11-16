'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { FiDownload } from 'react-icons/fi'

const DownloadButton = () => {
  const handleDownload = (e) => {
    e.preventDefault();
    window.open('/ismailbouaichi.pdf', '_blank')
  }

  return (
    <Button 
      variant="outline" 
      size="lg" 
      className="uppercase flex items-center gap-2 hover:bg-[#E6D2C0] hover:text-accent hover:border-[#E6D2C0]"
      onClick={handleDownload}
    >
      <span>Download CV</span>
      <FiDownload className="text-xl"/>
    </Button>
  )
}

export default DownloadButton