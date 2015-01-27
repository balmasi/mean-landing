module.exports = function(parentId) {
  return {
    name: 'Painting',
    route: 'painting',
    search_keywords: ['painting', 'paint', 'wall paint', 'change colour', 'renovation'],
    parent: parentId,
    travel_types: ['tocustomer'],
    scheduling_type: 'appointment',
    credits_required: 2,
    actor: 'Painter',
    actor_plural: 'Painters',
    action: 'help you complete your painting project',
    questions: [
      {
        field_type: 'checklist',
        question: 'Where do you need painting?',
        description: 'Type of establishment that needs painting',
        choices: [
          { label: 'Home',
            value: 'Home'},

          { label: 'Multi-unit building',
            value: 'Multi-unit building' },

          { label: "Office or shop",
            value: 'Office or shop' },

          { label: "Commercial",
            value: 'Commercial' },
          {
            can_describe: true
          }
        ]
      },
      {
        field_type: 'checklist',
        question: 'What needs painting?',
        description: 'Things that need painting',
        choices: [
          {

            label: 'Interior walls',
            value: 'Interior walls'
          },

          {
            label: 'Exterior walls',
            value: 'Exterior walls'
          },
          {
            label: "Ceiling(s)",
            value: 'Ceiling(s)'
          },
          {
            label: "Trim",
            value: 'Trim'


          },
          {
            label: "Door(s)",
            value: 'Door(s)'


          },
          {
            label: "Fence",
            value: 'Fence'


          },
          {
            label: "Cabinetry or Woodwork",
            value: 'Cabinetry or Woodwork'


          },
          {
            can_describe: true
          }
        ]
      },
      {
        field_type: 'select',
        question: 'How much painting is involved',
        description: 'Amount of painting involved',
        choices: [
          {
            label: 'One single project',
            value: 'One single project'
          },
          {
            label: 'Variety of projects',
            value: 'Variety of projects'
          },
          {
            label: 'I am not sure',
            value: 'Customer is not sure and may need your advice'
          }
        ]
      }
    ]
  };
};