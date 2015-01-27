module.exports = function(parentId) {
  return {
    name: 'Electrical & Wiring Issues',
    route: 'electrical-and-wiring',
    search_keywords: ['electrical' ,'elec', 'Wiring', 'Wiring problems', 'Wiring Issue', 'repair wiring', 'replace wiring','electrician'],
    parent:  parentId,
    travel_types: ['tocustomer'],
    scheduling_type: 'appointment',
    credits_required: 2,
    actor: 'Electrician',
    actor_plural: 'Electricians',
    action: 'help you fix your electrical problems',
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
            label:"Replacing",
            value:"Replacing"
          },
          {
            label:"Inspection",
            value:"Inspection"
          },
          {
            label:"Troubleshooting",
            value:"Troubleshooting"
          },
          {
            can_describe:true
          }
        ]

      },
      {
        field_type:"checklist",
        question:"What electrical problem are you currently experiencing?",
        description:"Problems currently customer experiencing",
        choices:[
          {
            label:"Not applicable",
            value:"Not applicable"
          },
          {
            label:"Loss of power",
            value:"Loss of power"
          },
          {
            label:"Inconsistent power",
            value:"Inconsistent power"
          },
          {
            label:"Fixture not working",
            value:"Fixture not working"
          },
          {
            label:"Sparks or popping sounds",
            value:"Sparks or popping sounds"
          },
          {
            label:"Burning smell",
            value:"Burning smell"
          },
          {
            can_describe:true
          }
        ]
      },
      {
        field_type:"checklist",
        question:"What of kind of fixtures do you need?",
        description:"Fixtures to be need for this project",
        choices:[
          {
            label:"Lights",
            value:"Lights"
          },
          {
            label:"Switches",
            value:"Switches"
          },
          {
            label:"Outlets",
            value:"Outlets"
          },
          {
            label:"Fuse box",
            value:"Fuse box"
          },
          {
            label:"Wiring",
            value:"Wiring"
          },
          {
            label:"Ceiling fan",
            value:"Ceiling fan"
          },
          {
            can_describe:true
          }
        ]
      },
      {
        field_type:"select",
        question:"Does the problem belong to indoors or outdoors?",
        description:"Indoors or outdoors",
        choices:[
          {
            label:"Indoors",
            value:"Indoors"
          },
          {
            label:"Outdoors",
            value:"Outdoors"
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