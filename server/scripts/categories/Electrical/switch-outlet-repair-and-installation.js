module.exports = function(parentId) {
  return{
    name: 'Switch or outlet repair & installation',
    route: 'switch-outlet-repair-and-installation',
    search_keywords: ['Switch' ,'outlet', 'Switch repair', 'switch installation', 'outlet and switch', 'switch and outlet', 'swi','outl','outlet repair'],
    parent:  parentId,
    travel_types: ['tocustomer'],
    scheduling_type: 'appointment',
    credits_required: 2,
    actor: 'Electrician',
    actor_plural: 'Electricians',
    action: 'fix your electrical problems',
    questions:  [
      {
        field_type:"checklist",
        question:"What service do you need?",
        description:"Customer's reason for the request",
        choices:[
          {
            label:"Installation",
            value:"Installation"

          },
          {
            label:"Repair",
            value:"Repair"
          },
          {
            label:"Cosmetic Replacement",
            value:"Cosmetic Replacement"
          },
          {
            label:"Move switches and/or outlets to different location",
            value:"Move switches and/or outlets to different location"
          },
          {
            can_describe:true
          }
        ]
      },
      {
        field_type:"text",
        question:"How many switch or outlets?",
        description:"Number of switches or outlets "
      },
      {
        field_type:"checklist",
        question:"Where are the switches and outlets?",
        description:"Location of switches and outlets",
        choices:[
          {
            label:"Rooms with access to water",
            value:"Rooms with access to water"

          },
          {
            label:"Rooms with no access to water",
            value:"Rooms with no access to water"
          },
          {
            label:"Outdoors",
            value:"Outdoors"
          },
          {
            can_describe:true
          }
        ]
      },
      {
        field_type:"select",
        question: "Will you supply all the necessary parts and materials?",
        description: "Who provides materials and parts",
        choices:[
          {
            label:"Yes, I will provide the materials and parts",
            value:"Customer provides all the materials and parts"
          },
          {
            label:"Yes, but I need the professional advice",
            value:"Customer will provide material but needs your advice"
          },
          {
            label:"No",
            value:"Customer wants you to supply parts and materials"
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
