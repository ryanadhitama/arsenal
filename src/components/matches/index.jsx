import React, { useEffect, useState } from "react";
import { format } from "date-fns";

const MatchesTab = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    fetch("https://www.thesportsdb.com/api/v1/json/3/eventslast.php?id=133604")
      .then((response) => response.json())
      .then((data) => setMatches(data?.results));
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {matches.map((match, index) => (
          <div key={index} className="border-b py-5 px-4 flex items-center gap-4 md:gap-10">
            <div className="flex flex-col gap-2 flex-1">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 md:gap-4">
                  <img
                    src={
                      match?.strHomeTeamBadge ??
                      `https://ui-avatars.com/api/?name=${match?.strHomeTeam}`
                    }
                    className="w-6 md:w-[50px]"
                    alt=""
                  />
                  <div className="text-base md:text-2xl">{match?.strHomeTeam}</div>
                </div>
                <div className="text-base md:text-2xl">{match?.intHomeScore}</div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 md:gap-4">
                  <img
                    src={
                      match?.strAwayTeamBadge ??
                      `https://ui-avatars.com/api/?name=${match?.strAwayTeam}`
                    }
                    className="w-6 md:w-[50px]"
                    alt=""
                  />
                  <div className="text-base md:text-2xl">{match?.strAwayTeam}</div>
                </div>
                <div className="text-base md:text-2xl">{match?.intAwayScore}</div>
              </div>
            </div>

            <div className="text-center flex-shrink-0 px-4 md:px-0 border-l h-full flex justify-center flex-col md:text-base sm:text-sm text-xs md:min-w-[150px]">
              <div>{format(new Date(match?.strTimestamp), "EEE, dd MMM")}</div>
              <div>{format(new Date(match?.strTimestamp), "HH:mm")}</div>
            </div>

            {/* <div className='flex justify-center gap-6 items-center'>
              <img src={match?.strHomeTeamBadge ?? `https://ui-avatars.com/api/?name=${match?.strHomeTeam}`} className='w-[40px]' alt="" />
              <p>vs</p>
              <img src={match?.strAwayTeamBadge  ?? `https://ui-avatars.com/api/?name=${match?.strAwayTeam}`} className='w-[40px]' alt="" />
            </div> */}
            {/* <p className='pt-2 text-xl'>
              {match.strEvent}
            </p>
            <p>{match.dateEvent}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MatchesTab;
