import { provideSearchAnalytics } from "@yext/analytics";

export const searchAnalytics = provideSearchAnalytics({
  experienceKey: "default",
  experienceVersion: "PRODUCTION",
  businessId: 3744518,
});

export const fireClick = (
  id: string,
  label: string,
  queryId: string,
  verticalKey: string,
  type: any = "CTA_CLICK"
) => {
  searchAnalytics.report({
    type: type ?? "CTA_CLICK",
    entityId: id,
    verticalKey: verticalKey,
    searcher: verticalKey ? "VERTICAL" : "UNIVERSAL",
    queryId: queryId,
    ctaLabel: label,
  });
};