import type { Schema, Attribute } from '@strapi/strapi';

export interface ButtonsButton extends Schema.Component {
  collectionName: 'components_buttons_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    label: Attribute.String;
    styles: Attribute.JSON;
    disabled: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface CardsSimpleCard extends Schema.Component {
  collectionName: 'components_cards_simple_cards';
  info: {
    displayName: 'Simple Card';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    img: Attribute.Media & Attribute.Required;
  };
}

export interface FiltersAmounts extends Schema.Component {
  collectionName: 'components_filters_amounts';
  info: {
    displayName: 'amounts';
    description: '';
  };
  attributes: {
    amount_from: Attribute.BigInteger & Attribute.Required;
    amount_to: Attribute.BigInteger & Attribute.Required;
    title: Attribute.String;
    currency: Attribute.Relation<
      'filters.amounts',
      'oneToOne',
      'api::currency.currency'
    >;
  };
}

export interface FiltersBrand extends Schema.Component {
  collectionName: 'components_filters_brands';
  info: {
    displayName: 'Brand';
  };
  attributes: {
    title: Attribute.String;
    brands: Attribute.Relation<
      'filters.brand',
      'oneToMany',
      'api::brand.brand'
    >;
  };
}

export interface FiltersSizes extends Schema.Component {
  collectionName: 'components_filters_sizes';
  info: {
    displayName: 'sizes';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    sizes: Attribute.Relation<
      'filters.sizes',
      'oneToMany',
      'api::shoes-size.shoes-size'
    >;
  };
}

export interface HeadersHomeCongrat extends Schema.Component {
  collectionName: 'components_headers_home_congrats';
  info: {
    displayName: 'Home Congrat';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    text: Attribute.String;
    img: Attribute.Media;
  };
}

export interface LabelsLabelLink extends Schema.Component {
  collectionName: 'components_labels_label_links';
  info: {
    displayName: 'Label Link';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.String;
  };
}

export interface LabelsLabelText extends Schema.Component {
  collectionName: 'components_labels_label_texts';
  info: {
    displayName: 'Label Text';
  };
  attributes: {
    label: Attribute.String;
    text: Attribute.String;
  };
}

export interface LinksNavLink extends Schema.Component {
  collectionName: 'components_links_nav_links';
  info: {
    displayName: 'nav-link';
    description: '';
  };
  attributes: {
    href: Attribute.String;
    label: Attribute.String;
  };
}

export interface LinksSocialNetwork extends Schema.Component {
  collectionName: 'components_links_social_networks';
  info: {
    displayName: 'social-Network';
    description: '';
  };
  attributes: {
    icon: Attribute.Media & Attribute.Required;
    href: Attribute.String;
    alt: Attribute.String;
  };
}

export interface SidebarSidebar extends Schema.Component {
  collectionName: 'components_sidebar_sidebars';
  info: {
    displayName: 'Sidebar';
    description: '';
  };
  attributes: {
    brands: Attribute.Component<'filters.brand'>;
    amounts: Attribute.Component<'filters.amounts'>;
    sizes: Attribute.Component<'filters.sizes'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'buttons.button': ButtonsButton;
      'cards.simple-card': CardsSimpleCard;
      'filters.amounts': FiltersAmounts;
      'filters.brand': FiltersBrand;
      'filters.sizes': FiltersSizes;
      'headers.home-congrat': HeadersHomeCongrat;
      'labels.label-link': LabelsLabelLink;
      'labels.label-text': LabelsLabelText;
      'links.nav-link': LinksNavLink;
      'links.social-network': LinksSocialNetwork;
      'sidebar.sidebar': SidebarSidebar;
    }
  }
}
