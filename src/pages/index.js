import MatchesTab from '@/components/matches';
import PlayersTab from '@/components/players';
import ProfileTab from '@/components/profile';
import TabMenu from '@/components/tab-menu';
import React, { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ['Profile', 'Players', 'Last 5 Matches'];

  return (
    <div className="container mx-auto p-8">
      <TabMenu tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="mt-4">
        {activeTab === 0 && <ProfileTab />}
        {activeTab === 1 && <PlayersTab />}
        {activeTab === 2 && <MatchesTab />}
      </div>
    </div>
  );
}
