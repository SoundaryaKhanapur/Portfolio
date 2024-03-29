import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../Modal/Modal';
import homeAnime from './../../assets/home_anime.jpg'
import './Home.css'

class Home extends Component {
    // state = { showModal: false };

    // componentDidMount() {
    //     setTimeout(() => {
    //         this.setState({ showModal: true })
    //     }, 2000)
    // }

    // closeModal = () => {
    //     this.setState({ showModal: false })
    // }

    render() {
        return (
            <div className="home-containe">
                {/* {this.state.showModal && <Modal closeModal={this.closeModal} />} */}
                <div className="header-text">
                    <h1>Welcome to my Portfolio!</h1>
                    <p>I'm Soundarya, a full stack dev and content creator.</p>
                </div>
                <div className="head-btns">
                    <Link to="/about" className="btn btn-white">
                        <p className="btn-text">Know more about me</p>
                    </Link>
                    <Link to="/contact" className="btn btn-transparent">
                        <p className="btn-text">Connect with me</p>
                    </Link>
                </div>
                {/* change this image */}
                <div className="splash-image">
                    <img src={homeAnime} alt="animation" className="home-anime" />

                </div>
            </div>
        )
    }
}

export default Home;