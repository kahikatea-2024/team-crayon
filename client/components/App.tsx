// import { useState } from 'react'
// import { useQuery } from '@tanstack/react-query'
import Character from './Character.tsx'
import Quote from './Quote.tsx'
import { useEffect, useState } from 'react'
import { getCharacter, getQuote } from '../apiClient.ts'
import { QuoteDoc } from '../../models/quotedata.ts'
import { CharacterInfo } from '../../models/characterData.ts'

const App = () => {
  const [randomQuote, setRandomQuote] = useState<QuoteDoc | null>(null)
  const [randomCharacter, setRandomCharacter] = useState<CharacterInfo | null>(
    null,
  )

  async function getRandomQuote() {
    setRandomQuote(null)
    const quote = await getQuote()
    setRandomQuote(quote)
  }
  async function getRandomCharacter() {
    setRandomCharacter(null)
    const character = await getCharacter()
    setRandomCharacter(character)
  }

  useEffect(() => {
    getRandomQuote()
    getRandomCharacter()
  }, []) //find more information about error!

  return (
    <>
      <Quote randomQuote={randomQuote} getRandomQuote={getRandomQuote} />
      <Character
        randomCharacter={randomCharacter}
        getRandomCharacter={getRandomCharacter}
      />
    </>
  )
}

export default App
