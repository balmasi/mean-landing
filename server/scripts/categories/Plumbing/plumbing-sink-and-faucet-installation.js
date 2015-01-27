module.exports = function(parentId) {
  return {
        name: 'Sink & Faucet Installation',
        route: 'plumbing-sink-and-faucet-installation',
        search_keywords: [ 'plumber faucet installation','faucet installation', 'sink installation','si','sin','sink','fa','fau','fauc','fauce','faucet'],
        parent: parentId,
        travel_types: ['tocustomer'],
        scheduling_type: 'appointment',
        credits_required: 3,
        actor: 'plumber',
        actor_plural: 'plumbers',
        action: 'install your sink & faucet',
        questions: [
        {


                field_type:"checklist",
                question: "What kind of sink do you have?",
                description: "Type of sink",
                choices:[
                {
                        label:"Vessel sink",
                        value:"Vessel sink"
                },
                {
                        label:"Pedestal sink",
                        value:"Pedestal sink"
                },
                {
                        label:"Under-mounted",
                        value:"Under-mounted"
                },
                {

                        label:"Drop-in sink",
                        value:"Drop-in sink"
                },
                {

                        label:"Wall-mounted sink",
                        value:"Wall-mounted sink"
                },
                {

                        label:"Vanity sink",
                        value:"Vanity sink"
                },
                {

                        label:"Single bowl",
                        value:"Single bowl"
                },
                {

                        label:"Double bowl",
                        value:"Double bowl"
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
                question: "What kind of faucets/handle do you want?",
                description: "Kind of faucet that customer wants",
                choices:[
                {
                        label:"Single handle that controls both hot and cold water",
                        value:"Single handle that controls both hot and cold water"
                },
                {
                        label:"Separate handles to control hot and cold water",
                        value:"Separate handles to control hot and cold water"
                },
                {
                        label:"As recommended by the professional",
                        value:"As recommended by the professional"
                }

                ]
        },
        {
                field_type:"select",
                question: "How many sinks or faucets do you need to install?",
                description: "Number of sinks or faucets need installation",
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
                }
                ]
        },
        {
                field_type:"select",
                question: "Are supply and drain lines already in place?",
                description: "Are supply and drain lines in place?",
                choices:[
                {
                        label:"Yes, supply and drain lines are there",
                        value:"Yes, supply and drain lines are there"
                },
                
                {
                        label:"No, new supply and drain lines are needed",
                        value:"No, new supply and drain lines are needed"
                }
                ]
        },
        {
                field_type:"select",
                question: "Will you supply all the necessary parts and materials?",
                description: "Will the customer provide parts and materials?",
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