import React from 'react';
import './space.css'
import profile_banner from '../../assets/OLD/profile_banner.png'
import profile_pic from '../../assets/OLD/profile.jpg'
import Cards from '../../components/Cards/Cards'

const Space = () => {

  return (
    <div className='profile section__padding'>
      <div className="profile-top">
        <div className="profile-banner">
          <img src={profile_banner} alt="banner" />
        </div>
        <div className="profile-pic">
            <img src={profile_pic} alt="profile" />
            <h3>James Bond</h3>
        </div>
      </div>
      <div className="profile-bottom">
        <div className="profile-bottom-input">
          <input type="text" placeholder='Search Item here' />
          <select>
            <option>Recently Listed</option>
            <option>Popular</option>
            <option>Low to High</option>
            <option>High to Low</option>
          </select>
        </div>
        <Cards title="Item" />
      </div>
    </div>
  );
};

export default Space;