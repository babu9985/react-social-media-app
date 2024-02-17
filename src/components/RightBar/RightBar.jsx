import React from 'react';
import './RightBar.scss';

const RightBar = () => {
    return (
        <div className='rightbar'>
            <div className="container">
                <div className="item">
                    <span>Suggessions For You</span>
                    <div className="user">
                        <div className="user-info">
                            <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="user" />
                            <span>Ganesh Babu</span>
                        </div>
                        <div className="buttons">
                            <button>Follow</button>
                            <button>Dismiss</button>
                        </div>
                    </div>
                    <div className="user">
                        <div className="user-info">
                            <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="user" />
                            <span>Muni Ganesh Babu</span>
                        </div>
                        <div className="buttons">
                            <button>Follow</button>
                            <button>Dismiss</button>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <span>Latest Activities</span>
                    <div className="user">
                        <div className="user-info">
                            <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="user" />
                            <p>
                                <span>Ganesh Babu</span> changed their cover picture
                            </p>
                        </div>
                        <span className='time'>1 min ago</span>
                    </div>
                    <div className="user">
                        <div className="user-info">
                            <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="user" />
                            <p>
                                <span>Muni Ganesh Babu</span> changed their cover picture
                            </p>
                        </div>
                        <span className='time'>1 min ago</span>
                    </div>
                    <div className="user">
                        <div className="user-info">
                            <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="user" />
                            <p>
                                <span>Ganesh </span> changed their cover picture
                            </p>
                        </div>
                        <span className='time'>1 min ago</span>
                    </div>
                    <div className="user">
                        <div className="user-info">
                            <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="user" />
                            <p>
                                <span>Babu</span> changed their cover picture
                            </p>
                        </div>
                        <span className='time'>1 min ago</span>
                    </div>

                </div>
                <div className="item">
                    <span>Online Friends</span>
                    <div className="user">
                        <div className="user-info">
                            <img
                                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                alt=""
                            />
                            <div className="online" />
                            <span>Muni Ganesh Babu</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="user-info">
                            <img
                                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                alt=""
                            />
                            <div className="online" />
                            <span>Ganesh babu</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="user-info">
                            <img
                                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                alt=""
                            />
                            <div className="online" />
                            <span>Ganesh</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="user-info">
                            <img
                                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                alt=""
                            />
                            <div className="online" />
                            <span>Babu</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="user-info">
                            <img
                                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                alt=""
                            />
                            <div className="online" />
                            <span>Lahari</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="user-info">
                            <img
                                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                alt=""
                            />
                            <div className="online" />
                            <span>Indu</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="user-info">
                            <img
                                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                alt=""
                            />
                            <div className="online" />
                            <span>Donda</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightBar
