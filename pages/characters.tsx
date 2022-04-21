import { GetStaticProps } from 'next'
import { GetCharacterResults, Character } from '../types/characters'
import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

const Characters: NextPage<{ characters: Character[] }> = ({characters}) => {
    return (
        <div>
            <div>Characters</div>
            <div>
                <div>
                {
                    characters.map(item => {
                        return (
                            <div key={item.id}>
                                <Link href={`/character/${item.id}`}>
                                <div>{item.name}</div>
                                </Link>
                                <Image src={item.image} height="200px" width="200px"></Image>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        </div>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    const res = await fetch('https://rickandmortyapi.com/api/character')
    const data: GetCharacterResults = await res.json()
    return {
        props: {
            characters: data.results
        }
    }
}

export default Characters