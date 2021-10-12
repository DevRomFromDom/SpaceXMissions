export interface IMission {
    name: string;
    date_utc: string;
    details: string;
    links: {
        flickr: {
            original: string[];
        };
    };
    rocket: string;
}