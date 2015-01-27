module.exports = function(parentId) {
  return{
        name: 'Window Cleaning',
        route: 'window-cleaning',
        search_keywords: ['window cleaning','window', 'window treatment','win','wind','windo'],
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
                question:"What window cleaning service(s) do you need?",
                description:"Window cleaning service(s) customer needs",
                choices:[
                {
                        label:"Clean exterior of windows",
                        value:"Clean exterior of windows"
                },
                {
                        label:"Clean interior of windows",
                        value:"Clean interior of windows"
                },
                {
                        label:"Clean window tracks",
                        value:"Clean window tracks"
                },
                {
                        label:"Clean window treatments (shutters, blinds and sills)",
                        value:"Clean window treatmenrs (shutters,blind and sills)"
                },
                {
                        can_describe:true
                }


                ]
        },
        {
                field_type:"checklist",
                question:"What kinds of windows need cleaning?",
                description:"Type of windows to be cleaned",
                choices:[
                {
                        label:"Window that does not open",
                        value:"Window that does not open"
                },
                {
                        label:"Window that slides left or right on track",
                        value:"Window that slides left or right on track"
                },
                {
                        label:"Window that slides up or down on track",
                        value:"Window that slides up or down on track"
                },
                {
                        label:"Window that tilts away from you to open",
                        value:"Window that tilts away from you to open"
                },
                {
                        label:"Window that tilts toward you to open",
                        value:"Window that tilts toward you to open"
                }

                ]
        },
        {
                field_type:"checklist",
                question:"What kinds of special windows need cleaning?"
                description:"Special windows that need cleaning",
                choices:[
                {
                        label:"Not applicable",
                        value:"No special windows"
                },
                {
                        label:"Storm windows",
                        value:"Storm windows"
                },
                {
                        label:"Skylights",
                        value:"Skylights"
                },
                {
                        label:"Tinted widnows",
                        value:"Tinted windows"
                },
                {
                        label:"French windows",
                        value:"French windows"
                },
                {
                        label:"Stained glass",
                        value:"Stained glass"
                },
                {
                        can_describe:true
                }
                ]
        },
        {
                field_type:"select",
                question:"What type of property do you have?",
                description:"Type of property",
                choices:[
                {
                        label:"Home",
                        value:"Home"
                },
                {
                        label:"Multi-unit building",
                        value:"Multi-unit building"
                },
                {
                        label:"Office/Business",
                        value:"Office/Business"
                },
                {
                        label:"Commercial",
                        value:"Commercial"
                }
                ]
        }
        {
                field_type:"select",
                question:"How many stories is your property?",
                description:"Building stories",
                choices:[

                {
                        label:"Single level building",
                        value:"Single level building"
                },
                {
                        label:"Two story building",
                        value:"Two story buidling"
                },
                {
                        label:"Taller than two stories",
                        value:"Taller than two stories"
                }
                ]
        },
        {
                field_type:"select",
                question:"How windows need cleaning?",
              description:"Number of windows to be cleaned",
              choices:[
              {
                label:"1-5",
                value:"1-5"
              },
              {
                label:"6-10",
                value:"6-10"
              },
              {
                label:"11-15",
                value:"11-15"
              },
              {
                label:"16-20",
                value:"16-20"

              },
              {
                label:"more than 20",
                value:"more than 20"
              }
              ]
        },
        {
                field_type:"select",
                description:"Customer requires services for",
                question: "How often do you need services?",
               choices:[
                {     
            label:'One time light cleaning',
            value:'One time light cleaning'
                },
          {
            label:"One time deep cleaning",
            value:"One time deep cleaning"
          },
          {
            label:"Weekly",
            value:"Weekly"
          },
           {
            label:"Every other week",
            value:"Every other week"
          },
           {
            label:"Monthly",
            value:"Monthly"
          },
           {
            label:"I am not sure",
            value:"Customer is not sure and may need your advice"
          },

         
          ]

        }
        ]
};
};