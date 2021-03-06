module.exports = function(parentId) {
  return {
    name: 'Pressure washing',
    route: 'pressure-washing',
    search_keywords: ['Power wash' ,'Pressure washing', 'Driveway washing', 'side walk', 'Driveway', 'deck', 'deck washing','washing','pow','powe',"power"],
    parent:  parentId,
    travel_types: ['tocustomer'],
    scheduling_type: 'appointment',
    credits_required: 2,
    actor: 'Cleaner',
    actor_plural: 'Cleaners',
    action: 'help you clean',
    questions:  [
      {
        field_type: 'checklist',
        question: 'What do you need to pressure wash?',
        description: "What customer needs to pressure wash",
        choices:
          [
            {
              label: 'Driveway',
              value: 'Driveway'
            },
            {
              label: 'Sidewalk',
              value: 'Sidewalk'
            },
            {
              label: 'Exterior wall',
              value: 'Exterior wall'
            },

            {
              label: 'Roof',
              value: 'Roof'
            },
            {
              label: 'Parking',
              value: 'Parking'
            },
            {
              label: 'Warehouse',
              value: 'Warehouse'
            },
            {
              can_describe: true
            }
          ]
      },
      {
        field_type: 'checklist',
        question: 'Why do you need to pressure wash?',
        description: "The reason for the request",
        choices:
          [
            {
              label: 'General cleaning',
              value: 'General cleaning'
            },
            {
              label: 'Remove mold or moss',
              value: 'Remove mold or moss'
            },
            {
              label: 'Remove grime',
              value: 'Remove grime'
            },
            {
              label: 'Remove oil or grease',
              value: 'Remove oil or grease'
            },
            {
              label: 'Preparation for painting/staining',
              value: 'Preparation for painting/staining'
            },
            {
              can_describe:true
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
            label:"more than 2000",
            value:"more than 2000"
          }
        ]
      }
    ]
  };
};



