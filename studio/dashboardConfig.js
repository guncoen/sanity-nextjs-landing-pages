export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6265e81260fece0e5ce5ace7',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-xptv17jw',
                  apiId: '2338a915-9240-4cba-b729-0929a0d91073'
                },
                {
                  buildHookId: '6265e813302aa116d9a24fb7',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-8ro6iaeq',
                  apiId: '804d1bc9-82e0-4f0d-90c2-804ba1db1b9a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/guncoen/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-8ro6iaeq.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
