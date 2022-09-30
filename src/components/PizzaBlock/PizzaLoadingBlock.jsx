import React from "react";

import ContentLoader from "react-content-loader";

function PizzaLoadingBlock() {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f5f5f5"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="258" rx="4" ry="4" width="280" height="24" />
      <rect x="0" y="292" rx="7" ry="7" width="280" height="82" />
      <rect x="0" y="384" rx="7" ry="7" width="97" height="44" />
      <rect x="57" y="403" rx="0" ry="0" width="0" height="5" />
      <rect x="113" y="384" rx="22" ry="22" width="165" height="44" />
      <circle cx="136" cy="122" r="122" />
    </ContentLoader>
  );
}

export default PizzaLoadingBlock;
