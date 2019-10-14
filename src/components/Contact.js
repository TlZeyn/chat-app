import React from 'react';
import './Contact.css'


class Contact extends React.Component {
    state = {
        online : this.props.online
    }

    onlineClick = (event) => {
        this.setState ({
            online: !this.state.online
        })
    }

    render() {
        return (

            <div className='Contact'>
                <img className='avatar' src={this.props.avatar} alt='random img' />
                <div>
                    <h4 className='name'>{this.props.name}</h4>
                    <div className='status'>
                        <div className='status-text' onClick ={this.onlineClick}>
                            <span className={this.state.online ? 'status-online' : 'status-offline'}></span>
                            {this.state.online? 'online' : 'offline'}
                        </div>
                    </div>

                </div>
            </div>

        )
    }
}

export default Contact;