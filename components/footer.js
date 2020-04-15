import ThemeContext from '../lib/context/theme'
import { Toggle, Spacer } from '@zeit-ui/react'
import { Moon, Sun } from 'react-feather'

export default function Footer() {
  return (
    <footer>
      <h1>Footer</h1>
      <style jsx>{`
        footer {
          border-top 1px solid #eaeaea;
          padding: 1rem;
          background: #eaeaea;
        }
      `}</style>
    </footer>
  )
}
