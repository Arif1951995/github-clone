import React from 'react'
import TheCard from './TheCard'

const CardGallery = () => {
    return (
        <section className="CardGallery">
            <p>See how the world's leading companies use GitHub Enterprise.</p>
            <div>
            <TheCard
            imgUrl="https://customer-stories-feed.github.com/customer_stories/mgm-resorts/hero.jpg"
            heading="MGM Resorts International"
            par="hospitality"
            />
             <TheCard
            imgUrl="https://customer-stories-feed.github.com/customer_stories/nationwide/nw_hero.jpg"
            heading="Nationalwide"
            par="Insurance"
            />
             <TheCard
            imgUrl="https://customer-stories-feed.github.com/customer_stories/sap/sap6.jpg"
            heading="SAP"
            par="Bussines Software"
            />
            <TheCard
            imgUrl="https://customer-stories-feed.github.com/customer_stories/spotify/spotifyhero.jpg"
            heading="Spotify"
            par="Technology/Streaming"
            />

            </div>
        </section>
    );
}

export default CardGallery