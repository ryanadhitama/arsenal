import React, { useEffect, useState } from 'react'

const PlayersTab = () => {
  const [players, setPlayers] = useState([])

  useEffect(() => {
    // Replace with actual API endpoint
    fetch(
      'https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?t=Arsenal',
    )
      .then((response) => response.json())
      .then((data) => setPlayers(data?.player))
  }, [])

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Players</h2>
      <div className="grid grid-cols-6 gap-4">
        {players.map((player, index) => (
          <div key={index} className="py-2">
            <img src={player?.strThumb} className="pb-2 aspect-[1/1] object-cover" alt="" />
            <p>{player.strPlayer}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PlayersTab
