module.exports = function(parentId) {
  return{
    name: 'Gutter Cleaning',
    route: 'gutter-cleaning',
    search_keywords: ['gutter cleaning','clogged', 'water overflow', 'downspout cleaning','gut','gu','g','clo','clog'],
    parent:parentId,
    travel_types: ['tocustomer'],
    scheduling_type: 'appointment',
    credits_required: 2,
    actor: 'Cleaner',
    actor_plural: 'Cleaners',
    action: 'Help you keep your home or place of business clean',
    questions: [
      {
        field_type:"checklist",
        question:"Why do you need gutter cleaning?",
        description:"Reason for the request",
        choices:[
          {
            label:"gutters are clogged with debris",
            value:"gutters are clogged with debris"
          },
          {
            label:"Regular cleaning and maintenance",
            value:"Regular cleaning and maintenance"
          },
          {
            label:"Water overflows from gutter(s)",
            value:"Water overflows from gutter(s)"
          },
          {
            label:"Water not draining from downspout(s)",
            value:"Water not draining from downspout(s)"
          },
          {
            can_describe:true
          }


        ]
      },
      {
        field_type:"select",
        question:"How many gutters?",
        description:"Reason for the request",
        choices:[
          {
            label:"1 gutter",
            value:"1 gutter"
          },
          {
            label:"2-4 gutters",
            value:"2-4 gutters"
          },
          {
            label:"5-8 gutters",
            value:"5-8 gutters"
          },
          {
            label:"more than 8 gutters",
            value:"more than 8 gutters"
          }
        ]
      },
      {
        field_type:"select",
        question:"What material are your current gutter?",
        description:"Material type of gutter",
        choices:[
          {
            label:"Aluminum",
            value:"Aluminum"
          },
          {
            label:"Galvanized steel",
            value:"Galvanized steel"
          },
          {
            label:"I am not sure",
            value:"Customer is not sure about the material type"
          },
          {
            label:"Other",
            value:"Other"
          }
        ]
      }
    ]
  };
};
