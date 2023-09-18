'use client'

import Image from 'next/image'
import styles from './page.module.css'
import { Providers } from './provider'

export default function Home() {
  return (
    <div>
      <Providers />
    </div>
  )
}
