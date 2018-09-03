import React from 'react';
import LoaderStyle from '../styles/LoaderStyles';

const Loader = () =>
    <LoaderStyle.LoadingContainer> Loading...........
        <LoaderStyle.SVG viewBox="25 25 50 50">
            <LoaderStyle.Innercircle cx="50" cy="50" r="20" fill="none" />
            <LoaderStyle.Outercircle cx="50" cy="50" r="20" fill="none" />
        </LoaderStyle.SVG>
    </LoaderStyle.LoadingContainer>

export default Loader;
