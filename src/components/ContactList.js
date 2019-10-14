import React from 'react';
import Contact from './Contact';


const userTab = [
    {
        name: 'Rosemary Welch',
        avatar: 'https://randomuser.me/api/portraits/women/90.jpg',
        online: true


    },
    {
        name: 'Ava Bell',
        avatar: 'https://randomuser.me/api/portraits/women/28.jpg',
        online: true

    },
    {
        name: 'Teresa Ferguson',
        avatar: 'https://randomuser.me/api/portraits/women/40.jpg',
        online: false

    },
    {
        name: 'Aiden Jimenez',
        avatar: 'https://randomuser.me/api/portraits/men/64.jpg',
        online: true

    },
    {
        name: 'Monica Willis',
        avatar: 'https://randomuser.me/api/portraits/women/15.jpg',
        online: false

    }
];

const ContactList = () => {
    return (
        (
            <div>
                {userTab.map(item => (<Contact name={item.name} avatar={item.avatar} online={item.online} />))}
            </div>
        )
    )

};




export default ContactList;