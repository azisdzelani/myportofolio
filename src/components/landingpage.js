import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Landing extends Component {
    render(){
        return(
            <div style = {{width:'100%', margin:'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src="https://media.licdn.com/dms/image/C4D03AQHtpYjbYkl03g/profile-displayphoto-shrink_200_200/0?e=1575504000&v=beta&t=pfzfOa26BrsKuAO5QS8dwHaxm7SGWIrBRXgClHUlCzA"
                            alt="avatar"
                            className="avatar-img"
                        />

                        <div className="banner-text">
                            <h1>Azis Abd Dzaelani</h1>
                            
                            <hr />

                            <p>HTML | CSS | Bootstrap | Javascript | React | SQL Server | Debugging | ASP.NET</p>

                            <div className="social-links">

                                {/* linkedin */}
                                <a href="http://linkedin.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                                </a>

                                {/* Github */}
                                <a href="http://github.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true"></i>
                                </a>

                                {/* Twitter */}
                                <a href="http://twitter.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-twitter-square" aria-hidden="true"></i>
                                </a>

                                {/* Facebook */}
                                <a href="http://facebook.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-facebook-square" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;