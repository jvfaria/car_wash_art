import React from 'react';
import './styles.css';
import carwashlogo from '../../assets/carwash.png';
import { Button } from '@material-ui/core';
import LocalCarWashIcon from '@material-ui/icons/LocalCarWash';
import { Link } from 'react-router-dom';

const Home = () => {
      return (

            <div id="container">
                  <div className="content">
                        <header>
                              <h2>Welcome to Car Wash Art</h2>
                        </header>

                        <main>
                              <img src={carwashlogo} alt="carwash-logo" />
                              <div id="button-container">

                                    <Link to="admin">
                                          <Button id="btn-start">
                                               <strong>Go to administrator</strong>
                                               <span><LocalCarWashIcon /></span>
                                          </Button>
                                    </Link>

                              </div>
                        </main>
                  </div>
            </div>

      )
}

export default Home;