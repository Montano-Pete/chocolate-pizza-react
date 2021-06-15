import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>
                <header className="head">
                    <div className="gutter-left-icons">
                        <section className="logo-img">
                            <img src="/logo.png" alt='logo' />
                        </section>
                        <section className="logo-text">
                            <p>
                                <span><em>Delicious</em></span> <br />
                                
                                THE BEST FOOD BLOG ON THE WEB
                                
                            </p>
                        </section>
                    </div>
                    <div className="gutter-right-icons">
                        <div className="images-1">
                            <img src="/fb-icon.png" alt='fb icon' />
                            <img src="/twit-icon.png" alt='twitter icon' />
                            <img src="/gp-icon.png" alt='gp icon' />
                            <img src="/insta-icon.png" alt='insta icon' />
                            <img src="/flic-icon.png" alt='flic icon' />
                            <img src="/pint-icon.png" alt='pint icon' />
                        </div>
                        <div className="images-2">
                            <img src="/rss-icon.png" alt='rss icon' />
                            <img src="/mail-icon.png" alt='mail icon' />
                        </div>
                    </div>
                    
                </header>
            </div>
        )
    }
}