import { Venue } from './venue.model';
import { Offer } from './offer.model';

export class Event {
    id: number;
    artist_id: number;
    url: string;
    on_sale_datetime: Date;
    datetime: Date;
    description: string;
    venue: Venue;
    offers: Offer;
    lineup: string;
}