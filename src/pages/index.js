import { useState } from "react";

import DentistSearch from "./patient/dentist-search";

const IndexPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      {/* <AppHeader /> */}

      <DentistSearch />
      {/* <Footer /> */}
    </div>
  );
};
export default IndexPage;
