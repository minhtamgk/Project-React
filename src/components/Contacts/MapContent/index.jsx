import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './MapContent.css';

class Mapcontent extends PureComponent {
    render() {
        return (
            <div>
                {/* Map Container  */}

                <div className="row">
                    <div className="col">
                        <div id="google_map">
                            <div className="map_container">
                                <div id="map"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Mapcontent.propTypes = {

};

export default Mapcontent;