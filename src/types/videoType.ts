export interface VideoItem {
    id: string;
    snippet: {
        title: string;
        publishedAt: string;
        channelId: string;
        description: string;
        thumbnails: {
            default: {
                url: string;
            };
            medium: {
                url: string;
            };
        };
        channelTitle: string;
    };
}

export interface SearchVideoItem {
    id: {
        videoId: string;
    };
    snippet: {
        title: string;
    };
}

export type ChannelProps = {
    id: string;
    title: string;
};
