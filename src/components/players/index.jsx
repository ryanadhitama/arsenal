import React, { useEffect, useState } from 'react'

const PlayersTab = () => {
  const [players, setPlayers] = useState([])

  useEffect(() => {
    fetch(
      'https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?t=Arsenal',
    )
      .then((response) => response.json())
      .then((data) => setPlayers(data?.player))
  }, [])

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 gap-4">
        {players.map((player, index) => (
          <div key={index} className='aspect-[1/1] relative'>
            <img src={player?.strThumb} className="object-cover" alt="" />
            <div className='bg-gradient-to-t from-black from-[1%] aspect-[1/1] w-full h-full top-0 left-0 absolute'></div>
            <div className='absolute text-white bottom-5 left-6 z-10 text-lg font-medium'>
              <p>{player.strPlayer}</p>
              <p className='font-light text-base'>{player?.strPosition}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PlayersTab
