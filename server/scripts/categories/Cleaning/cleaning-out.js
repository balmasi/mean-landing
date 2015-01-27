module.exports = function(parentId) {
  return {
    name: 'Cleaning out',
    route: 'cleaning-out',
    search_keywords: ['cleaning', 'moving', 'home', 'moving out', 'foreclosure', 'estate sale'],
    parent: parentId,
    travel_types: ['tocustomer'],
    scheduling_type: 'appointment',
    credits_required: 2,
    actor: 'Cleaner',
    actor_plural: 'Cleaners',
    action: 'help you clean out',
    questions: [
      {
        field_type: 'checklist',
        question: 'Reason for cleaning?',
        description: "Reason for cleaning",
        choices: [
          {
            label: 'Moving out',
            value: 'Moving out'
          },
          {
            label: 'General cleaning',
            value: 'General cleaning'
          },
          {
            label: 'Estate sale',
            value: 'Estate sale'
          },
          {
            label: 'Foreclosure',
            value: 'Foreclosure'
          },
          {
            label: 'Hoarding',
            value: 'Hoarding'
          },
          {
            can_describe: true
          }
        ]
      },


      {
        field_type: 'select',
        question: 'Are there any large or heavy item(s) to move?',
        description: "Any heavy items",
        choices: [
          {
            label: "Yes",
            value: 'Yes'
          },
          {
            label: "No",
            value: "No"
          }

        ]
      },

      {
        field_type: 'select',
        question: 'What type of property do you have?',
        description: "Type of property",
        choices: [
          {

            label: 'House',
            value: 'House'
          },
          {
            label: 'Multi-unit building',
            value: 'Multi-unit building'
          },
          {
            label: "Office or shop",
            value: 'office or shop'
          },
          {
            label: "Commercial",
            value: 'Commercial'
          }
        ]
      },
      {
        field_type: 'text',
        question: 'Is there anything else should the cleaner know?',
        description: "Customer comment",
        required: false
      }
    ]
  };
};
