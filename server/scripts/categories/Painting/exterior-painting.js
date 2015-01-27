module.exports = function(parentId) {
  return {
    name: 'Exterior Painting',
    route: 'painting-exterior',
    search_keywords: ['painting', 'exterior painting', 'Exterior paint', 'Wall painting', 'building painting'],
    parent: parentId,
    travel_types: ['tocustomer'],
    scheduling_type: 'appointment',
    credits_required: 3,
    actor: 'Painter',
    actor_plural: 'Painters',
    action: 'paint your building',
    questions: [
      {
        field_type: 'checklist',
        question: 'What type property do you need painted?',
        description: "Property type",
        choices: [
          {

            label: 'Home',
            value: 'Home'
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


          },
          {
            can_describe: true
          }
        ]
      },
      {
        field_type: 'select',
        question: 'How tall is the property?',
        description: "Height of property",
        choices: [
          {
            label: 'Single level',
            value: 'Single level'
          },

          {
            label: 'Two story building',
            value: 'Two story building'
          },
          {
            label: "Three story building",
            value: 'Three story building'
          },
          {
            label: "More than 3 stories",
            value: 'More than 3 stories'
          }
        ]
      },
      {
        field_type: 'select',
        question: 'What is the approximate square footage of the property?',
        description: "Approximate square footage of the building",
        choices: [
          {
            label: 'Less than 500',
            value: 'Less than 500'
          },

          {
            label: '500-1000',
            value: '500-1000'
          },
          {
            label: "1000-1500",
            value: '1000-1500'
          },
          {
            label: "1500-2000",
            value: '1500-2000'
          },
          {
            label: "2000-2500",
            value: '2000-2500'
          },
          {
            label: "2500-3000",
            value: '2500-3000'
          },
          {
            label: "Greater than 3000",
            value: 'Greater than 3000'
          },
          {
            label: "I am not sure",
            value: 'Customer is not sure and may need your help'
          }
        ]
      },
      {
        field_type: 'select',
        question: 'How old is the property?',
        description: "Age of property in years",
        choices: [
          {

            label: '0-20 years',
            value: 'between 1 to 20 years'
          },

          {
            label: '20-40 years',
            value: 'between 10 to 40 years'
          },
          {
            label: "Older than 40 years",
            value: 'Older than 40 years'
          },
          {
            label: "I am not sure",
            value: 'Customer is not sure and may need your advice'
          }
        ]
      },
      {
        field_type: 'select',
        question: 'What type of painting do you need?',
        description: "Type of painting that the customer needs",
        choices: [
          {
            label: 'Entire building',
            value: 'Entire building'
          },
          {
            label: 'Part of the building',
            value: 'Part of the building'
          },
          {
            label: "Minor touch-ups",
            value: 'Minor touch-ups'
          }
        ]
      },
      {
        field_type: 'checklist',
        question: 'What needs to be painted?',
        description: "Things to be painted",
        choices: [
          {
            label: 'Siding wood',
            value: 'Siding wood'
          },

          {
            label: 'Siding aluminum',
            value: 'Siding aluminum'
          },
          {
            label: "Trim",
            value: 'Trim'
          },
          {
            label: "Shutters",
            value: 'Shutters'
          },
          {
            label: "Deck",
            value: 'Deck'
          },
          {
            can_describe: true
          }
        ]
      },
      {
        field_type: 'checklist',
        question: 'Please describe any exterior damage',
        description: "Exterior damages",
        choices: [
          {
            label: 'Peeling or flaking paint',
            value: 'Peeling or flaking paint'
          },
          {
            label: 'Trim pulling away from the building',
            value: 'Trim pulling away from the building'
          },
          {
            label: "Cracks",
            value: 'Cracks'
          },
          {
            label: "Bare wood",
            value: 'Bare wood'
          },
          {
            label: "Chipped stucco",
            value: 'Chipped stucco'
          },
          {
            label: "No visible exterior damage",
            value: 'No visible exterior damage'
          },
          {
            can_describe: true
          }
        ]
      }
    ]
  };
};