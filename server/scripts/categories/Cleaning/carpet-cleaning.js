module.exports = function(parentId) {
  return {
    name: 'Carpet Cleaning',
    route: 'carpet-cleaning',
    search_keywords: ['carpet','cleaning', 'carpet care', 'carpet maintenance','carpet cleaning'],
    parent: parentId,
    travel_types: ['tocustomer'],
    scheduling_type: 'appointment',
    credits_required: 2,
    actor: 'Cleaner',
    actor_plural: 'Cleaners',
    action: 'Help keep your home clean',
    questions: [
      {
        field_type:'checklist',
        description:"Services required",
        question:"Which carpet cleaning service(s) do you need?",
        choices:[
          {
            label:"Steam cleaning",
            value:"Steam cleaning"
          },
          {
            label:"Dry cleaning",
            value:"Dry cleaning"
          },
          {
            label:"Carpet protection & deodorizer",
            value:"Carpet protection & deodorizer"
          },
          {
            label:"As recommended by the professional ",
            value:"Customer needs your advice"
          },
          {
            can_describe:true
          }
        ]
      },
      {
        field_type:"select",
        description:"Type of stains",
        question:"Are there any stains?",
        choices:[
          {
            label:"No stains",
            value:"No stains"
          },
          {
            label:"Food stains",
            value:"Food stains"
          },
          {
            label:"Pet stains",
            value:"Pet stains"
          },
          {
            label:"oil/grease stains",
            value:"oil/grease stains"
          }
        ]
      },
      {
        field_type:"select",
        description:"type of property",
        question:"What type of property do you need the service in?",
        choices:[
          {
            label:"Condo/apartment",
            value:"Condo/apartment"
          },
          {
            label:"One-story house",
            value:"One-story house"
          },
          {
            label:"Two-story house",
            value:"Two-story house"
          },
          {
            label:"Office",
            value:"Office"
          },
          {
            label:"Residential complex",
            value:"Residential complex"
          }
        ]
      },

      {
        field_type:"select",
        question:"How many sets of stairs do you need cleaned?",
        description:"Number of sets of stairs to be cleaned",
        choices:[
          {
            label:"0",
            value:"0"

          },
          {
            label:"One",
            value:"One"

          },
          {
            label:"two",
            value:"two"
          },
          {
            label:"Three or more",
            value:"Three or more"
          }
        ]

      },
      {
        field_type:"text",
        description:"The approximate square footage of the area that needs carpet cleaning",
        question:"What is the approximate square footage of the area that needs cleaning?"

      },
      {
        field_type:"select",
        question:"Do you need the professional to move furniture?",
        description: "Does furniture need to be moved?",
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
        description:"Does anyone regularly smoke inside?",
        question:"Does anyone regularly smoke inside?",
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


