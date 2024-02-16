import {
    UniversalResults
  } from "@yext/search-ui-react";
import { verticalConfig } from "../config";
import { usePageSetupEffect } from "../hooks/usePageSetupEffect";

export const UniversalPage = () => {
  usePageSetupEffect();

  return <UniversalResults verticalConfigMap={verticalConfig} />;
};