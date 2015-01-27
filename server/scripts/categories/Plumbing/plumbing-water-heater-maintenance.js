module.exports = function(parentId) {
  return{
    name: 'Water heater maintenance',
    route: 'plumbing-water-heater-maintenance',
    search_keywords: [ 'plumber', 'heater maintenance','water heater maintenance','water heater',' water heater repair','water','water h','water he','water hea','wa','wat','wate','water'],
    parent: parentId,
    travel_types: ['tocustomer'],
    scheduling_type: 'appointment',
    credits_required: 2,
    actor: 'plumber',
    actor_plural: 'plumbers',
    action: 'fix and maintain your water heater',
    questions: [
      {
        field_type:"checklist",
        question:"What water heater services do you need?",
        description:"Water heater services needed by the customer",
        choices:[
          {
            label:"Routine heater maintenance",
            value:"Routine heater maintenance"
          },
          {
            label:"Heater repair",
            value:"Heater repair"
          },
          {
            label:"I need help figuring out what's wrong with my heater",
            value:"Customer needs help figuring out what is wrong with her/his heater"
          },
          {
            can_describe:true
          }
        ]
      },
      {
        field_type:"checklist",
        question:"What heater problems are you experiencing?",
        description:"Heater problems that customer is experiencing",
        choices:[
          {
            label:"Leaks",
            value:"Leaks"
          },
          {
            label:"Water is not hot enough",
            value:"Water is not hot enough"
          },
          {
            label:"Water is too hot",
            value:"Water is too hot"
          },
          {
            label:"Unusual noises from inside heater",
            value:"Unusual noises from inside heater"
          },
          {
            label:"Discolored or smelly water",
            value:"Discolored or smelly water"
          },
          {

            label:"Unusual noises from inside heater",
            value:"Unusual noises from inside heater"
          },
          {
            label:"No issue - just need routine maintenance",
            value:"No issue - just need routine maintenance"
          },
          {
            can_describe:true
          }
        ]
      },
      {
        field_type:"select",
        question:"Does a single heater heat all of your home's water?",
        description:"Single heater building",
        choices:[
          {
            label:"Yes",
            value:"Yes"
          },
          {
            label:"No",
            value:"No"
          }
        ]
      },
      {
        field_type:"select",
        question:"Where is the heater located?",
        description:"The heater is located in",
        choices:[
          {
            label:"Basement",
            value:"Basement"
          },

          {
            label:"Bathroom",
            value:"Bathroom"
          },
          {
            label:"Kitchen",
            value:"Kitchen"
          },
          {
            label:"Attic",
            value:"Attic"
          },
          {
            label:"Closet",
            value:"Closet"
          },
          {
            can_describe:true
          }
        ]
      },
      {
        field_type:"select",
        question:"Does your heater have a tank?",
        description:"Is there a tank?",
        choices:[
          {
            label:"Yes",
            value:"Yes"
          },
          {
            label:"No",
            value:"No"
          },
          {
            label:"Not sure",
            value:"Not sure"
          }
        ]
      },
      {
        field_type:"select",
        question:"How is your heater powered?",
        description:"Heater is powered by",
        choices:[
          {
            label:"Gas",
            value:"Gas"
          },
          {
            label:"Electricity",
            value:"Electricity"
          },
          {
            label:"Oil",
            value:"Oil"
          },
          {
            label:"I am not sure",
            value:"Customer is not sure and needs your help"
          }

        ]
      },


      {
        field_type:"select",
        question:"Are you boiler and water heater combined?",
        description:"Are the boiler and water heater combined?",
        choices:[
          {
            label:"Yes, they are combined",
            value:"Yes, they are combined"
          },
          {
            label:"No, they are not",
            value:"No, they are not"
          },
          {
            label:"I am not sure",
            value:"Customer is not sure and needs your help"
          }

        ]
      },
      {
        field_type:"select",
        question: "What type of property do you have?",
        description: "Type of property",
        choices:[
          {
            label:"House",
            value:"House"
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