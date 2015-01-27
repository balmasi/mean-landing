module.exports = function(parentId) {
  return {
        name: 'Bathroom remodeling',
        route: 'bathroom-remodeling',
        search_keywords: [ 'plumber', 'Bathroom','bathroom remodeling','remodeling bathroom','ba','bat','bath','bathr','bathro','bathroo','bathroom'],
        parent: parentId,
        travel_types: ['tocustomer'],
        scheduling_type: 'appointment',
        credits_required: 4,
        actor: 'plumber',
        actor_plural: 'plumbers',
        action: 'help you remodel your bathroom',
        questions: [
        {
                field_type:"checklist",
                question:"Why are you remodeling your bathroom?",
                description:"Reason for remodeling",
                choices:[
                {
                        label:'Expand the bathroom',
                        value:"Expand the bathroom"
                },
                {
                        label:"Update the bathroom's look",
                        value:"Update the bathroom's look"
                },
                {
                        label:"Replace bathroom furniture",
                        value:"Replace bathroom furniture"
                },
                {
                        can_describe:true
                }
                ]
        },
        {
                field_type:"select",
                question:"What kind of bathroom are you remodeling?",
                description:"The bathroom that needs remodeling is",
                choices:[
                {
                        label:'Master bathroom (attached to master bedroom)',
                        value:"Master bathroom"
                },
                {
                        label:"Family bathroom",
                        value:"Family bathroom"
                },
                {
                        label:"half bathroom (toilet and sink only)",
                        value:"half bathroom"
                },
                {
                        label:"Guest bathroom",
                        value:"Guest bathroom"
                },
               

                ]

        },
        {
                field_type:"select",
                question:"Do you have existing bathroom plans?",
                description:"Customer has a plan for remodeling or not",
                choices:[
                {
                        label:'No existing plan but I have an idea for what I want',
                        value:"No plan but knows what she/he wants"
                },
                {
                        label:"No existing plan, I need design suggestions",
                        value:"No exiting plan, needs design suggestions"
                },
                {
                        label:"Already have a plan, just need installation",
                        value:"Already has a plan, just need installation"
                },
                

                ]

        },
        {
                field_type:"checklist",
                question:"What bathroom furnitures and fixtures will you be replacing?",
                description:"Bathroom furnitures customer wants to replace",
                choices:[
                {
                        label:'I am not replacing any bathroom fixtures',
                        value:"Customer is not planning on replacing any bathroom fixtures"
                },
                {
                        label:"Bathtub/Shower",
                        value:"Bathtub/Shower"
                },
                {
                        label:"Sink",
                        value:"Sink"
                },
                {
                        label:"Toilet",
                        value:"Toilet"
                },
                {
                        label:"Tilling",
                        value:"Tilling"
                },
                {
                        label:"Counter",
                        value:"Counter"
                },
                {
                        label:"Vanity/Medicine cabinet",
                        value:"Vanity/Medicine cabinet"
                },
                {
                        label:"Lights",
                        value:"Lights"
                },
                {
                        label:"Sink faucet/Tub faucet/Showerhead",
                        value:"Sink faucet/Tub faucet/Showerhead"
                },
                {
                        can_describe:true
                }

                ]

        },
        {
                field_type:"select",
                question:"Will any of the plumbing fixtures be relocated?",
                description:"Plumbing fixtures to be relocated",
                choices:[
                {
                        label:'No plumbing fixtures will be relocated',
                        value:"No plumbing fixtures will be relocated"
                },
                {
                        label:"Sink",
                        value:"Sink"
                },
                {
                        label:"Bathtub/Shower",
                        value:"Bathtub/Shower"
                },
                {
                        label:"Toilet",
                        value:"Toilet"
                },
                {
                        label:"As recommended by professional",
                        value:"Customer wants your recommendation"
                },
                

                ]

        },
        {
                field_type:"checklist",
                question:"What fixtures will you need the professional to purchase?",
                description:"Customer wants you supply the following fixtures",
                choices:[
                {
                        label:'Professional will not need to purchase fixtures - I will supply them',
                        value:"You don't need to supply any bathroom fixtures"
                },
                {
                        label:"Bathtub/Shower",
                        value:"Bathtub/Shower"
                },
                {
                        label:"Sink",
                        value:"Sink"
                },
                {
                        label:"Toilet",
                        value:"Toilet"
                },
                {
                        label:"Tilling",
                        value:"Tilling"
                },
                {
                        label:"Counter",
                        value:"Counter"
                },
                {
                        label:"Vanity/Medicine cabinet",
                        value:"Vanity/Medicine cabinet"
                },
                {
                        label:"Lights",
                        value:"Lights"
                },
                {
                        label:"Sink faucet/Tub faucet/Showerhead",
                        value:"Sink faucet/Tub faucet/Showerhead"
                },
                {
                        can_describe:true
                }

                ]

        },
        {
                field_type:"select",
                question:"Will you need the bathroom painted?",
                description:"Bathroom needs paint or not",
                choices:[
                {
                        label:'Yes, it needs to be painted',
                        value:"Yes, it needs to be painted"
                },
                {
                        label:"No, Bathroom does not need to be painted",
                        value:"No, It does not need to be painted"
                },
                {
                        can_describe:true
                }
                ]
        },
        {
                field_type:"select",
                question:"What is the approximate square footage of the bathroom?",
                description:"Approximate square footage of the bathroom",
                choices:[
                {
                        label:'25-50',
                        value:"25-50"
                },
                {
                        label:"50-75",
                        value:"50-75"
                },
                {
                        label:"75-100",
                        value:"75-100"
                },
                {
                        label:"More than 100"
                        value:"More than 100"
                }
                ]
        },
        {
                field_type:"select",
                question:"Approximately how old is the building?",
                description:"Approximate age of the building",
                choices:[
                {
                        label:'Less than 10',
                        value:"Less than 10"
                },
                {
                        label:"10 - 50",
                        value:"10 - 50"
                },
                {
                        label:"Older than 50",
                        value:"Older than 50"
                },
                {
                        label:"I am nore sure"
                        value:"Customer needs your help to identify the age"
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
        }
        ]
};
};


