module.exports = function(parentId) {
  return {
        name: 'Shower & Bathtub Installation',
        route: 'shower-and-bathtub-installation',
        search_keywords: [ 'plumber','shower installation', 'bathtube installation','sh','sho','show','showe','shower'],
        parent: parentId,
        travel_types: ['tocustomer'],
        scheduling_type: 'appointment',
        credits_required: 3,
        actor: 'plumber',
        actor_plural: 'plumbers',
        action: 'help you install your shower & bathtub',
        questions: [
        {
                field_type:"checklist",
                question:"What kind of shower or bathtub do you need?"
                description:"Type of shower or bathtub customer needs"
                choices:[
                {
                        label:"Just shower",
                        value:"Just shower"
                },
                {
                        label:"Just a bathtub",
                        value:"Just a bathtub"
                },
                {
                        label:"Combination of bathtub and shower",
                        value:"Combination of bathtub and shower"
                },
                {
                        label:"Steam shower",
                        value:"Steam shower"
                },
                {
                        can_describe:true
                }

                ]

        },
        {
                field_type:"select",
                question: "How many showers or bathtubs need installation?",
                description: "Number of showers or bathtubs that need installation",
                choices:[
                {
                        label:"One",
                        value:"One"
                },
                {
                        label:"Two",
                        value:"Two"
                },
                {
                        label:"Three",
                        value:"Three"
                },
                {
                        label:"More than three",
                        value:"More than three"
                },



                ]
        },
        {
                field_type:"select",
                question: "What kind of faucets/handle do you want?",
                description: "Kind of faucet that customer wants",
                choices:[
                {
                        label:"Single handle that controls both hot and cold water",
                        value:"Single handle that controls both hot and cold water"
                },
                {
                        label:"Seperate handles to control hot and cold water",
                        value:"Seperate handles to control hot and cold water"
                },
                {
                        label:"As recommended by the professional",
                        value:"As recommended by the professional"
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
                        value:"No, customer wants to supply the parts and materials"
                },

                ]
        },
        {
            field_type:"select",
            question:"Is there an exsting shower or bathroom that need to be removed?",
            description:"If there is an exsting shower or bathroom that need to be removed or not",
            choices:[
            {
                label:"Yes, there is",
                value:"Yes, there is"
            },
            {
                label:"No",
                value:"No"
            }
            ]
        },
        {
                field_type:"select",
                question: "Are supply and drain lines already in place?",
                description: "If supply and drain lines are in place or not",
                choices:[
                {
                        label:"Yes, supply and drain lines are there",
                        value:"Yes, supply and drain lines are there"
                },
                
                {
                        label:"No, new supply and drain lines are needed",
                        value:"No, new supply and drain lines are needed"
                },

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
        }
        ]
};
};
