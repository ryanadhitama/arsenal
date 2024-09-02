import React, { useEffect, useState } from 'react'

const MatchesTab = () => {
  const [matches, setMatches] = useState([])

  useEffect(() => {
    // Replace with actual API endpoint
    fetch('https://www.thesportsdb.com/api/v1/json/3/eventslast.php?id=133604')
      .then((response) => response.json())
      .then((data) => setMatches(data?.results))
  }, [])

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Last 5 Matches</h2>
      <ul>
        {matches.map((match, index) => (
          <li key={index} className="border-b py-2 text-center">
            <div className='flex justify-center gap-6 items-center'>
              <img src={match?.strHomeTeamBadge ?? `https://ui-avatars.com/api/?name=${match?.strHomeTeam}`} className='w-[40px]' alt="" />
              <p>vs</p>
              <img src={match?.strAwayTeamBadge  ?? `https://ui-avatars.com/api/?name=${match?.strAwayTeam}`} className='w-[40px]' alt="" />
            </div>
            <p className='pt-2 text-xl'>
              {match.strEvent}
            </p>
            <p>{match.dateEvent}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MatchesTab
