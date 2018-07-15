import React from "react";
import { Grid, Cell, Avatar } from 'react-md';

import "./SiteProfile.scss";

const style = { maxWidth: 320, maxHeight: 200 };

class SiteProfile extends React.Component {
    render() {
        return(
            <div>
                <Grid>
                    <Cell size={12} className="md-cell--left"><Avatar src="https://unsplash.it/240/240?random&time=8" role="presentation" className="site-avatar-size" /></Cell>
                    <Cell size={12} className="md-cell--left"><h1>2much2learn</h1></Cell>
                </Grid>
            </div>
        )
    }
}

export default SiteProfile;