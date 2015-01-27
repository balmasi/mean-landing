module.exports = function(parentId) {
  return{
    name: 'General Plumbing',
    route: 'general-plumbing',
    search_keywords: [ 'Plumbing', 'installation sink','replace pip',' replace pips', 'Sink installation', 'sink repair','bathroom remodeling', 'dish washer installation','pl','plum','plumb'],
    parent: parentId,
    travel_types: ['tocustomer'],
    scheduling_type: 'appointment',
    credits_required: 2,
    actor: 'plumber',
    actor_plural: 'plumbers',
    action: 'help you with your plumbing problems',
    questions: [
      {
        field_type:"checklist",
        question: "What kind of work do you need?",
        description: "Works needed by the customer",
        choices:[
          {
            label:"Install",
            value:"Install"
          },
          {
            label:"Repair",
            value:"Repair"
          },
          {
            label:"Replace",
            value:"Replace"
          },
          {
            can_describe: true
          }



        ]
      },
      {
        field_type:"checklist",
        question: "What problems are you having?",
        description: "Problems the customer facing",
        choices:[
          {
            label:"No problem, just need installation",
            value:"No problem, just need installation"
          },
          {
            label:"Burst",
            value:"Burst"
          },
          {
            label:"Leak",
            value:"Leak"
          },
          {
            label:"Clog",
            value:"Clog"
          },
          {
            label:"Noisy",
            value:"Noisy"
          },
          {
            label:"Clog",
            value:"Clog"
          },
          {
            label:"Unpleasant odors",
            value:"Unpleasant odors"
          },
          {
            label:"Poor pressure",
            value:"Poor pressure"
          },
          {
            label:"Poor temperature",
            value:"Poor temperature"
          },
          {
            label:"Fixture not draining or flushing",
            value:"Fixture not draining or flushing"
          },
          {
            label:"Appliance not workig",
            value:"Appliance not workig"
          },
          {
            can_describe: true
          }



        ]
      },
      {
        field_type:"select",
        question: "How long has this problem existed?",
        description: "The problem has been around for",
        choices:[
          {
            label:"Just recently",
            value:"Just recently"
          },
          {
            label:"Over the past week",
            value:"Over the past week"
          },
          {
            label:"Periodically over the past month or longer",
            value:"Periodically over the past month or longer"
          }
        ]
      },
      {
        field_type:"checklist",
        question: "Which room require plumbing work?",
        description: "Project is taking place in",
        choices:[
          {
            label:"Bathroom",
            value:"Bathroom"
          },
          {
            label:"Kitchen",
            value:"Kitchen"
          },
          {
            label:"Laundry Room",
            value:"Laundry Room"
          },

          {
            label:"Basement",
            value:"Basement"
          },
          {
            label:"Entire building",
            value:"Entire building"
          },
          {
            label:"Outdoors",
            value:"Outdoors"
          },
          {
            can_describe: true
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
      },
      {
        field_type: "select",
        question: "Is any part of the building flooded?",
        description: "Is building flooded?",
        choices: [
          {
            label: "Yes",
            value: "Yes"
          },
          {
            label: "No",
            value: "No"
          }
        ]
      }
    ]
  };
};

        
