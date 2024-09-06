import React, { useEffect, useState } from 'react';
import { useRoleMatches } from '../../context/RoleMatchContext';
import { Production } from '../Profile/Company/types';
import { ProductionRole } from './types';
import clsx from 'clsx';
import { createMessageThread } from '../Messages/api';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export const CompanyMatchCard = ({ role }: { role: ProductionRole }) => {
  const navigate = useNavigate();
  const { findProduction } = useRoleMatches();
  const [production, setProduction] = useState<Production | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [matchType, setMatchType] = useState<boolean | null>(null);
  const isDeclined = false;
  const isAccepted = true;

  useEffect(() => {
    findProduction(role.productionId).then((p) => setProduction(p));
  }, [role]);

  console.log({ production, role });

  const createMatch = async (status: boolean) => {
    try {
      // const talentAccountId = profile.account_id;
      // await create(
      //   firebaseFirestore,
      //   productionId,
      //   roleId,
      //   talentAccountId,
      //   status
      // );
      // const messageThreadId = await createMessageThread(
      //   firebaseFirestore,
      //   account.data.uid,
      //   talentAccountId,
      //   'Test first message',
      //   true
      // );
      // return messageThreadId;
    } catch (error) {
      let errorMessage = 'An unknown error occurred';
      if (error instanceof Error) {
        errorMessage = error.message;
      } else if (typeof error === 'string') {
        errorMessage = error;
      }

      Swal.fire({
        title: 'Error!',
        text: `There was an error creating the match: ${errorMessage}`,
        icon: 'error',
        confirmButtonText: 'Ok'
      });
      console.error(error);
    }
  };

  const handleConfirm = async () => {
    setIsModalVisible(false);

    if (matchType !== null) {
      const threadId = await createMatch(matchType);
      navigate(`/profile/messages/${threadId}`);
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setMatchType(null);
  };

  return (
    <div className="flex h-[272px] min-w-[812px] bg-white">
      <div className="relative flex flex-1 flex-col overflow-hidden px-8 py-4 font-montserrat -tracking-tighter">
        <h2 className="mb-4 text-2xl font-bold">{role.role_name}</h2>
        {production?.production_name && (
          <h3 className="-mt-2 mb-2 grid grid-cols-2 gap-2 text-base font-bold">
            {production.production_name}
          </h3>
        )}
        <div className="grid grid-cols-2 gap-2 text-base">
          <div>Type</div>
          <div className="font-semibold">{role.type}</div>
          <div>Ethnicity</div>
          <div className="font-semibold">
            {role.ethnicity?.join(', ') || 'N/A'}
          </div>
          <div>Age Range</div>
          <div className="font-semibold">
            {role.age_range?.join(', ') || 'N/A'}
          </div>
          <div>Gender</div>
          <div className="font-semibold">
            {role.gender_identity?.join(', ') || 'N/A'}
          </div>
        </div>
        {role.description && (
          <h4 className="my-2 text-base">{role.description}</h4>
        )}
      </div>

      <div className="flex flex-none flex-col">
        <button
          onClick={() => {
            setMatchType(true);
            setIsModalVisible(true);
          }}
          disabled={isAccepted}
          className={clsx('h-full bg-yoda/50 px-4 py-2 text-mint', {
            'cursor-not-allowed opacity-50': isAccepted,
            'hover:bg-mint/50 hover:text-white': !isAccepted
          })}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-20"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>

          <span className="font-montserrat text-base font-bold uppercase -tracking-tighter">
            Accept
          </span>
        </button>
        <button
          onClick={() => createMatch(false)}
          disabled={isDeclined}
          className={clsx(
            'flex h-full flex-col items-center justify-center bg-blush/50 px-4 py-2 text-salmon',
            {
              'cursor-not-allowed opacity-50': isDeclined,
              'hover:bg-salmon/50 hover:text-white': !isDeclined
            }
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-20"
          >
            <path
              fillRule="evenodd"
              d="m6.72 5.66 11.62 11.62A8.25 8.25 0 0 0 6.72 5.66Zm10.56 12.68L5.66 6.72a8.25 8.25 0 0 0 11.62 11.62ZM5.105 5.106c3.807-3.808 9.98-3.808 13.788 0 3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788Z"
              clipRule="evenodd"
            />
          </svg>
          <span className="font-montserrat text-base font-bold uppercase -tracking-tighter">
            Decline
          </span>
        </button>
      </div>
      {isModalVisible && (
        <ConfirmationModal onConfirm={handleConfirm} onCancel={handleCancel} />
      )}
    </div>
  );
};

const ConfirmationModal = ({
  onConfirm,
  onCancel
}: {
  onConfirm: () => void;
  onCancel: () => void;
}) => (
  <div
    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    style={{ zIndex: 9999 }}
  >
    <div className="rounded bg-white p-4 shadow-lg">
      <h2 className="text-lg font-bold">Confirm Match</h2>
      <p>
        Are you sure you want to accept this match? This action will create a
        message thread with [name]
      </p>
      <div className="mt-4 flex justify-end space-x-2">
        <button onClick={onCancel} className="bg-gray-300 rounded px-4 py-2">
          Cancel
        </button>
        <button
          onClick={onConfirm}
          className="rounded bg-blue-500 px-4 py-2 text-white"
        >
          Confirm
        </button>
      </div>
    </div>
  </div>
);
