module.exports = function(parentId) {
  return {
    name: 'Pipe repair',
    route: 'plumbing-pipe-repair',
    search_keywords: [ 'plumber','pipe repair', 'plumbing pipe repair','replace pip',' replace pips'],
    parent: parentId,
    travel_types: ['tocustomer'],
    scheduling_type: 'appointment',
    credits_required: 2,
    actor: 'plumber',
    actor_plural: 'plumbers',
    action: 'help you with your pipe repair',
    questions: [
      {
        field_type:"checklist",
        question: "What pip problem do you have?",
        description: "Type of problems",
        choices:[
          {
            label:"Leaking",
            value:"Leaking"
          },
          {
            label:"Frozen Pipe(s)",
            value:"Frozen pipe(s)"
          },
          {
            label:"Burst Pipe(s)",
            value:"Burst Pipe(s)"
          },
          {

            label:"Noisy Pipe(s)",
            value:"Noisy Pipe(s)"
          },
          {

            label:"Clogged drain(s)",
            value:"clogged drain(s)"
          },
          {

            label:"Slow drain(s)",
            value:"Slow drain(s)"
          },
          {

            label:"Unpleasant odor from drain(s)",
            value:"Unpleasant odor from drain(s)"
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
        question: "What material are your pipes made of?",
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
            can_describe: true

          }

        ]
      },
      {
        field_type:"select",
        question: "Is any part of the building flooded?",
        description: "Is building flooded",
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