import React, { useEffect, useState } from 'react';
import { getNameForAccount } from '../../components/Profile/shared/api';
import { useFirebaseContext } from '../../context/FirebaseContext';
import { useMatches } from '../../context/MatchContext';
import { getTheaterTalentMatch } from './api';
import { ProfileAndName, TalentMatchCard } from './TalentMatchCard';

export const TalentMatchList = () => {
  const { firebaseFirestore } = useFirebaseContext();
  const { loading, matches, production, roles, currentRoleId } = useMatches();
  const [profiles, setProfiles] = useState<ProfileAndName[]>([]);
  const [cardsLoading, setCardsLoading] = useState(true);

  const fetchFullNames = async () => {
    const profilesWithNames = await Promise.all(
      matches.map(async (m) => {
        const fullName = await getNameForAccount(
          firebaseFirestore,
          m.account_id
        );
        const findMatch = await getTheaterTalentMatch(
          firebaseFirestore,
          production?.production_id || '',
          currentRoleId || '',
          m.account_id,
          'theater' // initiated by theater
        );

        return {
          ...m,
          fullName,
          matchStatus: findMatch ? findMatch.status : null
        };
      })
    );

    setProfiles(profilesWithNames);
    setCardsLoading(false);
  };

  useEffect(() => {
    fetchFullNames();
  }, [firebaseFirestore, matches]);

  if (loading || cardsLoading) return <p>Loading...</p>;
  if (!profiles.length) return <p>No matches found</p>;

  const getCurrentRole = roles?.find((r) => r.role_id === currentRoleId);

  return (
    <div className="flex flex-col gap-6">
      {profiles.map((profile) => (
        <TalentMatchCard
          key={`${profile.uid}-TalentMatchCard`}
          profile={profile}
          productionId={production?.production_id || ''}
          productionName={production?.production_name || '(Production N/A)'}
          roleId={currentRoleId || ''}
          roleName={getCurrentRole?.role_name || '(Role N/A)'}
          fetchFullNames={fetchFullNames}
        />
      ))}
    </div>
  );
};
