import React, { useEffect } from 'react';
import { cacheImage } from '../../utils/utils';
import './_Avatar.scss';

const Avatar = ({ src }) => {
    useEffect(() => {
        cacheImage(src)
    }, [src]);
    return (
        <img className="avatar" src={src} alt="avatar" />
    )
};

export default Avatar;