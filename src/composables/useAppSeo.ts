import { useHead } from "@unhead/vue";
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";

export function useAppSeo() {
  const { t } = useI18n();
  const route = useRoute();

  const siteName = "BodyMacs Labs";
  const defaultDesc = "Agence d'ingénierie logicielle experte en Web, Mobile et Cloud.";

  const seoData = computed(() => {
    // On essaye de récupérer les valeurs i18n correspondantes à la route
    const routeName = route.name?.toString() || 'home';
    const title = t(`seo.${routeName}.title`, { siteName }) || siteName;
    const description = t(`seo.${routeName}.description`) || defaultDesc;
    const path = route.path;

    return {
      title,
      description,
      path
    };
  });

  useHead({
    title: () => seoData.value.title,
    meta: [
      {
        name: "description",
        content: () => seoData.value.description,
      },
      // Open Graph
      {
        property: "og:title",
        content: () => seoData.value.title,
      },
      {
        property: "og:description",
        content: () => seoData.value.description,
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:url",
        content: () => `https://bodymacslabs.com${seoData.value.path}`,
      },
      {
        property: "og:image",
        content: "https://logo.bodymacslabs.com",
      },
      // Twitter
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: () => seoData.value.title,
      },
      {
        name: "twitter:description",
        content: () => seoData.value.description,
      },
    ],
    // Structured Data for Google (Schema.org)
    script: [
      {
        type: 'application/ld+json',
        key: 'structured-data',
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "BodyMacs Labs",
          "url": "https://bodymacslabs.com",
          "logo": "https://logo.bodymacslabs.com",
          "description": defaultDesc,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Bafoussam",
            "addressRegion": "Ouest",
            "addressCountry": "CM"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "(+237) 640 472 357",
            "contactType": "sales"
          }
        })
      }
    ]
  });
}
