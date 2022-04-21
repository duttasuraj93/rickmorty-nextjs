import { GetStaticPaths } from 'next'
import React from 'react'
import { GetCharacterResults, Character } from '../../types/characters'
import Image from 'next/image'

const Character = ({character}: {character: Character}) => {
  return (
    <div>
      <h1>{character.name}</h1>
      <Image src={character.image} height="200px" width="200px"></Image>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://rickandmortyapi.com/api/character')
    const data: GetCharacterResults = await res.json()
    return {
        paths: data.results.map(item => {
          return {
            params: {id: String(item.id)}
          }
        }),
        fallback: false
    }

}

export const getStaticProps: GetStaticProps = async ({params}: {params: {id: string}}) => {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${params.id}`)
  const data = await res.json()
  return {
    props: {
      character: data
    }
  }
}

export default Character