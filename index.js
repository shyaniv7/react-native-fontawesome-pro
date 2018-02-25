import fontawesome from "@fortawesome/fontawesome";

import proLight from "@fortawesome/fontawesome-pro-light";
import proRegular from "@fortawesome/fontawesome-pro-regular";
import proSolid from "@fortawesome/fontawesome-pro-solid";
import Icon from "./src/Icon";

fontawesome.config = {
  familyPrefix: "far"
};

fontawesome.library.add( proLight, proRegular, proSolid );


export const prefixTypes = {
  regular: "far",
  light: "fal",
  solid: "fas"
};


export default Icon;
