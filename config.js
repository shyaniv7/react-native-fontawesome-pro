import { config, library } from "@fortawesome/fontawesome-svg-core";
import { fal } from "@fortawesome/pro-light-svg-icons";
import { far } from "@fortawesome/pro-regular-svg-icons";
import { fas } from "@fortawesome/pro-solid-svg-icons";
import { fab } from '@fortawesome/fontawesome-free-brands';


export const configureFontAwesomePro = ( prefixType = "regular" ) => {
  fontawesome.config = {
    familyPrefix: prefixTypes[prefixType]
  };

  fontawesome.library.add( fab, fal, far, fas );
}


export const prefixTypes = {
  regular: "far",
  light: "fal",
  solid: "fas",
  brands: "fab"
};
