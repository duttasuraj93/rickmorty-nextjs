import { GetServerSideProps, GetStaticPaths } from 'next'
import Layout from '../../components/Layout'
import React from 'react'
import { Character } from '../../types/characters'
import Image from 'next/image'

function CharacterInfo({character}: {character: Character}) {

  return (
    <div>
      <h1>{character.name}</h1>
      <Image src={character.image} height="200px" width="200px"></Image>
    </div>
  )
}

CharacterInfo.getLayout = function getLayout(page: typeof CharacterInfo) {
    return (
      <Layout>
          {page}
      </Layout>
    )
  }


export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${context.query.id}`)
  const data = await res.json()
  return {
    props: {
      character: data
    }
  }
}

export default CharacterInfo