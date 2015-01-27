module.exports = function(parentId) {
  return {
    name: 'Garage door repair',
    route: 'garage-door-repair',
    search_keywords: ['Garage','Garage door', 'Parking door', 'Garage door repair','g','ga','gar','gara','garag','par','park','parki','parkin'],
    parent:parentId,
    travel_types: ['tocustomer'],
    scheduling_type: 'appointment',
    credits_required: 2,
    actor: 'Garage door professional',
    actor_plural: 'Garage door professionals',
    action: 'help you repair your garage door',
    questions:  [
      {
        field_type:"checklist",
        question:"What do you need repaired?",
        description:"Repair service is related to",
        choices:[
          {
            label:"Inoperable or jammed door",
            value:"Inoperable or jammed door"

          },
          {
            label:"Slow or erratic door",
            value:"Slow or erratic door"
          },
          {
            label:"Usual sounds",
            value:"Usual sounds"
          },
          {
            label:"Dents or scrapes on door",
            value:"Dents or scrapes on door"
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
        question:"How does the garage door open?",
        description:"How the door opens",
        choices:[
          {
            label:"One piece tilt-up",
            value:"One piece tilt-up"
          },
          {
            label:"sectional roll-up",
            value:"sectional roll-up"
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