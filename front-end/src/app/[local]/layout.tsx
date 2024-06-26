import React from "react";

export default function LocaleLayout({
  children,
  params: { local },
}: {
  children: React.ReactNode;
  params: { local: string };
}) {
  return <html lang={local}>{children}</html>;
}
