module.exports = function(parentId) {
  return {
  name: 'Handyman',
  route: 'handyman',
  search_keywords: ['handyman','han','hand','handy','handym','handyma'],
        parent:  parentId,
        travel_types: ['tocustomer'],
        scheduling_type: 'appointment',
        credits_required: 1,
        actor: 'handyman',
        actor_plural: 'hanymen',
        action: 'help you repair, install and assemble',
        questions:  [
        {
          field_type:"text",
          question:"Describe your project?",
          description:"The project"
        },
        ]
      };
    };