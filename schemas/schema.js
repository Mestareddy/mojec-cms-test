// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// We import object and document schemas
import about from "./homeSlider";
import news from "./globalNews";
import stories from "./homeTopStories";
import careers from "./careerJob";
import awards from "./homeAwards&Achievements";
import brands from "./brandSlider";
import businessVerticals from "./businessVertical";
import ourPeople from "./ourPeople";
import history from "./history";
import images from './meterContents/images';
import content from './meterContents/content';
import overview from './meterContents/overview';
import postPaidMeter from './meterSchemas/postpaid-meter';
import prepaidMeter from './meterSchemas/prepaid-meter';
import meterAccessory from './meterSchemas/meter-accessory';
import careerPage from "./careerPage";
import corpSocialData from "./corpSocialData";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    about,
    awards,
    brands,
    stories,
    careers,
    news,
    businessVerticals,
    ourPeople,
    history,
    images,
    content,
    overview,
    postPaidMeter,
    prepaidMeter,
    meterAccessory,
    careerPage,
    corpSocialData

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ]),
});
