module.exports = function(parentId) {
  return{
  name: 'Window Repair',
  route: 'window-repair',
  search_keywords: ['window','window Repair', 'window glass', 'broken glass','win','wind','windo'],
        parent:  parentId,
        travel_types: ['tocustomer'],
        scheduling_type: 'appointment',
        credits_required: 2,
        actor: 'Craftsperson',
        actor_plural: 'Craftspeople',
        action: 'repair or install your windows',
        questions:  [
        {
          field_type:"checklist",
          question:"What is the problem?",
          description:"The problem",
          choices:[
          {
            label:"Broken glass",
            value:"Broken glass"
          },
          {
            label:"Leakage",
            value:"Leakage"
          },
          {
            label:"Won't open or close properly",
            value:"Won't open or close properly"
          },
          {
            label:"Drafty",
            value:"Drafty"
          },
          {
            label:"Window sill or casing need repair",
            value:"Window sill or casing need repair"
          },
          {
            can_describe:true
          }

          ]
        },
        {
          field_type:"select",
          question:"How many windows need repair?",
          description:"Number of windows that need repair",
          choices:[
          {
            label:"Just 1",
            value:"1"
          },
          {
            label:"2-5",
            value:"2-5"
          },
          {
            label:"More than 5",
            value:"More than 5"
          }
          ]
        },
        {
          field_type:"checklist",
          question:"What kind of window need repair?",
          description:"Kind of window",
          choices:[
          {
            label:"Fixed",
            value:'Fixed'
          },
          {
            label:"Double hung",
            value:"Double hung"
          },
          {
            label:"Casement, pushes open on a hing",
            value:"Casement"
          },
          {
            label:"Sliding",
            value:"Sliding"
          },
          {
            label:"Arched or elliptical",
            value:'Arched or elliptical'
          },
          {
            label:"Skylight",
            value:"Skylight"
          },
          {
            can_describe:true
          }
          ]

        },
        {
          field_type:"checklist",
          question:"What floor is the window?",
          description:"The floor where the window is",
          choices:[
          {
            label:"first floor",
            value:"First floor"
          },
          {
            label:"First floor but a ladder is needed",
            value:"First florr but a ladder is needed"
          },
          {
            label:"Second floor",
            value:"Second floor"
          },
          {
            label:"Second floor,and no ladder is needed"
            value:"Second floor,is accessible from lower floor or balcony and no ladder is needed"
          },
          {
            label:"Higher than second floor",
            value:"Higher than second floor"
          },
          {
            label:"Ground level/basement",
            value:"Ground level/basement"
          },

          ]
        },
        {
          field_type:"select",
          question:"What is the window frame made of?",
          description:"Window frame material",
          choices:[
          {
            label:"Wood",
            value:"Wood"
          },
          {
            label:"Vinyl",
            value:"Vinyl"
          },
          {
            label:"Aluminum",
            value:"Aluminum"
          }
          {
            label:"I am not sure",
            value:"Customer is not sure"
          }
          ]
        },
        {
          field_type:"select",
          question:"What kind of glass is in the winodw?",
          description:'Type of glass',
          choices:[
          {
            label:"Single pane",
            value:"Single pane"
          },
          {
            label:"Double pane",
            value:"Double pane"
          },
          {
            label:"I am not sure",
            value:"Customer is not sure"
          }
          ]
        },
        {
                field_type:"select",
                question: "What type of property do you have?",
                description: "Type of property",
                choices:[
                {
                        label:"Home",
                        value:"Home"
                },
                {
                        label:"Multi unit building",
                        value:"Multi unit building"
                },
                {
                        label:"Office/business",
                        value:"Office/business"
                },
                {
                        label:"Commercial",
                        value:"Commercial"
                },


                ]
        },
        ]
    };
};

