module.exports = function(parentId) {
  return {
    name: 'Junk Removal',
    route: 'junk-removal',
    search_keywords: ['junk' ,'garbage', 'junk removal', 'recycling', 'garbage removal', 'yardwaste', 'waste', 'construction','construction junk'],
    parent:  parentId,
    travel_types: ['tocustomer'],
    scheduling_type: 'appointment',
    credits_required: 3,
    actor: 'Removalist',
    actor_plural: 'Removalists',
    action: 'remove your garbage',
    questions:  [
      {

        field_type: 'checklist',
        question: 'What needs to be removed?',
        description: "Things to remove",
        choices: [
          {
            label: 'Furniture',
            value: 'Furniture'
          },
          {
            label: 'Appliances',
            value: 'Appliances'
          },
          {
            label: 'Electronics',
            value: 'Electronics'
          },
          {
            label: 'Yardwaste',
            value: 'Yardwaste'
          },
          {
            label: 'Construction debris',
            value: 'Construction debris'
          },
          {
            label: 'Scrap metal',
            value: 'Scrap Metal'
          },

          {
            can_describe: true
          }
        ]
      },
      {
        field_type: "checklist",
        question: "How much junk needs to be removed?",
        description: "Amount of junk to be removed",
        choices: [
          {
            label: 'A pickup truck would be enough',
            value: 'Enough to fill a pickup truck '
          },
          {
            label: 'I need a box truck',
            value: 'Enough to fill a box truck'
          },
          {
            label: 'I need a dump truck',
            value: "A dump truck is needed"
          },
          {
            can_describe: true
          }
        ]
      }
    ]
  };
};