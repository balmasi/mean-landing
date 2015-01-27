module.exports = function(parentId) {
  return {
    name: 'Pipe Installation',
    route: 'pipe-installation',
    search_keywords: [ "plumb",'plumber', 'Pipe Installation', 'Plumbing pipe Installation','replace pipe',' replace pipes'],
    parent: parentId,
    travel_types: ['tocustomer'],
    scheduling_type: 'appointment',
    credits_required: 3,
    actor: 'plumber',
    actor_plural: 'plumbers',
    action: 'help you with your pipe installation',
    questions: [
      {
        field_type:"checklist",
        question: "Which appliances are affected?",
        description: "appliances that are affected",
        choices:[
          {
            label:"Toilet",
            value:"Toilet"
          },
          {
            label:"Sink",
            value:"Sink"
          },
          {
            label:"Disposal",
            value:"Disposal"
          },
          {
            label:"Shower or bathtub",
            value:"Shower or bathtub"
          },
          {
            label:"Dishwasher",
            value:"Dishwasher"
          },
          {
            label:"Refrigerator",
            value:"Refrigerator"
          },
          {
            label:"Washing machine",
            value:"Washing machine"
          },
          {
            can_describe: true

          }

        ]
      },
      {
        field_type:"checklist",
        question: "What material are the pipes you need?",
        description: "Type of pipes",
        choices:[
          {
            label:"Copper",
            value:"Copper"
          },
          {
            label:"Iron",
            value:"Iron"
          },
          {
            label:"Steel",
            value:"Steel"
          },
          {
            label:"PVC",
            value:"PVC"
          },
          {
            label:"CPVC",
            value:"CPVC"
          },
          {
            label:"PEX",
            value:"PEX"
          },
          {
            label:"As recommended by professional",
            value:"As recommended by professional"
          },

          {
            can_describe: true

          }

        ]
      },
      {
        field_type:"select",
        question: "Will you supply all the necessary parts and materials?",
        description: "Who provides the parts and materials?",
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