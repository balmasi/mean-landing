module.exports = function(parentId) {
  return {
        name: 'Door repair',
        route: 'door-repair',
        search_keywords: [ 'door', 'door repair','closet','closet door repair','d','do','doo'],
        parent: parentId,
        travel_types: ['tocustomer'],
        scheduling_type: 'appointment',
        credits_required: 2,
        actor: 'Craftsperson',
        actor_plural: 'Carftspeople',
        action: 'help you repair your door',
        questions: [
        {
                field_type:"checklist",
                question:"What type of door is it??",
                description:"Type of door",
                choices:[
                {
                        label:"Opening to outside",
                        value:"Opening to outside"
                },
                {
                        label:"Interior",
                        value:"Interior"
                },
                {
                        label:"Closet door",
                        value:"Closet door"
                },
                {
                        label:"Storm door or screen door",
                        value:"Storm door or screen door"
                },
                {
                        can_describe:true
                }
                ]
        },
        {
        field_type:"checklist",
                question:"What kind of problem(s) do you have with your door(s)?",
                description:"Type of problem",
                choices:[
                {
                        label:"The lock or knob take too much force to open",
                        value:"The lock or knob take too much force to open"
                },
                {
                        label:"The knob or other hardware rattles loose in the door",
                        value:"The knob or other hardware rattles loose in the door"
                },
                {
                        label:"The door is scraping the floor as it swings",
                        value:"The door is scraping the floor as it swings"
                },
                {
                        label:"The door swings too fast or slow",
                        value:"The door swings too fast or slow"
                },
                {
                        label:"The door won't stay in its track",
                        value:"The door won't stay in its track"
                },
                {
                        label:"Sides of the door are drafty",
                        value:"Sides of the door are drafty"
                },
                {
                        label:"Bottom of the door is drafty",
                        value:"Bottom of the door is drafty"
                },
                {
                        label:"Water leak around the door",
                        value:"Water leak around the door"
                },
                {
                        can_describe:true
                }
                ]
        },
        {
                field_type:"select",
                question:"How many doors do you need repaired?",
                description:"Number of doors to be repaired",
                choices:[
                {
                        label:"Just one door",
                        value:"One door"
                },
                {
                        label:"Two doors",
                        value:"Two doors"
                },
                {
                        label:"Three doors",
                        value:"Three doors"
                },
                {
                        label:"Four doors",
                        value:"Four doors"
                },

                 {
                        label:"More than four doors",
                        value:"More than four doors"
                }
                ]
        },
        {
                    field_type:"select",
                question:"What materials will your doors made of?",
                description:"Door materials",
                choices:[
                {
                        label:"Wood",
                        value:"Wood"
                },
                {
                        label:"Metal",
                        value:"Metal"
                },
                {
                        label:"Glass",
                        value:"Glass"
                },
                {
                        label:"As recommended by professional",
                        value:"As recommended by you"
                },
                {
                        label:"Other",
                        value:"Other"
                }
                ]

        },
        {
                field_type:"checklist",
                question:"Any additional services you may need?",
                description:"Additional services required",
                required:false,
                choices:[
                {
                        label:"Repaint",
                        value:"Repaint"
                },
                {
                        label:"Strip and stain door",
                        value:"Strp and stain door"
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
                },


                ]
        },
        ]
};
};
