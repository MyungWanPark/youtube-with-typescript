import React from 'react';
import { ChannelProps } from '../types/videoType';
import { useQuery } from '@tanstack/react-query';
import { useYoutubeApi } from '../context/YoutubeApiContext';

type Props = {
    info: ChannelProps;
};

export default function ChannelInfo({ info }: Props) {
    const { youtube } = useYoutubeApi();
    const {
        isLoading,
        error,
        data: imgURL,
    } = useQuery(['channelInfo', info.id], () => youtube.channelImageURL(info.id), {
        staleTime: 1000 * 60 * 60 * 24,
    });
    return (
        <div className="my-4 mb-8 flex items-center">
            <>
                {isLoading && <p>channel thumbnail is loading..</p>}
                {error && <p>there is an error...</p>}
                {imgURL && <img className="w-10 h-10 rounded-full mr-2" src={imgURL} alt={info.title} />}
                <p className="text-lg font-medium">{info.title}</p>
            </>
        </div>
    );
}
