module.exports = function(parentId) {
  return {
    name: 'Steam Cleaning',
    route: 'steam-cleaning',
    search_keywords: ['steam','cleaning', 'floor cleaning', 'tile cleaning','air duct cleaning','ste','stea','steam'],
    parent: parentId,
    travel_types: ['tocustomer'],
    scheduling_type: 'appointment',
    credits_required: 2,
    actor: 'Cleaner',
    actor_plural: 'Cleaners',
    action: 'Help you keep your home or place of business clean',
    questions: [
      {
        field_type:"checklist",
        question:"What needs steaming?",
        description:"What needs steaming",
        choices:[
          {
            label:"Carpet/rug",
            value:"Carpet/rug"
          },
          {
            label:"Couch & sofas",
            value:"Couch & sofas"
          },
          {
            label:"Tile and grout",
            value:"Tile and grout"
          },
          {
            label:"Mattress(es)",
            value:"Mattress(es)"
          },
          {
            label:"Air duct",
            value:"Air duct"
          }
        ]

      },
      {
        field_type:"checklist",
        question:"Which rooms need cleaning?",
        description:"Which rooms",
        choices:[
          {
            label:"Kitchen",
            value:"Kitchen"
          },
          {
            label:"Bathroom(s)",
            value:"Bathroom(s)"

          },
          {
            label:"Entire building",
            value:"Entire building"
          },
          {
            can_describe:true
          }
        ]



      },
      {
        field_type:"select",
        question:"What is the approximate square footage of the area that needs cleaning?",
        description:"Approximate square footage of the area that needs cleaning",
        choices:[
          {
            label:"Less than 500",
            value: "Less than 500"
          },
          {
            label:"501 to 1000",
            value:"501 to 1000"
          },
          {
            label:"1001 to 1500",
            value:"1501 to 2000"
          },
          {
            label:"More than 2000",
            value:"More than 2000"
          }

        ]
      },
      {
        field_type:"select",
        question:"Do you need the professional to move furniture?",
        description:"Is there furniture to be moved?",
        choices:[
          {
            label:"Yes",
            value:"Yes"
          },
          {
            label:"No",
            value:"No"
          }
        ]
      },
      {
        field_type:"select",
        question:"Does anyone regularly smoke inside?",
        description:"Does anyone regularly smoke inside?",
        choices:[
          {
            label:"Yes",
            value:"Yes"
          },
          {
            label:"No",
            value:"No"
          }

        ]

      }
    ]
  };
};