export interface GIF {
  type: "gif" | "sticker";
  id: string;
  url: string;
  slug: string;
  embed_url: string;
  username: string;
  source: string;
  title: string;

  import_datetime: Date;
  trending_datetime: Date;
  images: {
    original: {
      height: number;
      width: number;
      size: number;
      url: string;
      mp4_size: number;
      mp4: string;
      webp_size: number;
      webp: string;
      frames: number;
      hash: string;
    };
    downsized: {
      height: number;
      width: number;
      size: number;
      url: string;
    };
    downsized_large: {
        height: number;
        width: number;
        size: number;
        url: string;
    };
    downsized_medium: {
        height: number;
        width: number;
        size: number;
        url: string;
    };
    downsized_small: {
      height: number;
      width: number;
      mp4_size: number;
      mp4: string;
    };
    downsized_still: {
      height: number;
      width: number;
      size: number;
      url: string;
    };
    fixed_height: {
      height: "200";
      width: "200";
      size: "2104673";
      url: "https://media3.giphy.com/media/vVjewRa2HFKuz9EwBt/200.gif";
      mp4_size: "292277";
      mp4: "https://media3.giphy.com/media/vVjewRa2HFKuz9EwBt/200.mp4";
      webp_size: "1313300";
      webp: "https://media3.giphy.com/media/vVjewRa2HFKuz9EwBt/200.webp";
    };
    fixed_height_downsampled: {
      height: "200";
      width: "200";
      size: "69016";
      url: "https://media3.giphy.com/media/vVjewRa2HFKuz9EwBt/200_d.gif";
      webp_size: "67830";
      webp: "https://media3.giphy.com/media/vVjewRa2HFKuz9EwBt/200_d.webp";
    };
    fixed_height_small: {
      height: "100";
      width: "100";
      size: "842802";
      url: "https://media3.giphy.com/media/vVjewRa2HFKuz9EwBt/100.gif";
      mp4_size: "118530";
      mp4: "https://media3.giphy.com/media/vVjewRa2HFKuz9EwBt/100.mp4";
      webp_size: "432848";
      webp: "https://media3.giphy.com/media/vVjewRa2HFKuz9EwBt/100.webp";
    };
    fixed_height_small_still: {
      height: "100";
      width: "100";
      size: "5136";
      url: "https://media3.giphy.com/media/vVjewRa2HFKuz9EwBt/100_s.gif";
    };
    fixed_height_still: {
      height: "200";
      width: "200";
      size: "15159";
      url: "https://media3.giphy.com/media/vVjewRa2HFKuz9EwBt/200_s.gif";
    };
    fixed_width: {
      height: "200";
      width: "200";
      size: "2104673";
      url: "https://media3.giphy.com/media/vVjewRa2HFKuz9EwBt/200w.gif";
      mp4_size: "292277";
      mp4: "https://media3.giphy.com/media/vVjewRa2HFKuz9EwBt/200w.mp4";
      webp_size: "1313300";
      webp: "https://media3.giphy.com/media/vVjewRa2HFKuz9EwBt/200w.webp";
    };
    fixed_width_downsampled: {
      height: "200";
      width: "200";
      size: "69016";
      url: "https://media3.giphy.com/media/vVjewRa2HFKuz9EwBt/200w_d.gif";
      webp_size: "67830";
      webp: "https://media3.giphy.com/media/vVjewRa2HFKuz9EwBt/200w_d.webp";
    };
    fixed_width_small: {
      height: "100";
      width: "100";
      size: "842802";
      url: "https://media3.giphy.com/media/vVjewRa2HFKuz9EwBt/100w.gif";
      mp4_size: "48030";
      mp4: "https://media3.giphy.com/media/vVjewRa2HFKuz9EwBt/100w.mp4";
      webp_size: "432848";
      webp: "https://media3.giphy.com/media/vVjewRa2HFKuz9EwBt/100w.webp";
    };
    fixed_width_small_still: {
      height: "100";
      width: "100";
      size: "5136";
      url: "https://media3.giphy.com/media/vVjewRa2HFKuz9EwBt/100w_s.gif";
    };
    fixed_width_still: {
      height: "200";
      width: "200";
      size: "15159";
      url: "https://media3.giphy.com/media/vVjewRa2HFKuz9EwBt/200w_s.gif";
    };
    looping: {
      mp4_size: "1627634";
      mp4: "https://media3.giphy.com/media/vVjewRa2HFKuz9EwBt/giphy-loop.mp4";
    };
    original_still: {
      height: "480";
      width: "480";
      size: "72460";
      url: "https://media3.giphy.com/media/vVjewRa2HFKuz9EwBt/giphy_s.gif";
    };
    original_mp4: {
      height: "480";
      width: "480";
      mp4_size: "985158";
      mp4: "https://media3.giphy.com/media/vVjewRa2HFKuz9EwBt/giphy.mp4";
    };
    preview: {
      height: "314";
      width: "314";
      mp4_size: "30243";
      mp4: "https://media3.giphy.com/media/vVjewRa2HFKuz9EwBt/giphy-preview.mp4";
    };
    preview_gif: {
      height: "85";
      width: "85";
      size: "48763";
      url: "https://media3.giphy.com/media/vVjewRa2HFKuz9EwBt/giphy-preview.gif";
    };
    preview_webp: {
      height: "122";
      width: "122";
      size: "41664";
      url: "https://media3.giphy.com/media/vVjewRa2HFKuz9EwBt/giphy-preview.webp";
    };
    hd: {
      height: "1080";
      width: "1080";
      mp4_size: "7118478";
      mp4: "https://media3.giphy.com/media/vVjewRa2HFKuz9EwBt/giphy-hd.mp4";
    };
    "480w_still": {
      height: "480";
      width: "480";
      size: "9976144";
      url: "https://media3.giphy.com/media/vVjewRa2HFKuz9EwBt/480w_s.jpg";
    };
  };
  user: {
    avatar_url: "https://media3.giphy.com/avatars/BruceLeeFoundation/TEB3VIIFBsMB.jpg";
    banner_image: "";
    banner_url: "";
    profile_url: "https://giphy.com/BruceLeeFoundation/";
    username: "BruceLeeFoundation";
    display_name: "Bruce Lee Foundation";
    description: "We provide access for people to Bruce Lee’s practices and teachings to enhance personal growth and spread harmony.";
    instagram_url: "https://instagram.com/bruceleefoundation";
    website_url: "https://bruceleefoundation.org/";
    is_verified: true;
  };
  analytics_response_payload: "e=Z2lmX2lkPXZWamV3UmEySEZLdXo5RXdCdCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9NDZkN2MyYjhrcXlzemo1ODV6MWRjbWhpaXBzb2hicXl4NGRyZmF5c2xjanJ0cW1lJmN0PWc";
  analytics: {
    onload: {
      url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPXZWamV3UmEySEZLdXo5RXdCdCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9NDZkN2MyYjhrcXlzemo1ODV6MWRjbWhpaXBzb2hicXl4NGRyZmF5c2xjanJ0cW1lJmN0PWc&action_type=SEEN";
    };
    onclick: {
      url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPXZWamV3UmEySEZLdXo5RXdCdCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9NDZkN2MyYjhrcXlzemo1ODV6MWRjbWhpaXBzb2hicXl4NGRyZmF5c2xjanJ0cW1lJmN0PWc&action_type=CLICK";
    };
    onsent: {
      url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPXZWamV3UmEySEZLdXo5RXdCdCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9NDZkN2MyYjhrcXlzemo1ODV6MWRjbWhpaXBzb2hicXl4NGRyZmF5c2xjanJ0cW1lJmN0PWc&action_type=SENT";
    };
  };
}
