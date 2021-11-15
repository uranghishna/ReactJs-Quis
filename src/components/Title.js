import React from 'react';
import List from './List';

const Title = ({title, alertTitle, profile, profiles}) => {
    alertTitle();
    return (
        <div>
            <h1>
            {JSON.stringify(profile)};
            {JSON.stringify(profiles)};
            Title : {title} || {profile.name} || {profile.location};
            </h1>
            <h1>List nama orang</h1>
            <ul>{profiles.map((profile) => (
                <List name={profile.name}/>
            ))}</ul>
        </div>
    );
};

export default Title;