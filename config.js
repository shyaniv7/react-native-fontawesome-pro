import fontawesome from "@fortawesome/fontawesome";

import brands from '@fortawesome/fontawesome-free-brands';
import proLight from "@fortawesome/fontawesome-pro-light";
import proRegular from "@fortawesome/fontawesome-pro-regular";
import proSolid from "@fortawesome/fontawesome-pro-solid";

export const configureFontAwesomePro = ( prefixType = "regular" ) => {
  fontawesome.config = {
    familyPrefix: prefixTypes[prefixType]
  };

  fontawesome.library.add( brands, proLight, proRegular, proSolid );
}


export const prefixTypes = {
  regular: "far",
  light: "fal",
  solid: "fas",
  brands: "fab"
};
