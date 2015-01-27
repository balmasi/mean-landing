module.exports = function(parentId) {
  return {
        name: 'Door Installation',
        route: 'door-installation',
        search_keywords: [ 'door', 'door installation','d','do','doo','Installation','installing door','installing'],
        parent: parentId
        travel_types: ['tocustomer'],
        scheduling_type: 'appointment',
        credits_required: 3,
        actor: 'Carftsperson',
        actor_plural: 'Craftspeople',
        action: 'help you install your door',
        questions: [
        {
                field_type:"select",
                question:"Are you replacing an existing door?",
                description:"replacing an existing door or not",
                choices:[
                {
                        label:"Yes, replacing an existing door",
                        value:"Yes, replacing an existing door"
                },
                {
                        label:"No, but the fram is there",
                        value:"No, but the fram is there"
                },
                {
                        label:"No, an opening needs to be created",
                        value:"No, an opening needs to be created "
                }
                ]
        },
        {
                field_type:"select",
                question:"How many doors do you need installed or replaced?",
                description:"Number of doors to be installed or replaced",
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
                question:"Do have the door(s) for you project?",
                description:"If the customer supplies the door(s) or not",
                choices:[
                {
                        label:"Yes, and they have holes for hardware",
                        value:"Yes, and they have holes for hardware"
                },
                {
                        label:"Yes, but they don't have holes for hardware ",
                        value:"Yes, but they don't have holes for hardware"
                },
                {
                        label:"No, but I will buy them myself",
                        value:"No, but I will buy them myself "
                },
                {
                        label:"No, but I will the contractor to buy them",
                        value:"No, but customer wants you to buy the doors"
                }
                ]
        },
        {
                field_type:"select",
                question:"Are you replacing an existing door?",
                description:"replacing an existing door or not",
                choices:[
                {
                        label:"Yes, replacing an existing door",
                        value:"Yes, replacing an existing door"
                },
                {
                        label:"No, but the frame is there",
                        value:"No, but the frame is there"
                },
                {
                        label:"No, an opening needs to be created",
                        value:"No, an opening needs to be created "
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
                field_type:"select",
                question:"How do you want your new door to open?",
                description:"How customer wants  the new doors to open",
                choices:[
                {
                        label:"Basic door, swing open and shut",
                        value:"Baisc door, swing open and shut"
                },
                {
                        label:"Sliding door ",
                        value:"Sliding door"
                },
                {
                        label:"French door, double doors",
                        value:"French door, double doors"
                },
                {
                        label:"Folding door, closet style",
                        value:"Folding door, closet style"
                },
                {
                        label:"Sliding pocket door",
                        value:"Sliding pocket door"
                }
                ]
        },
        {
                 field_type:"checklist",
                question:"Any additional services?",
                description:"Additional services required by the customer",
                required:false,
                choices:[
                {
                        label:"Paint or stain the door",
                        value:"Paint or stain the door"
                },
                {
                        label:"Intall locks and hardware ",
                        value:"Install locks and hardware"
                },
                 {
                        label:"Intall a door threshold",
                        value:"Install a door threshold"
                },
                {
                        label:"Waterproofing",
                        value:"Waterproofing"
                },
                {
                        label:"Weatherproofing",
                        value:"Weatherproofing"
                },
                {
                        label:"Install new trim around the door",
                        value:"Install new trim around the door"
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
