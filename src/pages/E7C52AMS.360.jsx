import React from "react";

import fixture from "../fixtures/E7C52AMS.360.json";
import usage from "../fixtures/E7C52AMS.360.fmap.json";
import { GUIDProvider } from "../context/GUIDContext";
import Volumes from "../components/Volumes";
import FlashUsage from "../components/FlashUsage";
import Layout from "../components/Layout";

const Page = () => {
  const volumes = fixture.Elements.filter(
    (e) => e.Type === "*uefi.FirmwareVolume"
  );

  return (
    <Layout sidepane={<FlashUsage usage={usage} />}>
      <GUIDProvider>
        <Volumes volumes={volumes} />
      </GUIDProvider>
    </Layout>
  );
};

export default Page;
