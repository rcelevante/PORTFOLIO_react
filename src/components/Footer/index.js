import React from 'react';

import Col from 'react-bootstrap/Col';


function Footer() {
    return (
            <Col className="d-inline-flex justify-content-around">
                <div>
                    <a
                        href="https://www.linkedin.com/in/rochelleruiz/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-linkedin"></i>
                    </a>
                </div>
                <div>
                    <a
                        href="https://github.com/rcelevante"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-github"></i>
                    </a>
                </div>
                
            </Col>
    );
}
export default Footer;