module.exports = function(parentId) {
  return{
  name: 'Furnace & Heating System Repair',
  route: 'furnace-and-heating-system-repair',
  search_keywords: ['furnace' ,'fur', 'heating', 'heating system','furnace repair', 'furnace maintenance', 'maintenance','furn','furna','furnac','hea','heat'],
        parent: parentId,
        travel_types: ['tocustomer'],
        scheduling_type: 'appointment',
        credits_required: 2,
        actor: 'furnace specialist',
        actor_plural: 'furnace specialists',
        action: 'help you with your furnace and heating system repair',
        questions:  [
        {

          field_type:"checklist",
          question:"What furnace problems are you experiencing?",
          description:"Customer's reason for the request",
          choices:[
          {
            label:"No problem, just need maintenance",
            value:"No problem, just need maintenance"
          },
          {
            label:"No heat",
            value:"No heat"
          },
          {
            label:"Not enough heat",
            value:"Not enough heat"
          },
          {
            label:"Furnace has noisy operation",
            value:"Strange noises"
          },
          {
            label:"System keeps cycling",
            value:"System keeps cycling"
          },
          {
            label:"Blower does not turn off- always running",
            value:"Blower does not turn off- always running"
          },
          {
            label:"Problem with lighting furnace pilot",
            value:"problem with lighting furnance pilot"
          },
          {
            label:"Problem with thermostat",
            value:"Problem with thermostat"
          },
          {
            can_describe:true
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
                },

                ]
        },
        {
                field_type:"select",
                question: "Will you supply all the necessary parts and materials?",
                description: "Customer provides materials and parts or not",
                choices:[
                {
                        label:"Yes, I will provide the materials and parts",
                        value:"Yes, customer provides all the materials and parts"
                },
                {
                        label:"Yes, but I need the professional advice",
                        value:"Yes, but customer needs your advice"
                },
                {
                        label:"No",
                        value:"No, customer wants you to supply the parts and materials"
                },

                ]
        },
        {
                field_type:"select",
                question:"How many stories is your property?",
                description:"Number of stories in the property",
                choices:[
                {
                        label:"Single level,no basement",
                        value: "Single level, no basement"
                },
                {
                        label:"Single level, with basement",
                        value:"Single level, with basement"
                },
                {
                        label:"Two stories, no basement",
                        value:"Two stories, no basement"
                },
                {
                        label:"Two stories, with basement",
                        value:"Two stories, with basement"
                },
                { 
                        label:"More than two stories",
                        value:"More than two stories"
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
                },


                ]
        },
        ]
      };
  };