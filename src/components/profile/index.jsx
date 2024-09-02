import React, { useEffect, useState } from 'react';

const ProfileTab = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch('https://www.thesportsdb.com/api/v1/json/3/searchteams.php?t=Arsenal')
      .then(response => response.json())
      .then(data => setProfile(data.teams[0]));
  }, []);

  if (!profile) return <div>Loading...</div>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{profile.strTeam}</h2>
      <p>{profile.strDescriptionEN}</p>
      <p><strong>Stadium:</strong> {profile.strStadium}</p>
      <p><strong>Location:</strong> {profile.strLocation}</p>
      <p><strong>Website:</strong> <a href={`https://${profile.strWebsite}`} target="_blank" rel="noopener noreferrer">{profile.strWebsite}</a></p>
    </div>
  );
};

export default ProfileTab;