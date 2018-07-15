import { config, library } from "@fortawesome/fontawesome-svg-core";
import { fal } from "@fortawesome/pro-light-svg-icons";
import { far } from "@fortawesome/pro-regular-svg-icons";
import { fas } from "@fortawesome/pro-solid-svg-icons";
import { fab } from '@fortawesome/free-brands-svg-icons';

export const prefixTypes = {
  regular: "far",
  light: "fal",
  solid: "fas",
  brands: "fab"
};

export const configureFontAwesomePro = ( prefixType = "regular" ) => {
  FontAwesomeConfig = {
    familyPrefix: prefixTypes[prefixType]
  };

  library.add( fab, fal, far, fas );
}
