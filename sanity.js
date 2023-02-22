import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = sanityClient({
    projectId: "q7vteilj",// ADD YOUR PROJECT ID INTO .env file aswell
    dataset: "production",
    apiVersion:"2021-10-21", // CHG API VERSION TO AVOID BREAKING
    useCdn: true,
    
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

export default client;