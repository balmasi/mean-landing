module.exports = function(parentId) {
  return{
        name: 'Sink and faucet repair',
        route: 'plumbing-sink-and-faucet-repair',
        search_keywords: [ 'plumber','fauce repair', 'sink repair','si','sin','sink','fa','fau','fauc','fauce','faucet'],
        parent: parentId,
        travel_types: ['tocustomer'],
        scheduling_type: 'appointment',
        credits_required: 2,
        actor: 'plumber',
        actor_plural: 'plumbers',
        action: 'fix your sink and faucet',
        questions: [
        {


                field_type:"checklist",
                question: "What kind of sink or faucet problems do you have?",
                description: "Type of problems",
                choices:[
                {
                        label:"Clogged sink",
                        value:"Clogged sink"
                },
                {
                        label:"Sink drains slowly",
                        value:"Sink drains slowly"
                },
                {
                        label:"Unpleasant odor from sink drain",
                        value:"Unpleasant odor from sink drain"
                },
                {

                        label:"Dripping faucet",
                        value:"Dripping faucet"
                },
                {

                        label:"Weak pressure from faucet",
                        value:"Weak pressure from faucet"
                },
                {

                        label:"Disposal not working",
                        value:"Disposal not working"
                },
                {

                        label:"Sink or faucet problem hand-in-hand with plumbing problems",
                        value:"Sink or faucet problem hand-in-hand with plumbing problems"
                },
                
                {
                        can_describe: true
                }



                ]
        },
        {


                field_type:"checklist",
                question: "What kind of sink do you have?",
                description: "Type of sink",
                choices:[
                {
                        label:"Vessle sink",
                        value:"Vessle sink"
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
                        value:"Sinle bowl"
                },
                {

                        label:"Double bowl",
                        value:"Double bowl"
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
                },

                ]
        },
        {
                field_type:"checklist",
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
                ]
        },
        {
                field_type:"select",
                question: "How many sinks or faucets need repair",
                description: "Number of sinks or faucets need repair",
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