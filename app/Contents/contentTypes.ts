export interface Content {
  nav: {
    logo: string;
    menuItems: string[];
  };
  hero: {
    title1: string;
    title2: string;
    subtitle: string;
    cta: string;
  };
  whyChooseUs: {
    title: string;
    description: string;
    points: {
      title: string;
      description: string;
    }[];
  };
  services: {
    title: string;
    mission: string;
    list: {
      title: string;
      description: string;
      cta: string;
    }[];
    contactCta: string;
  };
  advertiser: {
    title: string;
    description: string;
    cta: string;
    illustration: string;
  };
  publisher: {
    title: string;
    description: string;
    benefits: string[];
    cta: string;
  };
  facts: {
    title: string;
    subtitle: string;
    stats: {
      label: string;
      value: string;
    }[];
  };
  contact: {
    title: string;
    description: string;
    cta: string;
  };
  joinUs: {
    title: string;
    description: string;
    cta: string;
  };
  footer: {
    companyName: string;
    description: string;
    services: string[];
    contact: {
      email: string;
      phone: string;
    };
    socialMediaTitle: string;
    copyright: string;
  };
}
