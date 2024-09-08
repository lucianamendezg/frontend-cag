import React from 'react';
import Hero from '/hero.png';
import Collapsible from '../components/layout/Collapsible';
import Donate from '/donate.png';
import { InputField } from '../components/shared';
import { yellowBlob2, greenBlob } from '../images';
import { BlobBox } from '../components/layout';

const Redesign = () => {
  const lg_blobs = [
    {
      id: 1,
      blob: Donate,
      opacity: 1,
      transform: 'scale(0.8)',
      translate: '10vw, -15vh',
      zIndex: '1'
    },
    {
      id: 2,
      blob: yellowBlob2,
      opacity: 1,
      transform: 'rotate(179deg) scale(0.5)',
      translate: '20vw, -30vh'
    },
    {
      id: 3,
      blob: greenBlob,
      opacity: 1,
      transform: 'rotate(-95deg) scale(0.5)',
      translate: '5vw, -20vh'
    }
  ];

  const xl_blobs = [
    {
      id: 1,
      blob: Donate,
      opacity: 1,
      transform: 'scale(0.8)',
      translate: '10vw, -15vh',
      zIndex: '1'
    },
    {
      id: 2,
      blob: yellowBlob2,
      opacity: 1,
      transform: 'rotate(179deg) scale(0.7)',
      translate: '17vw, -30vh'
    },
    {
      id: 3,
      blob: greenBlob,
      opacity: 1,
      transform: 'rotate(-95deg) scale(0.7)',
      translate: '5vw, -20vh'
    }
  ];

  const sectionTitles = {
    about: 'What is Chicago Artist Guide (CAG)?',
    price: 'Is it Free?',
    profile: 'Who can make an Artist Profile?',
    jobs: 'How can my Theatre Company sign up to post jobs?',
    identity:
      'Will I be excluded from casting searches based on how I self-identify?'
  };

  const FAQ = {
    about: [
      {
        id: 1,
        question: '',
        answer: 'Answer'
      }
    ],
    price: [
      {
        id: 2,
        question: '',
        answer: 'Answer'
      }
    ],
    profile: [
      {
        id: 3,
        question: '',
        answer: 'Answer'
      }
    ],
    jobs: [
      {
        id: 4,
        question: '',
        answer: 'Answer'
      }
    ],
    identity: [
      {
        id: 5,
        question: '',
        answer: 'Answer'
      }
    ]
  };

  const subContainer = (props: any) => {
    return (
      <div className="" key={props.id}>
        <p>{props.answer}</p>
      </div>
    );
  };

  return (
    <>
      {/* Hero */}
      <div className="relative px-2">
        <img
          src={Hero}
          alt="Hero"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="relative z-10 py-64 lg:pl-44">
          <h1 className="text-5xl text-white md:text-7xl">
            Discover your
            <br />
            next dream gig
          </h1>
          <h3 className="text-md font-semibold text-white">
            {' '}
            Sign up for our network and have your next opportunity find you.
          </h3>
          <h3 className="text-sm font-medium text-white">
            Free for everyone. Proudly made in Chicago.
          </h3>
          <a href="/sign-up">
            <button className="mt-12 rounded-full bg-butter px-14 py-3 text-xl font-semibold text-white hover:bg-yellow">
              Get Started
            </button>
          </a>
        </div>
      </div>
      {/* FAQ */}
      <div className="my-24 grid grid-cols-1 md:mx-12 lg:grid-cols-3">
        <div className="col-span-1 flex items-center justify-center">
          <h1 className="text-black">
            Frequently
            <br />
            Asked
            <br />
            Questions
          </h1>
        </div>
        <div className="col-span-2 mx-12">
          <Collapsible
            sectionTitles={sectionTitles}
            subSections={FAQ}
            subContainer={subContainer}
            grid={false}
          />
        </div>
      </div>
      {/* Diversify */}
      <div className="bg-white px-2 py-24">
        <div className="mx-auto flex max-w-5xl flex-col items-center lg:flex-row">
          <div className="items-center justify-center lg:w-1/2">
            <h2 className="text-3xl">
              Help us diversify the Chicago theater community!
            </h2>
            <h3 className="pt-2 text-base leading-loose">
              Your support of the Chicago Artist Guide helps us offer this
              platform to our users free of cost.
            </h3>
            <div className="flex justify-center lg:justify-start">
              <a href="https://www.chicagoartistguide.org/donate">
                <button className="mt-4 rounded-full bg-salmon px-14 py-3 text-xl font-semibold text-white hover:bg-blush">
                  Donate
                </button>
              </a>
            </div>
          </div>
          <div className="hidden lg:block lg:w-1/2 xl:hidden">
            <BlobBox blobs={lg_blobs} />
          </div>
          <div className="hidden xl:block xl:w-1/2">
            <BlobBox blobs={xl_blobs} />
          </div>
        </div>
      </div>
      {/* Newsletter */}
      <div>
        <h2 className="mt-24 text-center text-2xl text-slate">
          Stay up to date with the Chicago Artist Guide’s Newsletter
        </h2>
        <div className="flex justify-center gap-24">
          <InputField placeholder="First and Last Name" />
          <InputField placeholder="Email" />
          <button className="mt-4 rounded-full bg-mint px-14 py-2 text-xl font-semibold text-white hover:bg-darkGrey">
            Keep me posted!
          </button>
        </div>
      </div>
    </>
  );
};

export default Redesign;
