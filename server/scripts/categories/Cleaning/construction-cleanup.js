module.exports = function(parentId) {
  return {
    name: 'Construction Clean up',
    route: 'construction-cleanup',
    search_keywords: ['Construction' ,'Construction clean up', 'post Construction cleaning', 'after Construction cleaning', 'foreclosure', 'estate sale', 'brand new house cleaning','junk', 'const','cons','deb','debris'],
    parent: parentId,
    travel_types: ['tocustomer'],
    scheduling_type: 'appointment',
    credits_required: 3,
    actor: 'Cleaner',
    actor_plural: 'Cleaners',
    action: 'help clean your construction site',
    questions:  [
      {
        field_type: 'checklist',
        question: 'What services do you need?',
        description: "Services needed",
        choices:
          [
            {
              label: 'Cleanup of property',
              value: 'Cleanup of property'
            },
            {
              label: 'Organize clutter',
              value: 'Organize clutter'
            },
            {
              label: 'Remove junk',
              value: 'Remove junk'
            },
            {
              can_describe: true
            }
          ]
      },
      {
        field_type: 'checklist',
        question: 'What needs to be removed?',
        description: "Things to be removed",
        choices:
          [
            {
              label: 'Furniture and appliances',
              value: 'Furniture and appliances'
            },
            {
              label: 'Junk',
              value: 'Junk'
            },
            {
              label: 'Construction debris',
              value: 'Construction debris'
            },
            {
              label: 'Yardwaste',
              value: 'Yardwaste'
            },
            {
              can_describe: true
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
      }
    ]
  };
};