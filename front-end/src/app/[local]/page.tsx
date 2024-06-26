import { useTranslations } from "next-intl";
import React from "react";
import Home from "../(home)/page";
import RootLayout from "../layout";

export default function Index({
  params: { local },
}: {
  params: { local: string };
}) {
  return (
    <RootLayout>
      <Home local={local} />
    </RootLayout>
  );
}
