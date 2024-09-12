import React, { useState } from 'react';
import Hero from '/hero.png';
import Collapsible from '../components/layout/Collapsible';
import Donate from '/donate.png';
import { InputField } from '../components/shared';
import axios from 'axios';

const Redesign = () => {
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

  const [formData, setFormData] = useState({
    FNAME: '',
    LNAME: '',
    EMAIL: '',
    groups: {
      artist: false,
      theaterStaff: false,
      supporter: true
    }
  });

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const { FNAME, EMAIL, groups } = formData;
    const name = formData.FNAME;
    const spaceIndex = name.indexOf(' ');
    if (spaceIndex !== -1) {
      const firstName = name.substring(0, spaceIndex).trim();
      const lastName = name.substring(spaceIndex + 1).trim();
      setFormData({
        ...formData,
        FNAME: firstName,
        LNAME: lastName
      });
    } else {
      setFormData({
        ...formData,
        LNAME: ''
      });
    }
    try {
      const form = new FormData();
      form.append('FNAME', formData.FNAME);
      form.append('LNAME', formData.LNAME);
      form.append('EMAIL', formData.EMAIL);
      form.append('group[24473][1]', formData.groups.artist ? 'on' : '');
      form.append('group[24473][2]', formData.groups.theaterStaff ? 'on' : '');
      form.append('group[24473][4]', formData.groups.supporter ? 'on' : '');
      form.append('b_5259e9388abb929652f950f67_8117d0974f', '');

      const response = await axios.post(
        'https://chicagoartistguide.us6.list-manage.com/subscribe/post',
        form,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Access-Control-Allow-Credentials': true
          }
        }
      );
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      {/* Hero */}
      <div className="relative">
        <img
          src={Hero}
          alt="Hero"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="relative z-10 py-64 pl-44">
          <h1 className="text-7xl text-white">
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
      <div className="mx-12 my-24 grid grid-cols-1 lg:grid-cols-3">
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
      <div className="grid grid-cols-1 lg:mx-44 lg:grid-cols-2">
        <div className="items-center justify-center">
          <h2 className="text-3xl">
            Help us diversify the Chicago theater community!
          </h2>
          <h3 className="pt-2 text-base leading-loose">
            Your support of the Chicago Artist Guide helps us offer this
            platform to our users free of cost.
          </h3>
          <button className="mt-4 rounded-full bg-salmon px-14 py-3 text-xl font-semibold text-white hover:bg-blush">
            Donate
          </button>
        </div>
        <div className="flex items-center justify-center">
          <img src={Donate} alt="Group of people happily posing" />
        </div>
      </div>
      {/* Newsletter */}
      <div>
        <h2 className="mt-24 px-2 text-start text-2xl text-evergreen md:text-center">
          Stay up to date with the Chicago Artist Guide’s Newsletter
        </h2>
        <div className="flex flex-col justify-center px-5 md:flex-row md:gap-x-10 md:px-10">
          <InputField
            placeholder="First & Last Name"
            value={formData.FNAME}
            id="FNAME"
            name="FNAME"
            onChange={handleChange}
            required
          />
          <InputField
            placeholder="Email Address"
            value={formData.EMAIL}
            id="EMAIL"
            name="EMAIL"
            onChange={handleChange}
            required
          />
          <button
            className="mt-4 rounded-full bg-mint px-14 py-2 text-xl font-semibold text-white hover:bg-evergreen"
            onClick={handleSubmit}
          >
            Keep me posted!
          </button>
        </div>
      </div>
    </>
  );
};

export default Redesign;
