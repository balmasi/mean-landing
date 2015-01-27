module.exports = function(parentId) {
  return {
    name: 'Garage door Installing or replacement',
    route: 'garage-door-replacement',
    search_keywords: ['Garage','Garage door', 'Parking door', 'Garage door installing', "garage door replacement",'g','ga','gar','gara','garag','par','park','parki','parkin'],
    parent: parentId,
    travel_types: ['tocustomer'],
    scheduling_type: 'appointment',
    credits_required: 3,
    actor: 'Garage door professional',
    actor_plural: 'Garage door professionals',
    action: 'help you install a new garage door',
    questions:  [
      {
        field_type:"checklist",
        question:"What kind of garage door service do you need?",
        description:"Type of service required",
        choices:[
          {
            label:"Install a new garage door",
            value:"install a new door"
          },
          {
            label:"Just remove an old door",
            value:"Remove an old door"
          },
          {
            label:"Replace door",
            value:"Replace a door"
          },
          {
            can_describe:true
          }
        ]
      },
      {
        field_type:"checklist",
        question:"What size is your garage door",
        description:"Size of the garage",
        choices:[
          {
            label:"Single car",
            value:"Single car"
          },
          {
            label:"Double car",
            value:"Double car"
          },
          {
            can_describe:true
          }
        ]
      },
      {
        field_type:"checklist",
        question:"What material is the door?",
        description:"Door material",
        choices:[
          {
            label:"Steel",
            value:"Steel"
          },
          {
            label:"Aluminum",
            value:"Aluminum"
          },
          {
            label:"Vinyl",
            value:"Vinyl"
          },
          {
            label:"Fiberglass",
            value:"Fiberglass"
          },
          {
            label:"Masonite",
            value:"Masonite"
          },
          {
            label:"I am not sure",
            value:"Customer is not sure"
          },
          {
            can_describe:true
          }
        ]
      },
      {
        field_type:"select",
        question: "Will you supply the new garage door and parts?",
        description: "Who provides garage door parts?",
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
        field_type:"checklist",
        question:"Does your opener need any service",
        description:"Services related to opener",
        required: false,
        choices:[
          {
            label:"repair garage door opener",
            value:"repair garage door opener"
          },
          {
            label:"Install garage door opener",
            value:"Install garage door opener"
          },
          {
            label:"Replace garage door opener",
            value:"Replace garage door opener"
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