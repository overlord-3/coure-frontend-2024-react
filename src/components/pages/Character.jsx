import React from 'react'

export const Character = () => {
    const { characterId } = useParams()
  return (
    <div>Character: {characterId}</div>
  )
}
