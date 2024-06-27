import { useTranslations } from "next-intl";
import React from "react";
import Home from "../(home)/page";

export default function Index({
  params: { local },
}: {
  params: { local: string };
}) {
  return <Home local={local} />;
}
