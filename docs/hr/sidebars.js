/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  useCasesSidebar: [{ type: 'autogenerated', dirName: 'use_cases' }],

  tutorialSidebar: [
    {
      type: 'category',
      label: 'Get started',
      collapsed: false,
      collapsible: false,
      items: [{ type: 'autogenerated', dirName: 'docs/get_started' }],
      link: {
        type: 'generated-index',
        description: 'Get started with SuperDuperDB',
        // slug: 'get_started',
      },
    },
    {
      type: 'category',
      label: 'Use cases',
      collapsed: true,
      collapsible: true,
      items: [{ type: 'autogenerated', dirName: 'use_cases' }],
      link: {
        type: 'generated-index',
        description:
          'Common and useful use-cases implemented in SuperDuperDB with a walkthrough',
        slug: 'use-cases',
      },
    },
    // {
    //   type: 'category',
    //   label: 'Vector Search',
    //   collapsed: false,
    //   collapsible: false,
    //   items: [{ type: 'autogenerated', dirName: 'use_cases/vector_search' }],
    //   link: {
    //     type: 'generated-index',
    //     description:
    //       'Common and useful use-cases implemented in SuperDuperDB with a walkthrough',
    //     slug: 'use-cases',
    //   },
    // },
    // // About
    // {
    //   type: 'doc',
    //   label: 'About SuperDuperDB', // sidebar label
    //   id: 'docs/intro', // document ID
    // },
    // // Installation
    // {
    //   type: 'doc',
    //   label: 'Install SuperDuperDB',
    //   id: 'docs/installation',
    // },
    // // Configuration
    // {
    //   type: 'doc',
    //   label: 'Configure SuperDuperDB',
    //   id: 'docs/configuration',
    // },
    // // Talks & Tutorials
    // {
    //   type: 'doc',
    //   label: 'Talks & Tutorials',
    //   id: 'docs/presentation',
    // },
    // // Best Practises
    // {
    //   type: 'doc',
    //   label: 'Best Practises',
    //   id: 'docs/best_practises',
    // },
    // // FAQ
    // {
    //   type: 'doc',
    //   label: 'FAQ',
    //   id: 'docs/faq',
    // },
    // Fundamentals
    {
      type: 'category',
      label: 'Fundamentals',
      items: [
        {
          type: 'autogenerated',
          dirName: 'docs/fundamentals',
        },
      ],
    },
    // Walkthrough
    {
      type: 'category',
      label: 'Walk Through',
      items: [
        {
          type: 'autogenerated',
          dirName: 'docs/walkthrough',
        },
      ],
    },
    // Reference
    {
      type: 'category',
      label: 'Reference',
      items: [
        // External link
        // {
        //   type: 'link',
        //   label: 'Use Cases', // The link label
        //   href: 'https://docs.superduperdb.com/docs/category/use-cases', // The external URL
        // },
        {
          type: 'link',
          label: 'API Reference', // The link label
          href: 'https://docs.superduperdb.com/apidocs/source/superduperdb.html', // The external URL
        },
        {
          type: 'link',
          label: 'Change log', // The link label
          href: 'https://raw.githubusercontent.com/SuperDuperDB/superduperdb/main/CHANGELOG.md', // The external URL
        },

        // Internal link
        {
          type: 'link',
          label: 'Home', // The link label
          href: '/', // The internal path
        },
      ],
    },
  ],
};

module.exports = sidebars;